<template>
    <div class="con">
        <nav class="navbar fixed-top con navbar-expand-lg ">
            <div class="container-fluid">
                <a class="navbar-brand" href="dashboard"><img src="pay.jpeg" alt="logo"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <img src="/menu.png" alt="toggler">
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <nuxt-link class="nav-link" to="dashboard">Home</nuxt-link>
                    </li>
                    <li class="nav-item">
                    <nuxt-link class="nav-link" to="portfolio">Portfolio</nuxt-link>
                    </li>
                    
                </ul>
                <form class="d-flex button-group" role="search">
                    <nuxt-link to="deposit"><button class="log">Deposit</button></nuxt-link>
                    <button class="logout" @click="$auth.logout()">Logout</button>
                    <img src="grey.svg" alt="">
                </form>
               
                </div>
            </div>
        </nav>
    </div>
</template>


<script>
export default {
  data(){
    return{
      items:[],
      length:null
    }
  },
//   mounted(){
//     this.getCart()
//   },
  methods:{
    // viewCart(){
    //   if (this.$auth.loggedIn == true){
    //     this.$router.push('/cart')
    //   }else{
    //     this.$router.push('/login')
    //   }
    // },
    async logOut() {
      try {
        let response = await this.$auth.logoutWith("local");
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    },
    //     getCart() {
    //   this.$axios.get("https://direshop777.herokuapp.com/api/get-carts/")
    //     .then((response) => {
          
    //       this.items = response.data;
    //       this.length = this.items.length
    //       console.log(this.items.length)
    //     });
    // },
  }
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.navbar{
    background: white;
}
.con{
    margin-left: 10rem;
    margin-right: 10rem;
    padding: 20px 0;
    
}
.navbar-brand img{
    width: 136px;
}
.navbar-toggler img{
    width: 1.5rem;
    margin-top: -10px;
}
.nav-link{
    color: black;
    font-size: 15px;
    font-weight: 600;
    margin-right: 1rem;
    text-decoration: none;
}
.nav-link:hover{
    border-bottom: 2px solid #27d17f !important;
}
.navbar-nav{
    margin-left: 20%;
}
.login{
    background-color:#f3f3f2 ; 
    color: black;
    border-radius: 5px;
    font-size: 15px;
    padding: 5px 15px;
    border: none;
    margin-right: 0.5rem;
}
.sign{
    border-radius: 3px;
    font-size: 15px;
    padding: 5px 15px;
    color: white;
    background: #16a858;
    border: 1px solid #16a858;
}
.logout{
    background: red;
    color: white;
    border: none;
    border-radius: 3px;
    font-size: 15px;
    padding: 5px 15px;
    margin-left: 1rem;
    margin-right: 1rem;
}
.log{
    border-radius: 3px;
    font-size: 15px;
    padding: 5px 15px;
    color: #16a858;
    background: white;
    border: 1px solid #16a858;
    margin-left: 1rem;
    margin-right: 1rem;
}
.navbar-toggler{
    background: #16a858;
    padding: 7px 10px;
}
.search{
    display: none;
}
.button-group p{
    color: rgb(51, 51, 51);
    font-weight: 600;
    margin-right: 1rem;
    margin-top: 0.2rem;
}




@media(max-width:567px){
    .con{
    margin-left: 0;
    margin-right: 0;
    padding-left: 10px;
    padding-right: 10px;
}
.navbar-nav{
    margin-left: 0%;
    margin-top: 1.5rem;
}
.nav-link{
    color: black;
    font-size: 20px;
    font-weight: 600;
    margin-right: 1rem;
    margin-bottom: 1.5rem;
}
.search{
    display: block;
    width: 100%;
    border: none;
    border-radius: 5px;
    background-color: #f3f3f2;
    padding: 10px 15px;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
}

.login{
    background-color:#f3f3f2 ; 
    color: black;
    border-radius: 5px;
    font-size: 15px;
    padding: 12px 15px;
    border: none;
    margin-right: 0.5rem;
    width: 50%;
}
.sign{
    background-color: #27d17f;
    color: white;
    border-radius: 5px;
    font-size: 15px;
    padding: 12px 15px;
    border: none;
    width: 50%;
}
.button-group button{
    display: block;
    width: 100%;
    margin-bottom: 1rem;
}
.log{
    border-radius: 3px;
    font-size: 15px;
    padding: 5px 15px;
    color: #16a858;
    background: white;
    border: 1px solid #16a858;
    margin-left: 0rem;
    margin-right: 0rem;
}
.d-flex{
    display: block !important;
    text-align: center !important;
}
.button-group button{
    width: 100%;
    margin-top: 1rem;
    
}
.logout{
    background: red;
    color: white;
    border: none;
    border-radius: 3px;
    font-size: 15px;
    padding: 5px 15px;
    margin-left: 0rem;
    margin-right: 0rem;
}
}

@media(min-width: 577px) and (max-width:768px){
    .con{
    margin-left: 0;
    margin-right: 0;
    padding-left: 10px;
    padding-right: 10px;
}
.navbar-nav{
    margin-left: 0%;
    margin-top: 1.5rem;
}
.nav-link{
    color: black;
    font-size: 20px;
    font-weight: 600;
    margin-right: 1rem;
    margin-bottom: 1.5rem;
}
.search{
    display: block;
    width: 100%;
    border: none;
    border-radius: 5px;
    background-color: #f3f3f2;
    padding: 10px 15px;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
}

.login{
    background-color:#f3f3f2 ; 
    color: black;
    border-radius: 5px;
    font-size: 15px;
    padding: 12px 15px;
    border: none;
    margin-right: 0.5rem;
    width: 50%;
}
.sign{
    background-color: #27d17f;
    color: white;
    border-radius: 5px;
    font-size: 15px;
    padding: 12px 15px;
    border: none;
    width: 50%;
}
.d-flex{
    display: block !important;
    text-align: center !important;
}
.button-group button{
    width: 100%;
    margin-top: 1rem;
    
}
.log{
    border-radius: 3px;
    font-size: 15px;
    padding: 5px 15px;
    color: #16a858;
    background: white;
    border: 1px solid #16a858;
    margin-left: 0rem;
    margin-right: 0rem;
}
.logout{
    background: red;
    color: white;
    border: none;
    border-radius: 3px;
    font-size: 15px;
    padding: 5px 15px;
    margin-left: 0rem;
    margin-right: 0rem;
}
}


@media(min-width: 769px) and (max-width:1200px){
    .con{
    margin-left: 0;
    margin-right: 0;
    padding-left: 10px;
    padding-right: 10px;
}
.navbar-nav{
    margin-left: 15%;
}
}

</style>