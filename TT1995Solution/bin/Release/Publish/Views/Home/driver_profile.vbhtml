@Code
    ViewData("Title") = "โปรไฟล์ พขร."
End Code
<style>
    #gridContainer {
        width: 100%;
    }

    .dx-datagrid .dx-link {
        text-decoration: none;
        cursor: pointer;
    }
</style>
<div class="header">โปรไฟล์ พขร.</div>
<div class="container-fluid">
    <div class="wrapper-data">
        <div class="mt-3 mb-3" id="gridContainer"></div>
    </div>

    <!-- Driver Profile -->
    <div class="modal fade" id="viewDP" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalScrollableTitle">โปรไฟล์ พขร</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>ชื่อ</label>
                                <input type="text" class="form-control" id="txt1" readonly />
                            </div>

                        </div>
                        <div class="col-md-6">
                            <img src="" class="img-fluid" id="DP-img" />
                        </div>
                    </div>
                </div>
                <div class="modal-footer" style="justify-content: center;">
                    <button type="button" class="btn btn-danger" data-dismiss="modal">ปิด</button>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="editDP" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalScrollableTitle">แก้ไขโปรไฟล์ พขร</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <input type="hidden" id="driver_id" />
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>ชื่อ <span class="input-required">*</span></label>
                                <input type="text" class="form-control" id="txt1" />
                            </div>
                        </div>
                    </div>

                    <div class="row">
                    </div>
                    <div class="form-group">
                        <label>อัปโหลดไฟล์</label>
                        <div id="uploadDP_Edit"></div>
                    </div>
                </div>
                <div class="modal-footer" style="justify-content: center;">
                    <button type="button" id="btSaveEditDP" class="btn btn-success">บันทึก</button>
                    <button type="button" class="btn btn-danger" data-dismiss="modal">ปิด</button>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="insertDP" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalScrollableTitle">เพิ่มโปรไฟล์ พขร</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <input type="hidden" id="trans_id" />
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>ชื่อ <span class="input-required">*</span></label>
                                <input type="text" class="form-control" id="txt1" />
                            </div>
                        </div>
                    </div>

                    <div class="row">
                    </div>
                    <div class="form-group">
                        <label>อัปโหลดไฟล์</label>
                        <div id="uploadDP_Insert"></div>
                    </div>
                </div>
                <div class="modal-footer" style="justify-content: center;">
                    <button type="button" id="btnSaveInsertDP" class="btn btn-success">บันทึก</button>
                    <button type="button" class="btn btn-danger" data-dismiss="modal">ปิด</button>
                </div>
            </div>
        </div>
    </div>

</div>

    <div id="popup_history"></div>
    <script>
        //Control Read Only and Read Write
        var boolStatus = false;
        var permission_status = '@Session("37")'; //1 = Read Only, 2 = Read and Write
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
    <script src="~/scripts/Home/driver_profile.js"></script>

