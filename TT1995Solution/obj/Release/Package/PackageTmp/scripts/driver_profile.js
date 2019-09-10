$(function () {
    var tableName = 'driver_profile';
    $("a:contains('โปรไฟล์ พขร')").addClass("active");
    var dataGrid = $("#gridContainer").dxDataGrid({
        searchPanel: {
            visible: true,
            width: 240,
            placeholder: "Search..."
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
        editing: {
            mode: "row",
            allowDeleting: boolStatus,
            allowAdding: boolStatus,
            allowUpdating: boolStatus,
            useIcons: true,
        },
        "export": {
            enabled: true,
            fileName: "driver",
        },
        filterRow: {
            visible: true,
            applyFilter: "auto"
        },
        onRowInserting: function (e) {
            var statusInsert = fnInsertDriverProfile(e.data);
            if (statusInsert != '0') {
                e.data.driver_id = statusInsert;
            } else {
                e.cancel = true;
            }
        },
        onRowUpdating: function (e) {
           e.cancel = !fnUpdateDriverProfile(e.newData, e.key.driver_id);
        },
        onRowRemoving: function (e) {
            e.cancel = !DeleteDriverProfile(e.key.driver_id);
        },
        selection: {
            mode: "single"
        },
    }).dxDataGrid('instance');

    //กำหนดในส่วนของ Column ทั้งหน้าเพิ่มข้อมูลและหน้าแก้ไขข้อมูล
    $.ajax({
        type: "POST",
        url: "../Home/GetColumnChooserDriveProfile",
        contentType: "application/json; charset=utf-8",
        data: "{table_id: 37}",
        dataType: "json",
        async: false,
        success: function (data) {
            dataGrid.option('columns', data);
        },
        error: function (error) {
            console.log(error);
        }
    });
    //จบการกำหนด Column

    function fnGetDriverProfile() {
        $.ajax({
            type: "POST",
            url: "../Home/GetDriverProfile",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                for (var i = 0; i < data.length; i++) {

                    if (data[i].start_work_date != null) {
                        var d1 = parseJsonDate(data[i].start_work_date);
                        data[i].start_work_date = d1
                    }

                }
                dataGrid.option('dataSource', data);
                console.log(data);
            }
        });
    }

    fnGetDriverProfile();

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