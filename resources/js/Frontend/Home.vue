<template>
    <base-layout title="Home">
        <!-- <recent-products/> -->
        <div class="bg-white">
        <div class="position-relative d-flex align-items-center">
            <div class="content content-full">
                <div class="row g-6 w-100 py-7 overflow-hidden">
                    <div class="col-md-7 order-md-last py-4 d-md-flex align-items-md-center justify-content-md-end">
                        <img class="img-fluid" src="/images/front.jpg" alt="Hero Promo">
                    </div>
                    <div class="col-md-5 py-4 d-flex align-items-center">
                        <div class="text-center text-md-start">
                            <h1 class="fw-bold fs-2 mb-3">
                                TOKO KOMBET
                            </h1>
                            <p class="text-muted fw-medium mb-4">
                                Kami menawarkan beragam produk, mulai dari makanan, bahan pokok, makanan ringan serta barang-barang keperluan rumah tangga sehari-hari, untuk memudahkan masyarakat sekitar dalam pengadaan bahan pangan setiap harinya
                            </p>
                            <a class="btn btn-alt-primary py-3 px-4" :href="route('product.index')" target="_blank">
                                <i class="fa fa-arrow-right opacity-50 me-1"></i> Cari Produk
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </base-layout>
</template>

<script>
import RecentProducts from './Product/RecentProducts.vue';
export default {
    components: {
        // RecentProducts,
    },
    props : {
        data : {
            type : Object,
        },
        category : {
            type : Array,
        }
    },
}
</script>