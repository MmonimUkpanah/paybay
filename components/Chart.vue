<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  data() {
    return {
      gradient: null,
      gradient2: null,
      prices:[],
      dates:[],
      price:[],
      free: [60, 55, 32, 10, 2, 12, 53],
      baseUrl: "https://paybay-invest.herokuapp.com/api/",

    };
  },
  created(){
    this.getItems()
  },
  mounted() {
    this.gradient = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);
    this.gradient2 = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);

    this.gradient.addColorStop(0, "rgba(255, 0,0, 0.5)");
    this.gradient.addColorStop(0.5, "rgba(255, 0, 0, 0.25)");
    this.gradient.addColorStop(1, "rgba(255, 0, 0, 0)");

    this.gradient2.addColorStop(0, "rgba(0, 231, 255, 0.9)");
    this.gradient2.addColorStop(0.5, "rgba(0, 231, 255, 0.25)");
    this.gradient2.addColorStop(1, "rgba(0, 231, 255, 0)");

    this.renderChart(
      {
        labels: [
        '2022-11-13', '2022-11-14', '2022-11-15', '2022-11-16', '2022-11-17', '2022-11-18', '2022-11-19', '2022-11-20',
        '2022-11-21', '2022-11-22', '2022-11-23', '2022-11-24', '2022-11-25', '2022-11-26', '2022-11-27',
          ],
        datasets: [
          {
            label: "BTC",
            borderColor: "#05CBE1",
            pointBackgroundColor: "white",
            borderWidth: 1,
            width:"100%",
            pointBorderColor: "white",
            backgroundColor: this.gradient1,
            data: [10000, 14500, 15500, 13500, 14000, 18000, 11000, 14000, 14000 , 13500 , 15000, 12500, 10000, 15000, 18000]
          },
          {
            label: "ETH",
            borderColor: "#FC2525",
            pointBackgroundColor: "white",
            pointBorderColor: "white",
            borderWidth: 1,
            backgroundColor: this.gradient,
            data: [12000, 13500, 15000, 12500, 14500, 16000, 13000, 12300, 14700, 16500, 13400, 6500, 9000, 12000, 13500]
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  },
  methods:{
    async getItems() {
        try {
          const response = await this.$axios.get(this.baseUrl + "items/");
          this.items = response.data;
          this.dates = this.items.map(item => item.date);
          this.prices = this.items.map(item => item.value);
          this.price = this.prices.map(function(str) {
         // using map() to convert array of strings to numbers

         return parseInt(str); });
          console.log(this.dates)
          console.log(this.price)
        } catch (error) {
          console.log(error);   
        }
      },
  }
};
</script>
