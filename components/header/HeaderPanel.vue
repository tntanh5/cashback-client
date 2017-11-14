<template>
    <navbar class="navbar is-fixed-top">
        <div class="container">{{isActiveLoginModel}}
            <div class="navbar-brand">
                <a class="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
                </a>
                <button class="button navbar-burger">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <div class="navbar-menu is-active">
                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="field is-grouped">
                            <p class="control">
                            <a class="button" v-on:click="openLoginModal">
                                <span class="icon">
                                    <i class="fa fa-2x fa-user" aria-hidden="true"></i>
                                </span>
                            </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal" v-bind:class="{ 'is-active' : isActiveLoginModel }">
                <div class="modal-background"></div>
                <div class="modal-card">
                    <header class="modal-card-head">
                    <p class="modal-card-title">Modal title</p>
                    <button class="delete" aria-label="close"></button>
                    </header>
                    <section class="modal-card-body">
                    <!-- Content ... -->
                    </section>
                    <footer class="modal-card-foot">
                    <button class="button is-success">Save changes</button>
                    <button class="button">Cancel</button>
                    </footer>
                </div>
            </div>
        </div>
    </navbar>
</template>

<script>
export default {
  data: {
    isActiveLoginModel: false
  },
  methods: {
    openLoginModal: function () {
      console.log(this.isActiveLoginModel)
    //   this.isActiveLoginModel = true
    }
  }
}
</script>

