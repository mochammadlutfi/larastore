<template>
    <base-layout>
        <div class="content">
            <el-form label-width="30%" @submit.prevent="submit" label-position="left">
                <div class="content-heading d-flex justify-content-between align-items-center pt-0">
                    <span>{{ title }}</span>
                    <div class="space-x-1">
                        <el-button native-type="submit" type="primary" :loading="loading">
                            <i class="fa fa-check me-2"></i>
                            Simpan
                        </el-button>
                    </div>
                </div>
                <div class="block block-rounded">
                    <div class="block-content p-4">
                        <el-form-item class="mb-4" label="Nama Produk" label-width="180px" :error="errors.name">
                            <el-input v-model="form.name" placeholder="Masukan Nama Produk"/>
                        </el-form-item>
                        <el-form-item class="mb-4" label="Deskripsi" label-width="180px">
                            <el-input v-model="form.description" type="textarea" :rows="3" placeholder="Masukan Deskripsi"/>
                        </el-form-item>
                        <el-form-item class="mb-4" label="Kategori" label-width="180px" :error="errors.category_id">
                            <category-select v-model="form.category_id"/>
                        </el-form-item>
                        <el-form-item class="mb-4" label="Merk" label-width="180px" :error="errors.brand_id">
                            <brand-select v-model="form.brand_id"/>
                        </el-form-item>

                        <el-form-item class="mb-4" label="Ada Varian?" label-width="180px">
                            <el-radio-group v-model="form.has_variant" @change="setVariantTable">
                                <el-radio :label="true" border>Ya</el-radio>
                                <el-radio :label="false" border>Tidak</el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <template v-if="form.has_variant == true">
                            <el-table :data="variant" border class="mb-4" id="variant">
                                <el-table-column label="Nama">
                                    <template #default="scope">
                                        <el-form-item class="m-0" :error="errors['variant.'+scope.$index+'.name']">
                                            <el-input v-model="scope.row.name"/>
                                        </el-form-item>
                                    </template>
                                </el-table-column>
                                <el-table-column label="SKU">
                                    <template #default="scope">
                                        <el-input v-model="scope.row.sku"/>
                                    </template>
                                </el-table-column>
                                <el-table-column label="Harga Jual">
                                    <template #default="scope">
                                        <el-form-item class="m-0" :error="errors['variant.'+scope.$index+'.sell_price']">
                                            <el-input
                                                v-model="scope.row.sell_price"
                                                :formatter="(value) => `Rp ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
                                                :parser="(value) => value.replace(/^Rp\s+|(\,)/gi, '')"
                                            />
                                        </el-form-item>
                                    </template>
                                </el-table-column>
                                <el-table-column label="Satuan Jual">
                                    <template #default="scope">
                                        <el-form-item class="m-0" :error="errors['variant.'+scope.$index+'.sell_unit_id']">
                                            <unit-select v-model="scope.row.sell_unit_id"/>
                                        </el-form-item>
                                    </template>
                                </el-table-column>
                                <el-table-column label="Harga Beli">
                                    <template #default="scope">
                                        <el-input
                                            v-model="scope.row.purchase_price"
                                            :formatter="(value) => `Rp ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
                                            :parser="(value) => value.replace(/^Rp\s+|(\,)/gi, '')"
                                        />
                                    </template>
                                </el-table-column>
                                <el-table-column label="Satuan Beli">
                                    <template #default="scope">
                                        <unit-select v-model="scope.row.purchase_unit_id"/>
                                    </template>
                                </el-table-column>
                                <el-table-column width="60px" align="center">
                                    <template #header>
                                        <el-button type="primary" size="small" @click="addVariant">
                                            <i class="fa fa-plus"></i>    
                                        </el-button>
                                    </template>
                                    <template #default="scope">
                                        <el-button type="danger" size="small" @click="removeVariant(scope.$index)">
                                            <i class="fa fa-times"></i>    
                                        </el-button>
                                    </template>
                                </el-table-column>
                            </el-table>
                            <el-form-item class="mb-4" label="Foto Produk" label-width="180px" :error="errors.sku">
                                <upload-image class="me-2 mb-2" v-model="variant[i].image" v-for="(d, i) in variant" :key="i"/>
                            </el-form-item>
                        </template>
                        <template v-else>
                            <el-form-item class="mb-4" label="SKu" label-width="180px" :error="errors.sku">
                                <el-input v-model="form.sku" placeholder="Masukan SKU Produk"/>
                            </el-form-item>
                            <el-row :gutter="20">
                                <el-col :lg="12">
                                    <el-form-item class="mb-4" label="Harga Jual" label-width="180px" :error="errors.sell_price">
                                        <el-input
                                            v-model="form.sell_price"
                                            placeholder="Masukan Harga Jual"
                                            :formatter="(value) => `Rp ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
                                            :parser="(value) => value.replace(/^Rp\s+|(\,)/gi, '')"
                                        />
                                    </el-form-item>
                                </el-col>
                                <el-col :lg="12">
                                    <el-form-item class="mb-4" label="Harga Jual" label-width="180px" :error="errors.sell_unit_id">
                                        <unit-select v-model="form.sell_unit_id" placeholder="Pilih Satuan Jual"/>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row :gutter="20">
                                <el-col :lg="12">
                                    <el-form-item class="mb-4" label="Harga Beli" label-width="180px" :error="errors.purchase_price">
                                        <el-input
                                            v-model="form.purchase_price"
                                            placeholder="Masukan Harga Beli"
                                            :formatter="(value) => `Rp ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
                                            :parser="(value) => value.replace(/^Rp\s+|(\,)/gi, '')"
                                        />
                                    </el-form-item>
                                </el-col>
                                <el-col :lg="12">
                                    <el-form-item class="mb-4" label="Satuan Beli" label-width="180px" :error="errors.purchase_unit_id">
                                        <unit-select class="ep-input" v-model="form.purchase_unit_id" placeholder="Pilih Satuan Beli"/>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-form-item class="mb-4" label="Foto Produk" label-width="180px" :error="errors.sku">
                                <upload-image v-model="form.image"/>
                            </el-form-item>
                        </template>
                    </div>
                </div>
            </el-form>
        </div>
    </base-layout>
