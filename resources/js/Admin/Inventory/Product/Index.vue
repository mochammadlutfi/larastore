<template>
    <base-layout>
        <div class="content">
            <div class="content-heading d-flex justify-content-between align-items-center">
                <span>Produk</span>
                <div class="space-x-1">
                    <a :href="route('admin.inventory.product.create')" class="ep-button ep-button--primary">
                        <i class="fa fa-plus me-1"></i>
                        Tambah
                    </a>
                </div>
            </div>
            
            <div class="block block-rounded">
                <div class="block-content py-3">
                    <el-row justify="space-between">
                        <el-col :span="12">
                            <el-select v-model="limit" placeholder="Pilih" style="width: 115px" @change="fetchData(1)">
                                <el-option label="25" value="25"/>
                                <el-option label="50" value="50"/>
                                <el-option label="100" value="100"/>
                            </el-select>
                        </el-col>
                        <el-col :span="8">
                            <el-input
                                v-model="searchKeyword"
                                placeholder="Masukan kata kunci"
                                class="input-with-select"
                                clearable
                                >
                                <template #append>
                                    <el-button @click="fetchData(1)">
                                        <i class="fa fa-search"></i>
                                    </el-button>
                                </template>
                            </el-input>
                        </el-col>
                    </el-row>
                </div>
                <div class="block-content p-0">
                    <el-table :data="data" class="w-100" 
                    v-loading="isLoading" 
                    @sort-change="sortChange">
                        <el-table-column type="expand">
                            <template #default="props">
                                <el-table :data="props.row.variant">
                                    <el-table-column label="Varian" prop="name" />
                                    <el-table-column label="SKU" prop="sku" />
                                    <el-table-column label="Harga Jual" prop="sell_price">
                                    <template #default="scope">
                                        {{  currency(scope.row.sell_price) }}
                                    </template>
                                    </el-table-column>
                                    <el-table-column label="Harga Beli" prop="purchase_price">
                                        <template #default="scope">
                                            {{  currency(scope.row.purchase_price) }}
                                        </template>
                                    </el-table-column>
                                    <el-table-column label="Stock" prop="stock" />
                                </el-table>
                            </template>
                        </el-table-column>
                        <el-table-column prop="name" label="Nama" sortable/>
                        <el-table-column prop="category.name" label="Kategori" sortable/>
                        <el-table-column prop="sell_price" label="Harga Jual" sortable>
                            <template #default="scope">
                                {{  currency(scope.row.sell_price) }}
                                <template v-if="scope.row.variant.length > 1">
                                    - {{  currency(scope.row.sell_max_price) }}
                                </template>
                            </template>
                        </el-table-column>
                        <el-table-column prop="purchase_price" label="Harga Beli" sortable>
                            <template #default="scope">
                                {{  currency(scope.row.purchase_price) }}
                                <template v-if="scope.row.variant.length > 1">
                                    - {{  currency(scope.row.purchase_max_price) }}
                                </template>
                            </template>
                        </el-table-column>
                        <el-table-column label="Aksi" align="center" width="180">
                            <template #default="scope">
                                <el-dropdown popper-class="dropdown-action" trigger="click">
                                    <el-button type="primary">
                                    Aksi <i class="fa fa-angle-down ms-1"></i>
                                    </el-button>
                                    <template #dropdown>
                                        <el-dropdown-menu>
                                            <el-dropdown-item>
                                                <a :href="route('admin.inventory.product.edit', {id : scope.row.id})" class="w-100 d-flex align-items-center justify-content-between space-x-1">
                                                Ubah
                                                <i class="si fa-fw si-note"></i>
                                            </a>
                                            </el-dropdown-item>
                                            <el-dropdown-item class="d-flex align-items-center justify-content-between space-x-1" @click.prevent="hapus(scope.row.id)">
                                                Hapus
                                                <i class="si fa-fw si-trash"></i>
                                            </el-dropdown-item>
                                        </el-dropdown-menu>
                                    </template>
                                </el-dropdown>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
                <div class="block-content py-2" v-if="isLoading == false">
                    <el-row justify="space-between">
                        <el-col :lg="12">
                            <p class="mb-0">Menampilkan {{ from }} sampai {{ to }} dari {{ total }}</p>
                        </el-col>
                        <el-col :lg="12" class="text-end">
                            <el-pagination class="float-end" background layout="prev, pager, next"  :page-size="pageSize" :total="total" :current-page="page" @current-change="fetchData"/>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </div>
    </base-layout>
</template>

<script>
export default {
    data(){
        return {
            data : [],
            isLoading : true,
            searchKey : 'name',
            searchKeyword : '',
            limit : 25,
            total : 0,
            page : 1,
            pageSize : 0,
        } 
    },
    async created() {
        await this.fetchData();
    },
    methods :{
        async fetchData(page) {
            var page = (page == undefined) ? 1 : page;
            try {
                this.isLoading = true;
                const response = await axios.get("/admin/produk/data",{
                    params: {
                        page: page,
                        limit : this.limit,
                        search : this.searchKeyword,
                        searchKey : this.searchKey,
                    }
                });
                if(response.status == 200){
                    this.data = response.data.data;
                    this.page = response.data.current_page;
                    this.total = response.data.total;
                    this.pageSize = response.data.per_page;
                }
                this.isLoading = false;
            } catch (error) {
                console.error(error);
            }
        },
        format_date(value){
            if (value) {
                return moment(String(value)).format('DD MMM YYYY')
            }
        },
        hapus(id){
            ElMessageBox.alert('Data yang dihapus tidak bisa dikembalikan!', 'Peringatan', {
                showCancelButton: true,
                confirmButtonText: 'Ya!',
                cancelButtonText: 'Tidak!',
                type: 'warning',
            })
            .then(() => {
                this.$inertia.delete(this.route('admin.inventory.product.delete', {id : id}), {
                    preserveScroll: true,
                    onSuccess: () => {
                        this.fetchData();
                        ElMessage({
                            type: 'success',
                            message: 'Data Berhasil Dihapus!',
                        });
                    },
                });
            });
        },
    }
}
</script>