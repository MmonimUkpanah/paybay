<template>
  <div>
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog ">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-3" id="staticBackdropLabel">Change Password</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form method="post" @submit.prevent="changePassword()">
                            <label for="">Old Password</label>
                            <input type="password" v-model="passwordDetails.old_password">
                            <label for="">New Password</label>
                            <input type="password" v-model="passwordDetails.password">
                            <label for="">Confirm Password</label>
                            <input type="password" v-model="passwordDetails.password2"> 
                            <button type="submit">Change Password</button>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
    <div>
       <Navbar4/> 
    </div>
    
    <div class="dash">
        <div style="height:2rem">

        </div>
        
        <div class="father">
            <div class="dash-leftsidebar">
            <div class="dash-leftsidebar-header">
                <div class="dash-leftsidebar-header-img">
                    
                    <div class="dash-leftsidebar-header-text">
                    <h6>Welcome, {{$auth.user.first_name}} {{$auth.user.surname}}.</h6>
                    </div>
                </div>
               
            </div>
            <div class="dash-leftsidebar-general">
                <div>
                    <p>General</p>
                </div>
                <div class="dash-leftsidebar-general-menu">
                    <p><font-awesome-icon class="icon" :icon="['fa', 'home']" /> Home</p>
                    <p><font-awesome-icon class="icon" :icon="['fa', 'server']" /> Farms</p>
                    <p><font-awesome-icon class="icon" :icon="['fa', 'clock']" /> Pools</p>
                    <p data-bs-toggle="modal" data-bs-target="#staticBackdrop"><font-awesome-icon class="icon" :icon="['fa', 'gear']" /> Change Password</p>
                </div>
            </div>
        </div>
        
        <div class="dash-center">
           
            <div>
                <client-only>
                    <Chart/>
                </client-only>
            </div>
            <div class="movers-card" >
            <div class="movers-cards" style="background-color: #e1f9f1;">
                <p>{{com1.name}}</p>
                <h6>Minimum investment amount: ${{com1.price}}</h6>
                <h6>Expected return: ${{com1.expected_return}}</h6>
                <h6>% Change: {{com1.percentage}}</h6>
                <p>Duration: 2 weeks</p>
               <nuxt-link to="deposit"><button>Invest Now</button></nuxt-link> 
            </div>
            <div class="movers-cards" style="background-color:#F0E68C;">
                <p>{{com3.name}}</p>
                <h6>Minimum investment amount: ${{com3.price}}</h6>
                <h6>Expected return: ${{com3.expected_return}}</h6>
                <h6>% Change: {{com3.percentage}}</h6>
                <p>Duration: 2 weeks</p>
               <nuxt-link to="deposit"><button>Invest Now</button></nuxt-link> 
            </div>
            <div class="movers-cards" style="background-color:silver;">
                <p>{{com2.name}}</p>
                <h6>Minimum investment amount: ${{com2.price}}</h6>
                <h6>Expected return: ${{com2.expected_return}}</h6>
                <h6>% Change: {{com2.percentage}}</h6>
                <p>Duration: 2 weeks</p>
               <nuxt-link to="deposit"><button>Invest Now</button></nuxt-link> 
            </div>     
            <div class="movers-cards" style="background-color:#fdedd4;">
                <p  style="color:#000">{{com4.name}}</p>
                <h6 style="color:#000">Minimum investment amount: ${{com4.price}}</h6>
                <h6 style="color:#000">Expected return: ${{com4.expected_return}}</h6>
                <h6 style="color:#000">% Change: {{com4.percentage}}</h6>
                <p>Duration: 2 weeks</p>
                <nuxt-link to="deposit"><button>Invest Now</button></nuxt-link> 
            </div>
            
            
        </div>
        </div>
        <div class="dash-rightsidebar">
            <div class="dash-rightsidebar-header">
                <div class="dash-rightsidebar-header-text">
                    <p>YOUR BALANCE</p>
                    <h3>${{value}}</h3>
                </div>
            </div>
            <hr>
            <div class="dash-rightsidebar-buy">
                <div class="dash-rightsidebar-buy-button">
                    <a href="deposit"><button>BUY</button></a>
                </div>
                <div class="dash-rightsidebar-buy-text"  v-for="(crypto , index) in computedCrypto" :key="index">
                    <p>{{crypto.asset_id}} ${{crypto.price_usd}}</p>
                </div>
                <div class="dash-rightsidebar-buy-proceed">
                    <a href="deposit"><button>Proceed to Buy</button></a>
                    <a href="assets"><button>Other Assets</button></a>
                </div>
            </div>
        </div>
        </div>
        
        <!-- <div class="action">
            <div class="action-great">
                <h2>Hi {{$auth.user.first_name}}, great to see you here!</h2>
                
            </div>
            <div class="action-eye">
                <h2>Your balance: ${{value}}</h2>
                
            </div>
        </div> -->
        <!-- <div class="movers">
            <div class="movers-top">
                <h4>Top movers</h4>
            </div>
           <div class="movers-view">
                <h4>View all assets</h4>
           </div>
        </div> -->
        <!-- <div class="movers-card" >
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
        </div> -->
        <!-- <hr class="mover-hr">
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
            
        </div> -->
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
      baseUrl: "https://paybay-invest.onrender.com/api/",
      portfolio:{},
      value:'',
      items:[],
      dates:[],
      prices:[],
      crypto_data:[],
      limit: 8,
      info:[],
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
              label: 'Data One',
              backgroundColor: '#f87979',
              data: [40, 39, 10, 40, 39, 80, 40]
            }
          ]
        },
        chartOptions: {
          responsive: true,
          maintainAspectRatio: false
        },
        passwordDetails:{
            old_password:'',
            password:'',
            password2:'',
        }
    };
  },
  computed:{
    

// constructor(limit) {
//   this.crypto_data = [...Array(10).keys()].map(() => ({ price_usd: Math.random() * 10 }));
//   this.limit = limit ?? 0;
// },

computedCrypto() {
  const data = this.limit ? this.crypto_data.slice(1, this.limit) : this.crypto_data.slice();
  for (let index = 0; index < data.length; index++) {
    data[index] = {
      ...data[index],
      price_usd: data[index].price_usd.toFixed(2)
    };
  }
  return data;
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
      async changePassword() {
        try {
          const response = await this.$axios.put(`https://paybay-invest.onrender.com/api//change-password/${this.$auth.user.id}/`,this.passwordDetails);
          this.$message({
            message: "Password Changed!",
            type: "success",
            });
            this.passwordDetails = {}
          console.log(response)
        } catch (error) {
            this.$message({
            message: error.response.data,
            type: "warning",
            });
          console.log(error);   
        }
      },
      
  },

  mounted() {
    this.getCommodities(),
    this.getPortfolio(),
    this.getRate()
    // this.getItems()
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
        background: #fcfcfc;
        height: auto;
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
        color: rgb(26, 26, 34);
        border-radius: 5px;
    }
    .movers-cards h6{
        margin-bottom: 0.5rem;
        color: rgb(26, 26, 34);
    }
    .movers-cards p{
        font-weight: 600;
        margin-bottom: 0.5rem;
        color: rgb(26, 26, 34);
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
        background: #f8fafc;
        border-radius: 5px;
        padding: 1rem;
        position: fixed;
        width: 20%;
        height: 88.5vh;
        margin-right: 60%;
    }
    .dash-leftsidebar-header{
        background: #f3f4f6;
        padding: 1rem;
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
       margin-left: 20%;
       width: 60%;
        position: absolute;
    }
    .dash-rightsidebar{
       text-align: center;
        border-radius: 5px;
        background: #f8fafc;
        position: fixed;
        margin-left: 80%;
        width: 20%;
        height: 88.5vh;
        
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
    .father{
        display: grid;
        grid-template-columns: 1fr 3fr 1fr;
        grid-gap: 2rem;
    }
    .modal{
        left: 30%;
        right: 30%;
        top: 5rem;
    }
    
    .modal-body input{
        display: block;
        margin-bottom: 0.5rem;
        width: 100%;
    }
    .modal-body form{
        padding: 1rem;
    }
    .modal-body form button{
        width: 100%;
        margin-top: 0.5rem;
        border-radius: 5px;
        background: #16a858;
        color: white;
        border: 2px solid #16a858;
    }
    .modal-header{
        padding: 0rem 1rem ;
    }
    .modal-header h1{
        color: #16a858;
    }



    @media(max-width:576px){
        .father{
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 2rem;
    }
        .dash{
        background: #fcfcfc;
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
        background: #f8fafc;
        height: auto;
        position: static;
        border-radius: 0px;
        padding: 10px;
        margin-left: 0px;
        margin-right: 0px;
    }
    .dash-leftsidebar-header{
        background: #f3f4f6;
        padding: 1rem;
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
        background: #f8fafc;
        height: auto;
        position: static;
        margin-left: 0px;
        margin-right: 0px;
        border-radius: 0px;
        margin-top: 1rem;
        text-align: center;
    }
    .dash-rightsidebar-header{
        padding: 10px;
    }
    .modal{
        left: 0%;
        right: 0%;
        top: 5rem;
    }
    }



    @media(min-width:577px) and (max-width:1200px){
        .modal{
        left: 15%;
        right: 15%;
        top: 5rem;
    }
        .father{
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 2rem;
    }
        .dash{
        background: #fcfcfc;
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
        background: #f8fafc;
        height: auto;
        position: static;
        border-radius: 0px;
        padding: 10px;
        margin-left: 0px;
        margin-right: 0px;
    }
    .dash-leftsidebar-header{
        background: #f3f4f6;
        padding: 1rem;
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
        background: #f8fafc;
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