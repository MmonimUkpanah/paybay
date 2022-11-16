<template>
  <div >
  <div class="initialdiv">

  </div>
  <div class="swiperdiv">
    <div class="insidediv">
      <swiper
      :slides-per-view="1"
      :space-between="30"
      :loop="false"
      :autoplay="{
      delay: 5000,
      disableOnInteraction: false,
    }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
    <swiper-slide>
      <div class="newswiper">
        <div class="newswiper-img">
          <img src="reg.png" alt="">
        </div>
        <div class="newswiper-text">
          <h4>1</h4>
          <h2>Register</h2>
          <p>Sign up to create your free Pay Bay Invest account</p>
          <nuxt-link to="signup"> <button>Get started</button></nuxt-link>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide><div class="newswiper">
        <div class="newswiper-img">
          <img src="verify.png" alt="">
        </div>
        <div class="newswiper-text">
          <h4>2</h4>
          <h2>Verify</h2>
          <p>Verify your identity with one of our trusted verification partners.</p>
          <nuxt-link to="signup"> <button>Get started</button></nuxt-link>
        </div>
      </div></swiper-slide>
    <swiper-slide><div class="newswiper">
        <div class="newswiper-img">
          <img src="dep.png" alt="">
        </div>
        <div class="newswiper-text">
          <h4>3</h4>
          <h2>Deposit</h2>
          <p>Deposit your funds securely using popular options.</p>
          <nuxt-link to="signup"> <button>Get started</button></nuxt-link>
        </div>
      </div></swiper-slide>
    <swiper-slide><div class="newswiper">
        <div class="newswiper-img down">
          <img src="trade.png" alt="">
        </div>
        <div class="newswiper-text">
          <h4>4</h4>
          <h2>Trade</h2>
          <p>Buy, sell and swap digital assets 24/7</p>
          <nuxt-link to="signup"> <button>Get started</button></nuxt-link>
        </div>
      </div></swiper-slide
    >
      <!-- <swiper-slide
        v-for="n in 5"
        :key="n"
        class="test"
        :class="{test_2: true}"
      >
        <div>{{ 29+n }}</div>
        <img
          :src="getImageUrl(29+n)"
          width="600"
          height="400"
          class="img-fluid w-100 mx-auto"
          blank="true"
        >
      </swiper-slide> -->
    </swiper>
    </div>

  </div>
  
    

    <!-- <swiper
      :slides-per-view="3"
      :space-between="30"
      loop
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide
        v-for="n in 5"
        :key="n"
        class="test"
        :class="{test_2: true}"
      >
        <div>{{ 34+n }}</div>
        <img
          :src="getImageUrl(34+n)"
          width="600"
          height="400"
          class="img-fluid w-100 mx-auto"
          blank="true"
        >
      </swiper-slide>
    </swiper> -->

    <!-- <h2>pagination - navigation</h2>
    <swiper
      :slides-per-view="3"
      :space-between="30"
      :loop="false"
      :pagination="true"
      :navigation="true"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide
        v-for="n in 5"
        :key="n"
        class="test"
        :class="{test_2: true}"
      >
        <div>{{ 34+n }}</div>
        <img
          :src="getImageUrl(34+n)"
          width="600"
          height="400"
          class="img-fluid w-100 mx-auto"
          blank="true"
        >
      </swiper-slide>
    </swiper> -->
  </div>
</template>

<script>
import {Autoplay, Navigation, Pagination } from 'swiper'

import { SwiperCore, Swiper, SwiperSlide } from 'swiper-vue2'

// Import Swiper styles
import 'swiper/swiper-bundle.css'

SwiperCore.use([Navigation, Pagination, Autoplay])

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  methods: {
    getImageUrl (imageId) {
      return `https://picsum.photos/600/400/?image=${imageId}`
    },
    onSwiper (swiper) {
      console.log(swiper)
    },
    onSlideChange () {
      console.log('slide change')
    }
  }
}
</script>

<style scoped>
.img-fluid {
  max-width: 100%;
  height: auto;
}
.w-100 {
  width: 100%;
}
.ml-auto, .mx-auto {
  margin-left: auto;
}
.mr-auto, .mx-auto {
  margin-right: auto;
}
.newswiper{
  display: grid;
  grid-template-columns: 1fr 2fr;
}
.initialdiv{
  background: #f5f5f5;
  height: 450px;
  margin-top: 5rem;
  margin-left: 5rem;
  margin-right: 5rem;
  border-radius: 9px;
}
.swiperdiv{
  margin-top: -475px;
}
.insidediv{
  padding: 0 10rem;
}
.newswiper-img img{
  height: 500px;
  width: auto;
}
.newswiper-text{
  margin-top: 7rem;
}
.newswiper-text h4{
  align-items: center;
    border: 2px solid #21d17f;
    border-radius: 100%;
    color: #21d17f;
    display: flex;
    font-size: 27px;
    font-weight: 700;
    height: 64px;
    justify-content: center;
    margin-bottom: 20px;
    width: 64px;
}
.newswiper-text h2{ 
    font-size: 40px;
    font-weight: 600;
}
.newswiper-text button{
  background: #21d17f;
  color: white;
  padding: 5px 20px;
  border: none;
  border-radius: 5px;
}


@media(max-width:576px){
  .initialdiv{
  background: #f5f5f5;
  height: 400px;
  margin-top: 5rem;
  margin-left: 0px;
  margin-right: 0px;
  border-radius: 0px;
}
.newswiper{
  display: grid;
  grid-template-columns: 1fr;
}
.insidediv{
  padding: 0 0rem;
}
.newswiper-img img{
  height: auto;
  width: 100%;
}
.swiperdiv{
  margin-top: -400px;
}
.newswiper-text{
  text-align: center;
}

.newswiper-text h4{
  align-items: center;
    border: 2px solid #21d17f;
    border-radius: 100%;
    color: #21d17f;
    display: flex;
    margin: auto;
    font-size: 27px;
    font-weight: 700;
    height: 64px;
    justify-content: center;
    margin-bottom: 20px;
    width: 64px;
}
.newswiper-text{
  margin-top: 2rem;
  margin-left: 10px;
  margin-right: 10px;
}

}



@media(min-width:577px) and (max-width:1200px){
  .initialdiv{
  background: #f5f5f5;
  height: 400px;
  margin-top: 5rem;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 0px;
}
.insidediv{
  padding: 0 1rem;
}
.newswiper{
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.swiperdiv{
  margin-top: -450px;
}
}

</style>