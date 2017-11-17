<template>
<footer class="footer">
  <!-- <section class="footer-panel is-danger"> -->
    <div class="container">
      <copy-rights></copy-rights>
    </div>
  <!-- </section> -->
</footer>
</template>

<script>
import CopyRights from '~/components/footer/CopyRights'

export default {
  components: {
    CopyRights
  }
}
</script>

<style >
  .footer-panel {
    /* height: 100px;
    position:fixed;
    left:0px;
    bottom:0px;
    width:100%; */
    background-color: #23d260;
  }
</style>

