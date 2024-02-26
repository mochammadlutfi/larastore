<template>
    <base-layout>
        <div class="content">
            <el-form label-width="30%" @submit.prevent="submit" label-position="left">
                <div class="content-heading d-flex justify-content-between align-items-center pt-0">
                    <span>{{ title }}</span>
                    <div class="space-x-1">
                        <el-button native-type="submit" type="primary" :loading="loading">
                            Simpan
                        </el-button>
                    </div>
                </div>
                <div class="block block-rounded">
                    <div class="block-content p-4">
                        <el-row :gutter="32">
                            <el-col :lg="12">
                                <el-form-item class="mb-4" label="Nama Supplier" :error="errors.name">
                                    <el-input v-model="form.name" placeholder="Masukan Nama Supplier"/>
                                </el-form-item>
                                <el-form-item class="mb-4" label="PIC Supplier" :error="errors.pic">
                                    <el-input v-model="form.pic" placeholder="Masukan PIC"/>
                                </el-form-item>
                                <el-form-item class="mb-4" label="No Handphone" :error="errors.phone">
                                    <el-input v-model="form.phone" placeholder="Masukan No Handphone"/>
                                </el-form-item>
                            </el-col>
                            <el-col :lg="12">
                                <el-form-item class="mb-4" label="Alamat Email" :error="errors.email">
                                    <el-input v-model="form.email" placeholder="Masukan Alamat Email"/>
                                </el-form-item>
                                <el-form-item class="mb-4" label="Alamat Lengkap" :error="errors.address">
                                    <el-input v-model="form.address" type="textarea" :rows="5" placeholder="Masukan Alamat Email"/>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </div>
                </div>
            </el-form>
        </div>
    </base-layout>
</template>

<script>
export default {
    props : {
        data : {
            type : Object,
            default : {}
        },
        errors : Object,
    },
    data() {
        return {
            title : 'Tambah Supplier Baru',
            loading : false,
            form : {
                id : null,
                name : null,
                pic : null,
                phone : null,
                email : null,
                address : null,
            }
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
            let form = this.$inertia.form(this.form);
            let url = (Object.keys(this.data).length) ? this.route('admin.purchase.supplier.update', {id : this.data.id}) : this.route('admin.purchase.supplier.store');
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
        setValue(){
            this.title = 'Ubah Supplier';

            this.form.id = this.data.id;
            this.form.name = this.data.name;
            this.form.pic = this.data.pic;
            this.form.phone = this.data.phone;
            this.form.email = this.data.email;
            this.form.address = this.data.address;
        },  
    }
}
</script>