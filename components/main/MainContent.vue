<template>
  <div class="main-content">
    <div class="container">
      <brand-banner/>
      <card-list/>
    </div>
  </div>
</template>

<script>
import BrandBanner from '~/components/main/BrandBanner'
import CardList from '~/components/main/CardList'

export default {
  components: {
    BrandBanner,
    CardList
  }
}
</script>

<style scoped>
  .main-content {
    /* padding-top: 100px;
    padding-bottom: 100px; */
  }
</style>

