<template>
<div>
  <form @submit.prevent="validateBeforeSubmit">
    <div class="field">
      <p class="control has-icons-left">
        <input v-model="email" v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" name="email" type="input" placeholder="Email">
        <span class="icon is-small is-left">
          <i class="fa fa-envelope"></i>
        </span>
        <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
      </p>
    </div>
    <div class="field">
      <p class="control has-icons-left">
        <input v-model="password" v-validate="'required|min:6'" :class="{'is-danger': errors.has('password') }" class="input" name="password" type="password" placeholder="Password">
        <span class="icon is-small is-left">
          <i class="fa fa-lock"></i>
        </span>
        <span v-show="errors.has('password')" class="help is-danger">{{ errors.first('password') }}</span>
      </p>
    </div>
    <div class="field">
      <p class="control">
        <button class="button is-success" :class="{'is-loading': isLoading}" type="submit">
          Login
        </button>
      </p>
    </div>
  </form>
</div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      email: '',
      password: '',
      isLoading: false
    }
  },
  methods: {
    validateBeforeSubmit: function () {
      this.$validator.validateAll().then((result) => {
        if (result) {
          console.log(this.email)
          console.log(this.password)
          this.isLoading = true

          // Send a POST request
          axios({
            method: 'post',
            baseURL: 'https://dev.nhutdm.com/api',
            headers: {'Content-Type': 'application/json'},
            url: '/authentication',
            data: {
              strategy: 'local',
              email: this.email,
              password: this.password
            }
          })
            .then((response) => {
              console.log(response)
              this.isLoading = false
            })
            .catch((error) => {
              this.isLoading = false
              console.log(error)
            })
        } else {
          console.log('Correct them errors!')
        }
      })
    }
  }
}
</script>

