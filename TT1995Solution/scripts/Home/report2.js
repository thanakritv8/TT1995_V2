var dataAll;
$("a:contains('หนังสือมอบอำนาจ')").last().addClass("active");
var show_column = [
        {
            dataField: "id",
            caption: "เลขที่เอกสาร",
        },
        {
            dataField: "txt1",
            caption: "เขียนที่",
        },
        {
            dataField: "txt2",
            caption: "วันที่",
        },
        {
            dataField: "txt3",
            caption: "เดิอน",
        },
        {
            dataField: "txt4",
            caption: "ปี",
        },
        {
            dataField: "txt5",
            caption: "ชื่อ",
        },
        {
            dataField: "txt6",
            caption: "อายุ",
        },
        {
            dataField: "txt7",
            caption: "เชื้อชาติ",
        },
        {
            dataField: "txt8",
            caption: "สัญชาติ",
        },
        {
            dataField: "txt9",
            caption: "บ้านเลขที่",
        },
        {
            dataField: "txt10",
            caption: "หมู่ที่",
        },
        {
            dataField: "txt11",
            caption: "ซอย",
        },
        {
            dataField: "txt12",
            caption: "ถนน",
        },
        {
            dataField: "txt13",
            caption: "ตำบล/แขวง",
        },
        {
            dataField: "txt14",
            caption: "อำเภอ/เขต",
        },
        {
            dataField: "txt15",
            caption: "จังหวัด",
        },
        {
            dataField: "txt16",
            caption: "ผู้มีอำนาจลงนามผูกพัน",
        },
        {
            dataField: "txt17",
            caption: "สำนักงานตั้งอยู่ที่",
        },
        {
            dataField: "txt18",
            caption: "ถนน",
        },
        {
            dataField: "txt19",
            caption: "ตำบล/แขวง",
        },
        {
            dataField: "txt20",
            caption: "อำเภอ/เขต",
        },
        {
            dataField: "txt21",
            caption: "จังหวัด",
        },
        {
            dataField: "txt22",
            caption: "โทรศัพท์",
        },
        {
            dataField: "txt23",
            caption: "ขอมอบอำนาจให้",
        },
        {
            dataField: "txt24",
            caption: "อายุ",
        },
        {
            dataField: "txt25",
            caption: "เชื้อชาติ",
        },
        {
            dataField: "txt26",
            caption: "สัญชาติ",
        },
        {
            dataField: "txt27",
            caption: "บ้านเลขที่",
        },
        {
            dataField: "txt28",
            caption: "หมู่ที่",
        },
        {
            dataField: "txt29",
            caption: "ซอย",
        },
        {
            dataField: "txt30",
            caption: "ถนน",
        },
        {
            dataField: "txt31",
            caption: "ตำบล/แขวง",
        },
        {
            dataField: "txt32",
            caption: "อำเภอ/เขต",
        },
        {
            dataField: "txt33",
            caption: "จังหวัด",
        },
        {
            dataField: "txt34",
            caption: "ผู้มีอำนาจแทนข้าพเจ้า 1",
        },
        {
            dataField: "txt35",
            caption: "ผู้มีอำนาจแทนข้าพเจ้า 2",
        },
        {
            dataField: "txt36",
            caption: "ผู้มีอำนาจแทนข้าพเจ้า 3",
        },
        {
            dataField: "txt37",
            caption: "ผู้มีอำนาจแทนข้าพเจ้า 4",
        },
        {
            dataField: "txt38",
            caption: "ชื่อผู้มอบอำนาจ",
        },
        {
            dataField: "txt39",
            caption: "ชื่อผู้รับมอบอำนาจ",
        },
        {
            dataField: "txt40",
            caption: "พยาน 1",
        },
        {
            dataField: "txt41",
            caption: "พยาน 2",
        },
        {
            dataField: "txt42",
            caption: "เลขที่",
        },
        {
            dataField: "txt43",
            caption: "วันออกบัตร",
        },
        {
            dataField: "txt44",
            caption: "วันหมดอายุ",
        },
        {
            dataField: "id",
            caption: "",
            fixed: true,
            allowEditing: false,
            cellTemplate: function (container, options) {
                $('<i class="fas fa-file-alt" title="View"></i>').addClass('dx-link')
                    .on('dxclick', function (e) {
                        show_popup_view(e, 'หนังสือมอบอำนาจ', options, options.value);
                    }).appendTo(container);

                $('<i class="fas fa-print ml-2" title="Print"></i>').addClass('dx-link')
                    .on('dxclick', function (e) {
                        print_pdf(options.value);
                    }).appendTo(container);

                $('<i class="fas fa-pen ml-2" title="Edit"></i>').addClass('dx-link')
                    .on('dxclick', function (e) {
                        show_popup_edit(e, 'แก้ไขหนังสือมอบอำนาจ', options, options.value);
                    }).appendTo(container);

                $('<i class="fas fa-trash-alt ml-2" title="Delete"></i>').addClass('dx-link')
                    .on('dxclick', function (e) {
                        delete_form(options.value);
                    }).appendTo(container);

            }
        }
];

