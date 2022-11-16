<template>
  <div>
    <div>
       <Navbar4/> 
    </div>
    
    <div class="dash">
        <div style="height:2rem">

        </div>
        <div class="action">
            <div class="action-great">
                <h2>Hi {{$auth.user.first_name}}, great to see you here!</h2>
                
            </div>
            <div class="action-eye">
                <h2>Your balance: ${{value}}</h2>
                
            </div>
        </div>
        <div class="movers">
            <div class="movers-top">
                <h4>Top movers</h4>
            </div>
           <div class="movers-view">
                <h4>View all assets</h4>
           </div>
        </div>
        <div class="movers-card" >
            <div class="movers-cards" style="background-color:blue">
                <p>{{com1.name}}</p>
                <h6>Price: ${{com1.price}}</h6>
                <h6>Return: ${{com1.expected_return}}</h6>
                <h6>% Change: {{com1.percentage}}</h6>
               <nuxt-link to="deposit"><button>Invest Now</button></nuxt-link> 
            </div>
            <div class="movers-cards" style="background-color:goldenrod">
                <p>{{com3.name}}</p>
                <h6>Price: ${{com3.price}}</h6>
                <h6>Return: ${{com3.expected_return}}</h6>
                <h6>% Change: {{com3.percentage}}</h6>
               <nuxt-link to="deposit"><button>Invest Now</button></nuxt-link> 
            </div>
            <div class="movers-cards" style="background-color:silver">
                <p>{{com2.name}}</p>
                <h6>Price: ${{com2.price}}</h6>
                <h6>Return: ${{com2.expected_return}}</h6>
                <h6>% Change: {{com2.percentage}}</h6>
               <nuxt-link to="deposit"><button>Invest Now</button></nuxt-link> 
            </div>
            
            <div class="movers-cards" style="background-color:platinum;color: #000;">
                <p  style="color:#000">{{com4.name}}</p>
                <h6 style="color:#000">Price: ${{com4.price}}</h6>
                <h6 style="color:#000">Return: ${{com4.expected_return}}</h6>
                <h6 style="color:#000">% Change: {{com4.percentage}}</h6>
               <nuxt-link to="deposit"><button>Invest Now</button></nuxt-link> 
            </div>
        </div>
        <hr class="mover-hr">
        <!-- <div class="two-factor">
            <div class="two-factor-img">
                <img src="2fa.svg" alt="">
            </div>
            <div class="two-factor-text">
                <h4>Enable two factor authentication</h4>
                <p>Your security is essential for us - let's strengthen it further.</p>
            </div>
            <div class="two-factor-button">
                <button>Set Up</button>
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
        com1:{},
        com2:{},
        com3:{},
        com4:{},
      baseUrl: "https://paybay-invest.herokuapp.com/api/",
      portfolio:{},
      value:''
    };
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
  },

  mounted() {
    this.getCommodities(),
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


    @media(max-width:576px){
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