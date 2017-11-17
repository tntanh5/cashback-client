<template>
  <div class="card-list">
    <div class="card-list-content">
      <card-item></card-item>
      <card-item></card-item>
      <card-item></card-item>
      <card-item></card-item>
      <card-item></card-item>
      <card-item></card-item>
      <card-item></card-item>
      <card-item></card-item>
      <card-item></card-item>
      <card-item></card-item>
      <card-item></card-item>
      <card-item></card-item>
      <card-item></card-item>
      <card-item></card-item>
      <card-item></card-item>
      <card-item></card-item>
      <card-item></card-item>
      <card-item></card-item>
      <card-item></card-item>
      <card-item></card-item>
    </div>
  </div>
</template>

<script>
import CardItem from '~/components/main/CardItem'

export default {
  components: {
    CardItem
  }
}
</script>

<style>
  .card-list > .card-list-content {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 30px 0 20px 0;
  }
</style>

