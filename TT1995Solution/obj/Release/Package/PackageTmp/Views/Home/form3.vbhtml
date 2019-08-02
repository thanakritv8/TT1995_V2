@Code
    ViewData("Title") = "form3"
End Code

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link href="https://fonts.googleapis.com/css?family=Sarabun&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Sarabun', sans-serif;
            font-size: 16px;
        }
    </style>
</head>

<body>
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
        <hr width="700" style="margin-top: 20px;">
        <button type="submit" style="margin: 30px auto;">บันทึก</button>
    </div>
</body>

</html>

