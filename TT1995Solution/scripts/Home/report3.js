var dataAll;
$("a:contains('บันทึกถ้อยคำ')").last().addClass("active");
var show_column = [
        {
            dataField: "id",
            caption: "เลขที่เอกสาร",
        },
        {
            dataField: "txt1",
            caption: "วันที่",
        },
        {
            dataField: "txt2",
            caption: "เดือน",
        },
        {
            dataField: "txt3",
            caption: "พ.ศ.",
        },
        {
            dataField: "txt4",
            caption: "ข้าพเจ้า",
        },
        {
            dataField: "txt5",
            caption: "อายุ",
        },
        {
            dataField: "txt6",
            caption: "สัญชาติ",
        },
        {
            dataField: "txt7",
            caption: "เชื้อชาติ",
        },
        {
            dataField: "txt8",
            caption: "บ้านเลขที่",
        },
        {
            dataField: "txt9",
            caption: "ซอย",
        },
        {
            dataField: "txt10",
            caption: "ถนน",
        },
        {
            dataField: "txt11",
            caption: "ตำบล",
        },
        {
            dataField: "txt12",
            caption: "อำเภอ",
        },
        {
            dataField: "txt13",
            caption: "จังหวัด",
        },
        {
            dataField: "txt14",
            caption: "มีความประสงค์แจ้ง",
        },
        {
            dataField: "txt15",
            caption: "ทะเบียน",
        },
        {
            dataField: "txt16",
            caption: "จำนวน",
        },
        {
            dataField: "txt17",
            caption: "สูญหายโดยมีข้อเท็จจริงว่า",
        },
        {
            dataField: "txt18",
            caption: "เหตุเกิดที่",
        },
        {
            dataField: "txt19",
            caption: "เมื่อวันที่",
        },
        {
            dataField: "txt20",
            caption: "เดือน",
        },
        {
            dataField: "txt21",
            caption: "พ.ศ.",
        },
        {
            dataField: "txt22",
            caption: "เพื่อขอให้ดำเนินการ",
        },
        {
            dataField: "txt23",
            caption: "ผู้ให้ถ้อยคำ",
        },
        {
            dataField: "txt24",
            caption: "ผู้บันทึก",
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
        url: "http://tabien.threetrans.com/TTApi/Tabien/Report/GetReport3All",
        dataType: "json",
        async: false,
        success: function (data) {
        }
    }).responseJSON;
}

dataAll = getData();

