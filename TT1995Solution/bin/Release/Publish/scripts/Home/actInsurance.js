﻿var itemEditing = [];
var columnHide = [];
var gbTableId = '17';
var tableName = "act_insurance";
var idFile;
var data_lookup_number_car;
var _dataSource;
var dataGridAll;
var dataLookupFilter;
var gbE;
var CurrentId;
var IsCheckBoxSelect = [];

var filterHeadTail = [];
filterHeadTail.head = true;
filterHeadTail.tail = true;

//คลิกขวาโชว์รายการ   
var contextMenuItemsRoot = [
    { text: 'New File' },
    { text: 'New Folder' },
];
var contextMenuItemsFolder = [
    { text: 'New File' },
    { text: 'New Folder' },
    { text: 'Rename' },
    { text: 'Delete' }
];
var contextMenuItemsFile = [
    { text: 'Rename' },
    { text: 'Delete' }
];
var OptionsMenu = contextMenuItemsFolder;

$(function () {
    $("a:contains('พ.ร.บ.')").first().addClass("active");
    function getDataAi() {
        var dataValue = [];
        //โชว์ข้อมูลทะเบียนทั้งหมดใน datagrid
        return $.ajax({
            type: "POST",
            url: "../Home/GetAIData",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (data) {
                for (var i = 0; i < data.length; i++) {
                    var d = parseJsonDate(data[i].start_date);
                    data[i].start_date = d;

                    var d = parseJsonDate(data[i].end_date);
                    data[i].end_date = d;
                }
            }
        }).responseJSON;
        //จบการโชว์ข้อมูลทะเบียน
    }

    function fnGetHistory(table, idOfTable) {
        var dataValue = [];
        //โชว์ข้อมูลประวัติ
        return $.ajax({
            type: "POST",
            url: "../Home/getHistory",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: "{table: '" + table + "',idOfTable: '" + idOfTable + "'}",
            async: false,
            success: function (data) {
                for (var i = 0; i < data.length; i++) {
                    var d = parseJsonDate(data[i]._date);
                    data[i]._date = d;
                }
            }
        }).responseJSON;
        //จบการโชว์ข้อมูลประวัติ
    }

    //Function Convert ตัวแปรประเภท Type date ของ javascripts
    function parseJsonDate(jsonDateString) {
        return new Date(parseInt(jsonDateString.replace('/Date(', '')));
    }

    dataGridAll = getDataAi();

    //data grid
    var dataGrid = $("#gridContainer").dxDataGrid({

        dataSource: getDataAi(),
        searchPanel: {
            visible: true,
            width: 240,
            placeholder: "Search..."
        },
        selection: {
            mode: "multiple"
        },
        onToolbarPreparing: function (e) {
            var toolbarItems = e.toolbarOptions.items;
            // Adds a new item
            toolbarItems.push({
                widget: "dxCheckBox",
                options: {
                    text: 'หัว',
                    value: true,
                    onValueChanged: function (e) {
                        filterHeadTail.head = e.value;
                        filterTypeCar(filterHeadTail);
                    }
                },
                location: "before"
            });
            toolbarItems.push({
                widget: "dxCheckBox",
                options: {
                    text: 'หาง',
                    value: true,
                    onValueChanged: function (e) {
                        filterHeadTail.tail = e.value;
                        filterTypeCar(filterHeadTail);
                    }
                },
                location: "before"
            });
        },
        allowColumnResizing: true,
        columnResizingMode: "widget",
        showBorders: true,
        columnChooser: {
            enabled: true,
            mode: "select"
        }, onContentReady: function (e) {
            filter();

            var columnChooserView = e.component.getView("columnChooserView");
            if (!columnChooserView._popupContainer) {

                columnChooserView._initializePopupContainer();
                columnChooserView.render();

                columnChooserView._popupContainer.on("hiding", function (e) {
                    //alert('hiding');
                    console.log(dataGrid);
                });
            }
        },
        paging: {
            enabled: true,
            pageSize: 10
        },
        pager: {
            showPageSizeSelector: true,
            allowedPageSizes: [5, 10, 20],
            showInfo: true
        },
        editing: {
            mode: "popup",
            allowUpdating: boolStatus,
            allowDeleting: boolStatus,
            allowAdding: boolStatus,
            form: {
                items: itemEditing,
                colCount: 6,
            },
            popup: {
                title: "รายการประกัน พรบ",
                showTitle: true,
                width: "70%",
                position: { my: "center", at: "center", of: window },
                onHidden: function (e) {
                    setDefaultNumberCar();
                }
            },
            useIcons: true,
        },
        "export": {
            enabled: true,
            fileName: "act_insurance",
        },
        filterRow: {
            visible: true,
            applyFilter: "auto"
        },
        headerFilter: {
            visible: true
        },
        onEditingStart: function (e) {
            dataGrid.option('columns[0].allowEditing', false);
        },
        onInitNewRow: function (e) {

            var arr = {
                dataSource: dataLookupFilter,
                displayExpr: "number_car",
                valueExpr: "number_car"
            }

            dataGrid.option('columns[0].lookup', arr);

            dataGrid.option('columns[0].allowEditing', true);
        },
        onRowUpdating: function (e) {
            if (!fnUpdateAI(e.newData, e.key.ai_id)) {
                e.cancel = true;
            }
        },
        onRowInserting: function (e) {
            var idInsert = fnInsertAI(e.data);
            if (idInsert != 0) {
                $.ajax({
                    type: "POST",
                    url: "../Home/GetLicenseCarTew",
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    data: "{number_car: '" + e.data.number_car + "'}",
                    async: false,
                    success: function (data) {
                        e.data.license_car = data[0].license_car;
                        e.data.license_id = data[0].license_id;
                        e.data.history = "ประวัติ";
                    }
                });
                e.data.ai_id = idInsert;

                //ตัด number_car ออก
                dataGridAll.push({ license_id: e.data.license_id, number_car: e.data.number_car });
                filter();
                setDefaultNumberCar();
            } else {
                e.cancel = true;
            }
        },
        onRowRemoving: function (e) {
            e.cancel = fnDeleteAI(e.key.ai_id);

            //กรองอาเรย์
            dataGridAll.forEach(function (filterdata) {
                dataGridAll = dataGridAll.filter(function (arr) {
                    return arr.license_id != e.key.license_id;
                });
            });

            //push array
            dataLookupFilter.push({ number_car: e.key.number_car, license_id: e.key.license_id });

            setDefaultNumberCar();

        },
        masterDetail: {
            enabled: false,
            template: function (container, options) {
                //สร้าง id treeview
                container.append($('<div id="treeview"></div>'));
                var itemData = fnGetFiles(options.key.ai_id, gbTableId);
                //console.log(itemData);
                //เก็บข้อมูล treeview ไว้ในตัวแปรชื่อ treeview
                treeview = $("#treeview").dxTreeView({
                    dataStructure: "plain",
                    parentIdExpr: "parentDirId",
                    keyExpr: "file_id",
                    displayExpr: "name_file",
                    height: "150px",
                    //คลิกโชว์รูปภาพแบบ Gallery
                    onItemClick: function (e) {
                        gallery = [];
                        itemData = fnGetFiles(options.key.ai_id, gbTableId);
                        var item = e.itemData;
                        //console.log(e);
                        if (item.path_file) {
                            itemData.forEach(function (itemFiles) {
                                if (itemFiles.path_file && itemFiles.type_file == "pic" && itemFiles.parentDirId == item.parentDirId && itemFiles.fk_id == item.fk_id) {
                                    gallery.push(itemFiles.path_file);
                                }
                            });
                            var nGallery = 0;
                            gallery.forEach(function (itemFiles) {
                                if (itemFiles == item.path_file) {
                                    gallerySelect = nGallery;
                                }
                                nGallery++;
                            });
                            if (item.type_file == "pic") {
                                galleryWidget.option("dataSource", gallery);
                                galleryWidget.option("selectedIndex", gallerySelect);
                                $("#popup").dxPopup("show");
                                //$("#mdShowPic").modal();
                            } else {
                                window.open(item.path_file, '_blank');
                            }
                        }
                    },
                    //โชว์รายการคลิกขวา
                    onItemContextMenu: function (e) {
                        var item = e.itemData;
                        if (item.file_id) {
                            name = item.name_file
                            var type_file = item.type_file
                            idFK = item.fk_id;
                            idFile = item.file_id;
                            if (name == "Root") {
                                OptionsMenu = contextMenuItemsRoot;
                            } else if (type_file == "folder") {
                                OptionsMenu = contextMenuItemsFolder;
                            } else {
                                OptionsMenu = contextMenuItemsFile;
                            }
                            getContextMenu();
                        }
                    },
                }).dxTreeView("instance");
                //จบการสร้าง treeview
                fnChangeTreeview(options.key.ai_id, itemData);
            }
        },
        //onSelectionChanged: function (e) {
        //    //e.component.collapseAll(-1);
        //    //e.component.expandRow(e.currentSelectedRowKeys[0]);
        //    //gbE = e;
        //    //isFirstClick = false;
        //},
        onCellClick: function (e) {
            var data = [];
            if (e.rowType == "header") {
                //clear check box
                IsCheckBoxSelect = [];
                //ที่เอา setTimeout เพราะว่า e.component._options.selectedRowKeys รับค่าตรงๆไม่ได้ เหมือนกะว่ามันยังเซ็ตค่าไม่ทัน 
                setTimeout(function () {
                    data = e.component._options.selectedRowKeys;
                    data.forEach(function (data) {
                        IsCheckBoxSelect.push(data.ai_id);
                    });
                }, 1000);

            } else if (e.columnIndex === 0 && e.rowType !== "detail") {
                if (e.row.isSelected) {
                    IsCheckBoxSelect.push(e.data.ai_id);
                } else {
                    IsCheckBoxSelect.splice($.inArray(e.data.ai_id, IsCheckBoxSelect), 1);
                }
            } else if (CurrentId === e.key && e.rowType !== "detail") {
                dataGrid.expandAll(-1);
                dataGrid.collapseAll(-1);
                CurrentId = 0;
            }
            else if (e.rowType !== "detail") {
                e.component.collapseAll(-1);
                e.component.expandRow(e.key);
                CurrentId = e.key;
            }
            gbE = e;
        },
    }).dxDataGrid('instance');
    //จบการกำหนด dataGrid

    function filterTypeCar(filterHeadTail) {
        if (filterHeadTail.head && filterHeadTail.tail) {
            dataGrid.option('dataSource', dataGridAll);
        } else if (filterHeadTail.head === false && filterHeadTail.tail === false) {
            dataGrid.option('dataSource', null);
        } else if (filterHeadTail.head === false) {
            dataGrid.option('dataSource', dataGridAll.filter(function (arr) { return arr.number_car.indexOf('T') > -1; }));
        } else if (filterHeadTail.tail === false) {
            dataGrid.option('dataSource', dataGridAll.filter(function (arr) { return arr.number_car.indexOf('T') === -1; }));
        }
    }

    //Get files where id and IdTable
    function fnGetFiles(AIId, IdTable) {
        //alert(PICId + IdTable);
        var itemData;
        $.ajax({
            type: "POST",
            url: "../Home/GetFilesTew",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: "{Id: " + AIId + ",IdTable: " + IdTable + "}",
            async: false,
            success: function (data) {
                data.push({
                    "file_id": "root",
                    "fk_id": AIId,
                    "name_file": "Root",
                    "type_file": "folder",
                    "icon": "../Img/folder.png"
                });
                itemData = data;
            }
        });
        return itemData;
    }

    //function เปลี่ยนข้อมูลเมื่อมีการ เพิ่ม ลบ ไฟล์
    function fnChangeTreeview(ai_id, itemData) {
        var nItem = 0;
        itemData.forEach(function (item) {
            if (item.file_id == idFile) {
                itemData[nItem].expanded = true;
            }
            nItem++;
        })
        var dts = new DevExpress.data.DataSource({
            store: new DevExpress.data.ArrayStore({
                key: "file_id",
                data: itemData
            }),
            filter: ["fk_id", "=", ai_id]
        });
        treeview.option("dataSource", dts);
    }

    //กำหนดในส่วนของ Column ทั้งหน้าเพิ่มข้อมูลและหน้าแก้ไขข้อมูล
    $.ajax({
        type: "POST",
        url: "../Home/GetColumnChooser",
        contentType: "application/json; charset=utf-8",
        data: "{gbTableId: '" + gbTableId + "'}",
        dataType: "json",
        async: false,
        success: function (data) {
            var ndata = 0;
            data.forEach(function (item) {

                //โชว์ Dropdown หน้าเพิ่มและแก้ไข
                if (item.status_lookup != "0") {
                    var dataLookup;
                    $.ajax({
                        type: "POST",
                        url: "../Home/GetLookUp",
                        contentType: "application/json; charset=utf-8",
                        dataType: "json",
                        data: "{column_id: '" + item.column_id + "'}",
                        async: false,
                        success: function (data) {
                            dataLookup = data;
                        }
                    });
                    data[ndata].lookup = {
                        dataSource: dataLookup,
                        displayExpr: "data_list",
                        valueExpr: "data_list"
                    }
                }

                //popup
                if (item.dataField == "history") {
                    data[ndata].cellTemplate = function (container, options) {
                        $('<a style="color:green;font-weight:bold;" />').addClass('dx-link')
                                .text(options.value)
                                .on('dxclick', function (e) {
                                    popup_history._options.contentTemplate = function (content) {
                                        var maxHeight = $("#popup_history .dx-overlay-content").height() - 150;
                                        content.append("<div id='gridHistory' style='max-height: " + maxHeight + "px;' ></div>");
                                    }

                                    $("#popup_history").dxPopup("show");
                                    var gridHistory = $("#gridHistory").dxDataGrid({
                                        dataSource: fnGetHistory(gbTableId, options.row.data.ai_id),
                                        showBorders: true,
                                        height: 'auto',
                                        scrolling: {
                                            mode: "virtual"
                                        },
                                        searchPanel: {
                                            visible: true,
                                            width: "auto",
                                            placeholder: "Search..."
                                        }
                                    }).dxDataGrid('instance');

                                    //กำหนดในส่วนของ Column ทั้งหน้าเพิ่มข้อมูลและหน้าแก้ไขข้อมูล
                                    $.ajax({
                                        type: "POST",
                                        url: "../Home/GetColumnChooser",
                                        contentType: "application/json; charset=utf-8",
                                        data: "{gbTableId: '19'}",
                                        dataType: "json",
                                        async: false,
                                        success: function (data) {
                                            //ตัวแปร data โชว์ Column และตั้งค่า Column ไหนที่เอามาโชว์บ้าง
                                            gridHistory.option('columns', data);
                                        }
                                    });
                                    //จบการกำหนด Column

                                })
                                .appendTo(container);
                    }
                }

                ndata++;
                //จบการตั้งค่าโชว์ Dropdown

                //รายการหน้าโชว์หน้าเพิ่มและแก้ไข
                if (item.dataField != "create_date" && item.dataField != "create_by_user_id" && item.dataField != "update_date" && item.dataField != "update_by_user_id" && item.dataField != "ai_id" && item.dataField != "license_id" && item.dataField != "history" && item.dataField != "group_update") {
                    if (item.dataField == "number_car") {
                        itemEditing.push({
                            colSpan: item.colSpan,
                            dataField: item.dataField,
                            width: "100%",
                            editorOptions: {
                                disabled: false
                            },
                        });
                    } else if (item.dataField != "license_car") {
                        itemEditing.push({
                            colSpan: item.colSpan,
                            dataField: item.dataField,
                            width: "100%",
                        });
                    }
                }
                //จบรายการหน้าโชว์หน้าเพิ่มและแก้ไข
            });
            $.ajax({
                type: "POST",
                url: "../Home/GetNumberCar",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                async: false,
                success: function (dataLookup) {
                    data_lookup_number_car = dataLookup;
                    data[0].lookup = {
                        dataSource: dataLookup,
                        displayExpr: "number_car",
                        valueExpr: "number_car"
                    }

                }
            });
            //console.log(data);
            _dataSource = data[0].lookup.dataSource;
            //ตัวแปร data โชว์ Column และตั้งค่า Column ไหนที่เอามาโชว์บ้าง
            dataGrid.option('columns', data);
        }
    });
    //จบการกำหนด Column

    //Function Update ข้อมูล gps_company
    function fnUpdateAI(newData, keyItem) {

        IsCheckBoxSelect = IsCheckBoxSelect.filter(function (arr) {
            return arr != keyItem;
        });
        //console.log(keyItem);
        //console.log(IsCheckBoxSelect);

        
        newData.key = keyItem;
        newData.IdTable = gbTableId;
        newData.update_group = IsCheckBoxSelect;
        if (newData.update_group.length === 0) {
            newData.update_group.push(keyItem);
        }
        console.log(newData);

        var returnStatus;
        $.ajax({
            type: "POST",
            url: "../Home/UpdateAI",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(newData),
            dataType: "json",
            async: false,
            success: function (data) {
                if (data[0].Status == 1) {
                    DevExpress.ui.notify("แก้ไขข้อมูลเรียบร้อยแล้ว", "success");
                    //clear check box
                    IsCheckBoxSelect = [];
                    returnStatus = true;
                } else {
                    DevExpress.ui.notify("ไม่สามารถแก้ไขข้อมูลได้กรุณาตรวจสอบข้อมูล", "error");
                    returnStatus = false;
                }
            }
        });
        dataGrid.option('dataSource', getDataAi());
        dataGrid.refresh();
        return returnStatus;
    }

    //Function Insert ข้อมูล gps_company
    function fnInsertAI(dataGrid) {
        dataGrid.IdTable = gbTableId;
        var returnId = 0;
        $.ajax({
            type: "POST",
            url: "../Home/InsertAI",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(dataGrid),
            dataType: "json",
            async: false,
            success: function (data) {
                returnId = data[0].Status;
                //console.log(data);
                if (data[0].Status != "0") {
                    DevExpress.ui.notify("เพิ่มข้อมูลเรียบร้อยแล้ว", "success");
                } else {
                    DevExpress.ui.notify("ไม่สามารถเพิ่มข้อมูลได้", "error");
                }
            }
        });
        return returnId;
    }

    //Function Delete ข้อมูล gps_company
    function fnDeleteAI(keyItem) {
        var returnStatus;
        $.ajax({
            type: "POST",
            url: "../Home/DeleteAI",
            contentType: "application/json; charset=utf-8",
            data: "{keyId: '" + keyItem + "'}",
            dataType: "json",
            async: false,
            success: function (data) {
                if (data[0].Status == 1) {
                    DevExpress.ui.notify("ลบข้อมูลเรียบร้อยแล้ว", "success");
                    returnStatus = false;
                } else {
                    DevExpress.ui.notify("ไม่สามารถลบข้อมูลได้", "error");
                    returnStatus = true;
                }
            }
        });
        return returnStatus;
    }

    //กำหนดรายการคลิกขวาใน treeview และเงื่อนไขกรณีที่มีการคลิกเลือกรายการ
    getContextMenu();
    function getContextMenu() {
        $("#context-menu").dxContextMenu({
            dataSource: OptionsMenu,
            width: 200,
            target: "#treeview",
            onItemClick: function (e) {
                if (!e.itemData.items) {
                    if (e.itemData.text == "New File") {
                        cf.reset();
                        $("#mdNewFile").modal();
                    } else if (e.itemData.text == "New Folder") {
                        $("#mdNewFolder").modal();
                    } else if (e.itemData.text == "Rename") {
                        $("#mdRename").modal();
                    }
                    else if (e.itemData.text == "Delete") {
                        var result = DevExpress.ui.dialog.confirm("Are you sure?", "Confirm delete");
                        result.done(function (dialogResult) {
                            if (dialogResult) {
                                fnDeleteFiles(idFile);
                            }
                        });
                    }
                }
            }
        });
    }
    //จบการกำหนดรายการคลิกขวา

    // Onclick New Folder
    $("#btnNewFolder").dxButton({

        onClick: function () {
            document.getElementById("btnNewFolder").disabled = true;
            var folderName = document.getElementById("lbNewFolder").value;
            if (folderName != "") {
                fileDataAi = new FormData();
                fileDataAi.append('fk_id', idFK);
                fileDataAi.append('parentDirId', idFile);
                fileDataAi.append('newFolder', folderName);
                fileDataAi.append('tableId', gbTableId);
                fileDataAi.append('tableName', tableName);
                fnInsertFiles(fileDataAi);
            } else {
                DevExpress.ui.notify("กรุณากรอกชื่อโฟล์เดอร์", "error");
                document.getElementById("btnNewFolder").disabled = false;
            }
        }
    });

    //กำหนดปุ่มเพิ่มรูปภาพเข้าไปในระบบ
    $("#btnSave").dxButton({
        onClick: function () {
            document.getElementById("btnSave").disabled = true;
            fnInsertFiles(fileDataAi);
        }
    });

    //กำหนดการแสดงรูปภาพที่มาจากการคลิกรูปภาพใน treeview
    var galleryWidget = $("<div>").dxGallery({
    }).dxGallery("instance");
    //จบการกำหนดการแสดงรูปภาพ

    var galleryWidget;
    $("#popup").dxPopup({
        visible: false,
        width: 800,
        height: 600,
        contentTemplate: function (content) {
            galleryWidget = $("<div>").appendTo(content).dxGallery({
                dataSource: gallery,
                height: 500,
                loop: true,
                slideshowDelay: 2000,
                showNavButtons: true,
                showIndicator: true,
                selectedIndex: gallerySelect
            }).
            dxGallery("instance");
        }
    });
    //จบการกำหนดการแสดงรูปภาพ

    //Function Rename file in treeview
    function fnRename(fileUpload) {

        $.ajax({
            type: "POST",
            url: "../Home/fnRenameAI",
            data: fileUpload,
            dataType: "json",
            contentType: false,
            processData: false,
            success: function (data) {

                if (data[0].Status != '0') {
                    var itemData = fnGetFiles(data[0].Status, gbTableId);
                    fnChangeTreeview(data[0].Status, itemData);

                } else {
                    DevExpress.ui.notify("ไม่สามารถแก้ไขได้", "error");
                }
                document.getElementById('lbRename').value = '';
                $('#mdRename').modal('hide');
                document.getElementById("btnRename").disabled = false;
            },
            error: function (error) {
                DevExpress.ui.notify(error, "error");
            }
        });
    }

    //Event click of id = btnRename
    $("#btnRename").click(function () {
        document.getElementById("btnRename").disabled = true;
        var folderName = document.getElementById("lbRename").value;
        if (folderName != "") {
            fileDataAi = new FormData();
            fileDataAi.append('fk_id', idFK);
            fileDataAi.append('file_id', idFile);
            fileDataAi.append('rename', folderName);
            fnRename(fileDataAi);
        } else {
            DevExpress.ui.notify("กรุณากรอกชื่อโฟล์เดอร์", "error");
        }
    });

    //Function Insert file in treeview
    function fnInsertFiles(fileUpload) {
        $.ajax({
            type: "POST",
            url: "../Home/InsertFile",
            data: fileUpload,
            dataType: 'json',
            contentType: false,
            processData: false,
            success: function (data) {
                fileDataAi = new FormData();
                document.getElementById("btnSave").disabled = false;
                $("#mdNewFile").modal('hide');
                $("#mdNewFolder").modal('hide');
                document.getElementById("lbNewFolder").value = '';
                if (data[0].Status != '0') {
                    var itemData = fnGetFiles(data[0].Status, gbTableId);
                    fnChangeTreeview(data[0].Status, itemData);
                } else {
                    DevExpress.ui.notify("ไม่สามารถเพิ่มไฟล์ได้", "error");
                }
            },
            error: function (error) {
                $("#mdNewFile").modal('hide');
                $("#mdNewFolder").modal('hide');
                document.getElementById("lbNewFolder").value = '';
                DevExpress.ui.notify("ไม่สามารถเพิ่มไฟล์ได้", "error");
            }
        });
    }

    //Function Delete file in treeview
    function fnDeleteFiles(file_id) {
        $.ajax({
            type: "POST",
            url: "../Home/DeleteFile",
            contentType: "application/json; charset=utf-8",
            data: "{keyId: '" + file_id + "',FolderName:'" + tableName + "'}",
            dataType: 'json',
            success: function (data) {
                if (data[0].Status != '0') {
                    var itemData = fnGetFiles(data[0].Status, gbTableId);
                    fnChangeTreeview(data[0].Status, itemData);
                    DevExpress.ui.notify("ลบไฟล์เรียบร้อยแล้ว", "success");
                } else {
                    DevExpress.ui.notify("ลบไฟล์เรียบร้อยแล้ว", "error");
                }
            },
            error: function (error) {
                DevExpress.ui.notify("ไม่สามารถลบไฟล์ได้", "error");
            }
        });
    }

    //กำหนดการ Upload files
    var cf = $(".custom-file").dxFileUploader({
        maxFileSize: 10000000,
        multiple: true,
        allowedFileExtensions: [".pdf", ".jpg", ".jpeg", ".png"],
        accept: "image/*,.pdf",
        uploadMode: "useForm",
        onValueChanged: function (e) {
            var files = e.value;
            fileDataAi = new FormData();
            if (files.length > 0) {
                $.each(files, function (i, file) {
                    //fileDataAi.append('file', file);
                    if (file.type != "application/pdf") {
                        //Resize Pic
                        var img = document.createElement("img");
                        var reader = new FileReader();
                        reader.onload = function (e) {
                            img.src = e.target.result;
                            img.onload = function () {
                                var canvas = document.createElement("canvas");
                                var ctx = canvas.getContext("2d");
                                ctx.drawImage(img, 0, 0);
                                var MAX_WIDTH = 800;
                                var MAX_HEIGHT = 600;
                                var width = img.width;
                                var height = img.height;

                                if (width > height) {
                                    if (width > MAX_WIDTH) {
                                        height *= MAX_WIDTH / width;
                                        width = MAX_WIDTH;
                                    }
                                } else {
                                    if (height > MAX_HEIGHT) {
                                        width *= MAX_HEIGHT / height;
                                        height = MAX_HEIGHT;
                                    }
                                }
                                canvas.width = width;
                                canvas.height = height;
                                var ctx = canvas.getContext("2d");
                                ctx.drawImage(img, 0, 0, width, height);
                                dataurl = canvas.toDataURL("image/jpeg");
                                fetch(dataurl)
                                    .then(res => res.blob())
                                    .then(blob => {
                                        fileDataAi.append('file', blob, file.name);
                                    });
                            }
                        }
                        reader.readAsDataURL(file);
                    } else {
                        fileDataAi.append('file', file);
                    }
                });
                fileDataAi.append('fk_id', idFK);
                fileDataAi.append('parentDirId', idFile);
                fileDataAi.append('newFolder', "");
                fileDataAi.append('tableId', gbTableId);
                fileDataAi.append('tableName', tableName);
            }
        },
    }).dxFileUploader('instance');
    //จบการกำหนด Upload files

    var popup_history = $("#popup_history").dxPopup({
        visible: false,
        width: "60%",
        height: "70%",
        showTitle: true,
        title: "ประวัติ",
        contentTemplate: function (content) {
            return $("<div id='gridHistory'>test</div>");
        }
    }).dxPopup("instance");

    function filter() {
        //เซ็ตอาเรย์เริ่มต้น
        var dataLookupAll = dataGrid._options.columns[0].lookup.dataSource;
        //เซ็ตอาเรย์ที่จะกรอง
        var filter = dataGridAll;
        //กรองอาเรย์
        filter.forEach(function (filterdata) {
            dataLookupAll = dataLookupAll.filter(function (arr) {
                return arr.license_id != filterdata.license_id;
            });
        });
        dataLookupFilter = dataLookupAll;
    }

    function setDefaultNumberCar() {
        var arr = {
            dataSource: _dataSource,
            displayExpr: "number_car",
            valueExpr: "number_car"
        }
        dataGrid.option('columns[0].lookup', arr);
    }

    $(document).on("dxclick", ".dx-datagrid-column-chooser .dx-closebutton", function () {
        var dataColumnVisible = "",
            dataColumnHide = "";
        var columnCount = dataGrid.columnCount(),
            i;
        for (i = 0; i < columnCount; i++) {
            if (dataGrid.columnOption(i, "visible")) {
                dataColumnVisible = dataColumnVisible + "*" + dataGrid.columnOption(i).column_id;;
            } else {
                dataColumnHide = dataColumnHide + "*" + dataGrid.columnOption(i).column_id;
            }
        }

        //alert(dataColumnVisible);
        //alert(dataColumnHide);

        $.ajax({
            type: "POST",
            url: "../Home/SetColumnHide",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: "{dataColumnVisible:'" + dataColumnVisible + "',dataColumnHide:'" + dataColumnHide + "'}",
            success: function (data) {
                if (data = 1) {
                    //alert('Update Column Hide OK');
                } else {
                    alert('Update Column Hide error!!');
                }
            }
        });
    });
        
});