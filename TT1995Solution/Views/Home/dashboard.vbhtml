@Code
    ViewData("Title") = "dashboard"
End Code

<style>
.button-container {
    text-align: center;
    height: 40px;
    position: absolute;
    top: 5px;
    right: 15px;
}
.nav-pills .nav-link.active, .nav-pills .show>.nav-link {
    background-color: #00c43e;
}

</style>
<h1>Dashboard</h1>
<ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
    <li class="nav-item">
        <a class="nav-link active" id="pills-fleet-tabien-tab" data-toggle="pill" href="#pills-fleet-tabien" role="tab" aria-controls="pills-home" aria-selected="true">Fleet Tabien</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" id="pills-license-tab" data-toggle="pill" href="#pills-license" role="tab" aria-controls="pills-profile" aria-selected="false">License</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" id="pills-driver-tab" data-toggle="pill" href="#pills-driver" role="tab" aria-controls="pills-contact" aria-selected="false">Driver</a>
    </li>
    <li class="nav-item ml-auto">
        <div class="form-inline">
            Year : <input class="form-control form-control ml-2" id="year" value="" autocomplete="off" style="width: 80px; text-align: center;">
        </div>
    </li>
</ul>
<div class="tab-content" id="pills-tabContent">
    <div class="tab-pane fade show active" id="pills-fleet-tabien" role="tabpanel" aria-labelledby="pills-fleet-tabien-tab">
        <div class="row">
            <div class="col-lg-6 col-md-12 col-sm-12 mt-3">
                <div id="chart-donut-fleet-category"></div>
                <div class="button-container">
                    <div id="button-fleet-category"></div>
                </div>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 mt-3">
                <div id="chart-bar-fleet-category"></div>
                <div class="button-container">
                    <div id="button-car-category"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="tab-pane fade" id="pills-license" role="tabpanel" aria-labelledby="pills-license-tab">
        <div class="row">
            <div class="col-lg-6 col-md-12 col-sm-12 mt-3">
                <div id="chart-donut-tabien-status"></div>
                <div class="button-container">
                    <div id="button-tabien-status"></div>
                </div>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 mt-3">
                <div id="chart_stacked_bar_tabien"></div>
                <div class="button-container">
                    <div id="button-book-tabien"></div>
                </div>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 mt-3">
                <div id="chart_stacked_bar_other"></div>
                <div class="button-container">
                    <div id="button-book-other"></div>
                </div>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 mt-3">
                <div id="chart_stacked_bar_enter_factory"></div>
                <div class="button-container">
                    <div id="button-book-enter-factory"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="tab-pane fade" id="pills-driver" role="tabpanel" aria-labelledby="pills-driver-tab">
        <div class="row">
            <div class="col-lg-6 col-md-12 col-sm-12 mt-3">
                <div id="chart-donut-driver-fleet"></div>
                <div class="button-container">
                    <div id="button-driver-fleet"></div>
                </div>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 mt-3">
                <div id="chart-bar-dl-category-driver"></div>
                <div class="button-container">
                    <div id="button-dl-category-driver"></div>
                </div>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 mt-3">
                <div id="chart-donut-status-category-driver"></div>
                <div class="button-container">
                    <div id="button-status-category-driver"></div>
                </div>
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 mt-3">
                <div id="chart-stacked-dl-driver"></div>
                <div class="button-container">
                    <div id="button-dl-driver"></div>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="popup_history"></div>
<script src="~/scripts/Home/dashboard.js"></script>