// รับข้อมูลของ Report 1
function getData() {
    return $.ajax({
        type: "GET",
        url: "http://tabien.threetrans.com/TTApi/Tabien/Report/GetReport2All",
        dataType: "json",
        async: false,
        success: function (data) {
        }
    }).responseJSON;
}

dataAll = getData();

// สร้าง DataGrid
function getreport2() {
    $.ajax({
        type: "GET",
        url: "http://tabien.threetrans.com/TTApi/Tabien/Report/GetReport2All",
        dataType: 'json',
        async: false,
        success: function (data) {
            console.log(data);
            var grid_report2 = $("#gridContainer").dxDataGrid({
                dataSource: data,
                keyExpr: "id",
                searchPanel: {
                    visible: true,
                    width: 240,
                    placeholder: "Search..."
                },
                paging: {
                    pageSize: 10
                },
                columns: show_column,
                columnChooser: {
                    enabled: true
                },
                columnAutoWidth: true,
                allowColumnResizing: true,
                filterRow: {
                    visible: true,
                    applyFilter: "auto"
                },
                headerFilter: {
                    visible: true
                },
                showBorders: true
            }).dxDataGrid("instance");
        },
        error: function (error) {
            console.log(error);
        }
    });
}
getreport2();

// สร้างปุ่มสร้างเอกสาร
var newButton = $("#newRowButton")
.dxButton({
    text: "+ สร้างเอกสาร",
    onClick: function () {
        create_doc();
    }
})
.dxButton("instance");

function create_doc() {
    // หาความยาว เพื่อจะได้ทราบค่าตัวสุดท้าย
    var last_json = dataAll.length;
    if (last_json > 0) {
        // เอา Json มาเก็บในตัวแปร เพื่อเอาไปใส่ Array
        var last_data = dataAll[last_json - 1];
        var data_arr = [];
        for (var n in last_data) {
            data_arr.push([n, last_data[n]]);
        }
        console.log(data_arr);
        // เซ็ตค่า val ของแต่ละ input 
        for (i = 1; i <= 44; i++) {
            $('#create_form2 #txt' + i).val(data_arr[i][1]);
        }
    }
    $('#create_form2').modal('show');
}
// บันทึกการสร้างเอกสาร
$('#btnSaveForm2').click(function () {
    $.ajax({
        type: "POST",
        url: "http://tabien.threetrans.com/TTApi/Tabien/Report/InsertReport2",
        //contentType: "application/json; charset=utf-8",
        data: {
            id: "",
            txt1: $('#create_form2 #txt1').val(),
            txt2: $('#create_form2 #txt2').val(),
            txt3: $('#create_form2 #txt3').val(),
            txt4: $('#create_form2 #txt4').val(),
            txt5: $('#create_form2 #txt5').val(),
            txt6: $('#create_form2 #txt6').val(),
            txt7: $('#create_form2 #txt7').val(),
            txt8: $('#create_form2 #txt8').val(),
            txt9: $('#create_form2 #txt9').val(),
            txt10: $('#create_form2 #txt10').val(),
            txt11: $('#create_form2 #txt11').val(),
            txt12: $('#create_form2 #txt12').val(),
            txt13: $('#create_form2 #txt13').val(),
            txt14: $('#create_form2 #txt14').val(),
            txt15: $('#create_form2 #txt15').val(),
            txt16: $('#create_form2 #txt16').val(),
            txt17: $('#create_form2 #txt17').val(),
            txt18: $('#create_form2 #txt18').val(),
            txt19: $('#create_form2 #txt19').val(),
            txt20: $('#create_form2 #txt20').val(),
            txt21: $('#create_form2 #txt21').val(),
            txt22: $('#create_form2 #txt22').val(),
            txt23: $('#create_form2 #txt23').val(),
            txt24: $('#create_form2 #txt24').val(),
            txt25: $('#create_form2 #txt25').val(),
            txt26: $('#create_form2 #txt26').val(),
            txt27: $('#create_form2 #txt27').val(),
            txt28: $('#create_form2 #txt28').val(),
            txt29: $('#create_form2 #txt29').val(),
            txt30: $('#create_form2 #txt30').val(),
            txt31: $('#create_form2 #txt31').val(),
            txt32: $('#create_form2 #txt32').val(),
            txt33: $('#create_form2 #txt33').val(),
            txt34: $('#create_form2 #txt34').val(),
            txt35: $('#create_form2 #txt35').val(),
            txt36: $('#create_form2 #txt36').val(),
            txt37: $('#create_form2 #txt37').val(),
            txt38: $('#create_form2 #txt38').val(),
            txt39: $('#create_form2 #txt39').val(),
            txt40: $('#create_form2 #txt40').val(),
            txt41: $('#create_form2 #txt41').val(),
            txt42: $('#create_form2 #txt42').val(),
            txt43: $('#create_form2 #txt43').val(),
            txt44: $('#create_form2 #txt44').val(),
        },
        dataType: "json",
        async: false,
        success: function (data) {
            console.log(data);
            $('#create_form2').modal('hide');
            getreport2();
        },
        error: function (error) {
            console.log(error);
            DevExpress.ui.notify("กรุณาตรวจสอบข้อมูล", "error");
        }
    });
});

