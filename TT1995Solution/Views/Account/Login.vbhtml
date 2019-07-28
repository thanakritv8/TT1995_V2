@Code
    ViewData("Title") = "Login"
End Code
<!--<div class="card card-login mx-auto mt-5">
    <div class="card-header">Login</div>
    <div class="card-body">
        <input type="text" id="txtUsername" class="form-control mb-4" placeholder="Username" autofocus="autofocus">
        <input type="password" id="txtPassword" class="form-control mb-4" placeholder="Password">
        <button class="btn btn-success btn-block" id="btnLogin">Login</button>
        <div class="text-danger text-center mt-3" id="lbError"></div>
    </div>
</div>-->
<style>
#login {
	margin-top: 50px;
}
.form-signin {
	max-width: 380px;
	padding: 10px 30px 30px 30px;
	margin: 0 auto;
	background-color: #fff;
	letter-spacing: 1px;
	box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    border-radius: 8px;
}
#login .form-control {
	border-radius: 0;
	text-align: center;
	margin-bottom: 10px;
}
#login .btn {
	border-radius: 0;
}
</style>
<div id="login">
    <div class="form-signin text-center">
        <img src="~/Img/tt.png" width="100" alt="tt1995">
        <p>TABIEN MANAGEMENT SYSTEM</p>
        <hr>
        <input type="text" class="form-control" id="txtUsername" placeholder="USERNAME" name="user" autofocus autocomplete="off">
        <input type="password" class="form-control" id="txtPassword" placeholder="PASSWORD" name="pass">
        <hr>
        <button type="submit" class="btn btn-block btn-success" id="btnLogin">LOGIN</button>
        <div class="text-danger text-center mt-2" id="lbError"></div>
    </div>
</div>
<script src="~/scripts/Account/login.js"></script>

