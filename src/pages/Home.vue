<script >
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import HelloWorld from '../components/HelloWorld.vue'
// import Header from '../components/Header.vue'
// import Footer from '../components/Footer.vue'

export default {
  name: 'home',
  components: {
    // Header,
    // HelloWorld,
    // Footer
  }
};

</script>

<template>


  <!-- Hero Area Start -->
  <div class="hero-area hero-area2 hero-area4">
    <img loading="lazy" class="shape parallax5" src="../assets/images/home/h2-shape.webp" alt="">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="content">
            <div class="content">
              <h5 class="subtitle">
                BE A CRYPTO GAMER
              </h5>
              <h1 class="title">
                <img  loading="lazy" v-lazysizes :data-src="'../assets/images/text.webp'" alt="">
              </h1>
              <div class="links">
                <p><router-link to="/airdrop" class="mybtn1" target="_blank" rel="noopener noreferrer">Get AirDrop</router-link> </p>
                <p><router-link to="/xdrop" class="mybtn1" target="_blank" rel="noopener noreferrer">Claim your AirDrop</router-link> </p>
                <p><a href="https://bond.cryptowar.network/#/" class="mybtn1" target="_blank" rel="noopener noreferrer">Buy XBLADE</a> </p>
                <a href="https://play.cryptowar.network/#/" class="mybtn1" target="_blank" rel="noopener noreferrer">Play Now</a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Hero Area End -->


  <!-- Game play area start -->
  <section class="game-play-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-heading">
            <h5 class="subtitle">
              Recruit Your Hero
            </h5>
            <h2 class="title ">
              PLAY AND EARN
            </h2>
            <h6 class="text">
              Where gamers are rewarded. Join millions of players worldwide!
            </h6>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-xl-3 col-lg-4 col-md-6">
          <div class="single-play">
            <div class="image">
              <img  loading="lazy" src="../assets/images/game-play/1.webp" alt="">
            </div>
            <div class="contant">
              <a href="https://play.cryptowar.network/#/" class="mybtn1" target="_blank" rel="noopener noreferrer">Play</a>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6">
          <div class="single-play">
            <div class="image">
              <img  loading="lazy" v-lazysizes src="../assets/images/game-play/2.webp" alt="">
            </div>
            <div class="contant">
              <a href="https://play.cryptowar.network/#/" class="mybtn1" target="_blank" rel="noopener noreferrer">Play</a>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6">
          <div class="single-play">
            <div class="image">
              <img  loading="lazy" v-lazysizes src="../assets/images/game-play/3.webp" alt="">
            </div>
            <div class="contant">
              <a href="https://play.cryptowar.network/#/" class="mybtn1" target="_blank" rel="noopener noreferrer">Play</a>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-6">
          <div class="single-play">
            <div class="image">
              <img  loading="lazy" v-lazysizes src="../assets/images/game-play/4.webp" alt="">
            </div>
            <div class="contant">
              <a href="https://play.cryptowar.network/#/" class="mybtn1" target="_blank" rel="noopener noreferrer">Play</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Game play area end -->
  <!-- Recent Winner Area Start -->
  <section class="recent-winners">
    <div class="container">
      <div class="row">
      </div>
    </div>
  </section>
  <!-- Recent Winner Area End -->

  <!-- join us area start -->
  <section class="join_us join_us2 join_us3">
    <img loading="lazy" class="l-image" src="../assets/images/joinus_left_img.webp" alt="">
    <img loading="lazy" class="r-image" src="../assets/images/joinus-bg2.webp" alt="">
    <div class="container">
      <div class="row justify-content-end">
        <div class="col-xl-7">
          <div class="section-heading content-left">
            <h5 class="subtitle">
              Battle Your Way To Wealth
            </h5>
            <h2 class="title ">
              EARN BY GAMING
            </h2>
            <h6 class="text">
              Get started in less than 5 min and experience crypto game like never before.
            </h6>
              <a href="https://play.cryptowar.network/#/" class="mybtn1" target="_blank" rel="noopener noreferrer">Play Now</a>
            <br/>
            <a href="https://bond.cryptowar.network/#/" class="mybtn1" target="_blank" rel="noopener noreferrer">Buy XBLADE</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- join us area  end -->


</template>

<style>
/*#app {*/
/*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*  margin-top: 60px;*/
/*}*/
</style>
