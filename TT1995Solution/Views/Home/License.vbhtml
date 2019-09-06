@Code
    ViewData("Title") = "เล่มทะเบียน"
End Code
<style>
    .custom-file {
        overflow-y: auto;
        min-height: 80px;
    }

    .dx-toolbar {
        background-color: #fff;
    }
    /*
    #upload_pic .dx-fileuploader-wrapper {
        padding: 0;
        border-bottom: 1px solid #000000;
    }
    #upload_pic .dx-fileuploader-input-wrapper:before {
        padding-top: 0;
    }
    #upload_pic .dx-fileuploader-input-wrapper:after {
        padding-bottom: 0;
    }
    #upload_pic .dx-fileuploader-show-file-list .dx-fileuploader-files-container {
        padding-top: 0;
    }
    #upload_pic .dx-fileuploader-files-container {
        padding-top: 0;
    }
    #upload_pic .dx-fileuploader-file-name {
        font-size: 12px;
    }
    #upload_pic .dx-fileuploader-input-label {
        font-size: 13px;
    }

    */
    .tab-pane {
        background-color: #fff;
        padding: 10px;
        box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
    }

    .selected-item {
        height: 45.8px;
        padding: 7px 0 4px;
        border-bottom: 1px solid;
    }

    .dx-fileuploader-file-container {
        border-bottom: 1px solid;
    }
    #viewPic .dx-gallery-item {
        width: 400px;
        max-width: 100%;
    }
    #viewPic .dx-gallery-item img {
        max-width: 100%;
    }

    #viewPic .dx-gallery-item .item-position {
        font-size: 20px;
        font-weight: bold;
        letter-spacing: 1px;
    }
    #viewPic .item-address{
        margin-top: 20px;
    }
