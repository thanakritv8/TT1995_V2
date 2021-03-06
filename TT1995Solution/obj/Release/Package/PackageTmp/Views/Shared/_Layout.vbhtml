﻿<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@ViewBag.Title - Three Trans (1995)</title>


    <link href="~/Content/css/sb-admin.css" rel="stylesheet" />
    <link href="~/Content/vendor/bootstrap/css/bootstrap.css" rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
    <link href="~/Content/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
    <link href="~/Content/css/jquery.steps.css" rel="stylesheet" />
    <link href="~/Content/css/bootstrap-datepicker.min.css" rel="stylesheet" />

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="~/Content/js/jquery_steps/lib/jquery.cookie-1.3.1.js"></script>
    <script src="~/Content/js/jquery_steps/build/jquery.steps.js"></script>
    <script>window.jQuery || document.write(decodeURIComponent('%3Cscript src="js/jquery.min.js"%3E%3C/script%3E'))</script>
    <link rel="stylesheet" type="text/css" href="~/Content/dx/dx.common.css" />
    <link rel="dx-theme" data-theme="generic.light" href="~/Content/dx/dx.light.css" />
    <link rel="dx-theme" data-theme="android5.light" href="~/Content/dx/dx.android5.light.css" />
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.2/jszip.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/quill/1.3.6/quill.min.js"></script>
    <script src="~/scripts/dx/dx.all.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.2/jszip.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.9.1/underscore-min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.13.0/moment.min.js"></script>
    <script src="~/Content/js/bootstrap-datepicker.min.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Kanit&display=swap" rel="stylesheet">
    <script src="~/Scripts/sb-admin.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>
    <style>
        * {
            font-family: 'Kanit', sans-serif;
        }
        .bg-custom {
            box-shadow: 0 .15rem 1.75rem 0 rgba(58,59,69,.15)!important;
        }
        #wrapper .nav-link .fa, #wrapper .nav-item .fas {
            color: #fff;
            margin-right: 10px;
            width: 15px;
        }
        .dx-toolbar {
            /*background-color: #f8f9fc;*/
            background-color: #fff;
        }
        .dropdown-item {
            white-space: normal;
        }
        #wrapper #content-wrapper {
            padding-top: 0px;
        }
        .header {
            background-color: #43425D;
            font-size: 24px;
            padding: 12px 15px;
            color: #fff;
            margin-bottom: 20px;
            letter-spacing: 1px;
        }
        .nav-tabs {
            /*border-bottom: 2px solid #00D1B2;*/
            border-bottom: none;
        }
        .nav-tabs .nav-link {
            border-radius: 0;
            background-color: #00C43E;
            color: #fff;
        }
        .nav-tabs .nav-item {
            margin-right: 4px;
            margin-bottom: -2px;
            font-size: 14px;
            margin-top: 5px;
        }
        .nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {
            border: 1px solid #00C43E;
        }
        .nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link {
            /*border-top: 3px solid;
            border-left: 3px solid;
            border-right: 3px solid;
            border-color: #00D1B2 #00D1B2 #fff;*/
            border: 3px solid #00C43E;
        }
        .nav-link {
            padding: 0.5rem 0.7rem;
        }
        .dx-datagrid-headers .dx-header-row {
            background-color: #fafafa;
        }
        .wrapper-data {
            padding: 10px;
            background-color: #fff;
            box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
            margin-bottom: 20px;
        }
    </style>
