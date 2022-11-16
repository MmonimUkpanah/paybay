<template>
  <div>
    <Navbar/>
    <div class="header">
      <div class="mgm" style="display: none;">
        <div class="txt" style="color:black;">Someone from <b></b> just bought <a href="javascript:void(0);" onclick="javascript:void(0);"></a></div>
      </div>
      <div class="header-left">
        <h1>Invest in what you believe in </h1>
        <nuxt-link to="login"><button>Start Investing</button></nuxt-link>
      </div>
      <div class="header-right">
        <div class="header-img">
          <img src="/Hero.png" alt="hero-image">
        </div>
        <div class="header-text">
          <div class="header-text-one">
            <div class="header-text-img">
              <img src="/btc.svg" alt="">
            </div>
            <div class="header-text-first">
              <h5>Bitcoin</h5>
              <p>21,356.96</p>
            </div>
            <div class="header-text-second">
              <h5>+2.87%</h5>
              <p>595.84</p>
            </div>
          </div>
          <div class="header-text-one">
            <div class="header-text-img">
              <img src="/tsla.svg" alt="">
            </div>
            <div class="header-text-first">
              <h5>Tesla</h5>
              <p>223.20</p>
            </div>
            <div class="header-text-second">
              <h5>+1.98%</h5>
              <p>4.33</p>
            </div>
          </div>
          <div class="header-text-one">
            <div class="header-text-img">
              <img src="/xau.svg" alt="">
            </div>
            <div class="header-text-first">
              <h5>Gold</h5>
              <p>54.18</p>
            </div>
            <div class="header-text-second">
              <h5>+1.34%</h5>
              <p>0.72</p>
            </div>
          </div>
          <div class="header-summary">
            <p>Past performance is no indication of future performance.</p>
          </div>
          
        </div>
      </div>
    </div>
    <div class="reg">
      <div class="reg1">
        <img src="/Regulated.svg" alt="">
        <div class="reg-text">
          <h2>Regulated</h2>
        <p><span class="focused">MiFID II</span>  investment firm.
        </p>
        <p> <span class="focused">PSD2</span> payment institution.</p>

        <a href="">View licences</a>
        </div>
        
      </div>
      <div class="reg1">
        <img src="/Secure.svg" alt="">
        <div class="reg-text">
          <h2>Secure</h2>
          <p><span class="focused">Fully compliant with</span> AML5.
          </p>
          <p>Funds secured in offline wallets.</p>

          <a href="">Read more</a>
        </div>
        
      </div>
      <div class="reg2">
        <img src="/Trusted.svg" alt="">
        <div class="reg-text">
          <h2>Trusted</h2>
          <p><span class="focused"> 3.5+ million</span> happy users.
          </p>
          <p>Excellent Trustpilot rating.</p>

          <a href="">Read reviews.</a>
        </div>
        
      </div>
      
    </div>
    <hr class="invest-hr">
    <div class="invest">
      
      <div class="invest-header">
        <h4>INVEST</h4>
        <h2>All your investments.</h2>
        <h2>All on Pay Bay Invest.</h2>
      </div>
      <div class="invest-grid">
        <div class="invest-options">
          <h4>Cryptocurrencies</h4>
          <p>Buy, sell and swap the cryptocurrencies you want anytime, anywhere</p>
          <img class="crypto-img" src="crypto.png" alt="">
        </div>
        <div class="invest-options">
          <h4>Stocks*</h4>
          <p>Invest in fractions of your favorite companies without committing to a whole share</p>
          <img class="crypto-img" src="stocks.png" alt="">
        </div>
        <div class="invest-options">
          <h4>ETFs*</h4>
          <p>Invest in fractions of your favorite ETFs* without committing to a whole share</p>
          <img class="crypto-img" src="ETFs.png" alt="">
        </div>
        <div class="invest-options">
          <h4>Commodities*</h4>
          <p>Fortify your portfolio with commodities* and shield it against inflation.</p>
          <img class="crypto-img" src="Commodities.png" alt="">
        </div>
        <div class="invest-options">
          <h4>Crypto Indices</h4>
          <p>Auto-invest in the whole crypto market with a single click.</p>
          <img class="crypto-img" src="indices.png" alt="">
        </div>
        <div class="invest-options">
          <h4>Precious Metals</h4>
          <p>Diversify your portfolio by investing in physically-backed precious metals.</p>
          <img class="crypto-img" src="metals.png" alt="">
        </div>
      </div>
    </div>

    <!-- carousels -->
    <!-- <div class="work">
      <div class="work-header">
        <h4>HOW IT WORKS</h4>
        <h2>Get started in minutes</h2>
      </div>
      <Firstslide/>
    </div> -->
    
    <div class="features">
      <div class="features-header">
        <h4>Features</h4>
        <h2>More than an investment platform</h2>
      </div>
      <div class="features-card">
        <div class="features-text">
          <span>
            PAY BAY INVEST CARD
          </span>
          <h2>Apple Pay meets Pay Bay Invest Card</h2>
          <p>Pay Bay Invest Card is the easy way to spend your assets anywhere you want-in-real-time. And it just got easier. Starting today, Apple Pay is available to all our Apple customers.</p>
          <a href="">Read more</a>
        </div>
        <div class="features-img">
          <img src="paybay-preview.png" alt="">
        </div>
      </div>
      <div class="features-button">
          <button>See all features</button>
      </div>

    </div>
    <div class="learn">
      <div class="learn-header">
        <h4>INVEST</h4>
        <h2>Boost your passive income sources</h2>
      </div>
      <div class="learn-cards">
        <div class="learn-first">
          <!-- <span>PAY BAY INVEST BLOG</span> -->
          <h2>Promo</h2>
          <!-- <a href="">Visit Blog</a> -->
          <p>Minimum Investment: $1,000</p>
          <img src="blog.png" alt="">
        </div>
        <div class="learn-first">
          <!-- <span>PAY BAY INVEST BLOG</span> -->
          <h2>Silver</h2>
          <!-- <a href="">Visit Blog</a> -->
          <p>Minimum Investment: $2,000</p>
          <img src="blog.png" alt="">
        </div>
        <div class="learn-second">
          <!-- <span>PAY BAY INVEST ACADEMY</span> -->
          <h2>Gold</h2>
          <!-- <a href="">Visit Academy</a> -->
          <p>Minimum Investment: $5,000</p>
          <img src="academy.png" alt="">
        </div>
        <div class="learn-second">
          <!-- <span>PAY BAY INVEST ACADEMY</span> -->
          <h2>Platinum</h2>
          <!-- <a href="">Visit Academy</a> -->
          <p>Minimum Investment: $15,000</p>
          <img src="academy.png" alt="">
        </div>
      </div>
    </div>
    <div class="reviews">
      
    </div>
    <div class="reg-header" id="help">
      <h4>HELP</h4>
      <h2>Questions? We are here for you</h2>
    </div>
    <div class="reg">
      <div class="reg1">
        <img src="/Helpdesk.svg" alt="">
        <div class="reg-text">
          <h2>Helpdesk</h2>
        <p>Our Pay Bay Invest Helpdesk is loaded with in-depth articles to help you troubleshoot problems or learn more on your own.
        </p>
       

        <span>View licences</span>
        </div>
        
      </div>
      <div class="reg1">
        <img src="/Community.svg" alt="">
        <div class="reg-text">
          <h2>Community</h2>
          <p>Join our online community so that you can be the first to hear about company news, new products and much more.
          </p>
          

          <span>Join us</span>
        </div>
        
      </div>
      <div class="reg2">
        <img src="/us.svg" alt="">
        <div class="reg-text">
          <h2>Contact us</h2>
          <p>Want to get in contact with us? We are always available to lend a helping hand through our contact form - no matter the issue
          </p>
          

          <span data-bs-toggle="modal" data-bs-target="#exampleModal">Contact us.</span>
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h3 class="modal-title fs-5" id="exampleModalLabel">Contact Us</h3>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <form method="post" @submit.prevent="contact">
                    <label for="">Name</label>
                    <input type="text" v-model="contactForm.name">
                    <label for="">Email</label>
                    <input type="text" v-model="contactForm.email">
                    <label for="">Query</label>
                    <textarea name="" id=""  v-model="contactForm.query"></textarea>
                    <button type="submit">Submit</button>
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      
    </div>
    <div class="disclaimer">
      <p>*Pay Bay Invest Stocks enables investing in fractional stocks. Fractional stocks in Europe are always enabled via a contract which replicates the underlying stock or ETF (financial instruments pursuant to section 1 item 7 lit. d WAG 2018). Investing in stocks and ETFs carries risks. For more details see the prospectus at paybayinvest.com.</p>
    </div>

    <div class="counter">
      <div>
        <h2 class="scroll-counter" data-counter-time="2500">5000</h2>
        <h2>Withdrawals</h2>
      </div>
      <div>
        <h2 class="scroll-counter" data-counter-time="5000">1000</h2>
        <h2>Investors</h2>
      </div>
      <div >
        <h2 class="scroll-counter" data-counter-time="5000">700</h2>
        <h2>Satisfied Clients</h2>
      </div>
    </div>
    <div class="featured">
      <hr>
      <div class="featured-img">
        <p>Featured in</p>
        <img src="Forbes.svg" alt="">
        <img src="Bloomberg.svg" alt="">
        <img src="TC.svg" alt="">
        <img src="CNBC.svg" alt="">
        <img src="busy.svg" alt="">
      </div>
      <hr>
    </div>
    <!-- <a
        href="https://wa.me/+16612383185"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fab fa-whatsapp whatsapp-icon"></i>
      </a> -->
      <a  class="whatsapp_float" target="_blank" rel="noopener noreferrer" href="https://wa.me/+18484660886"><font-awesome-icon class="whatsapp-icon" :icon="['fab', 'whatsapp']" /></a> 
    <Footer/>
    
  </div>
  