// แก้ไขเอกสาร
$('#btnUpdateForm2').click(function () {
    $.ajax({
        type: "POST",
        url: "http://tabien.threetrans.com/TTApi/Tabien/Report/UpdateReport2",
        //contentType: "application/json; charset=utf-8",
        data: {
            id: $('#edit_form2 #txt0').val(),
            txt1: $('#edit_form2 #txt1').val(),
            txt2: $('#edit_form2 #txt2').val(),
            txt3: $('#edit_form2 #txt3').val(),
            txt4: $('#edit_form2 #txt4').val(),
            txt5: $('#edit_form2 #txt5').val(),
            txt6: $('#edit_form2 #txt6').val(),
            txt7: $('#edit_form2 #txt7').val(),
            txt8: $('#edit_form2 #txt8').val(),
            txt9: $('#edit_form2 #txt9').val(),
            txt10: $('#edit_form2 #txt10').val(),
            txt11: $('#edit_form2 #txt11').val(),
            txt12: $('#edit_form2 #txt12').val(),
            txt13: $('#edit_form2 #txt13').val(),
            txt14: $('#edit_form2 #txt14').val(),
            txt15: $('#edit_form2 #txt15').val(),
            txt16: $('#edit_form2 #txt16').val(),
            txt17: $('#edit_form2 #txt17').val(),
            txt18: $('#edit_form2 #txt18').val(),
            txt19: $('#edit_form2 #txt19').val(),
            txt20: $('#edit_form2 #txt20').val(),
            txt21: $('#edit_form2 #txt21').val(),
            txt22: $('#edit_form2 #txt22').val(),
            txt23: $('#edit_form2 #txt23').val(),
            txt24: $('#edit_form2 #txt24').val(),
            txt25: $('#edit_form2 #txt25').val(),
            txt26: $('#edit_form2 #txt26').val(),
            txt27: $('#edit_form2 #txt27').val(),
            txt28: $('#edit_form2 #txt28').val(),
            txt29: $('#edit_form2 #txt29').val(),
            txt30: $('#edit_form2 #txt30').val(),
            txt31: $('#edit_form2 #txt31').val(),
            txt32: $('#edit_form2 #txt32').val(),
            txt33: $('#edit_form2 #txt33').val(),
            txt34: $('#edit_form2 #txt34').val(),
            txt35: $('#edit_form2 #txt35').val(),
            txt36: $('#edit_form2 #txt36').val(),
            txt37: $('#edit_form2 #txt37').val(),
            txt38: $('#edit_form2 #txt38').val(),
            txt39: $('#edit_form2 #txt39').val(),
            txt40: $('#edit_form2 #txt40').val(),
            txt41: $('#edit_form2 #txt41').val(),
            txt42: $('#edit_form2 #txt42').val(),
            txt43: $('#edit_form2 #txt43').val(),
            txt44: $('#edit_form2 #txt44').val(),
        },
        dataType: "json",
        async: false,
        success: function (data) {
            console.log(data);
            $('#edit_form2').modal('hide');
            getreport2();
        },
        error: function (error) {
            console.log(error);
            DevExpress.ui.notify("กรุณาตรวจสอบข้อมูล", "error");
        }
    });
});

// ลบเอกสาร
function delete_form(id) {
    var cf = confirm("ต้องการลบเอกสารนี้ใช่หรือไม่?");
    if (cf == true) {
        $.ajax({
            type: "POST",
            url: "http://tabien.threetrans.com/TTApi/Tabien/Report/DeleteReport2",
            //contentType: "application/json; charset=utf-8",
            data: { id: id },
            dataType: "json",
            async: false,
            success: function (data) {
                console.log(data);
                getreport2();
            },
            error: function (error) {
                console.log(error);
                DevExpress.ui.notify("กรุณาตรวจสอบข้อมูล", "error");
            }
        });
    }
}

// ปริ้น
function print_pdf(id) {
    window.open('http://tabien.threetrans.com/TTApi/Report/ExportWorkSheet?id=' + id + '&name_report=Report2', '_blank');
}

function show_popup_view(e, title, options, id) {
    console.log(options.row.data);
    console.log(id);
    var data_arr = [];
    for (var n in options.row.data) {
        data_arr.push([n, options.row.data[n]]);
    }
    $("#view_form2 input[id^='txt']").prop("readonly", true);
    for (i = 1; i <= 44; i++) {
        $('#view_form2 #txt' + i).val(data_arr[i][1]);
    }
    $('#view_form2').modal('show');
}

function show_popup_edit(e, title, options, id) {
    var data_arr = [];
    for (var n in options.row.data) {
        data_arr.push([n, options.row.data[n]]);
    }
    for (i = 0; i <= 44; i++) {
        $('#edit_form2 #txt' + i).val(data_arr[i][1]);
    }
    $('#edit_form2').modal('show');
}