</head>
<body style="font-family: 'Kanit', sans-serif;">
    <nav class="navbar navbar-expand navbar-light bg-custom static-top">
        
        @*<a Class="navbar-brand mr-1" href="~/Home/Index">Three Trans (1995)</a>*@
        <a href="~/Home/Index"><img src="~/Img/tt.png" class="rounded-circle" height="50" width="50" /></a>
        <H4 class="navbar-nav mr-auto ml-2">Tabien System</H4>
        @*<a class="navbar-brand mr-1 text-muted" href="~/Home/Index">Document Management System</a>*@
        @If Session("StatusLogin") = "1" Then
            @<ul Class="navbar-nav ml">
                <li Class="nav-item">
                    <a Class="nav-link" href="#">
                        @Session("FirstName").ToString()
                        <span Class="sr-only">(Of current)</span>
                    </a>
                </li>
                <li Class="nav-item dropdown no-arrow">
                    <a Class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i Class="fas fa-user-circle fa-fw"></i>
                    </a>
                    <div Class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                        <a Class="dropdown-item" href="../Account/Settings">Settings</a>
                        <div Class="dropdown-divider"></div>
                        <a Class="dropdown-item" href="../Account/Logout" data-toggle="modal" data-target="#logoutModal">Logout</a>
                    </div>
                </li>
            </ul>
        End If
    </nav>
    <div id="wrapper">
        @If Session("StatusLogin") = "1" Then
        @<ul Class="sidebar navbar-nav" style="background-color: #00c43e; padding-top: 5px;">
    @*0,79,162*@ @*34,139,34*@
    <li class="nav-item">
        <a class="nav-link" href="../Home/dashboard">
            <i class="fas fa-tachometer-alt"></i>
            <span Class="text-light"> แดชบอร์ด</span>
        </a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="../Home/Index">
            <i class="fas fa-home"></i>
            <span Class="text-light"> หน้าแรก</span>
        </a>
    </li>

    @If Session("1") <> 0 Or Session("3") <> 0 Or Session("4") <> 0 Or Session("36") <> 0 Then@*Or Session("6") <> 0*@
    @<li Class="nav-item dropdown">
        <a Class="nav-link dropdown-toggle d1" href="#" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i Class="fas fa-fw fa-folder"></i>
            <span Class="text-light"> ทะเบียน</span>
        </a>
        <div Class="dropdown-menu" aria-labelledby="pagesDropdown">
            @If Session("1") <> 0 Then@<a Then Class="dropdown-item" Href="../Home/License">เล่มทะเบียน</a>End If
            @If Session("3") <> 0 Then@<a Then Class="dropdown-item" href="../Home/Tax">ภาษี</a>End If
            @If Session("4") <> 0 Then@<a Class="dropdown-item" href="../Home/OfficerRecords">บันทึกเจ้าหน้าที่</a>End If
            @If Session("36") <> 0 Then@<a Class="dropdown-item" href="../Home/license_car_factory">บอข. รถเข้าโรงงาน</a>End If
            @*@If Session("6") <> 0 Then@<a Class="dropdown-item" href="../Home/Driver">พขร</a>End If*@
        </div>
    </li>
