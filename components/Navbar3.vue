<template>
    <div class="con">
        <nav class="navbar fixed-top con navbar-expand-lg ">
            <div class="container-fluid">
                <a class="navbar-brand" href="/"><img src="pay.jpeg" alt="logo"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <img src="/menu.png" alt="toggler">
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
                    
                </ul>
                <form class="d-flex button-group" role="search">
                    <p>Help</p>
                    <nuxt-link to="login"><button class="sign">Login</button></nuxt-link>
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
    border-radius: 3px;
    font-size: 15px;
    padding: 5px 15px;
    color: rgb(28, 28, 30);
    background: rgb(255, 255, 255);
    border-color: rgb(39, 209, 127);
}
.navbar-toggler{
    background: #27d17f;
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
.d-flex{
    display: block !important;
    text-align: center !important;
}
.button-group button{
    width: 100%;
    margin-top: 1rem;
    
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