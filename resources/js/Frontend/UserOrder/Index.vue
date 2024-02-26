<template>
    <user-layout>
        <div class="d-flex justify-content-between align-items-center mb-4">
            <h3 class="fs-4 fw-bold mb-0">Pesanan Saya</h3>
        </div>
        
        <div class="block block-bordered rounded mb-3">
            <ul class="nav nav-tabs nav-tabs-alt nav-fill">
                <li class="nav-item">
                    <a class="nav-link" v-bind:class="{ 'active' : (status == 'unpaid') ? true : false }"
                        :href="route('user.order.index', { status : 'unpaid' })">Belum Bayar
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" v-bind:class="{ 'active' : (status == 'process') ? true : false }"
                        :href="route('user.order.index', { status : 'process' })">Dikemas
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" v-bind:class="{ 'active' : (status == 'shipped') ? true : false }"
                        :href="route('user.order.index', { status : 'shipped' })">Dikirim
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" v-bind:class="{ 'active' :  (status == 'done') ? true : false }"
                        :href="route('user.order.index', { status : 'done' })">Selesai
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" v-bind:class="{ 'active' :  (status == 'cancel') ? true : false }"
                        :href="route('user.order.index', { status : 'cancel' })">Dibatalkan
                    </a>
                </li>
            </ul>
            <div class="block-content p-2">
                <el-row :gutter="12">
                    <el-col :lg="12">
                        <el-input v-model="searchTerms" class="w-75 m-2" placeholder="Cari Pesanan">
                            <template #prefix>
                                <i class="fa fa-search"></i>
                            </template>
                        </el-input>
                    </el-col>
                    <el-col :lg="12" class="d-flex float-end my-auto">
                        <div class="d-flex float-end my-auto">
                            <div class="my-auto px-3">
                                <span>{{ from }}-{{ to }}/{{ total }}</span>
                            </div>
                            <div class="pt-25 pl-0">
                                <el-button type="primary" size="small">
                                    <i class="fa fa-chevron-left fa-fw"></i>
                                </el-button>
                                <el-button type="primary" size="small" plain>
                                    <i class="fa fa-chevron-right fa-fw"></i>
                                </el-button>
                                <!-- <button @click="prevPage" class="btn btn-alt-secondary mx-1" type="button"
                                    :disabled="checkPaginate('prev')">
                                    <i class="fa fa-chevron-left fa-fw"></i>
                                </button>
                                <button @click="nextPage" class="btn btn-alt-secondary mx-1" type="button"
                                    :disabled="checkPaginate('next')">
                                    <i class="fa fa-chevron-right fa-fw"></i>
                                </button> -->
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
            
        <template v-if="data.length">
        <div class="block rounded block-bordered mb-2" v-for="d in data" :key="d.id">
            <div class="block-header border-3x border-bottom p-3">
                <h3 class="block-title">{{ format_date(d.created_at) }}</h3>
                <div class="block-options">
                    <div class="block-options-item">
                        <el-tag class="ml-2" type="warning" v-if="d.state == 'pending'">Menunggu Konfirmasi</el-tag>
                        <el-tag class="ml-2" type="info" v-else-if="d.state == 'shipping'">Dikirim</el-tag>
                        <el-tag class="ml-2" type="success" v-else-if="d.state == 'done'">Selesai</el-tag>
                        <el-tag class="ml-2" type="danger" v-else-if="d.state == 'cancel'">Batal</el-tag>
                    </div>
                </div>
            </div>
            <div class="block-content p-3">
                <el-row :gutter="20">
                    <el-col :lg="18">
                        <el-row :gutter="20">
                            <el-col :lg="3">
                                <img :src="d.lines[0].product.main_image" class="img-fluid">
                            </el-col>
                            <el-col :lg="18" class="d-flex">
                                <div class="my-auto">
                                    <div class="fs-6 fw-bold">
                                        {{ d.lines[0].product.name }}
                                        <template v-if="d.lines[0].variant.name">
                                        - {{ d.lines[0].variant.name }}
                                        </template>
                                    </div>
                                    <div class="fs-sm fw-semibold">
                                        {{ d.lines[0].qty }} x {{ currency(d.lines[0].price) }}
                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :lg="6" class="d-flex">
                        <div class="my-auto">
                            <div class="fs-6">Total Belanja</div>
                            <div class="fs-5 fw-bold">{{ currency(d.grand_total) }}</div>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div class="block-content block-content-full block-content-sm text-right border-top">
                <!-- <button type="button" class="btn btn-sm btn-outline-primary" @click="recieve(d.id)" v-if="d.status == 'delivery'">
                    Terima Pesanan
                </button> -->
                <el-button v-if="d.state == 'shipped'" type="primary" @click.prevent="receive(d.id)">
                    Terima Pesanan
                </el-button>
                <a :href="route('user.order.show', { id : d.id} )" class="ep-button ep-button--primary is-plain">
                    Detail Pesanan
                </a>
                <el-button v-if="d.payment_status == 'unpaid'" type="primary" @click="payment(d)">
                    Bayar Sekarang
                </el-button>
            </div>
        </div>
        </template>
    </user-layout>
