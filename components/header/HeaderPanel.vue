<template>
    <navbar class="navbar is-fixed-top">
        <div class="container">
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
                            <a class="button" v-on:click="showUserPanel">
                                <span class="icon">
                                    <i class="fa fa-2x fa-user" aria-hidden="true"></i>
                                </span>
                            </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="isActivePanel" id="dfsdf">
              <div v-show="box === 'login'">
                <login-box @close-login="hideUserPanel" @switch-box="switchBox"></login-box>
              </div >
              <div v-show="box === 'register'">
                <register-box @close-register="hideUserPanel" @switch-box="switchBox"></register-box>
              </div >
            </div>
        </div>
    </navbar>
</template>

<script>
import ModalBox from '~/components/header/ModalBox'
import LoginBox from '~/components/header/LoginBox'
import RegisterBox from '~/components/header/RegisterBox'

export default {
  data () {
    return {
      isActivePanel: false,
      box: 'login'
    }
  },
  methods: {
    showUserPanel: function () {
      this.isActivePanel = true
    },
    hideUserPanel: function () {
      this.isActivePanel = false
      this.box = 'login'
    },
    switchBox: function () {
      if (this.box === 'login') {
        this.box = 'register'
      } else {
        this.box = 'login'
      }
    }
  },
  components: {
    ModalBox,
    LoginBox,
    RegisterBox
  }
}
</script>

