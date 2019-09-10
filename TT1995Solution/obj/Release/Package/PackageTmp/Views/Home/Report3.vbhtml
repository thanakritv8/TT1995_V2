@Code
    ViewData("Title") = "Report3"
End Code

<div class="header">เอกสาร บันทึกถ้อยคำ</div>
<div class="container-fluid">
    <div class="wrapper-data">
        <div class="row">
            <div class="col-12">
                <div id="newRowButton" style="float: right"></div>
            </div>
        </div>
        <div>
            <div class="mt-3 mb-3" id="gridContainer"></div>
            <div id="context-menu"></div>
        </div>
        <div class="widget-container">
            <div id="popup"></div>
        </div>
    </div>
</div>
<style>
    .dx-datagrid .dx-link {
        color: #343a40;
    }

    #view_form3 input {
        border: none;
        border-bottom: 1px solid #808080;
    }
</style>

<div class="modal fade" id="create_form3" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-scrollable" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalScrollableTitle">สร้างเอกสาร</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div align="center">
                    <table border="0" cellpadding="0" cellspacing="0" width="700">
                        <tr>
                            <td colspan="2" align="center">
                                <p style="font-size: 18px;">บันทึกถ้อยคำ<br>กรณีแจ้งเอกสาร หรือ แผ่นป้ายทะเบียนสูญหาย</p>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" align="right" style="padding-top: 17px;">
                                ที่ทำการ สำนักงานขนส่งจังหวัดระยอง
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" align="right" style="padding-top: 5px;">
                                วันที่ <input type="number" min="1" max="31" id="txt1" style="width: 50px" ;> เดือน <input type="text" id="txt2" style="width: 100px;"> พ.ศ. <input type="number" id="txt3" style="width: 50px" ;>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" style="padding-top: 25px;">
                                เรียน นายทะเบียนจังหวัดระยอง
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" style="padding-top: 25px;">
                                ข้าพเจ้า <input type="text" id="txt4" style="width: 367px;"> อายุ <input type="text" id="txt5" style="width: 60px;"> ปี สัญชาติ <input type="text" id="txt6" style="width: 100px;">
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" style="padding-top: 5px;">
                                เชื้อชาติ <input type="text" id="txt7" style="width: 110px;"> อยู่บ้านเลขที่ <input type="text" id="txt8" style="width: 115px;"> ซอย <input type="text" id="txt9" style="width: 120px;"> ถนน <input type="text" id="txt10" style="width: 120px;">
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" style="padding-top: 5px;">
                                ตำบล <input type="text" id="txt11" style="width: 185px;"> อำเภอ <input type="text" id="txt12" style="width: 180px;"> จังหวัด <input type="text" id="txt13" style="width: 180px;">
                            </td>
                        </tr>
                        <tr>
                            <td align="center" style="padding-top: 25px;">มีความประสงค์แจ้ง</td>
                            <td style="padding-top: 25px;">
                                <input type="radio" id="txt14" name="txt14" value="1"> แผ่นป้ายทะเบียนรถ<br>
                                <input type="radio" id="txt14" name="txt14" value="2"> หนังสือแสดงการจดทะเบียน<br>
                                <input type="radio" id="txt14" name="txt14" value="3"> เครื่องหมายแสดงการเสียภาษี
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" style="padding-top: 25px;">
                                ทะเบียน <input type="text" id="txt15" style="width: 90px;"> จำนวน <input type="number" id="txt16" style="width: 50px;"> แผ่น สูญหายโดยมีข้อเท็จจริงว่า <input type="text" id="txt17" style="width: 228px;">
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" style="padding-top: 5px;">
                                เหตุเกิดที่ <input type="text" id="txt18" style="width: 280px;"> เมื่อวันที่ <input type="number" min="1" max="31" id="txt19" style="width: 50px" ;> เดือน <input type="text" id="txt20" style="width: 100px;"> พ.ศ.
                                <input type="number" id="txt21" style="width: 50px" ;>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" style="padding-top: 5px;">
                                เพื่อขอให้ดำเนินการ <input type="text" id="txt22" style="width: 562px;">
                            </td>
                        </tr>
                        <tr>
                            <td align="justify" colspan="2" style="padding-top: 5px;">
                                <p>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ข้าพเจ้าทราบว่า การแจ้งความอันเป็นเท็จต่อเจ้าพนักงาน เป็นความผิดตามประมวลกฎหมายอาญามาตรา 137 มีระวางโทษจำคุกไม่เกินหกเดือน และปรับไม่เกินหนึ่งพันบาทหรือทั้งจำทั้งปรับ
                                    และได้อ่านบันทึกแล้วเห็นว่าถูกต้องตามประสงค์ ขอรับรองว่าข้อความที่แจ้งดังกล่าวข้างต้นเป็นจริงทุกประการ จึงได้ลงรายมือชื่อไว้ต่อเจ้าหน้าที่
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" style="padding-top: 25px; padding-left: 340px;">
                                ลงชื่อ <input type="text" id="txt23" style="width: 150px;"> ผู้ให้ถ้อยคำ
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" style="padding-top: 25px; padding-left: 340px;">
                                ลงชื่อ <input type="text" id="txt24" style="width: 150px;"> ผู้บันทึก
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="modal-footer" style="justify-content: center;">
                <button type="button" id="btnSaveForm3" class="btn btn-success">Save</button>
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="view_form3" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-scrollable" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalScrollableTitle">บันทึกถ้อยคำ กรณีแจ้งเอกสาร หรือ แผ่นป้ายทะเบียนสูญหาย</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div align="center">
                    <table border="0" cellpadding="0" cellspacing="0" width="700">
                        <tr>
                            <td colspan="2" align="center">
                                <p style="font-size: 18px;">บันทึกถ้อยคำ<br>กรณีแจ้งเอกสาร หรือ แผ่นป้ายทะเบียนสูญหาย</p>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" align="right" style="padding-top: 17px;">
                                ที่ทำการ สำนักงานขนส่งจังหวัดระยอง
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" align="right" style="padding-top: 5px;">
                                วันที่ <input type="number" min="1" max="31" id="txt1" style="width: 50px" ;> เดือน <input type="text" id="txt2" style="width: 100px;"> พ.ศ. <input type="number" id="txt3" style="width: 50px" ;>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" style="padding-top: 25px;">
                                เรียน นายทะเบียนจังหวัดระยอง
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" style="padding-top: 25px;">
                                ข้าพเจ้า <input type="text" id="txt4" style="width: 367px;"> อายุ <input type="text" id="txt5" style="width: 60px;"> ปี สัญชาติ <input type="text" id="txt6" style="width: 100px;">
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" style="padding-top: 5px;">
                                เชื้อชาติ <input type="text" id="txt7" style="width: 110px;"> อยู่บ้านเลขที่ <input type="text" id="txt8" style="width: 115px;"> ซอย <input type="text" id="txt9" style="width: 120px;"> ถนน <input type="text" id="txt10" style="width: 120px;">
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" style="padding-top: 5px;">
                                ตำบล <input type="text" id="txt11" style="width: 185px;"> อำเภอ <input type="text" id="txt12" style="width: 180px;"> จังหวัด <input type="text" id="txt13" style="width: 180px;">
                            </td>
                        </tr>
                        <tr>
                            <td align="center" style="padding-top: 25px;">มีความประสงค์แจ้ง</td>
                            <td style="padding-top: 25px;">
                                <input type="radio" id="txt14" name="txt14" value="1"> แผ่นป้ายทะเบียนรถ<br>
                                <input type="radio" id="txt14" name="txt14" value="2"> หนังสือแสดงการจดทะเบียน<br>
                                <input type="radio" id="txt14" name="txt14" value="3"> เครื่องหมายแสดงการเสียภาษี
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" style="padding-top: 25px;">
                                ทะเบียน <input type="text" id="txt15" style="width: 90px;"> จำนวน <input type="number" id="txt16" style="width: 50px;"> แผ่น สูญหายโดยมีข้อเท็จจริงว่า <input type="text" id="txt17" style="width: 228px;">
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" style="padding-top: 5px;">
                                เหตุเกิดที่ <input type="text" id="txt18" style="width: 280px;"> เมื่อวันที่ <input type="number" min="1" max="31" id="txt19" style="width: 50px" ;> เดือน <input type="text" id="txt20" style="width: 100px;"> พ.ศ.
                                <input type="number" id="txt21" style="width: 50px" ;>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" style="padding-top: 5px;">
                                เพื่อขอให้ดำเนินการ <input type="text" id="txt22" style="width: 562px;">
                            </td>
                        </tr>
                        <tr>
                            <td align="justify" colspan="2" style="padding-top: 5px;">
                                <p>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ข้าพเจ้าทราบว่า การแจ้งความอันเป็นเท็จต่อเจ้าพนักงาน เป็นความผิดตามประมวลกฎหมายอาญามาตรา 137 มีระวางโทษจำคุกไม่เกินหกเดือน และปรับไม่เกินหนึ่งพันบาทหรือทั้งจำทั้งปรับ
                                    และได้อ่านบันทึกแล้วเห็นว่าถูกต้องตามประสงค์ ขอรับรองว่าข้อความที่แจ้งดังกล่าวข้างต้นเป็นจริงทุกประการ จึงได้ลงรายมือชื่อไว้ต่อเจ้าหน้าที่
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" style="padding-top: 25px; padding-left: 340px;">
                                ลงชื่อ <input type="text" id="txt23" style="width: 150px;"> ผู้ให้ถ้อยคำ
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" style="padding-top: 25px; padding-left: 340px;">
                                ลงชื่อ <input type="text" id="txt24" style="width: 150px;"> ผู้บันทึก
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="modal-footer" style="justify-content: center;">
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="edit_form3" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-scrollable" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalScrollableTitle">แก้ไขเอกสาร</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div align="center">
                    <table border="0" cellpadding="0" cellspacing="0" width="700">
                        <tr>
                            <td colspan="2" align="center">
                                <p style="font-size: 18px;">บันทึกถ้อยคำ<br>กรณีแจ้งเอกสาร หรือ แผ่นป้ายทะเบียนสูญหาย</p>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" align="right" style="padding-top: 17px;">
                                ที่ทำการ สำนักงานขนส่งจังหวัดระยอง
                                <input type="hidden" id="txt0" />
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" align="right" style="padding-top: 5px;">
                                วันที่ <input type="number" min="1" max="31" id="txt1" style="width: 50px" ;> เดือน <input type="text" id="txt2" style="width: 100px;"> พ.ศ. <input type="number" id="txt3" style="width: 50px" ;>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" style="padding-top: 25px;">
                                เรียน นายทะเบียนจังหวัดระยอง
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" style="padding-top: 25px;">
                                ข้าพเจ้า <input type="text" id="txt4" style="width: 367px;"> อายุ <input type="text" id="txt5" style="width: 60px;"> ปี สัญชาติ <input type="text" id="txt6" style="width: 100px;">
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" style="padding-top: 5px;">
                                เชื้อชาติ <input type="text" id="txt7" style="width: 110px;"> อยู่บ้านเลขที่ <input type="text" id="txt8" style="width: 115px;"> ซอย <input type="text" id="txt9" style="width: 120px;"> ถนน <input type="text" id="txt10" style="width: 120px;">
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" style="padding-top: 5px;">
                                ตำบล <input type="text" id="txt11" style="width: 185px;"> อำเภอ <input type="text" id="txt12" style="width: 180px;"> จังหวัด <input type="text" id="txt13" style="width: 180px;">
                            </td>
                        </tr>
                        <tr>
                            <td align="center" style="padding-top: 25px;">มีความประสงค์แจ้ง</td>
                            <td style="padding-top: 25px;">
                                <input type="radio" id="txt14" name="txt14" value="1"> แผ่นป้ายทะเบียนรถ<br>
                                <input type="radio" id="txt14" name="txt14" value="2"> หนังสือแสดงการจดทะเบียน<br>
                                <input type="radio" id="txt14" name="txt14" value="3"> เครื่องหมายแสดงการเสียภาษี
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" style="padding-top: 25px;">
                                ทะเบียน <input type="text" id="txt15" style="width: 90px;"> จำนวน <input type="number" id="txt16" style="width: 50px;"> แผ่น สูญหายโดยมีข้อเท็จจริงว่า <input type="text" id="txt17" style="width: 228px;">
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" style="padding-top: 5px;">
                                เหตุเกิดที่ <input type="text" id="txt18" style="width: 280px;"> เมื่อวันที่ <input type="number" min="1" max="31" id="txt19" style="width: 50px" ;> เดือน <input type="text" id="txt20" style="width: 100px;"> พ.ศ.
                                <input type="number" id="txt21" style="width: 50px" ;>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" style="padding-top: 5px;">
                                เพื่อขอให้ดำเนินการ <input type="text" id="txt22" style="width: 562px;">
                            </td>
                        </tr>
                        <tr>
                            <td align="justify" colspan="2" style="padding-top: 5px;">
                                <p>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ข้าพเจ้าทราบว่า การแจ้งความอันเป็นเท็จต่อเจ้าพนักงาน เป็นความผิดตามประมวลกฎหมายอาญามาตรา 137 มีระวางโทษจำคุกไม่เกินหกเดือน และปรับไม่เกินหนึ่งพันบาทหรือทั้งจำทั้งปรับ
                                    และได้อ่านบันทึกแล้วเห็นว่าถูกต้องตามประสงค์ ขอรับรองว่าข้อความที่แจ้งดังกล่าวข้างต้นเป็นจริงทุกประการ จึงได้ลงรายมือชื่อไว้ต่อเจ้าหน้าที่
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" style="padding-top: 25px; padding-left: 340px;">
                                ลงชื่อ <input type="text" id="txt23" style="width: 150px;"> ผู้ให้ถ้อยคำ
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2" style="padding-top: 25px; padding-left: 340px;">
                                ลงชื่อ <input type="text" id="txt24" style="width: 150px;"> ผู้บันทึก
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="modal-footer" style="justify-content: center;">
                <button type="button" class="btn btn-success" id="btnUpdateForm3">Save</button>
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>
<script src="~/scripts/Home/report3.js"></script>
<script>

    $(".d7").next().toggle();
    $(".d7").click(function (e) {
        e.stopPropagation();
        $(".d7").next().toggle();
    });
</script>