End if

    @If Session("6") <> 0 Or Session("30") <> 0 Or Session("31") <> 0 Or Session("32") <> 0 Or Session("33") <> 0 Or Session("34") <> 0 Or Session("35") <> 0 Then
        @<li Class="nav-item dropdown">
            <a Class="nav-link dropdown-toggle toggle-driver" href="#" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i Class="fas fa-fw fa-folder"></i>
                <span Class="text-light"> พขร</span>
            </a>
            <div Class="dropdown-menu" aria-labelledby="pagesDropdown">
                @If Session("37") <> 0 Then@<a Class="dropdown-item" href="../Home/driver_profile">โปรไฟล์ พขร</a>End If
                @If Session("6") <> 0 Then@<a Class="dropdown-item" href="../Home/Driver">พขร</a>End If
                @If Session("31") <> 0 Then@<a Then Class="dropdown-item" href="../Home/driving_license">บอข</a>End If
                @If Session("30") <> 0 Then@<a Then Class="dropdown-item" href="../Home/LicenseFactory">บอข. เข้าโรงงาน</a>End If
                @If Session("32") <> 0 Then@<a Then Class="dropdown-item" href="../Home/passport">บอข. พาสสปอร์ต</a>End If
                @If Session("33") <> 0 Then@<a Then Class="dropdown-item" href="../Home/driving_license_oil_transportation">บอข. ขนส่งน้ำมัน</a>End If
                @If Session("34") <> 0 Then@<a Then Class="dropdown-item" href="../Home/driving_license_natural_gas_transportation">บอข. ขนส่งก๊าสธรรมชาติ</a>End If
                @If Session("35") <> 0 Then@<a Then Class="dropdown-item" href="../Home/driving_license_dangerous_objects_transportation">บอข. ขนส่งวัตถุอันตราย</a>End If

            </div>
        </li>
    End if
    @If Session("13") <> 0 Or Session("20") <> 0 Then
        @<li Class="nav-item dropdown">
            <a Class="nav-link dropdown-toggle d2" href="#" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i Class="fas fa-fw fa-folder"></i>
                <span Class="text-light"> ประกอบการ</span>
            </a>
            <div Class="dropdown-menu" aria-labelledby="pagesDropdown">
                @If Session("13") <> 0 Then@<a Then Class="dropdown-item" href="../Home/BusinessIn">ภายในประเทศ</a>End If
                @If Session("20") <> 0 Then@<a Then Class="dropdown-item" href="../Home/BusinessOut">ต่างประเทศ</a>End If
            </div>
        </li>
    End IF
    @If Session("22") <> 0 Or Session("23") <> 0 Or Session("28") <> 0 Then@*Or Session("30") <> 0*@
    @<li Class="nav-item dropdown">
        <a Class="nav-link dropdown-toggle d3" href="#" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i Class="fas fa-fw fa-folder"></i>
            <span Class="text-light"> ใบอนุญาต</span>
        </a>
        <div Class="dropdown-menu" aria-labelledby="pagesDropdown">
            @If Session("22") <> 0 Then@<a Then Class="dropdown-item" href="../Home/LicenseCambodia">กัมพูชา</a>End If
            @If Session("23") <> 0 Then@<a Then Class="dropdown-item" href="../Home/LicenseMekongRiver">ลุ่มน้ำโขง</a>End If
            @*@If Session("30") <> 0 Then@<a Then Class="dropdown-item" href="../Home/LicenseFactory">เข้าโรงงาน</a>End If*@
            @If Session("28") <> 0 Then@<a Then Class="dropdown-item" href="../Home/LicenseV8">วัตถุอันตราย(วอ.8)</a>End If
        </div>
    </li>
