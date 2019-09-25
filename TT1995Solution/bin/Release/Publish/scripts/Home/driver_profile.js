$(function () {
    var tableName = 'driver_profile';
    $("a:contains('โปรไฟล์ พขร')").addClass("active");

    var show_column = [
        {
            dataField: "driver_name",
            caption: "ชื่อ",
        },
        {
            dataField: "tool",
            caption: "เครื่องมือ",
            fixed: true,
            fixedPosition: "right",
            width: 90,
            alignment: "center",
            allowEditing: false,
            cellTemplate: function (container, options) {
                $('<i class="fas fa-search" title="View"></i>').addClass('dx-link')
                    .on('dxclick', function (e) {
                        show_popup_dp_view(e, options, options.value);
                    }).appendTo(container);

                $('<i class="fas fa-pen ml-2" title="Edit"></i>').addClass('dx-link')
                    .on('dxclick', function (e) {
                        show_popup_dp_edit(e, options, options.value);
                    }).appendTo(container);

                $('<i class="fas fa-trash-alt ml-2" title="Delete"></i>').addClass('dx-link')
                    .on('dxclick', function (e) {
                        deleteDP(options.key);
                    }).appendTo(container);
            }
        }
    ];

    var dataGrid = $("#gridContainer").dxDataGrid({
        keyExpr: "driver_id",
        searchPanel: {
            visible: true,
            width: 240,
            placeholder: "Search..."
        },
        columns: show_column,
        onContentReady: function (e) {
            var $btnView = $('<div id="btnView" class="mr-2">').dxButton({
                icon: 'add', //or your custom icon
                onClick: function () {
                    //On Click
                    $('#insertDP').modal('show');
                }
            });
            if (e.element.find('#btnView').length == 0)
                e.element
                    .find('.dx-toolbar-after')
                    .prepend($btnView);
        },
        showBorders: true,
        paging: {
            enabled: true,
            pageSize: 10
        },
        pager: {
            showPageSizeSelector: true,
            allowedPageSizes: [5, 10, 20],
            showInfo: true
        },
        allowColumnResizing: true,
        columnResizingMode: "widget",
        selection: {
            mode: "single"
        },
    }).dxDataGrid('instance');

    //กำหนดในส่วนของ Column ทั้งหน้าเพิ่มข้อมูลและหน้าแก้ไขข้อมูล
    //$.ajax({
    //    type: "POST",
    //    url: "../Home/GetColumnChooserDriveProfile",
    //    contentType: "application/json; charset=utf-8",
    //    data: "{table_id: 37}",
    //    dataType: "json",
    //    async: false,
    //    success: function (data) {
    //        dataGrid.option('columns', data);
    //    },
    //    error: function (error) {
    //        console.log(error);
    //    }
    //});
    //จบการกำหนด Column

    $("#btnSaveInsertDP").click(function () {
        var required = true;
        // เช็ค data ที่ต้อง input
        for (i = 1; i > 0; --i) {
            if (!$('#insertDP #txt' + i).val()) {
                $('#insertDP #txt' + i).focus();
                required = false;
            }
        }
        if (required) {
            insertDP();
        }
    });

    $("#btSaveEditDP").click(function () {
        var required = true;
        // เช็ค data ที่ต้อง input
        for (i = 1; i > 0; --i) {
            if (!$('#editDP #txt' + i).val()) {
                $('#editDP #txt' + i).focus();
                required = false;
            }
        }
        if (required) {
            editDP();
        }
    });

    function insertDP() {
        var model = new FormData();
        model.append('driver_name', $('#insertDP #txt1').val());
        model.append('Image', uploadDP_Insert._options.value[0]);
        $.ajax({
            type: 'POST',
            url: '../Home/InsertDP',
            data: model,
            dataType: "json",
            processData: false,
            contentType: false, // not json 
            async: false,
            success: function (res) {
                console.log(res);
                $('#insertDP .form-control').val(''); // ล้างค่าใน input
                uploadDP_Insert.reset(); // ล้างค่าใน upload
                $('#insertDP').modal('hide');
                if (res.Status != 0) {
                    DevExpress.ui.notify('เพิ่มข้อมูลเรียบร้อยแล้ว', 'success');
                    dataGrid.option('dataSource', fnGetDriverProfile());
                } else {
                    DevExpress.ui.notify('ไม่สามารถเพิ่มข้อมูลได้กรุณาตรวจสอบข้อมูล', 'error');
                }
            }
        });
    }

    function editDP() {
        var model = new FormData();
        model.append('driver_id', $('#editDP #driver_id').val());
        model.append('driver_name', $('#editDP #txt1').val());
        model.append('Image', uploadDP_Edit._options.value[0]);
        $.ajax({
            type: 'POST',
            url: '../Home/EditDP',
            data: model,
            dataType: "json",
            processData: false,
            contentType: false, // not json 
            async: false,
            success: function (res) {
                console.log(res);
                $('#editDP .form-control').val(''); // ล้างค่าใน input
                uploadDP_Insert.reset(); // ล้างค่าใน upload
                $('#editDP').modal('hide');
                if (res.Status != '0') {
                    DevExpress.ui.notify('เพิ่มข้อมูลเรียบร้อยแล้ว', 'success');
                    dataGrid.option('dataSource', fnGetDriverProfile());
                } else {
                    DevExpress.ui.notify('ไม่สามารถเพิ่มข้อมูลได้กรุณาตรวจสอบข้อมูล', 'error');
                }
            }
        });
    }

    function deleteDP(driver_id) {
        var cf = confirm("ต้องการข้อมูล พขร นี้ใช่หรือไม่?");
        if (cf == true) {
            $.ajax({
                type: "POST",
                url: "../Home/DeleteDriverProfile",
                data: { driver_id: driver_id },
                dataType: "json",
                async: false,
                success: function (res) {
                    //console.log(res[0].Status);
                    if (res[0].Status == "1") {
                        DevExpress.ui.notify("ลบข้อมูลเรียบร้อยแล้ว", "success");
                        dataGrid.option('dataSource', fnGetDriverProfile());
                    } else {
                        DevExpress.ui.notify("ไม่สามารถลบข้อมูลได้", "error");
                    }
                }
            });
        }
    }



    function show_popup_dp_view(e, options, id) {
        console.log(options.row.data);
        $('#viewDP').modal('show');
        $('#viewDP #txt1').val(options.row.data.driver_name);
        $("#DP-img").attr("src", options.row.data.picture);
    }

    function show_popup_dp_edit(e, options, id) {
        console.log(options.row.data);
        $('#editDP').modal('show');
        $('#editDP #driver_id').val(options.row.data.driver_id);
        $('#editDP #txt1').val(options.row.data.driver_name);

        // btn_uploadSafety_Edit.reset();
    }

    uploadDP_Insert = $("#uploadDP_Insert").dxFileUploader({
        selectButtonText: "เลือกรูปภาพ",
        labelText: "",
        accept: "image/*",
        uploadMode: "useForm",
        onValueChanged: function (e) {
            if (e.value.length) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    $('#image').attr('src', e.target.result);
                    $("#image").show();
                }
                reader.readAsDataURL(e.value[0]);
            }
        }
    }).dxFileUploader("instance");

    uploadDP_Edit = $("#uploadDP_Edit").dxFileUploader({
        selectButtonText: "เลือกรูปภาพ",
        labelText: "",
        accept: "image/*",
        uploadMode: "useForm",
        onValueChanged: function (e) {
            if (e.value.length) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    $('#image').attr('src', e.target.result);
                    $("#image").show();
                }
                reader.readAsDataURL(e.value[0]);
            }
        }
    }).dxFileUploader("instance");
    

    btn_uploadTrans_Edit = $("#uploadTrans_Edit").dxFileUploader({
        selectButtonText: "เลือกรูปภาพ",
        labelText: "",
        accept: "image/*",
        uploadMode: "useForm",
        onValueChanged: function (e) {
            if (e.value.length) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    $('#image').attr('src', e.target.result);
                    $("#image").show();
                }
                reader.readAsDataURL(e.value[0]);
            }
        }
    }).dxFileUploader("instance");

    function fnGetDriverProfile() {
        return $.ajax({
            type: "POST",
            url: "../Home/GetDriverProfile",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (data) {
                for (var i = 0; i < data.length; i++) {
                    if (data[i].start_work_date != null) {
                        var d1 = parseJsonDate(data[i].start_work_date);
                        data[i].start_work_date = d1
                    }
                }
            }
        }).responseJSON;
    }

    dataGrid.option('dataSource', fnGetDriverProfile());

    function fnInsertDriverProfile(dataGrid) {
        var returnId = 0;
        $.ajax({
            type: "POST",
            url: "../Home/InsertDriverProfile",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(dataGrid),
            dataType: "json",
            async: false,
            success: function (data) {
                if (data[0].Status != "กรุณากรอกข้อมูลให้ถูกต้อง") {
                    DevExpress.ui.notify("เพิ่มข้อมูลเรียบร้อยแล้ว", "success");
                    returnId = data[0].Status;
                } else {
                    DevExpress.ui.notify(data[0].Status, "error");
                }
            }
        });
        return returnId;
    }

    //Function Update ข้อมูล
    function fnUpdateDriverProfile(newData, keyItem) {
        var boolUpdate = false;
        newData.driver_id = keyItem;
        console.log(keyItem);
        $.ajax({
            type: "POST",
            url: "../Home/UpdateDriverProfile",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(newData),
            dataType: "json",
            async: false,
            success: function (data) {
                if (data[0].Status == 1) {
                    DevExpress.ui.notify("แก้ไขข้อมูล พขร เรียบร้อยแล้ว", "success");
                    boolUpdate = true;
                } else {
                    DevExpress.ui.notify("ไม่สามารถแก้ไขข้อมูลได้กรุณาตรวจสอบข้อมูล", "error");
                    boolUpdate = false;
                }
            }
        });
        return boolUpdate;
    }

    function DeleteDriverProfile(keyItem) {
        
        var boolDel = false;
        $.ajax({
            type: "POST",
            url: "../Home/DeleteDriverProfile",
            contentType: "application/json; charset=utf-8",
            data: "{keyId: '" + keyItem + "'}",
            dataType: "json",
            async: false,
            success: function (data) {
                if (data[0].Status == 1) {
                    DevExpress.ui.notify("ลบข้อมูลรายการค้นหาเรียบร้อยแล้ว", "success");
                    boolDel = true;
                } else {
                    DevExpress.ui.notify("ไม่สามารถลบข้อมูลได้", "error");
                    boolDel = false;
                }
            }
        });
        return boolDel;
    }

    //Function Convert ตัวแปรประเภท Type date ของ javascripts
    function parseJsonDate(jsonDateString) {
        return new Date(parseInt(jsonDateString.replace('/Date(', '')));
    }

    $(document).on("dxclick", ".dx-datagrid-addrow-button", function () {
        var data = $.ajax({
            type: "POST",
            url: "../Home/GetDriverFull",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (dataLookup) {
                data_lookup_number_car = dataLookup;
            }
        }).responseJSON;

        var arr = {
            dataSource: data,
            displayExpr: "driver_name",
            valueExpr: "driver_id"
        }
        console.log(arr);
        dataGrid.option('columns[4].lookup', arr);
        dataGrid.option('columns[5].lookup', arr);
    });
})