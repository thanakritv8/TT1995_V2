@Code
    ViewData("Title") = "ตั้งค่าผู้ใช้"
End Code
<style>
    #gridContainer {
        width: 100%;
    }
</style>
<div class="header">ตั้งค่าผู้ใช้</div>
<div class="container-fluid">
    <div class="mt-3 mb-3" id="gridContainer"></div>
</div>
<div id="popup_history"></div>
<script>
    $(".d10").next().toggle();
    $(".d10").click(function (e) {
        e.stopPropagation();
        $(".d10").next().toggle();
    });
</script>
<script src="~/scripts/Account/account.js"></script>