</template>

<script>
import moment from 'moment';
export default {
    data() {
        return {
            status : this.route().params.status == undefined ? 'unpaid' : this.route().params.status,
            data : [],
            isLoading : false,
            page : 1,
            pageSize : 0,
            total : 0,
            from : 0,
            to :  0,
            searchTerms : '',
        }
    },
    async mounted(){
        await this.fetchData();
    },
    methods : {
        async fetchData(page){
            var page = (page == undefined) ? 1 : page;
            try {
                this.isLoading = true;
                const response = await axios.get(this.route("user.order.data"),{
                    params: {
                        page: page,
                        search : this.searchTerms,
                        status : this.status
                    }
                });
                if(response.status == 200){
                    this.data = response.data.data;
                    this.page = response.data.current_page;
                    this.total = response.data.total;
                    this.pageSize = response.data.per_page;
                    this.from = response.data.from;
                    this.to = response.data.to;
                }
                this.isLoading = false;
            } catch (error) {
                console.error(error);
            }
        },
        format_date(v){
            if (v) {
                moment.locale('id');
                return moment(String(v)).format('DD MMM YYYY')
            }
        },
        payment(d){
            snap.pay(d.payment_ref, {
                onSuccess: function(result){
                    this.updatePayment('paid', d.id);
                    ElMessage({
                        type: 'success',
                        message: 'Pembayaran Berhasil',
                    });
                    // window.location.href = vm.route('user.order.show', {id : d.id});
                },
                onPending: function(result){
                    ElMessage({
                        type: 'info',
                        message: 'Menunggu Pembayaran',
                    });
                    // window.location.href = vm.route('user.order.show', {id : d.id});
                },
                onError: function(result){
                    ElMessage({
                        type: 'error',
                        message: 'Pembayaran Gagal',
                    });
                    // window.location.href = vm.route('user.order.show', {id : d.id});
                },
                onClose: function(result){
                    // alert('asa');
                    console.log(result);
                    // snap.hide();
                }
            });
        },
        async updatePayment(status, id){
            try {
                this.isLoading = true;
                const response = await axios.post(this.route("user.order.state", {id : id}),{
                    status: status,
                });
                if(response.status == 200){
                    location.reload();
                }
                this.isLoading = false;
            } catch (error) {
                console.error(error);
            }
        },
        receive(id){
            ElMessageBox.alert('Pastikan barang yang diterima sesuai dengan pesanan!', 'Peringatan', {
                showCancelButton: true,
                confirmButtonText: 'Pesanan Sudah Diterima!',
                cancelButtonText: 'Batal!',
                type: 'warning',
            })
            .then(() => {
                this.$inertia.post(this.route('user.order.confirm', {id : id}), {
                    preserveScroll: true,
                    onSuccess: () => {
                        this.fetchData();
                        ElMessage({
                            type: 'success',
                            message: 'Pesanan Berhasil Diterima!',
                        });
                    },
                });
            });
        },
    },
}
</script>