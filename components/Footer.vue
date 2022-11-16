<template>
  <div class="footer">
    <div class="logo">
        <img src="pay.jpeg" alt="">
    </div>
    <div class="footer-grid">
        <div class="footer-grid-one">
            <h3>Invest</h3>
            <p>Cryptocurrencies</p>
            <p>Crypto Indices</p>
            <p>Stocks*</p>
            <p>ETFs</p>
            <p>Metals</p>
            <p>Commodities</p>
        </div>
        <div class="footer-grid-one">
            <h3>Earn</h3>
            <p>Staking</p>
            <p>BEST</p>
            <p>Tell-a-Friend</p>
            <p>Affiliate programme</p>
            <p>Ambassador programme</p>
        </div>
        <div class="footer-grid-one">
            <h3>Learn</h3>
            <p>Academy</p>
            <p>Maker and taker fees</p>
            <p>6 questions about Bitcoin</p>
            <p>Buy my first digital assets</p>
            <p>What are NFTs</p>
        </div>
        <div class="footer-grid-one">
            <h3>Features</h3>
            <p>Payments</p>
            <p>Savings plan</p>
            <p>Swap</p>
            <p>Plus</p>
        </div>
    </div>
    <div class="footer-grid">
        <div class="footer-grid-one">
            <h3>Products</h3>
            <p>Card</p>
            <p>Pay Bay Invest To Go</p>
            <p>BEST</p>
            <p>Pantos</p>
            <p>App</p>
            <p>Pay Bay Invest Custody</p>
        </div>
        <div class="footer-grid-one">
            <h3>Pay Bay Invest Pro</h3>
            <p>Home</p>
            <p>Markets</p>
            <p>Fees</p>
            <p>Pro API</p>
            <p>Institutions & Partners</p>
        </div>
        <div class="footer-grid-one">
            <h3>White Label</h3>
            <p>Home</p>
            <p>How it works</p>
            <p>Asset offering</p>
            <p>Use cases</p>
            
        </div>
        <div class="footer-grid-one">
            <h3>Get the app</h3>
        </div>
    </div>
    <div class="footer-closer">
        <span>Legal notice</span> <span>Privacy policy</span> <span>Terms & Conditions</span>
        <span>Whistleblower</span> <span>Bug Bounty</span> <span>Cookie settings</span>
        <div class="bitpanda">
           <span>&#169; 2022 Pay Bay Invest</span> 
        </div>
        
    </div>
  </div>
</template>



<style scoped>
    .footer{
        margin-top: 5rem;
    }
    .logo{
        margin-left: 5rem;
        margin-right: 5rem;
    }
    .logo img{
        width: 136px;
    }
    .footer-grid{
        margin-top: 1rem;
        margin-right: 5rem;
        margin-left: 5rem;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    .footer-grid h3{
        font-size: 17px;
        font-weight: 500;
        margin-bottom: 1rem;
    }
    .footer-grid p{
        font-size: 14px;
        margin-top: -0.5rem;
    }
    .footer-closer{
        margin-top: 3rem;
        background: black;
        color: white;
        display: grid;
        padding: 1rem 5rem;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 2fr;
    }
    .bitpanda{
        text-align: right;
    }


    @media (max-width:576px) {
        .logo{
        margin-left: 10px;
        margin-right: 10px;
    }
    .footer-grid{
        margin-top: 1rem;
        margin-right: 10px;
        margin-left: 10px;
        display: grid;
        grid-template-columns: 1fr 1fr ;
        row-gap: 1rem;
    }
    .footer-closer{
        margin-top: 3rem;
        background: black;
        color: white;
        display: grid;
        padding: 1rem 10px;
        grid-template-columns: 1fr 1fr;
        column-gap: 1rem;
        row-gap: 1rem;
    }
    .bitpanda{
        text-align: left;
    }
    }



    @media (min-width:577px) and (max-width:1200px) {
        .logo{
        margin-left: 10px;
        margin-right: 10px;
    }
    .footer-grid{
        margin-top: 1rem;
        margin-right: 10px;
        margin-left: 10px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        row-gap: 1rem;
    }
    .footer-closer{
        margin-top: 3rem;
        background: black;
        color: white;
        display: grid;
        padding: 1rem 10px;
        grid-template-columns: 1fr 1fr 1fr 1fr ;
        column-gap: 1rem;
        row-gap: 1rem;
    }
    .bitpanda{
        text-align: left;
    }
    }
</style>