<template>
    <div>
      <div>
         <Navbar4/> 
      </div>
      
      <div class="dash">
          <div style="height:2rem">
  
          </div>
          <!-- <div class="movers">
              <div class="movers-top">
                  <h4>Top movers</h4>
              </div>
             <div class="movers-view">
                  <h4>View all assets</h4>
             </div>
          </div>
          <div class="movers-card">
              <div class="movers-cards">
                  <img src="Screenshot1.png" alt="">
              </div>
              <div class="movers-cards">
                  <img src="Screenshot2.png" alt="">
              </div>
              <div class="movers-cards">
                  <img src="Screenshot3.png" alt="">
              </div>
              <div class="movers-cards">
                  <img src="Screenshot4.png" alt="">
              </div>
          </div> -->
          <!-- <hr class="mover-hr"> -->
          <div class="two-factor">
              <div class="two-factor-text">
                <p>Hi {{$auth.user.first_name}} {{$auth.user.surname}}, your current portfolio value is</p>
                <h4>${{value}}</h4>
                <button class="with" v-if="about" @click="withdrawMode()">Withdraw</button>  <button class="cancel" v-else @click="cancelWithdrawal()">Cancel</button>
                <div class="withdraw" v-if="mode">
                    <form @submit.prevent="withdrawFunds()">
                      <div class="withdraw-cards">
                        <div>
                        <label for="">Account Name</label>
                        <input type="text" required v-model="withdrawalInfo.name">
                      </div>
                      <div>
                        <label for="">Account Number</label>
                        <input type="number"  required name="" id="" v-model="withdrawalInfo.account">
                      </div>
                      <div>
                        <label for="">Swift</label>
                        <input type="text" required v-model="withdrawalInfo.swift">
                      </div>
                      <div>
                        <label for="">Bank Name</label>
                        <input type="text" required name="" id="" v-model="withdrawalInfo.bank_name">
                      </div>
                      <div>
                        <label for="">Bank Address</label>
                        <input type="text" required v-model="withdrawalInfo.bank_address">
                      </div>
                      <div>
                        <label for="">Bank State</label>
                        <input type="text" required v-model="withdrawalInfo.bank_state">
                      </div>
                      <div>
                        <label for="">Bank Zipcode</label>
                        <input type="text" required v-model="withdrawalInfo.bank_zip_code">
                      </div>
                      <div>
                        <label for="">Bank Country</label>
                        <input type="text" required v-model="withdrawalInfo.bank_country">
                      </div>
                      <div>
                        <label for="">Additional Instructions</label>
                        <input type="text" required v-model="withdrawalInfo.additional_instructions">
                      </div>
                      <div>
                        <label for="">Amount</label>
                        <input type="number" name="" required v-model="withdrawalInfo.amount" id="">
                      </div>
                      <div>
                        <button type="submit">Withdraw</button>
                      </div>
                      </div>
                      
                
                        
                        
                        
                        
                        
                        
                        
                        
                        
                    </form>
                    
                </div>
            </div>
          </div>
          <!-- <div class="action">
              <div class="action-great">
                  <img src="verifynow.svg" alt="">
                  <h4>Hi Investor, great to see you here!</h4>
                  <p>Once you're ready, please verify your account.</p>
                  <button>Verify now</button>
              </div>
              <div class="action-eye">
                  <h6>Watchlist</h6>
                  <div class="action-eye-center">
                      <img src="list.svg" alt="">
                      <p>Keep an eye on assets by tapping a heart icon wherever you see it or start here.</p>
                      <button>Get Started</button>
                  </div>
              </div>
          </div> -->
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
        portfolio:{},
        value:0,
        about:true,
        mode:false,
        withdrawalInfo:{
          name:'',
          account:null,
          swift:'',
          bank_name:'',
          bank_address:'',
          bank_state:'',
          bank_zip_code:'',
          bank_country:'',
          additional_instructions:'',
          amount:null,
        },
        
        baseUrl: "https://paybay-invest.herokuapp.com/api/",
      };
    },
    methods: {
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
      // async getBanks() {
      //   try {
      //     const response = await this.$axios.get(this.baseUrl + "withdraw/");
      //     this.banks = response.data;
      //   } catch (error) {
      //     console.log(error);
      //   }
      // },
      withdrawMode(){
        this.about = false;
        this.mode = true;
      },
      cancelWithdrawal(){
        this.about = true;
        this.mode = false;
        this.amount= null;
        this.bank = {};
      },
      withdrawFunds(){
        console.log(this.amount)
        console.log(this.value)
        if (this.value <= this.amount){
            this.$message({
            message: "Insufficient funds",
            type: "warning",
            });
        }else{
            try {
          const response = this.$axios.post(this.baseUrl + "withdraw/",this.withdrawalInfo);
          this.$message({
            message: "Withdraw successfull!",
            type: "success",
            });
            console.log(response)
            this.$router.push("/dashboard")
        } catch (error) {
          this.$message({
            message: error.response.data,
            type: "warning",
            });
          console.log(error);
        }
        finally {
          this.bank = {};
          this.amount = null
        }
        }
        // if (this.amount > this.value ){
        //     this.$message({
        //     message: "Insufficient funds",
        //     type: "warning",
        //     });
        // }
        
      }
   
    
    },
  
    mounted() {
       this.getPortfolio()
       
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
      .movers-cards img{
          width: 100%;
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
        
      }
      .two-factor-text h4{
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
          font-size: 50px;
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
      .two-factor-text .with{
        background: #16a858;
        color: white;
        border: none;
        padding: 10px 25px;
        border-radius: 5px;
      }
      .two-factor-text .cancel{
        background: red;
        color: white;
        border: none;
        padding: 10px 25px;
        border-radius: 5px;
      }
      .withdraw{
        margin-top: 1rem;
      }
      .withdraw input{
        border: 1px solid initial;
        background: #f5f5f5;
        padding: 5px 10px;
        border-radius: 5px;
        display: block;
        width: 100%;
      }
      .withdraw button{
        background: #16a858;
        color: white;
        border: none;
        padding: 7px 25px;
        border-radius: 5px;
        margin-top: 1.4rem;
        width: 100%;
      }
      .withdraw-cards{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 2rem;
      }
  
  
      @media(max-width:576px){
          .dash{
          background: #f5f5f5;
          min-height: 100vh;
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
      .withdraw input{
        border: 1px solid initial;
        background: #f5f5f5;
        padding: 5px 10px;
        border-radius: 5px;
        width: 100%;
      }
      .withdraw button{
        background: #16a858;
        color: white;
        border: none;
        padding: 7px 25px;
        border-radius: 5px;
        width: 100%;
        margin-top: 1rem;
      }
      .two-factor-text .with{
        background: #16a858;
        color: white;
        border: none;
        padding: 10px 25px;
        border-radius: 5px;
        width: 100%;
      }
      .two-factor-text .cancel{
        background: red;
        color: white;
        border: none;
        padding: 10px 25px;
        border-radius: 5px;
        width: 100%;
      }
      .withdraw button{
        background: #16a858;
        color: white;
        border: none;
        padding: 7px 25px;
        border-radius: 5px;
        margin-top: 1rem;
        width: 100%;
      }
      .withdraw-cards{
        display: grid;
        grid-template-columns: 1fr;
        column-gap: 2rem;
      }
      }
  
  
  
      @media(min-width:577px) and (max-width:1200px){
          .dash{
          background: #f5f5f5;
          height: 100vh;
          margin-top: 2.5rem;
      }
          .movers{
          margin-left: 10px;
          margin-right: 10px;
         display: grid;
         grid-template-columns: 1fr;
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
          grid-template-columns: 1fr ;
      }
      .action{
          margin-top: 2rem;
          margin-left: 10px;
          margin-right: 10px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          row-gap: 1rem;
      }
      .withdraw input{
        border: 1px solid initial;
        background: #f5f5f5;
        padding: 5px 10px;
        border-radius: 5px;
        width: 100%;
      }
      .withdraw button{
        background: #16a858;
        color: white;
        border: none;
        padding: 7px 25px;
        border-radius: 5px;
        width: 100%;
        margin-top: 1.4rem;
      }
      .two-factor-text .with{
        background: #16a858;
        color: white;
        border: none;
        padding: 10px 25px;
        border-radius: 5px;
        width: 10rem;
      }
      .two-factor-text .cancel{
        background: red;
        color: white;
        border: none;
        padding: 10px 25px;
        border-radius: 5px;
        width: 10rem;
      }
      }
  </style>