<template>
  <div>
    <div>
        <Navbar/>
    </div>
    <div class="us">
        <div class="us-text">
            <h4>ABOUT US</h4>
            <h2>Investing.</h2>
            <h2>Now available to everyone.</h2>
            <p>At Pay Bay Invest, we see investing differently. Today's financial system is complex, exclusive and expensive - making it hard for the typical person to start investing.</p>
            <p>So, we're building a platform without digital walls and complex barriers. A platform that empowers you to see new possibilities for your money - and helps make them a reality.</p>
        </div>
        <div class="us-img">
            <img src="mavin.jpg" alt="">
        </div>
    </div>
    <hr>
    <div class="leads">
        <div class="lead-img">
            <img src="lead1.jpg" alt=""> 
            <p>Christian Bentley</p>
            <p>CEO</p>
        </div>
        <div class="lead-img">
            <img src="lead3.jpg" alt="">
            <p>Precious Fredrich</p>
            <p>CTO</p>
        </div>
        <div class="lead-img">
            <img src="lead2.jpg" alt=""> 
            <p>Stanley Chukwuemeka</p>
            <p>HR</p>
        </div>
    </div>
    <hr>
    <div class="we">
        <div class="we-text">
            <h2>Who we are</h2>
            <p>Pay Bay Invest was founded in Vienna, Austria with the aim of making investing accessible for everyone. Our goals since day one was to reimagine what it means to invest, by making simple, easy to use financial products for everyone.</p>
            <p>Now, 8 years later, and with more than 730 team members and 3.5million users, we're one of the fastest growing fintechs in Europe. With a PSD2 payment service provider licence, a state-of-the-art security and streamlined user experience, we make it possible for both first-time investors, and seasoned experts to invest in what they believe in.</p>
        </div>
        <div class="we-card">
            <div class="card">
                <h3>730+</h3>
                <p>Team members</p>
            </div>
            <div class="card">
                <h3>50+</h3>
                <p>Nationalities in the team</p>
            </div>
            <div class="card">
                <h3>3,500,000</h3>
                <p>Users worldwide</p>
            </div>
        </div>
    </div>
    <hr>
    <div class="change">
        <h2>We're changing the way the world views investing</h2>
        <p>Pay Bay Invest is backed by a team of world-class experts and the best technology talent. To stay at the forefront of innovation, we're always working on strengthening our position as Europe's leading digital asset platform.</p>
        <button>Join our team</button>
    </div>
    <hr>
    <div class="do">
        <h2>What we do</h2>
        <p>Our user-friendly, trade-everything platform empowers you to invest in the stocks, crptocurrencies and metals you want, with any amount of money.</p>
        <div class="do-cards">
            <div>
                <p><img src="bullet.svg" alt=""> Buy, sell or swap 2000+ digital assets like crypto, stocks, precious metals, ETFs and crypto indices.</p>
            </div>
            <div>
                <p><img src="bullet.svg" alt=""> Automate regular investments with savings plans.</p>
            </div>
            <div>
                <p><img src="bullet.svg" alt=""> Invest in any asset on Pay Bay Invest from $1</p>
            </div>
            <div>
                <p><img src="bullet.svg" alt=""> Wide range of payment and payout providers.</p>
            </div>
            <div>
                <p><img src="bullet.svg" alt=""> Use EUR, CHF, GBP, USD, PLN, DKK, SEK, HUF, CZK or TRY to pay or cash out.</p>
            </div>
            <div>
                <p><img src="bullet.svg" alt=""> We are fully licenced.</p>
            </div>
        </div>
        <div class="do-button">
            <nuxt-link to="signup"><button>Start Investing</button></nuxt-link>
        </div>
    </div>
    <hr>
    <Footer/>
  </div>
</template>

