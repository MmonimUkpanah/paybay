<template>
    <div>
      <div>
         <Navbar4/> 
      </div>
      
      <div class="dash">
          <div style="height:2rem">
  
          </div>
          <div class="deposit">
            <h3>Deposit</h3>
            <button class="bank" @click="viewCrypto()">Crypto</button><button class="crypto" @click="viewBank()">Bank</button>
            <div class="cryptowallet" v-if="showCrypto" >
                <div class="crypto1" v-for="(c, index) in crypto" :key="index">
                    <p>{{c.wallet_name}}</p>
                    <p>{{c.wallet_address}}</p>
                    <button @click="copyAddress(c)">Copy Address</button>
                </div>
            </div>
            <div class="bankwallet"  v-else>
                <div class="crypto1" v-for="(c, index) in bank" :key="index">
                    <p>Bank name: {{c.bank_name}}</p>
                    <p>Country: {{c.bank_country}}</p>
                    <p>State: {{c.bank_state}}</p>
                    <p>Address: {{c.bank_address}}</p>
                    <p>Account Name: {{c.name}}</p>
                    <p>Account Number: {{c.account}}</p>
                    <button @click="copyAccount(c)">Copy Account Number</button>
                </div>
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
          crypto1:{},
          crypto2:{},
          crypto3:{},
          showCrypto:true,
          crypto:{},
          bank:{},
          baseUrl: "https://paybay-6ipm.onrender.com/api/",
      };
    },
    methods: {
      async getCrypto() {
        try {
          const response = await this.$axios.get(this.baseUrl + "crypto/");
          this.crypto = response.data;
        } catch (error) {
          console.error(error);
        }
      },
      async getBank() {
        try {
          const response = await this.$axios.get(this.baseUrl + "withdrawbank/");
          this.bank = response.data;
        } catch (error) {
          console.error(error);
        }
      },
      async copyAddress(c){
        await navigator.clipboard.writeText(c.wallet_address);
        this.$message({
            message: "Address Copied!",
            type: "success",
            });
      },
      async copyAccount(c){
        await navigator.clipboard.writeText(c.account);
        this.$message({
            message: "Account Number Copied!",
            type: "success",
            });
      },
      viewCrypto(){
        this.showCrypto = true;
      },
      viewBank(){
        this.showCrypto = false;
      },
    },
  
    mounted() {
      this.getCrypto(),
      this.getBank()
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
          background: #f5f5f5;
          height: 120vh;
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
          margin-left: 10rem;
          margin-right: 10rem;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          column-gap: 1rem;
      }
      .movers-cards{
          background: white;
          padding: 2rem;
          text-align: center;
      }
      .movers-cards p{
          font-weight: 600;
          margin-bottom: 1rem;
      }
      .movers-cards button{
          background: #16a858;
          color:white;
          border: none;
          padding: 10px;
          margin-top: 1rem;
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
          margin-top: 2rem;
          margin-left: 10rem;
          margin-right: 10rem;
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          column-gap: 2rem;
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
      .deposit{
        width: 30%;
        margin: auto;
        background: white;
        text-align: center;
        height: 80vh;
        border-radius: 9px;
        padding: 1rem;
      }
      .deposit h3{
        text-transform:uppercase;
        margin-bottom: 1rem;
      }
      .crypto{
        background: #16a858;
        color: white;
        border: none;
        padding: 5px 15px;
      }
      .bank{
        background: #f5f5f5;
        color: black;
        border: none;
        padding: 5px 15px;
      }
      .cryptowallet{
        background: #f5f5f5; 
        padding: 1rem;
      }
      .cryptowallet button{
        background: #16a858;
        color: white;
        border: none;
        padding: 5px 15px;
        margin-bottom: 1rem;
        border-radius: 5px;
        margin-top: 0.5rem;
      }
      .bankwallet{
        background: #16a858;
        color: white; 
        padding: 1rem;
      }
    .bankwallet p{
        margin-bottom: 0.5rem;
    }
    .bankwallet button{
        border: none;
        padding: 5px 15px;
        margin-bottom: 1rem;
        border-radius: 5px;
        color: #16a858;
    }

  
  
      @media(max-width:576px){
          .dash{
          background: #f5f5f5;
          height: auto;
          margin-top: 2.5rem;
      }
      .cryptowallet{
        background: #f5f5f5; 
        padding: 0rem;
      }
      .deposit{
        width: 100%;
        margin: auto;
        background: white;
        text-align: center;
        height: 70vh;
        border-radius: 9px;
        padding: 0rem;
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
      }
  
  
  
      @media(min-width:577px) and (max-width:1200px){
        .deposit{
        width: 50%;
        margin: auto;
        background: white;
        text-align: center;
        height: 100vh;
        border-radius: 9px;
        padding: 1rem;
      }
          .dash{
          background: #f5f5f5;
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
  
      }
  </style>