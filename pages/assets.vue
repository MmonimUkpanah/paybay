<template>
    <div>
      <div>
         <Navbar4/> 
      </div>
      
      <div class="dash">
          <div style="height:2rem">
  
          </div>
         
          <div class="crypto">
              <h2>Crypto Prices</h2>
              <div class="table-responsive">
                  <table class="table ">
                      <thead>
                          <tr>
                          <th scope="col">#</th>
                          <th scope="col">Symbol</th>
                          <th scope="col">Name</th>
                          <th scope="col">Price</th>
                          </tr>
                      </thead>
                      <tbody v-for="(crypto , index) in computedCrypto" :key="index">
                          <tr>
                          <th scope="row">{{index}}</th>
                          <td>{{crypto.asset_id}}</td>
                          <td>{{crypto.name}}</td>
                          <td>${{crypto.price_usd}}</td>
                          <td><a href="deposit"><button class="buy">Buy now</button></a></td>
                          <td><a href="deposit"><button class="sell">Sell</button></a></td>
                      </tr>
                      </tbody>
                  </table>
              </div>
              
          </div> 
          
          
      </div>
    </div>
  </template>
  
  <script>
  // import { ValidationObserver, ValidationProvider } from "vee-validate";
  // import { FormWizard, TabContent } from "vue-form-wizard";
  // import "vue-form-wizard/dist/vue-form-wizard.min.css";
  import ElementUI from "element-ui";
  import "element-ui/lib/theme-chalk/index.css";
  export default {
    components: {
      ElementUI,
    },
    data() {
      return {
          com1:{},
          com2:{},
          com3:{},
          com4:{},
        baseUrl: "https://paybay-invest.onrender.com/api/",
        portfolio:{},
        value:'',
        crypto_data:[],
        limit: 50
      };
    },
    computed:{
      computedCrypto(){
      return this.limit ? this.crypto_data.slice(0,this.limit) : this.crypto_data
    }
  
    },
    methods: {
      async getCommodities() {
        try {
          const response = await this.$axios.get(this.baseUrl + "commodity/");
          this.com1 = response.data[0];
          this.com2 = response.data[1];
          this.com3 = response.data[2];
          this.com4 = response.data[3];
          console.log(this.commodities);
        } catch (error) {
          console.error(error);
        }
      },
      async getPortfolio() {
          try {
            const response = await this.$axios.get(this.baseUrl + "dashboard/");
            this.portfolio = response.data;
         this.value = Number(this.portfolio[0].profile_value);
          console.log(this.portfolio)
          } catch (error) {
            console.log(error);
          }
        },
        async getRate() {
          const res = await this.$axios.get('https://rest.coinapi.io/v1/assets', {
              headers: {
                  'X-CoinAPI-Key': 'B889A10D-1B65-4EC8-B626-55F0AE723234'
              }
              });
          console.log(res.data)
          this.crypto_data= res.data
        },
    },
  
    mounted() {
      this.getCommodities(),
      this.getPortfolio(),
      this.getRate()
    },
  };
  </script>
  
  <style scoped>
      *{
          margin: 0;
          padding: 0;
          box-sizing: border-box;
      }
      .dash{
          background: rgb(26, 26, 34);
          height: 88.5vh;
          margin-top: 2.5rem;
      }
      .movers{
          margin-left: 10rem;
          margin-right: 10rem;
         display: grid;
         grid-template-columns: 1fr 1fr;
      }
      .movers-top h4{
          font-size: 17px;
          font-weight: 600;
      }
      .movers-view h4{
          text-align: right;
          font-size: 17px;
          color: #16a858;
      }
      .movers-card{
          margin-top: 1rem;
          margin-left: 0rem;
          margin-right: 0rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          column-gap: 1rem;
          row-gap: 1rem;
      }
      .movers-cards{
          background: white;
          padding: 2rem;
          color: white;
      }
      .movers-cards h6{
          margin-bottom: 0.5rem;
          color: white;
      }
      .movers-cards p{
          font-weight: 600;
          margin-bottom: 0.5rem;
      }
      .movers-cards button{
          background: #16a858;
          color:white;
          border: none;
          padding: 10px;
          margin-top: 1rem;
          border-radius: 5px;
      }
      .mover-hr{
          margin-top: 1.5rem;
          margin-bottom: 1.5rem;
      }
      .two-factor{
          margin-left: 10rem;
          margin-right: 10rem;
          background: white;
          border-radius: 9px;
          padding: 1rem;
          display: grid;
          grid-template-columns: 1fr 3fr 1fr;
      }
      .two-factor-text h4{
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
      }
      .two-factor-button button{
          background: white;
          border: 2px solid #16a858;
          padding: 5px 20px;
          color: black;
          border-radius: 5px;
          margin-top: 1rem;
      }
      .action{
          margin-bottom: 2rem;
          margin-left: 10rem;
          margin-right: 10rem;
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          column-gap: 2rem;
          
      }
      .action h2, .action h4{
          color: #16a858 !important;
      }
      .action-great{
          background: white;
          padding: 1rem;
          text-align: center;
          border-radius: 9px;
      }
      .action-great h4{
          margin-top: 1rem;
          margin-bottom: 0.5rem;
      }
      .action-great p{
          margin-bottom: 1rem;
      }
      .action-great button{
      margin-bottom: 1rem;
      background: #16a858;
      color: black;
      padding: 0.5rem;
      width: 100%;
      border: none;
      border-radius: 5px;
      margin-top: 1rem;
      }
      .action-eye{
          background: white;
          padding: 1rem;
          border-radius: 9px;
          text-align: center;
      }
      .action-eye-center{
          text-align: center;
      }
      .action-eye-center p{
          margin-top: 1rem;
          margin-bottom: 1rem;
      }
      .action-eye-center button{
          margin-bottom: 1rem;
      background: white;
      color: black;
      padding: 0.5rem;
      width: 100%;
      border: 2px solid #16a858;
      border-radius: 5px;
      
      }
      .crypto{
          margin: 5rem 10rem;
          background: white;
      }
      .crypto h2{
          color: #16a858;
          font-size: 40px;
          text-align: center;
          margin-bottom: 1rem;
          margin-top: 1rem;
      }
      table{
          background:white;
      
      }
      .buy{
          background: #16a858;
          color: white;
          padding: 5px 10px;
          border-radius: 5px;
          border: none;
      }
      .sell{
          background: red;
          color: white;
          padding: 5px 10px;
          border-radius: 5px;
          border: none;
      }
    
      .dash-leftsidebar{
          width:18%;
          background: white;
          height: 100vh;
          position: fixed;
          border-radius: 5px;
          padding: 1rem;
      }
      .dash-leftsidebar-header{
          background: #f5f5f5;
          padding: 0.5rem;
          border-radius: 5px;
          
      }
      .dash-leftsidebar-header-img img{
          border-radius: 50%;
          height: 3rem;
          width: 3rem;
      }
      
      .dash-leftsidebar-general{
          margin-top: 1rem;
      }
      .dash-leftsidebar-general p{
          font-weight: 600;
      }
      .dash-leftsidebar-general-menu{
          margin-top: 1rem;
      }
      .dash-leftsidebar-general-menu .icon{
          margin-right: 0.5rem;
      }
      .dash-leftsidebar-general-menu p{
          margin-bottom: 1rem;
      }
      .dash-leftsidebar-general-menu p:hover{
          background: rgb(26, 26, 34);
          color: white;
          padding: 5px 15px;
          border-radius: 5px;
      }
      .dash-center{
          width: 60%;
          margin-left: 20%;
          margin-right: 20%;
          position: fixed;
      }
      .dash-rightsidebar{
          width: 18%;
          background: white;
          height: 100vh;
          position: fixed;
          margin-left: 82%;
          border-radius: 5px;
          
      }
      .dash-rightsidebar-header{
          padding: 1rem;
      }
      .dash-rightsidebar-header-img{
          text-align: center;
      } 
      .dash-rightsidebar-header-img img{
          border-radius: 50%;
          height: 5rem;
          width: 5rem;
          padding: 3px;
          border: 2px solid #f5f5f5;
      }
      .dash-rightsidebar-header-text{
          text-align: center;
      }
      .dash-rightsidebar-header-text p{
          font-size: 12px;
          color: #918f8f;
          margin-top: 0.5rem;
      }
      .dash-rightsidebar-header-text h3{
          margin-top: 0.5rem;
      }
      .dash-rightsidebar-buy{
          padding: 1rem;
      }
      .dash-rightsidebar-buy-button button{
          background: rgb(26, 26, 34);
          color: white;
          padding: 2px 10px;
          border-radius: 5px;
      }
      .dash-rightsidebar-buy-text p{
          color: rgb(26, 26, 34);
          font-weight: 600;
      }
      .dash-rightsidebar-buy-proceed button{
          display: block;
          width: 100%;
          background:rgb(26, 26, 34) ;
          padding: 5px 10px;
          color: white;
          border: none;
          border-radius: 5px;
          margin-top: 0.5rem;
      }
  
  
      @media(max-width:576px){
          .dash{
          background: rgb(26, 26, 34);
          height: auto;
          margin-top: 2.5rem;
      }
          .movers{
          margin-left: 0px;
          margin-right: 0px;
         display: grid;
         grid-template-columns: 1fr 1fr;
      }
      .movers-card{
          margin-top: 1rem;
          margin-left: 0px;
          margin-right: 0px;
          display: grid;
          grid-template-columns: 1fr;
          row-gap: 1rem;
      }
      .two-factor{
          margin-left: 10px;
          margin-right: 10px;
          background: white;
          border-radius: 9px;
          padding: 1rem;
          display: grid;
          text-align: center;
          grid-template-columns: 1fr;
          row-gap: 1rem;
      }
      .action{
          margin-top: 2rem;
          margin-left: 10px;
          margin-right: 10px;
          display: grid;
          grid-template-columns: 1fr;
          row-gap: 1rem;
      }
      .crypto{
          margin: 5rem 10px;
          background: white;
      }
      .dash-leftsidebar{
          width:100%;
          background: white;
          height: auto;
          position: static;
          border-radius: 0px;
          padding: 10px;
          margin-left: 0px;
          margin-right: 0px;
      }
      .dash-leftsidebar-header{
          background: #f5f5f5;
          padding: 0.5rem;
          border-radius: 5px;
          
      }
      .dash-center{
          width: 100%;
          margin-left: 0px;
          margin-right: 0px;
          position: static;
      }
      .dash-rightsidebar{
          width: 100%;
          background: white;
          height: auto;
          position: static;
          margin-left: 0px;
          margin-right: 0px;
          border-radius: 0px;
          margin-top: 1rem;
      }
      .dash-rightsidebar-header{
          padding: 10px;
      }
      
      }
  
  
  
      @media(min-width:577px) and (max-width:1200px){
          .dash{
          background: rgb(26, 26, 34);
          height: auto;
          margin-top: 2.5rem;
      }
          .movers{
          margin-left: 10px;
          margin-right: 10px;
         display: grid;
         grid-template-columns: 1fr 1fr;
      }
      .movers-card{
          margin-top: 1rem;
          margin-left: 10px;
          margin-right: 10px;
          display: grid;
          grid-template-columns: 1fr 1fr ;
          row-gap: 1rem;
      }
      .two-factor{
          margin-left: 10px;
          margin-right: 10px;
          background: white;
          border-radius: 9px;
          padding: 1rem;
          display: grid;
          grid-template-columns: 1fr 3fr 1fr;
      }
      .action{
          margin-top: 2rem;
          margin-left: 10px;
          margin-right: 10px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          row-gap: 1rem;
      }
      .crypto{
          margin: 5rem 10px;
          background: white;
      }
      .dash-leftsidebar{
          width:100%;
          background: white;
          height: auto;
          position: static;
          border-radius: 0px;
          padding: 10px;
          margin-left: 0px;
          margin-right: 0px;
      }
      .dash-leftsidebar-header{
          background: #f5f5f5;
          padding: 0.5rem;
          border-radius: 5px;
          
      }
      .dash-center{
          width: 100%;
          margin-left: 0px;
          margin-right: 0px;
          position: static;
      }
      .dash-rightsidebar{
          width: 100%;
          background: white;
          height: auto;
          position: static;
          margin-left: 0px;
          margin-right: 0px;
          border-radius: 0px;
          margin-top: 1rem;
      }
      .dash-rightsidebar-header{
          padding: 10px;
      }
      
      }
  </style>