</template>

<style>
#variant .ep-form-item__content{
    margin : 0 !important;
}
</style>
<script>
import CategorySelect from '../Category/CategorySelect.vue';
import BrandSelect from '../Brand/BrandSelect.vue';
import UnitSelect from '../Unit/UnitSelect.vue';
import UploadImage from '@/Components/UploadImage.vue';
export default {
    components : {
        CategorySelect,
        BrandSelect,
        UnitSelect,
        UploadImage
    },
    props : {
        data : {
            type : Object,
            default : {}
        },
        errors : Object,
    },
    data() {
        return {
            title : 'Tambah Produk Baru',
            loading : false,
            form : {
                id : null,
                name : null,
                description : null,
                category_id : null,
                brand_id : null,
                sku : null,
                has_variant : false,
                sell_price : "",
                sell_unit_id : null,
                purchase_price : "",
                purchase_unit_id : null,
                image : null,
            },
            variant : [],
            lines : []
        }
    },
    created(){
        if(Object.keys(this.data).length){
            this.setValue();
        }
    },
    methods : {
        submit() {
            this.loading = true;
            let data = Object.assign(this.form, {
                    variant : this.variant,
                    variant_deleted : this.variantDeleted,
                }
            );
            let form = this.$inertia.form(data);
            let url = (Object.keys(this.data).length) ? this.route('admin.inventory.product.update', {id : this.data.id}) : this.route('admin.inventory.product.store');
            form.post(url, {
                preserveScroll: true,
                onSuccess: () => {
                    ElMessage({
                        type: 'success',
                        message: 'Data Berhasil Disimpan!',
                    });
                },
                onFinish:() => {
                    this.loading = false;
                },
            });
        },
        setVariantTable(v)
        {
            if(v){
                this.variant.push({
                    'id' : null,
                    'name' : null,
                    'sku' : null,
                    'sell_price' : "",
                    'sell_unit_id' : null,
                    'purchase_price' : "",
                    'purchase_unit_id' : null,
                    'image' : null
                });
            }else{
                this.variant = [];
            }
        },
        addVariant()
        {
            this.variant.push({
                'id' : null,
                'name' : null,
                'sku' : null,
                'sell_price' : "",
                'sell_unit_id' : null,
                'purchase_price' : "",
                'purchase_unit_id' : null,
                'image' : null
            });
        },
        removeVariant(index)
        {
            this.variant.splice(index, 1);
        },
        setValue(){
            this.title = 'Ubah Produk';

            this.form.id = this.data.id;
            this.form.name = this.data.name;
            this.form.description = this.data.description;
            this.form.category_id = this.data.category_id;
            this.form.brand_id = this.data.brand_id;
            this.form.has_variant = (this.data.has_variant == "1") ?  true : false;
            if(this.data.has_variant == "1"){
                this.data.variant.forEach((v, i) => {
                    this.variant.push({
                        'id' : v.id,
                        'name' : v.name,
                        'sku' : v.sku,
                        'sell_price' : v.sell_price,
                        'sell_unit_id' : v.sell_unit_id,
                        'purchase_price' : v.purchase_price,
                        'purchase_unit_id' : v.purchase_unit_id,
                        'image' : v.image
                    });
                });
            }else{
                this.form.sku = this.data.variant[0].sku;
                this.form.sell_price = this.data.variant[0].sell_price;
                this.form.sell_unit_id = this.data.variant[0].sell_unit_id;
                this.form.purchase_price = this.data.variant[0].purchase_price;
                this.form.purchase_unit_id = this.data.variant[0].purchase_unit_id;
                this.form.image = this.data.variant[0].image;
            }
        },  
    }
}
</script>