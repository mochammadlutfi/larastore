<template>
    <base-layout>
        
    <div class="content">
            <div class="content-heading d-flex justify-content-between align-items-center">
                <div class="my-auto">
                    Detail Pesanan Pembelian
                </div>
                <div class="float-end" v-if="data.state == 'draft'">
                    <el-button type="primary" @click.prevent="updateState('done')">
                        <i class="fa fa-check me-2"></i>
                        Konfirmasi
                    </el-button>
                    <el-button type="primary" plain @click.prevent="updateState('cancel')">
                        <i class="fa fa-close me-2"></i>
                        Batal
                    </el-button>
                </div>
            </div>

            <div class="block block-bordered rounded">
                <div class="block-content p-4">
                    <h3 class="fs-3 fw-bold">{{ data.nomor }}</h3>

                    <el-descriptions>
                        <el-descriptions-item label="Supplier">
                            {{ data.supplier.name }}
                        </el-descriptions-item>
                        <el-descriptions-item label="Tanggal">
                            {{ data.date }}
                        </el-descriptions-item>
                    </el-descriptions>

                    
                    <el-table :data="data.lines" border id="variant" class="mb-2">
                        <el-table-column label="Produk">
                            <template #default="scope">
                                <div>{{ scope.row.product.name }}
                                    <template v-if="scope.row.variant.name">
                                        - {{ scope.row.variant.name }}
                                    </template>
                                </div>
                                <div>{{ scope.row.variant.sku }}</div>
                            </template>
                        </el-table-column>
                        <el-table-column label="Harga">
                            <template #default="scope">
                                {{ currency(scope.row.price) }}
                            </template>
                        </el-table-column>
                        <el-table-column prop="qty" label="Qty"/>
                        <el-table-column label="Satuan">
                            <template #default="scope">
                                {{ scope.row.unit.name }} ({{ scope.row.unit.code }})
                            </template>
                        </el-table-column>
                        <el-table-column label="Total">
                            <template #default="scope">
                                {{ currency(scope.row.subtotal) }}
                            </template>
                        </el-table-column>
                    </el-table>

                    <el-row justify="end">
                        <el-col :lg="12" class="float-end">
                            <div class="d-flex float-end justify-content-end w-75 fs-4">
                                <div class="">Total</div>
                                <div class="text-end w-50">{{ currency(data.total) }}</div>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </div>
    </base-layout>
</template>

<script>
export default {
    props : {
        data : {
            type : Object,
            default : {}
        }
    },
    setup() {
        
    },
    methods :{
        updateState(state){
            let msg = (state == 'done') ? 'Konfirmasi Status Pembelian!' : 'Batalkan Pembelian?';
            ElMessageBox.alert(msg, 'Peringatan', {
                showCancelButton: true,
                confirmButtonText: 'Ya!',
                cancelButtonText: 'Tidak!',
                type: 'warning',
            })
            .then(() => {
                this.$inertia.post(this.route('admin.purchase.order.state', {id : this.data.id}), {
                    state : state,
                }, {
                    preserveScroll: true,
                    onSuccess: () => {
                        this.fetchData();
                        ElMessage({
                            type: 'success',
                            message: 'Data Berhasil Diperbaharui!',
                        });
                    },
                });
            }); 
        }
    }
}
</script>