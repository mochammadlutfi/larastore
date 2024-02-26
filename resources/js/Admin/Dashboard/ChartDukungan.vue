<template>
    <div class="block block-rounded mb-0">
        <div class="block-header">
            <h3 class="block-title">
                Riwayat Dukungan
            </h3>
        </div>
        <div class="block-content p-3" v-loading="isLoading">
            <Line 
                v-if="isLoading == false"
                :style="{'max-height' : height +'px'}"
                :height="height"
                :options="chartOptions"
                :data="chartData"
            />
        </div>
    </div>
</template>

<script>
import axios from 'axios'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler 
} from 'chart.js'
import { Line } from 'vue-chartjs'

ChartJS.register(CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend,Filler )

export default {
  name: 'ChartDukungan',
  components: {
    Line
  },
  props: {
    relawan: {
        type : Number,
    },
    type : {
        type : String,
        default : 'Pendukung',
    },
    width: {
      type: Number,
      default: 300
    },
    height: {
      type: Number,
      default: 300
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => {}
    },
    plugins: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
        isLoading : false,
        data : null,
        chartData: {
            labels: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July'
            ],
            datasets: [
                {
                    label: 'Dukungan',
                    backgroundColor: "rgba(2, 132, 199, .45)",
                    borderColor: "rgba(2, 132, 199, 1)",
                    pointBackgroundColor: "rgba(2, 132, 199, 1)",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "rgba(2, 132, 199, 1)",
                    fill : true,
                    tension: 0.2,
                    data: [40, 39, 10, 40, 39, 80, 40]
                },
            ]
        },
        chartOptions: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    display: false,
                    grid: {
                        display: false
                    },
                },
                y:{
                    position: 'right',
                    beginAtZero: true,
                    grid: {
                        display: false
                    },
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function (e) {
                            return " " + e.parsed.y + " Dukungan";
                        },
                    },
                },
            },
        }
    }
  },
  async mounted(){
    // await this.fetchData();
  },
  methods : {
    async fetchData(page) {
        var page = (page == undefined) ? 1 : page;
        try {
            this.isLoading = true;
            const response = await axios.get(self.route("user.statistik.dukungan"),{
                params: {
                    page: page,
                    limit : this.limit,
                    search : this.searchKeyword,
                    searchKey : this.searchKey,
                    type : this.type,
                    relawan : this.relawan
                }
            });
            if(response.status == 200){
                this.chartData.labels = response.data.labels;
                this.chartData.datasets[0].data = response.data.dataset;
            }
            this.isLoading = false;
        } catch (error) {
            console.error(error);
        }
    },
  }
}
</script>
