﻿@Code
    ViewData("Title") = "ใบอนุญาติขับขี่ขนส่งน้ำมัน"
End Code

<style>
    #gridContainer {
        width: 100%;
    }
    .custom-file {
        overflow-y: auto;
        height: 100%;
    }
</style>
<div class="header">ใบอนุญาตขับขี่ขนส่งน้ำมัน</div>
<div class="container-fluid">
    <div class="wrapper-data">
        <div class="mt-3 mb-3" id="gridContainer"></div>
    </div>
</div>
<div class="modal" id="mdNewFile">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <!-- Modal body -->
            <div class="modal-header">
                <label>Upload File</label>
            </div>
            <div class="modal-body">
                <div class="row mb-2">
                    <div class="col-sm">
                        <div class="custom-file"></div>
                    </div>
                </div>
            </div>

            <!-- Modal footer -->
            <div class="modal-footer">
                <button type="button" id="btnSave" class="btn btn-success btn-sm">Save</button>
                <button type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button>
            </div>

        </div>
    </div>
</div>
<div id="popup_history"></div>
<script>
    //Control Read Only and Read Write
    var boolStatus = false;
    var permission_status = '@Session("33")'; //1 = Read Only, 2 = Read and Write
    if (permission_status == 1) {
        boolStatus = false;
        //$("#context-menu").hide();
    } else {
        boolStatus = true;
        //$("#context-menu").show();
    }
    console.log(!boolStatus);
    //End Control

    $(".toggle-driver").next().toggle();
    $(".toggle-driver").click(function (e) {
        e.stopPropagation();
        $(".toggle-driver").next().toggle();
    });
</script>
<script src="~/scripts/Home/driving_license_oil_transportation.js"></script>