// สร้าง DataGrid
function getreport3() {
    $.ajax({
        type: "GET",
        url: "http://tabien.threetrans.com/TTApi/Tabien/Report/GetReport3All",
        dataType: 'json',
        async: false,
        success: function (data) {
            console.log(data);
            var grid_report3 = $("#gridContainer").dxDataGrid({
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
getreport3();

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
        for (i = 1; i <= 24; i++) {
            if (i == 14) {
                $('#create_form3 input:radio[id=txt14]').filter('[value=' + data_arr[i][1] + ']').attr('checked', true);
            } else {
                $('#create_form3 #txt' + i).val(data_arr[i][1]);
            }
        }
    }
    $('#create_form3').modal('show');
}

// บันทึกการสร้างเอกสาร
$('#btnSaveForm3').click(function () {
    $.ajax({
        type: "POST",
        url: "http://tabien.threetrans.com/TTApi/Tabien/Report/InsertReport3",
        //contentType: "application/json; charset=utf-8",
        data: {
            id: "",
            txt1: $('#create_form3 #txt1').val(),
            txt2: $('#create_form3 #txt2').val(),
            txt3: $('#create_form3 #txt3').val(),
            txt4: $('#create_form3 #txt4').val(),
            txt5: $('#create_form3 #txt5').val(),
            txt6: $('#create_form3 #txt6').val(),
            txt7: $('#create_form3 #txt7').val(),
            txt8: $('#create_form3 #txt8').val(),
            txt9: $('#create_form3 #txt9').val(),
            txt10: $('#create_form3 #txt10').val(),
            txt11: $('#create_form3 #txt11').val(),
            txt12: $('#create_form3 #txt12').val(),
            txt13: $('#create_form3 #txt13').val(),
            txt14: $('#create_form3 #txt14').val(),
            txt15: $('#create_form3 #txt15').val(),
            txt16: $('#create_form3 #txt16').val(),
            txt17: $('#create_form3 #txt17').val(),
            txt18: $('#create_form3 #txt18').val(),
            txt19: $('#create_form3 #txt19').val(),
            txt20: $('#create_form3 #txt20').val(),
            txt21: $('#create_form3 #txt21').val(),
            txt22: $('#create_form3 #txt22').val(),
            txt23: $('#create_form3 #txt23').val(),
            txt24: $('#create_form3 #txt24').val(),
        },
        dataType: "json",
        async: false,
        success: function (data) {
            console.log(data);
            $('#create_form3').modal('hide');
            getreport3();
        },
        error: function (error) {
            console.log(error);
            DevExpress.ui.notify("กรุณาตรวจสอบข้อมูล", "error");
        }
    });
});

// แก้ไขเอกสาร
$('#btnUpdateForm3').click(function () {
    $.ajax({
        type: "POST",
        url: "http://tabien.threetrans.com/TTApi/Tabien/Report/UpdateReport3",
        //contentType: "application/json; charset=utf-8",
        data: {
            id: $('#edit_form3 #txt0').val(),
            txt1: $('#edit_form3 #txt1').val(),
            txt2: $('#edit_form3 #txt2').val(),
            txt3: $('#edit_form3 #txt3').val(),
            txt4: $('#edit_form3 #txt4').val(),
            txt5: $('#edit_form3 #txt5').val(),
            txt6: $('#edit_form3 #txt6').val(),
            txt7: $('#edit_form3 #txt7').val(),
            txt8: $('#edit_form3 #txt8').val(),
            txt9: $('#edit_form3 #txt9').val(),
            txt10: $('#edit_form3 #txt10').val(),
            txt11: $('#edit_form3 #txt11').val(),
            txt12: $('#edit_form3 #txt12').val(),
            txt13: $('#edit_form3 #txt13').val(),
            txt14: $('#edit_form3 #txt14').val(),
            txt15: $('#edit_form3 #txt15').val(),
            txt16: $('#edit_form3 #txt16').val(),
            txt17: $('#edit_form3 #txt17').val(),
            txt18: $('#edit_form3 #txt18').val(),
            txt19: $('#edit_form3 #txt19').val(),
            txt20: $('#edit_form3 #txt20').val(),
            txt21: $('#edit_form3 #txt21').val(),
            txt22: $('#edit_form3 #txt22').val(),
            txt23: $('#edit_form3 #txt23').val(),
            txt24: $('#edit_form3 #txt24').val(),
        },
        dataType: "json",
        async: false,
        success: function (data) {
            console.log(data);
            $('#edit_form3').modal('hide');
            getreport3();
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
            url: "http://tabien.threetrans.com/TTApi/Tabien/Report/DeleteReport3",
            //contentType: "application/json; charset=utf-8",
            data: { id: id },
            dataType: "json",
            async: false,
            success: function (data) {
                console.log(data);
                getreport3();
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

    window.open('http://tabien.threetrans.com/TTApi/Report/ExportWorkSheet?id=' + id + '&name_report=Report3', '_blank');
}

function show_popup_view(e, title, options, id) {
    console.log(options.row.data);
    console.log(id);
    var data_arr = [];
    for (var n in options.row.data) {
        data_arr.push([n, options.row.data[n]]);
    }
    $("#view_form3 input[id^='txt']").prop("readonly", true);
    for (i = 1; i <= 24; i++) {
        if (i == 14) {
            $('#view_form3 input:radio[id=txt14]').filter('[value=' + data_arr[i][1] + ']').attr('checked', true);
        } else {
            $('#view_form3 #txt' + i).val(data_arr[i][1]);
        }
    }
    $('#view_form3').modal('show');
}

function show_popup_edit(e, title, options, id) {
    var data_arr = [];
    for (var n in options.row.data) {
        data_arr.push([n, options.row.data[n]]);
    }
    for (i = 0; i <= 24; i++) {
        if (i == 14) {
            $('#edit_form3 input:radio[id=txt14]').filter('[value=' + data_arr[i][1] + ']').attr('checked', true);
        } else {
            $('#edit_form3 #txt' + i).val(data_arr[i][1]);
        }
    }
    $('#edit_form3').modal('show');
}