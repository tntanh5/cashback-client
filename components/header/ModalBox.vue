<template>
  <div class="modal" v-bind:class="{'is-active': active }">
    <div class="modal-background"></div>
    <div class="modal-card">
        <header class="modal-card-head">
        <p class="modal-card-title">{{titleModal}}</p>
        <button class="delete" aria-label="close" v-on:click="close"></button>
        </header>
        <section class="modal-card-body">
        <!-- Content ... -->
          <!-- <span v-html="contentModal"></span> -->
          <component v-bind:is="contentModal"></component>

        </section>
        <footer class="modal-card-foot">
        <button class="button is-success" v-on:click="switchModal">{{footerButtonText}}</button>
        </footer>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isActive: false,
    titleModal: '',
    contentModal: undefined,
    footerButtonText: ''
  },
  data () {
    return {
      active: this.isActive
    }
  },
  methods: {
    close: function () {
      this.active = false
      this.$emit('close-modal', this.isOpen)
    },
    switchModal: function () {
      this.$emit('switch-modal')
    }
  }
}
</script>
