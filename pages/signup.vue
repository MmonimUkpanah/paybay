<template>
    <div>
      <Navbar3/>
      <div class="login">
        <h3>Create your Pay Bay Invest account</h3>
        <form method="post" @submit.prevent="signUp">
            <div class="name">
              <div>
                <label for="">First Name</label>
                <input type="text" required v-model="signupinfo.first_name"> 
              </div>
              <div>
                <label for="">Last Name</label>
                <input type="text" required v-model="signupinfo.surname">
              </div>
            </div>
          <label for="">Email</label>
          <input type="email"  required v-model="signupinfo.email">
          <label for="">Date of Birth</label>
          <input type="date"  required v-model="signupinfo.dob">
          <label for="">Phone Number</label>
          <input type="number"   required v-model="signupinfo.phone">
          <label for="">Address</label>
          <input type="text" required v-model="signupinfo.address">
          <label for="">Postal Code</label>
          <input type="number" required v-model="signupinfo.postal_code">
          <label for="">Stage</label>
          <select class="form-select" aria-label="Default select example" v-model="signupinfo.stage">
            <option selected >Stage</option>
            <option value="Promo">Promo</option>
            <option value="Gold">Gold</option>
            <option value="Silver">Silver</option>
            <option value="Platinum">Platinum</option>
          </select>
          <label for="">Password</label>
          <input type="password" name="" id="" required  v-model="signupinfo.password">
          <label for=""> Confirm password</label>
          <input type="password" name="" id="" required   v-model="signupinfo.password2">
          <button type="submit" class="login-button">Create Account</button>
          <nuxt-link to="login"><span class="account-button">Already have an account?</span></nuxt-link> 
         
          
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import ElementUI from "element-ui";
  import "element-ui/lib/theme-chalk/index.css";
  export default {
    auth:false,
    components: {
      ElementUI,
    },
    data() {
      return {
        baseUrl: "https://paybay-invest.herokuapp.com/api/",
        signupinfo:{
            email:'',
            first_name:'',
            surname:'',
            password:'',
            password2:'',
            phone:'',
            dob:'',
            address:'',
            postal_code:'',
            profile_value: 120000,
            stage:""
        }
      };
    },
    methods: {
      async signUp() {
        try {
          const response = await this.$axios.post(
            this.baseUrl + "register/",
            this.signupinfo
          )
          this.$router.push("/login")
          this.$message({
            message: "Account created successfully!",
            type: "success",
            });
          console.log(response);
        } catch (error) {
          console.log(error);
          this.$message({
            message: error.response.data,
            type: "warning",
            });
        } finally {
          this.signupinfo = {};
        }
      },
      
    },
  
    mounted() {
      
    },
  };
  </script>
  
  <style scoped>
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    select{
      width: 100%;
      display: block;
      background-color: transparent;
      color: rgba(0, 0, 0, 0.87);
      padding: 10px 10px 10px;
      border-radius: 3px;
      border: 0.5px solid initial;
      margin-bottom: 1rem;
    }
    .login{
      width: 40%;
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
      background-color: transparent;
      color: rgba(0, 0, 0, 0.87);
      padding: 10px 10px 10px;
      border-radius: 3px;
      border: 0.5px solid initial;
      margin-bottom: 1rem;
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
      border-color: rgb(39, 209, 127);
      display: block;
      text-align: center;
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
    .name{
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 1rem;
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