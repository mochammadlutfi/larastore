<template>
    <div class="position-relative bg-body-extra-light">
        <div class="content content-full">
            <div class="pt-5">
                <div class="position-relative">
                    <span class="text-back">02</span>
                    <h2 class="fw-bold mb-2 text-center">
                        Galeri
                        <span class="text-primary">Video</span>
                    </h2>
                    <h3 class="h4 fw-medium text-muted text-center mb-5">
                        Liputan Media & Video Lebih Kenal Dengan Makhfudz Solaiman (Kang Ebod)
                    </h3>
                </div>

                <el-row :gutter="32" class="mb-lg-4">
                    <Flicking :options="options" :plugins="plugins">
                        <el-col :lg="8" :span="24" v-for="(d, i) in data" :key="i" class="mb-lg-4">
                            <div class="block block-rounded block-bordered d-flex flex-column h-100 mb-0">
                                <div class="block-content p-3">
                                    <img :src="'uploads'+ d.image" class="img-fluid rounded-3"/>
                                </div>
                                <div class="block-content p-3 pt-0">
                                    <h2 class="mb-1 fs-5">
                                        <a class="text-primary" :href="route('video.show', {'slug' : d.slug })">
                                            {{ d.title }}
                                        </a>
                                    </h2>
                                </div>
                            </div>
                        </el-col>
                        <template #viewport>
                            <div class="flicking-pagination"></div>
                        </template>
                    </Flicking>
                </el-row>
                <div class="position-relative text-center">
                    <div class="flicking-pagination video-pagination"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Flicking from "@egjs/vue3-flicking";
import { Arrow, Pagination } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/arrow.css";
import "@egjs/flicking-plugins/dist/pagination.css";
export default {
    name : "VideoSlide",
    components : {
        Flicking,
        Arrow,
        Pagination
    },
    data(){
        return {
            data : [],
            isLoading : false,
            plugins: [],
            options : {
                align: "prev",
                defaultIndex: 1,
                circular: true,
            }
        }
    },
    async mounted(){
        const isServer = typeof window === 'undefined'
        if(!isServer){
            this.plugins.push(new Pagination({ 
                type: 'bullet',
                // parentEl : document.body,
                // selector : '.video-pagination',
            }))
            await this.fetchData();
        }
    },
    // async created() {
    //     await this.fetchData();
    // },
    methods :{
        async fetchData() {
            try {
                this.isLoading = true;
                const response = await axios.get(this.route("video.data"),{
                    params: {
                    }
                });
                if(response.status == 200){
                    this.data = response.data;
                }
                this.isLoading = false;
            } catch (error) {
                console.error(error);
            }
        },
    }
}
</script>