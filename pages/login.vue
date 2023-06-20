<template>
  <div>
    <Navbar2/>
    <div class="login">
      <h3>User Login</h3>
      <form action="" @submit.prevent="userLogin()" method="post">
        <label for="email">Email</label>
        <input type="email" v-model="loginInfo.email" required >
        <label for="Password" class="mt-3">Password</label>
        <input type="password" name="" id="" v-model="loginInfo.password" required>
        <button class="login-button" type="submit">Login</button>
        <nuxt-link to="signup"><span class="account-button">Don't have an account yet?</span></nuxt-link>
      </form>
    </div>
  </div>
</template>

<script>
import ElementUI from "element-ui";
  import "element-ui/lib/theme-chalk/index.css";
export default {
  components: {
      ElementUI,
    },
  data() {
    return {
      loginInfo: {
        email: '',
        password: ''
      },
      login:true,
      sig:false,
      baseUrl: "https://paybay-6ipm.onrender.com/api/",
      
    }
  },
  mounted(){
      
  },
  methods: {
    async userLogin() {
      try {
        
        let response = await this.$auth.loginWith("local", {
          data: this.loginInfo,
        });
        console.log(response);
        console.log(this.$auth.user)
        console.log(this.$auth.loggedIn)
        this.$router.push("/dashboard");
        this.$message({
            message: "Welcome back!",
            type: "success",
            });

      } catch (error) {
        this.$message({
            message: error.response.data,
            type: "warning",
            });
        
      }
    },
   
   
    
  }
}
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .login{
    width: 25%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5rem;
    margin-bottom: 10rem;
  }
  .login h3{
    font-size: 23px;
    font-weight: 500;
    margin-bottom: 30px;
  }
  .login input{
    display: block;
    width: 100%;
    background-color: rgb(230, 230, 230);
    color: rgb(51, 51, 51);
    padding: 10px 10px 10px;
    border-radius: 3px;
    border: none;
  }
  .login label{
    color: rgb(66, 66, 66);
    display: inline-block;
    font-size: 13px;
    font-weight: 600;
    line-height: 1.15384em;
    margin-bottom: 6px;
  }
  .login button{
    display: block;
    width: 100%;
  }
  .login-button{
    background-color: rgb(39, 209, 127);
    border: none;
    border-radius: 3px;
    color: rgb(28, 28, 30);
    font-weight: 600;
    padding: 5px 0px;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .account-button{
    color: rgb(28, 28, 30);
    background-color: rgb(255, 255, 255) !important;
    border-width: 2px;
    border-style: solid;
    padding: 5px 0;
    display: block;
    text-align: center;
    border-color: rgb(39, 209, 127);
  }
  .confirm{
    text-align: center;
    margin-top: 1rem;
  }
  .confirm p{
    color: #333333;
    font-size: 15px;
  }
  .resend{
    color: rgb(0, 128, 79) !important;
  }



  @media(max-width:576px){
    .login{
    width: 100%;
    padding-right: 10px !important;
    padding-left: 10px;
    /* margin-left: 10px;
    margin-right: 10px; */
    margin-top: 5rem;
    margin-bottom: 10rem;
  }
  }




  @media(min-width:577px) and (max-width:1200px){
    .login{
    width: 50%;
    padding-right: 10px !important;
    padding-left: 10px;
    /* margin-left: 10px;
    margin-right: 10px; */
    margin-top: 5rem;
    margin-bottom: 10rem;
  }
  }
</style>