End IF
    @If Session("17") <> 0 Or Session("15") <> 0 Or Session("16") <> 0 Or Session("18") <> 0 Or Session("10") <> 0 Then
        @<li Class="nav-item dropdown">
            <a Class="nav-link dropdown-toggle d4" href="#" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i Class="fas fa-fw fa-folder"></i>
                <span Class="text-light">ประกัน & GPS</span>
            </a>
            <div Class="dropdown-menu" aria-labelledby="pagesDropdown">
                @If Session("17") <> 0 Then@<a Then Class="dropdown-item" href="../Home/ActInsurance">พ.ร.บ.</a>End If
                @If Session("15") <> 0 Then@<a Then Class="dropdown-item" href="../Home/MainInsurance">ประกันภัยรถยนต์</a>End If
                @If Session("16") <> 0 Then@<a Then Class="dropdown-item" href="../Home/DomProIns">ประกันภัยสินค้าภายในประเทศ+ต่างประเทศ</a>End If
                @If Session("18") <> 0 Then@<a Then Class="dropdown-item" href="../Home/EnvironmentInsurance">ประกันภัยสิ่งแวดล้อม</a>End If
                @If Session("10") <> 0 Then@<a Then Class="dropdown-item" href="../Home/Gps_car">GPS ติดรถ</a>End if
            </div>
        </li>
    End If
    @If Session("8") <> 0 Or Session("7") <> 0 Or Session("5") <> 0 Or Session("29") <> 0 Or Session("2") <> 0 Then
        @<li Class="nav-item dropdown">
            <a Class="nav-link dropdown-toggle d5" href="#" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i Class="fas fa-fw fa-folder"></i>
                <span Class="text-light">บริษัท</span>
            </a>
            <div Class="dropdown-menu" aria-labelledby="pagesDropdown">
                @If Session("8") <> 0 Then@<a Then Class="dropdown-item" href="../Home/ActInsCom">ประกัน พ.ร.บ.</a>End If
                @If Session("7") <> 0 Then@<a Then Class="dropdown-item" href="../Home/MainInsCom">ประกันภัยรถยนต์</a>End If
                @If Session("5") <> 0 Then@<a Then Class="dropdown-item" href="../Home/ProInsCom">ประกันภัยสินค้า</a>End If
                @If Session("29") <> 0 Then@<a Then Class="dropdown-item" href="../Home/EnvInsCom">ประกันภัยสิ่งแวดล้อม</a>End If
                @If Session("2") <> 0 Then@<a Then Class="dropdown-item" href="../Home/GpsCompany">GPS</a>End if
            </div>
        </li>
    End if

    @If Session("9") <> 0 Or Session("11") <> 0 Or Session("12") <> 0 Or Session("26") <> 0 Then
        @<li Class="nav-item dropdown">
            <a Class="nav-link dropdown-toggle  d6" href="#" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i Class="fas fa-fw fa-folder"></i>
                <span Class="text-light"> อื่นๆ</span>
            </a>
            <div Class="dropdown-menu" aria-labelledby="pagesDropdown">
                @If Session("9") <> 0 Then@<a Then Class="dropdown-item" href="../Home/Expressway">ทางด่วน</a>End If
                @If Session("12") <> 0 Then@<a Then Class="dropdown-item" href="../Home/Trackingwork">ติดตามงาน</a>End If
                @If Session("11") <> 0 Then@<a Then Class="dropdown-item" href="../Home/Installment">การผ่อนชำระ</a>End If
                @If Session("26") <> 0 Then@<a Then Class="dropdown-item" href="../Home/Accident">บันทึกอุบัติเหตุ</a>End If
            </div>
        </li>

    End If
    @If True Then
        @<li Class="nav-item dropdown">
            <a Class="nav-link dropdown-toggle  d7" href="#" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-file-alt"></i>
                <span Class="text-light"> เอกสาร</span>
            </a>
            <div Class="dropdown-menu" aria-labelledby="pagesDropdown">
                @If True Then@<a Then Class="dropdown-item" href="../Home/Report1">แบบคำขออื่นๆ</a>End If
                @If True Then@<a Then Class="dropdown-item" href="../Home/Report2">หนังสือมอบอำนาจ</a>End If
                @If True Then@<a Then Class="dropdown-item" href="../Home/Report3">บันทึกถ้อยคำ</a>End If
            </div>
        </li>

    End If
    @If Session("GroupId") = "1" Or Session("GroupId") = "3" Then
        @<li Class="nav-item dropdown">
            <a Class="nav-link dropdown-toggle d10" href="#" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-user-cog"></i>
                <span Class="text-light"> จัดการบัญชี</span>
            </a>
            <div Class="dropdown-menu" aria-labelledby="pagesDropdown">
                <a Then Class="dropdown-item" href="../Account/Group">Group</a>
                <a Then Class="dropdown-item" href="../Account/Account">Account</a>
                <a Then Class="dropdown-item" href="../Account/Permission">Permission</a>
                <a Then Class="dropdown-item" href="../Manage/Lookup">Manage Lookup</a>
            </div>
        </li>
    End If
</ul>
        End If
        <!-- Sidebar -->

        <div id="content-wrapper" class="mt-0" >         
            @RenderBody()
            <!-- Logout Modal-->
            <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            Select "Logout" below if you are ready to end your current session.
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-secondary btn-sm" type="button" data-dismiss="modal">Cancel</button>
                            <a class="btn btn-danger btn-sm" href="../Account/Logout">Logout</a>
                        </div>
                    </div>
                </div>
            </div>
            @If Session("StatusLogin") = "1" Then
            @<footer Class="sticky-footer">
                <div Class="container my-auto">
                    <div Class="copyright text-center my-auto text-white">
                        <h5>Three Trans (1995) Co.,Ltd.</h5><hr style="margin-top: 0; margin-bottom: 0.5rem; border-top: 1px solid #fff; width: 50%; margin-left: auto; margin-right: auto;" />
                        101/2 ถนนทางหลวงระยองสาย 3191 ต.มาบข่า อ.นิคมพัฒนา จ.ระยอง 21180
                    </div>
                </div>
            </footer>
            End If
        </div>
    </div>
</body>
</html>
