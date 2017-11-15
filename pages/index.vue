<template>
  <section class="hero is-white is-fullheight">
  <div class="hero-head">
    <header-panel/>
  </div>
  <div class="hero-body">
    <main-content/>
  </div>
  <div class="hero-foot">
    <footer-panel/>
  </div>
  </section>
</template>

<script>
import HeaderPanel from '~/components/header/HeaderPanel'
import FooterPanel from '~/components/footer/FooterPanel'
import MainContent from '~/components/main/MainContent'

export default {
  components: {
    HeaderPanel,
    FooterPanel,
    MainContent
  }
}
</script>

<style>
  body {
    color: #000;
    font: 400 normal 18px roboto-regular,"Helvetica Neue",Helvetica,Arial,sans-serif;
  }
</style>

