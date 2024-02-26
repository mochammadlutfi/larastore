<template>
    <header id="page-header">
        <!-- Header Content -->
        <div class="content-header">
            <!-- Left Section -->
            <div class="space-x-1">
                <!-- Toggle Sidebar -->
                <!-- Layout API, functionality initialized in Template._uiApiLayout() -->
                <button type="button" class="btn btn-sm btn-alt-secondary" data-toggle="layout"
                    data-action="sidebar_toggle">
                    <i class="fa fa-fw fa-bars"></i>
                </button>
                <!-- END Toggle Sidebar -->

                <!-- Open Search Section -->
                <!-- Layout API, functionality initialized in Template._uiApiLayout() -->
                <button type="button" class="btn btn-sm btn-alt-secondary" data-toggle="layout"
                    data-action="header_search_on">
                    <i class="fa fa-fw fa-search"></i>
                </button>
                <!-- END Open Search Section -->

                <!-- Color Themes -->
                <div class="dropdown d-inline-block">
                    <button type="button" class="btn btn-sm btn-alt-secondary" id="page-header-themes-dropdown"
                        data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true"
                        aria-expanded="false">
                        <i class="fa fa-fw fa-wrench"></i>
                    </button>
                    <div class="dropdown-menu dropdown-menu-lg p-0" aria-labelledby="page-header-themes-dropdown">
                        <div class="p-3 bg-body-light rounded-top">
                            <h5 class="h6 text-center mb-0">
                                Color Themes
                            </h5>
                        </div>
                        <div class="p-3">
                            <div class="row g-0 text-center">
                                <div class="col-2">
                                    <a class="text-default active" data-toggle="theme" data-theme="default"
                                        href="javascript:void(0)">
                                        <i class="fa fa-2x fa-circle"></i>
                                    </a>
                                </div>
                                <div class="col-2">
                                    <a class="text-elegance" data-toggle="theme"
                                        data-theme="assets/css/themes/elegance.min.css" href="javascript:void(0)">
                                        <i class="fa fa-2x fa-circle"></i>
                                    </a>
                                </div>
                                <div class="col-2">
                                    <a class="text-pulse" data-toggle="theme"
                                        data-theme="assets/css/themes/pulse.min.css" href="javascript:void(0)">
                                        <i class="fa fa-2x fa-circle"></i>
                                    </a>
                                </div>
                                <div class="col-2">
                                    <a class="text-flat" data-toggle="theme" data-theme="assets/css/themes/flat.min.css"
                                        href="javascript:void(0)">
                                        <i class="fa fa-2x fa-circle"></i>
                                    </a>
                                </div>
                                <div class="col-2">
                                    <a class="text-corporate" data-toggle="theme"
                                        data-theme="assets/css/themes/corporate.min.css" href="javascript:void(0)">
                                        <i class="fa fa-2x fa-circle"></i>
                                    </a>
                                </div>
                                <div class="col-2">
                                    <a class="text-earth" data-toggle="theme"
                                        data-theme="assets/css/themes/earth.min.css" href="javascript:void(0)">
                                        <i class="fa fa-2x fa-circle"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="p-3 bg-body-light rounded-bottom">
                            <div class="row g-sm text-center">
                                <div class="col-6">
                                    <a class="dropdown-item fs-sm fw-medium mb-0" href="be_layout_api.html">
                                        <i class="fa fa-flask opacity-50 me-1"></i> Layout API
                                    </a>
                                </div>
                                <div class="col-6">
                                    <a class="dropdown-item fs-sm fw-medium mb-0" href="be_ui_color_themes.html">
                                        <i class="fa fa-paint-brush opacity-50 me-1"></i> Themes
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- END Color Themes -->
            </div>
            <!-- END Left Section -->

            <!-- Right Section -->
            <div class="space-x-1">
                <!-- User Dropdown -->
                <el-dropdown trigger="click" popper-class="dropdown-user">
                    <button type="button" class="btn btn-sm btn-alt-secondary" id="page-header-user-dropdown"
                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fa fa-user d-sm-none"></i>
                        <span class="d-none d-sm-inline-block ms-2">{{ $page.props.user.name }}</span>
                        <i class="fa fa-angle-down opacity-50 ms-1"></i>
                    </button>
                    <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>
                            <a class="dropdown-item d-flex align-items-center justify-content-between space-x-1" href="#">
                                <span class="fs-sm fw-500">Profil</span>
                                <i class="fa fa-fw fa-user opacity-25"></i>
                            </a>
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <a class="dropdown-item d-flex align-items-center justify-content-between space-x-1" href="#">
                                <span class="fs-sm fw-500">Password</span>
                                <i class="fa fa-fw fa-lock opacity-25"></i>
                            </a>
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <Link :href="route('admin.logout')" method="post" as="button" type="button" class="btn-logout dropdown-item d-flex align-items-center justify-content-between space-x-1">
                                <span class="fs-sm fw-500">Keluar</span>
                                <i class="fa fa-fw fa-sign-out-alt opacity-25"></i>
                            </Link>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                    </template>
                </el-dropdown>
                <!-- END User Dropdown -->
            </div>
            <!-- END Right Section -->
        </div>
        <!-- END Header Content -->
    </header>
</template>

<style scoped>
.btn-logout {
    display: inline-block;
    text-align: start;
    user-select: none;
    background: transparent;
    border: none;
    padding: 0;
    width: 100%;
}
</style>

<script>
import { Link } from '@inertiajs/vue3';
export default {
    name : 'BaseHeader',
    components : {
        Link,
    },
    setup() {
        
    },
}
</script>