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
          Register
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
            url: '/users',
            data: {
              email: this.email,
              password: this.password
            }
          })
            .then((response) => {
              console.log(response)
              this.isLoading = false
            })
            .catch((error) => {
              console.log(error)
              this.isLoading = false
            })
        } else {
          console.log('Correct them errors!')
        }
      })
    }
  }
// export default {
//    async asyncData ({ app }) {
//       app.$axios.setToken('-Q3HB1l-SVb50jenegDDgocb1r0KW0I5', 'Token')
//        const accesstradeApi = 'https://api.accesstrade.vn/v1/'
//          const results = await app.$axios.$get(accesstradeApi + 'transactions')
//             return { results }
//             }}

// https://dev.nhutdm.com/api/
// /users
// authentication /authentication
}
</script>

