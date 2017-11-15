<template>
  <div>
    <modal-box v-bind:is-active="isActive"
    v-bind:title-modal="titleModal"
    v-bind:content-modal="contentView"
    v-bind:footer-button-text="footerButtonText"
     @close-modal="closeLoginBox" @switch-modal="switchToRegisterBox"></modal-box>
  </div>
</template>

<script>
import ModalBox from '~/components/header/ModalBox'
import LoginForm from '~/components/header/LoginForm'

export default {
  data () {
    return {
      isActive: true,
      titleModal: 'Log In',
      contentView: LoginForm,
      footerButtonText: 'Register'
    }
  },
  methods: {
    closeLoginBox: function () {
      this.isActive = false
      this.$emit('close-login', this.isActive)
    },
    switchToRegisterBox: function () {
      this.$emit('switch-box')
    }
  },
  components: {
    LoginForm,
    ModalBox
  }
}
</script>