<script>
export default {
    auth: false,
}
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .us{
        margin-top: 5rem;
        margin-left: 5rem;
        margin-right: 5rem;
        display: grid;
        margin-bottom: 2rem;
        grid-template-columns: 1fr 1fr;
    }
    .us-text{
        padding-right: 7rem;
    }
    .us-text h4{
         color: #8b8b8b;
         font-size: 18px;
         margin-bottom: 1rem;
    }
    .us-text h2{
        font-size: 50px;
        margin-bottom: 1rem;
    }
    .us-text p{
        margin-bottom: 1rem;
    }
    .us-img img{
        width: 100%;
    }
    .we{
        margin-top: 5rem;
        margin-left: 5rem;
        margin-right: 5rem;
    }
    .we h2{
        font-size: 50px;
        margin-bottom: 1rem;
    }
    .we p{
        font-size: 18px;
        margin-bottom: 1rem;
    }
    .we-card{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 2rem;
        margin-top: 2rem;
        margin-bottom: 5rem;
    }
    .we-card .card{
        background: #f8f8f8;
        text-align: center;
        padding: 1.5rem;
    }
    .we-card h3{
        margin-bottom: 1rem;
    }
    .leads{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        margin-left: 5rem;
        margin-top: 5rem;
        margin-bottom: 5rem;
        margin-right: 5rem;
    }
    .lead-img{
        text-align: center;
    }
    .lead-img img{
        height: 15rem;
        width: 15rem;
        border-radius: 50%;
    }
    .lead-img p{
        margin-top: 1rem;
        font-weight: 600;
    }
    .change{
        margin: 5rem;
        text-align: center;
    }
    .change h2{
        font-size: 50px;
        margin-bottom: 1rem;
    }
    .change button{
        background-color: #27d17f;
        border: 1px solid #27d17f;
        color: white;
        padding: 5px 20px;
        border: none;
        border-radius: 5px;
        margin-top: 1rem;
    }
    .do{
        margin: 5rem;
    }
    .do h2{
        font-size: 50px;
        margin-bottom: 1rem;
    }
    .do-cards{
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-top: 2rem;
        column-gap: 2rem;
        row-gap: 1rem;
    }
    .do-cards img{
        margin-right: 0.5rem;
    }
    .do-button{
        text-align: center;
        margin-top: 2rem;
    }
    .do-button button{
        background-color: #27d17f;
        border: 1px solid #27d17f;
        color: white;
        padding: 5px 20px;
        border: none;
        border-radius: 5px;
    }



    @media(max-width:576px){
        .us{
        margin-top: 5rem;
        margin-left: 10px;
        margin-right: 10px;
        display: grid;
        margin-bottom: 2rem;
        grid-template-columns: 1fr;
        row-gap: 1.5rem;
        text-align: center;
    }
    .us-text{
        padding-right:0;
    }
    .we{
        margin-top: 5rem;
        margin-left: 10px;
        margin-right: 10px;
        text-align: center;
    }
    .we-card{
        display: grid;
        grid-template-columns: 1fr;
        row-gap: 2rem;
        margin-top: 2rem;
        margin-bottom: 5rem;
    }
    .leads{
        display: grid;
        grid-template-columns: 1fr;
        row-gap: 2rem;
        margin-left: 10px;
        margin-top: 5rem;
        margin-bottom: 5rem;
        margin-right: 10px;
    }
    .lead-img img{
        height: 10rem;
        width: 10rem;
        border-radius: 50%;
    }
    .change{
        margin: 5rem 10px;
        text-align: center;
    }
    .change button{
        background-color: #27d17f;
        border: 1px solid #27d17f;
        color: white;
        padding: 5px 20px;
        border: none;
        border-radius: 5px;
        margin-top: 1rem;
        width: 100%;
    }
    .do{
        margin: 5rem 10px;
    }
    .do-cards{
        display: grid;
        grid-template-columns: 1fr;
        margin-top: 2rem;
        column-gap: 2rem;
        row-gap: 1rem;
    }
    .do-button button{
        background-color: #27d17f;
        border: 1px solid #27d17f;
        color: white;
        padding: 5px 20px;
        border: none;
        border-radius: 5px;
        width: 100%;
    }
    }



    @media(min-width:577px) and (max-width:1200px){
        .us{
        margin-top: 5rem;
        margin-left: 10px;
        margin-right: 10px;
        display: grid;
        margin-bottom: 2rem;
        grid-template-columns: 1fr;
        row-gap: 1.5rem;
        text-align: center;
    }
    .us-text{
        padding-right:0;
    }
    .we{
        margin-top: 5rem;
        margin-left: 10px;
        margin-right: 10px;
        text-align: center;
    }
    .leads{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        margin-left: 10px;
        margin-top: 5rem;
        margin-bottom: 5rem;
        margin-right: 10px;
    }
    .lead-img img{
        height: 10rem;
        width: 10rem;
        border-radius: 50%;
    }
    .change{
        margin: 5rem 10px;
        text-align: center;
    }
    .do{
        margin: 5rem 10px;
        
    }
    }
</style>