</template>
<script>

</script>
<script>

  export default {
  auth: false,
  components: {
      
    },
    data(){
      return{
        contactForm:{
          name:'',
          email:'',
          query:'',
        },
        script:[{  
          src:''
        }],
        baseUrl: "https://paybay-invest.herokuapp.com/api/",
      }
    },
    mounted(){
      document.addEventListener("DOMContentLoaded", function() {
  // You can change this class to specify which elements are going to behave as counters.
  var elements = document.querySelectorAll(".scroll-counter")

  elements.forEach(function(item) {
    // Add new attributes to the elements with the '.scroll-counter' HTML class
    item.counterAlreadyFired = false
    item.counterSpeed = item.getAttribute("data-counter-time") / 45
    item.counterTarget = +item.innerText
    item.counterCount = 0
    item.counterStep = item.counterTarget / item.counterSpeed

    item.updateCounter = function() {
      item.counterCount = item.counterCount + item.counterStep
      item.innerText = Math.ceil(item.counterCount)

      if (item.counterCount < item.counterTarget) {
        setTimeout(item.updateCounter, item.counterSpeed)
      } else {
        item.innerText = item.counterTarget
      }
    }
  })

  // Function to determine if an element is visible in the web page
  var isElementVisible = function isElementVisible(el) {
    var scroll = window.scrollY || window.pageYOffset
    var boundsTop = el.getBoundingClientRect().top + scroll
    var viewport = {
      top: scroll,
      bottom: scroll + window.innerHeight,
    }
    var bounds = {
      top: boundsTop,
      bottom: boundsTop + el.clientHeight,
    }
    return (
      (bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom) ||
      (bounds.top <= viewport.bottom && bounds.top >= viewport.top)
    )
  }

  // Funciton that will get fired uppon scrolling
  var handleScroll = function handleScroll() {
    elements.forEach(function(item, id) {
      if (true === item.counterAlreadyFired) return
      if (!isElementVisible(item)) return
      item.updateCounter()
      item.counterAlreadyFired = true
    })
  }

  // Fire the function on scroll
  window.addEventListener("scroll", handleScroll)
})



var listCountries = ['United Kingdom', 'USA', 'Germany', 'France', 'Italy', 'USA', 'Australia', 'Lesotho', 'Canada', 'Argentina', 'USA', 'Saudi Arabia', 'Mexico', 'Kenya', 'Maldives', 'Venezuela', 'South Africa', 'Sweden', 'India', 'South Africa', 'Italy', 'Pakistan', 'United Kingdom', 'South Africa', 'Greece', 'Cuba', 'South Africa', 'USA', 'Portugal', 'Austria', 'South Africa', 'Panama', 'USA', 'South Africa', 'Netherlands', 'Switzerland', 'Belgium', 'Israel', 'Cyprus'];
var listPlans = ['$2,500', '$15500', '$7000', '$10,000', '$50,000', '$13,500', '$9,800',, '$4,000', '$18,000', '$10,000', '$3,500'];
var interval = Math.floor(Math.random() * (40000 - 8000 + 1) + 8000);
var run = setInterval(request, interval);

function request() {
    clearInterval(run);
    interval = Math.floor(Math.random() * (40000 - 8000 + 1) + 8000);
    var country = listCountries[Math.floor(Math.random() * listCountries.length)];
    var plan = listPlans[Math.floor(Math.random() * listPlans.length)];
    var msg = 'Someone from <b>' + country + '</b> just cashed out <strong href="javascript:void(0);" onclick="javascript:void(0);">' + ' </strong>';
    $(".mgm .txt").html(msg);
    $(".mgm").stop(true).fadeIn(.5);
    window.setTimeout(function() {
        $(".mgm").stop(true).fadeOut(100);
    }, 8000);
    run = setInterval(request, interval);
};



// ********Animated Counters**************//

$(window).scroll(testScroll);
var viewed = false;

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function testScroll() {
  if (isScrolledIntoView($(".numbers")) && !viewed) {
      viewed = true;
      $('.value').each(function () {
      $(this).prop('Counter',0).animate({
          Counter: $(this).text()
      }, {
          duration: 3000,
          easing: 'swing',
          step: function (now) {
              $(this).text(Math.ceil(now));
          }
      });
    });
  }
}



    },
    computed:{
      
    },
  methods:{
    async contact() {
        try {
          const response = await this.$axios.post(
            this.baseUrl + "contact/",
            this.contactForm
          )
          this.$message({
            message: "Your query has been sent!",
            type: "success",
            });
          console.log(response);
          this.contactForm = {}
        } catch (error) {
          console.log(error);
          this.$message({
            message: error.response.data,
            type: "warning",
            });
        } finally {
          this.contactForm = {};
        }
      },
  }
}
</script>

