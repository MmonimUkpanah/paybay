<template>
    <div class="con">
        <nav class="navbar fixed-top con navbar-expand-lg ">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"><img src="pay.jpeg" alt="logo"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <img src="/menu.png" alt="toggler">
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <input class="search" placeholder="Search" type="search" name="" id="">
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" @click="displayDropdown()" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Invest
                        </a>
                        <ul class="dropdown-menu" v-if="dropdown">
                            <div>
                                <li><h6>Top selling cryptocurrencies</h6> </li>
                                <li><img src="bitcoin.png" alt=""> Bitcoin </li>
                                <li> <img src="ethereum.png" alt=""> Ethereum</li>
                                <li> <img src="tether.png" alt=""> Tether</li>
                                <li> <img src="bnb.png" alt=""> BNB</li>
                            </div>
                            <div>
                                <li><h6>Top selling stocks</h6> </li>
                                <li><img src="apple.png" alt=""> Apple </li>
                                <li> <img src="tesla.png" alt=""> Tesla</li>
                                <li> <img src="pay.png" alt=""> Paypal</li>
                                <li> <img src="twitter.png" alt=""> Twitter</li>
                            </div>
                            
                        </ul>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="about">Company</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link " href="#help">Help</a>
                    </li>
                </ul>
                <form class="d-flex button-group" role="search">
                    <nuxt-link to="login"><button class="login">Login</button></nuxt-link>
                    <nuxt-link to="signup"><button class="sign">Signup</button></nuxt-link>
                </form>
                </div>
            </div>
        </nav>
    </div>
</template>


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
    margin-left: 5rem;
    margin-right: 5rem;
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
    background-color: #27d17f;
    color: white;
    border-radius: 5px;
    font-size: 15px;
    padding: 5px 15px;
    border: none;
}
.navbar-toggler{
    background: #27d17f;
    padding: 7px 10px;
}
.search{
    display: none;
}
.dropdown-menu{
    width: 20rem;
    padding: 1rem;
    margin-left: -5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
}
.dropdown-menu li{
    margin-bottom: 1rem;
}
.dropdown-menu img{
    width: 1.5rem;
    margin-right: 0.5rem;
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
.button-group{
    margin-top: 0;
}
.button-group button{
    display: block;
    width: 100%;
    margin-bottom: 1rem;
}
.d-flex{
    display: block !important;
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
.dropdown-menu{
    width: auto;
    padding: 1rem;
    margin-left: 0rem;
    display: grid;
    grid-template-columns: 1fr;
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
.button-group{
    margin-top: 0;
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
.d-flex{
    display: block !important;
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



<script>
export default {
    data(){
        return{
            dropdown:false,
        }
    },
    methods:{
        displayDropdown(){
            this.dropdown = !this.dropdown
        }
    }
}
</script>