</style>
<div class="header">เล่มทะเบียน</div>
<div class="container-fluid">

    <ul class="nav nav-tabs mt-4" id="myTab" role="tablist">
        <li class="nav-item">
            <a class="nav-link active" id="license_tab" data-toggle="tab" href="#license" role="tab" aria-controls="license" aria-selected="true">เล่มทะเบียน</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" id="license_not_complete_tab" data-toggle="tab" href="#license_not_complete" role="tab" aria-controls="license_not_complete" aria-selected="false">รถที่อัปโหลดรูปไม่ครบ <span id="total_product_customer" class="badge badge-danger" style="font-size: 12px; letter-spacing: 1px;">0</span></a>
        </li>
        <!--<li class="nav-item">
            <a class="nav-link" id="product_customer_tab" data-toggle="tab" href="#product_customer" role="tab" aria-controls="product_customer" aria-selected="false">รถที่ยังไม่ได้อัปโหลดรูป <span id="total_product_customer" class="badge badge-danger">0</span></a>
        </li>-->
    </ul>

    <div class="tab-content mt-4" id="myTabContent">
        <div class="tab-pane fade show active" id="license" role="tabpanel" aria-labelledby="license_tab">
            <div>
                <div class="mt-3 mb-3" id="gridContainer"></div>
                <div id="context-menu"></div>
            </div>
            <div class="widget-container">
                <div id="popup"></div>
            </div>
        </div>
        <div class="tab-pane fade" id="license_not_complete" role="tabpanel" aria-labelledby="license_not_complete_tab">
            <div class="mt-3 mb-3" id="gridNotComplete"></div>
        </div>
    </div>


    @*<div id="popup"></div>*@
    @*<div class="modal" id="mdShowPic">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-body">
                        <div id="gallery"></div>
                    </div>

                </div>
            </div>
        </div>*@

    <!--New File-->
    <!--<div class="modal" id="upload_pic">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">เพิ่มไฟล์</h5>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-6 mb-2">
                            <h6>ด้านหน้า</h6>
                            <div class="custom-file"></div>
                        </div>
                        <div class="col-md-6 mb-2">
                            <h6>ด้านหลัง</h6>
                            <div class="custom-file"></div>
                        </div>
                        <div class="col-md-6 mb-2">
                            <h6>ด้านข้างซ้าย</h6>
                            <div class="custom-file"></div>
                        </div>
                        <div class="col-md-6 mb-2">
                            <h6>ด้านข้างขวา</h6>
                            <div class="custom-file"></div>
                        </div>
                        <div class="col-md-6 mb-2">
                            <h6>ด้านหน้าข้างขวา</h6>
                            <div class="custom-file"></div>
                        </div>
                        <div class="col-md-6 mb-2">
                            <h6>ด้านหน้าข้างซ้าย</h6>
                            <div class="custom-file"></div>
                        </div>
                        <div class="col-md-6 mb-2">
                            <h6>ด้านหลังข้างขวา</h6>
                            <div class="custom-file"></div>
                        </div>
                        <div class="col-md-6 mb-2">
                            <h6>ด้านหลังข้างซ้าย</h6>
                            <div class="custom-file"></div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer" style="justify-content: center;">
                    <button type="button" id="btnSave" class="btn btn-success btn-sm">Save</button>
                    <button type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button>
                </div>

            </div>
        </div>
    </div>-->

    <div class="modal" id="upload_pic">
        <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">เพิ่มรูปรถ</h5>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-6">
                            <input type="hidden" id="license_id" />
                            <div id="file-uploader-images"></div>
                        </div>
                        <div class="col-md-6">
                            <div class="content" id="selected-files" style="margin-top: 134px;">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer" style="justify-content: center;">
                    <button type="button" id="btnUploadPic" class="btn btn-success btn-sm">Save</button>
                    <button type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button>
                </div>

            </div>
        </div>
    </div>
    <div class="modal" id="mdNewFile">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <label>เพิ่มไฟล์</label>
                </div>
                <div class="modal-body">
                    <div class="row" id="picCar">
                        <div class="col-5 ml-2">
                            <div class="form-group">
                                <select class="form-control" id="positionSelect">
                                    <option value="1">ด้านหน้า</option>
                                    <option value="2">ด้านหลัง</option>
                                    <option value="3">ด้านข้างซ้าย</option>
                                    <option value="4">ด้านข้างขวา</option>
                                    <option value="5">ด้านหน้าข้างขวา</option>
                                    <option value="6">ด้านหน้าข้างซ้าย</option>
                                    <option value="7">ด้านท้ายข้างขวา</option>
                                    <option value="8">ด้านท้ายข้างซ้าย</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-5">
                            <input class="mr-2 mt-2" id="setPosition" type="checkbox" value="">ตั้งค่าตำแหน่งรูปรถ
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm">
                            <div class="custom-file"></div>
                        </div>
                    </div>
                </div>


                <div class="modal-footer">
                    <button type="button" id="btnSave" class="btn btn-success btn-sm">Save</button>
                    <button type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button>
                </div>

            </div>
        </div>
    </div>
    <!--New Folder-->
    <div class="modal" id="mdNewFolder">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <!-- Modal body -->
                <div class="modal-header">
                    <label>เพิ่มโฟล์เดอร์</label>
                </div>
                <div class="modal-body">
                    <div class="row mb-2">
                        <div class="col-sm">
                            <input type="text" class="form-control" id="lbNewFolder" placeholder="folder name" value="">
                        </div>
                    </div>
                </div>
                <!-- Modal footer -->
                <div class="modal-footer">
                    <button type="button" id="btnNewFolder" class="btn btn-success btn-sm">New Folder</button>
                    <button type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>

    <!--Rename-->
    <div class="modal" id="mdRename">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <!-- Modal body -->
                <div class="modal-header">
                    <label hidden id="idRename"></label>
                </div>
                <div class="modal-body">
                    <div class="row mb-2">
                        <div class="col-sm">
                            <div class="col-sm">Name</div>
                        </div>
                    </div>
                    <div class="row mb-2">
                        <div class="col-sm">
                            <input type="text" class="form-control" id="lbRename" placeholder="document name" value="">
                        </div>
                    </div>
                </div>

                <!-- Modal footer -->
                <div class="modal-footer">
                    <button type="button" id="btnRename" class="btn btn-success">Rename</button>
                    <button type="button" id="btnClose" class="btn btn-danger" data-dismiss="modal">Close</button>
                </div>

            </div>
        </div>
    </div>
</div>
<div id="popup_history"></div>

<div class="modal fade" id="viewPic" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalScrollableTitle">รูปภาพรถ</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-md-12">
                        <!--<div style="font-size: 18px;">รูปภาพ</div>-->
                        <div id='gallery_car'>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer" style="justify-content: center;">
                <button type="button" class="btn btn-danger" data-dismiss="modal">ปิด</button>
            </div>
        </div>
    </div>
</div>

<script>
            //Control Read Only and Read Write
            var boolStatus = false;
            var permission_status = '@Session("1")'; //1 = Read Only, 2 = Read and Write
            if (permission_status == 1) {
                boolStatus = false;
                $("#context-menu").hide();
            } else {
                boolStatus = true;
                $("#context-menu").show();
            }
            console.log(!boolStatus);
            //End Control

            $(".d1").next().toggle();
            $(".d1").click(function (e) {
                e.stopPropagation();
                $(".d1").next().toggle();
            });
</script>

<script src="~/scripts/Home/license.js"></script>