<style scoped>
  .header{
    margin-left: 5rem;
    margin-right: 5rem;
    margin-top: 5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
}
.mgm {
    border-radius: 7px;
    position: fixed;
   bottom: 1rem;
    z-index: 2000;
    height: fit-content;
    width: fit-content;
    right: 1rem;
    margin: auto;
    background: #fff;
    padding: 10px 27px;
    box-shadow: 0px 5px 13px 0px rgba(0, 0, 0, .3);
}

.mgm a {
    font-weight: 700;
    display: block;
    color: #f2d516;
}

.mgm a,
.mgm a:active {
    transition: all .2s ease;
    color: #f2d516;
}

  .header-left h1{
    font-size: 58px;
    font-weight: 600;
    padding-right: 10rem;
    margin-top: 12rem;
  }
  .header-left button{
    background-color: #27d17f;
    border: 1px solid #27d17f;
    color: #fff;
    border-radius: 9px;
    padding: 14px 40px;
    margin-top: 1rem;
  }
  .header-img{
    text-align: right;
  } 
  .header-right img{
    width: 80%;
    border-radius: 9px;
  }
  .header-text{
    margin-top: -30rem;
  }
  .header-text-one{
    width: 40%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 1rem;
    background: #f5f5f58a 0 0 no-repeat padding-box;
    border: 1px solid #ebebeb;
    border-radius: 10px;
    box-shadow: 0 0 7px #0000000c;
    padding: 14px 20px;
    margin-bottom: 1rem;
    z-index: 5;
    position: relative;
  }
  .header-text-img img{
    height: 40px;
    width: 40px;
  }
  .header-text-first h5{
    color: #282828;
    font-size: 17px;
    font-weight: 600;
  }
  .header-text-first p{
    color: #282828;
    font-size: 12px;
    font-weight: 600;
  }
  .header-text-second h5{
    color: #00804f;
    font-size: 17px;
    font-weight: 600;
  }
  .header-text-second p{
    color: #00804f;
    font-size: 12px;
    font-weight: 600;
  }
  .header-summary{
    margin-top: 11rem;
    text-align: right;
    color: #000000B3;
  }
  .header-summary p{
    font-size: 19px;
  }
  .reg-header{
    margin-top: 5rem;
    margin-right: 5rem;
    margin-left: 5rem;
    text-align: center;
  }
  .reg-header h4{
    color: #8b8b8b;
    font-size: 19px;
    font-weight: 600;
  }
  .reg-header h2{
    font-size: 45px;
    font-weight: 600;
    margin: 0.5rem 0;
  }
  .reg{
    margin-left: 5rem;
    margin-right: 5rem;
    margin-top: 5rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 2rem;
  }
  .reg1{
    border-right: 1px solid rgb(225, 227, 230);
  }
  /* .reg1 img,.reg2 img{
    height: 60px;
    width: 60px;
  } */
  .reg1 h2,.reg2 h2{
    font-size: 27px;
    font-weight: 600;
    margin-top: 15px;
    margin-bottom: 15px;
  }
  .focused{
    font-weight: 600;
  }
  .reg1 a, .reg2 a{
    color: rgba(0,0,0,.7);
    font-weight: 600;
    border-bottom:  2px solid #27d17f;
  }
  .reg1 a:hover, .reg2 a:hover{
    color: #27d17f;
  }
  .invest-hr{
    margin-top: 7rem;
    margin-bottom: 7rem;
  }
  .invest{
    margin-left: 5rem;
    margin-right: 5rem;
  }
  .invest-header{
    text-align: center;
  }
  .invest-header h4{
    color: #8b8b8b;
    font-size: 18px;
    margin-bottom: 1.5rem;
    font-weight: 600;
  }
  .invest-header h2{
    font-size: 45px;
    font-weight: 600;
  }
  .invest-grid{
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 1rem;
    row-gap: 1rem;
  }
  .invest-options{
    background-color: #f5f5f5;
    padding: 30px 30px 0px 30px;
    border-radius: 9px;
  }
  .invest-options h4{
    font-size: 35px;
    font-weight: 600;
  }
  .invest-options p{
    font-weight: 500;
  }
  .invest-options img{
    width: 100%;
    height: fit-content;
  }
  .crypto-img{
    margin-top: 1.5rem;
  }
  .invest-bottom{
    padding-bottom: 20px;
  }
  .features{
    margin-top: 5rem;
    margin-left: 5rem;
    margin-right: 5rem;
  }
  .features-header{
    text-align: center;
  }
  .features-header h4{
    font-size: 19px;
    color: #8b8b8b;
    font-weight: 600;
    text-transform: uppercase;
  }
  .features-header h2{
    font-size: 45px;
    font-weight: 600;
    margin-top: 1.5rem;
    margin-bottom: 2rem;
  }
  .features-card{
    background: #161719;
    display: grid;
    margin-top: 2rem;
    border-radius: 9px;
    grid-template-columns: 1fr 1fr;
  }
  .features-text{
    color: white;
    padding: 2rem;
  }
  .features-text span{
    background-color: #8b8b8b;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 14px;
    margin-bottom: 1.5rem !important;
    display: inline-block;
  }
  .features-text h2{
    font-size: 45px;
    font-weight: 600;
    color: white;
    margin-bottom: 1.5rem;
  }
  .features-text a{
    text-decoration: none;
    color: white;
    border-bottom: 2px solid #27d17f;
  }
  .features-text a:hover{
    color: #27d17f;
  }
  .features-img{
    text-align: center;
  }
  .features-img img{
    max-height: 30rem;
    width: auto;
  }
  .features-button{
    text-align: center;
    margin-top: 3rem;
  }
  .features-button button{
    background: #27d17f;
    padding: 10px 20px;
    color: white;
    border-radius: 9px;
    border: 1px solid #27d17f;
  }
  .learn{
    margin-top: 5rem;
    margin-left: 5rem;
    margin-right: 5rem;
  }
  .learn-header{
    text-align: center;
  }
  .learn-header h4{
    color: #8b8b8b;
    font-weight: 600;
    font-size: 19px;
  }
  .learn-header h2{
    font-size: 45px;
    font-weight: 600;
    margin-top: 1.5rem;
    margin-bottom: 2rem;
  }
  .learn-cards{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 2rem;
    margin-top: 2rem;
  }
  .learn-first{
    background-color:#db5325 ;
    color: white;
    padding: 1rem 1.5rem 0 1.5rem;
    border-radius: 9px;
  }
  .learn-first span{
    background-color: #DF653B;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 14px;
    margin-bottom: 1.5rem !important;
    display: inline-block;
  }
  .learn-first h2{
    color: white;
    font-weight: 600;
    font-size: 40px;
    margin-bottom: 1.5rem;
  }
  .learn-first a{
    text-decoration: none;
    color: white;
    margin-top: 2rem;
    margin-bottom: 1rem;
    display: inline-block;
    border-bottom: 2px solid #27d17f;
  }
  .learn-first a:hover{
    color: #27d17f;
  }
  .learn-second{
    background-color:rgb(40,209,128) ;
    color: white;
    padding: 1rem 1.5rem 0 1.5rem;
    border-radius: 9px;
  }
  .learn-second span{
    background-color: rgb(62,214,141);
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 14px;
    margin-bottom: 1.5rem !important;
    display: inline-block;
  }
  .learn-second h2{
    color: white;
    font-weight: 600;
    font-size: 40px;
    margin-bottom: 1.5rem;
  }
  .learn-second a{
    text-decoration: none;
    color: white;
    border-bottom: 2px solid #27d17f;
    margin-top: 3rem;
    display: inline-block;
  }
  .disclaimer{
    margin-top: 5rem;
    margin-left: 5rem;
    margin-right: 5rem;
  }
  .disclaimer p{
    font-weight: 400;
    color: rgb(76,76,76);
  }
  .featured{
    margin-top: 5rem;
  }
  .featured-img{
    margin-left: 5rem;
    margin-right: 5rem;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr 1fr 1fr;
  }
  .featured-img  img{
    max-height: 50px;
    width: auto;
  }
  .featured-img p{
    font-size: 17px;
    font-weight: 600;
    margin-top: 1rem;
  }
  .work{
    margin-top: 5rem;
  }
  .work-header{
    text-align: center;
  }
  .work-header h4{
    color: #8b8b8b;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 20px;
  }
  .work-header h2{
    font-size: 45px;
    font-weight: 600;
  }
  .whatsapp_float {
          position: fixed;
          width: 60px;
          height: 60px;
          bottom: 40px;
          right: 40px;
          background-color: #25d366;
          color: #FFF;
          border-radius: 50px;
          text-align: center;
          font-size: 30px;
          box-shadow: 2px 2px 3px #999;
          z-index: 100;
      }

      .whatsapp-icon {
          margin-top: 16px;
      }
  

      .counter{
        background: #27d17f;
        color: white;
        margin: 5rem 5rem 0 5rem;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        padding: 3rem;
        text-align: center;
      }
      .counter h3, .counter h2{
        color: white;
      }
      .reg-text span{
    border-bottom: 2px solid #27d17f;
    }
    .reg-text span:hover{
      color: #27d17f;
      cursor: pointer;
    }
    .modal-body input, .modal-body textarea{
      display: block;
      width: 100%;
      margin-bottom: 0.5rem;
    }
    .modal-body label{
      font-weight: 600;
    }
    .modal-body button{
      width: 100%;
      background: #27d17f;
      color: white;
      padding: 0.5rem;
      border: none;
      margin-top: 1rem;
      border-radius: 5px;
    }
    .modal-header header{
      color: #27d17f;
    }

  @media (max-width:576px) {
    .whatsapp-icon {
              margin-top: 10px;
          }

          .whatsapp_float {
              width: 40px;
              height: 40px;
              bottom: 20px;
              right: 10px;
              font-size: 22px;
          }
    .header{
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
}
.header-left h1{
    font-size: 40px;
    font-weight: 600;
    padding-right: 0rem;
    margin-top: 1rem;
  }
  .header-text{
    margin-top: -21.5rem;
  }
  .header-right img{
    width: 100%;
    border-radius: 9px;
  }
  .header-text-one{
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 1rem;
    background: #f5f5f58a 0 0 no-repeat padding-box;
    border: 1px solid #ebebeb;
    border-radius: 10px;
    box-shadow: 0 0 7px #0000000c;
    padding: 14px 20px;
    margin-bottom: 1rem;
    z-index: 5;
    position: relative;
  }
  .header-summary{
    margin-top: 4rem;
    text-align: center;
    color: #000000B3;
  }
  .header-summary p{
    font-size: 19px;
  }
  .reg{
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }
  .reg1, .reg2{
    display: grid;
    grid-template-columns: 1fr 3fr;
  }
  .reg1{
    border-right: none;
    padding-bottom: 2rem;
    border-bottom: 1px solid rgb(225, 227, 230);
  }
  .reg-text{
    margin-top: -1.2rem;
  }
  
  .invest{
    margin-left: 10px;
    margin-right: 10px;
  }
  .invest-grid{
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 0rem;
    row-gap: 1rem;
  }
  .invest-options{
    background-color: #f5f5f5;
    padding: 10px 10px 0px 10px;
    border-radius: 9px;
  }
  .features{
    margin-top: 5rem;
    margin-left: 10px;
    margin-right: 10px;
  }
  .features-card{
    background: #161719;
    display: grid;
    margin-top: 2rem;
    border-radius: 9px;
    grid-template-columns: 1fr;
  }
  h2{
    color: black;
  }
  .learn{
    margin-top: 5rem;
    margin-left:10px;
    margin-right: 10px;
  }
  .learn-cards{
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
    margin-top: 2rem;
  }
  .disclaimer{
    margin-top: 5rem;
    margin-left: 10px;
    margin-right: 10px;
  }
  .reg-header{
    margin-top: 5rem;
    margin-right: 10px;
    margin-left: 10px;
    text-align: center;
  }
  .featured-img{
    margin-left:10px;
    margin-right: 10px;
    display: grid;
    grid-template-columns:  1fr 1fr ;
  }
  .featured-img  img{
    height: 100px;
    width: 100px;
  }
  .counter{
        background: #27d17f;
        color: white;
        margin: 5rem 10px 0 10px;
        display: grid;
        grid-template-columns: 1fr;
        row-gap: 2rem;
        padding: 1rem 10px;
        text-align: center;
      }
      .counter h3, .counter h2{
        color: white;
      }
  }



  @media (min-width:577px) and (max-width:768px){
    .whatsapp-icon {
              margin-top: 10px;
          }

          .whatsapp_float {
              width: 40px;
              height: 40px;
              bottom: 20px;
              right: 10px;
              font-size: 22px;
          }
    .header{
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
}
.header-left h1{
    font-size: 40px;
    font-weight: 600;
    padding-right: 0rem;
    margin-top: 1rem;
  }
.header-left{
  text-align: center;
}
.header-text{
    margin-top: -33rem;
  }
  .header-summary{
    margin-top: 14.5rem;
    text-align: center;
    color: #000000B3;
  }
  .header-summary p{
    font-size: 19px;
  }
  .reg{
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 4rem;
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }
  .reg1, .reg2{
    display: grid;
    grid-template-columns: 1fr 6fr;
  }
  .reg1{
    border-right: none;
    padding-bottom: 2rem;
    border-bottom: 1px solid rgb(225, 227, 230);
  }
  .reg-text{
    margin-top: -1.2rem;
  }
  .invest{
    margin-left: 10px;
    margin-right: 10px;
  }
  .invest-grid{
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 0rem;
    row-gap: 1rem;
  }
  .features{
    margin-top: 5rem;
    margin-left: 10px;
    margin-right: 10px;
  }
  .features-card{
    background: #161719;
    display: grid;
    margin-top: 2rem;
    border-radius: 9px;
    grid-template-columns: 1fr;
  }
  .learn{
    margin-top: 5rem;
    margin-left:10px;
    margin-right: 10px;
  }
  .learn-cards{
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 2rem;
    margin-top: 2rem;
  }
  .disclaimer{
    margin-top: 5rem;
    margin-left: 10px;
    margin-right: 10px;
  }
  .reg-header{
    margin-top: 5rem;
    margin-right: 10px;
    margin-left: 10px;
    text-align: center;
  }
  .featured-img{
    margin-left:10px;
    margin-right: 10px;
    display: grid;
    grid-template-columns:  1fr 1fr 1fr 1fr 1fr 1fr ;
  }
 
  .counter{
        background: #27d17f;
        color: white;
        margin: 5rem 10px 0 10px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        row-gap: 2rem;
        padding: 3rem 10px;
        text-align: center;
      }
      .counter h3, .counter h2{
        color: white;
      } 
  }

  @media(min-width:769px) and (max-width:1200px){
    .header{
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 2rem;
}
.header-left h1{
    font-size: 58px;
    font-weight: 600;
    padding-right: 5rem;
    margin-top: 7.5rem;
  }
  .header-text{
    margin-top: -26rem;
  }
  .header-summary {
    margin-top: 7rem;
    text-align: right;
    color: rgba(0,0,0,0.70196);
}
  .reg{
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 4rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 2rem;
  }
  .invest{
    margin-left: 10px;
    margin-right: 10px;
  }
  .features{
    margin-top: 5rem;
    margin-left: 10px;
    margin-right: 10px;
  }
  .learn{
    margin-top: 5rem;
    margin-left:10px;
    margin-right: 10px;
  }
  .disclaimer{
    margin-top: 5rem;
    margin-left: 10px;
    margin-right: 10px;
  }
  .reg-header{
    margin-top: 5rem;
    margin-right: 10px;
    margin-left: 10px;
    text-align: center;
  }
  .featured-img{
    margin-left:10px;
    margin-right: 10px;
    display: grid;
    grid-template-columns:  1fr 1fr 1fr 1fr 1fr 1fr ;
  }
  .counter{
        background: #27d17f;
        color: white;
        margin: 5rem 10px 0 10px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        row-gap: 2rem;
        padding: 3rem 10px;
        text-align: center;
      }
      .counter h3, .counter h2{
        color: white;
      } 
  }
</style>
