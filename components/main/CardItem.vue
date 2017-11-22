<template>
  <div class="card card-item">
    <div class="card-image">
      <figure class="image is-4by3">
        <img src="https://upload.wikimedia.org/wikipedia/commons/1/17/Lazada.vn_Logo.png" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <span class="icon is-small is-left">
            <i class="fa fa-scissors"></i>
          </span>
          <p class="discount">50%</p>

          <!-- <figure class="image is-48x48">
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/17/Lazada.vn_Logo.png" alt="Placeholder image">
          </figure> -->
        </div>
        <div class="media-right">
          <p class="title is-6">4404 Used</p>
          <p class="subtitle is-6">10 days remain</p>
        </div>
      </div>

      <div class="content subtitle is-6">
        Thousand discounts is yours.
        <!-- <a>@bulmaio</a>.
        <a href="">css</a> <a href="">responsive</a>
        <br>
        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time> -->
      </div>
    </div>
    <footer class="card-footer">
      <a href="" class="card-footer-item subtitle is-6">Sale Code</a>
    </footer>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .card-item {
    width: 25%;
    margin-bottom: 10px;
    padding: 0 5px;
  }

  .media-left {
    border: 1px dashed #ff7e31;
    position: relative;
  }

  .media-left > .discount {
    padding: 0 10px;
    color: #ff7e31;
    font-size: 15px;
  }

  .fa.fa-scissors {
    color: #ff7e31;
    font-size: 15px;
    top: -10px;
    left: 5px;
    position: absolute;
  }
</style>
