<template>
  <div>
    <modal-box v-bind:is-active="isActive"
    v-bind:title-modal="titleModal"
    v-bind:content-modal="contentView"
    v-bind:footer-button-text="footerButtonText"
    @close-modal="closeRegisterBox"
    @switch-modal="switchToLoginBox"></modal-box>
  </div>
</template>

<script>
import ModalBox from '~/components/header/ModalBox'
import RegisterForm from '~/components/header/RegisterForm'

export default {
  data () {
    return {
      isActive: true,
      titleModal: 'Register',
      contentView: RegisterForm,
      footerButtonText: 'Log In'
    }
  },
  methods: {
    closeRegisterBox: function () {
      this.isActive = false
      this.$emit('close-register', this.isActive)
    },
    switchToLoginBox: function () {
      this.$emit('switch-box')
    }
  },
  components: {
    RegisterForm,
    ModalBox
  }
}
</script>

