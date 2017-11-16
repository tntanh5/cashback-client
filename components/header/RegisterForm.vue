<template>
<div>
  <div class="field">
    <p class="control has-icons-left">
      <input v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" name="email" type="input" placeholder="Email">
      <span class="icon is-small is-left">
        <i class="fa fa-envelope"></i>
      </span>
      <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
    </p>
  </div>
  <div class="field">
    <p class="control has-icons-left">
      <input v-validate="'required|min:6'" :class="{'is-danger': errors.has('password') }" class="input" name="password" type="password" placeholder="Password">
      <span class="icon is-small is-left">
        <i class="fa fa-lock"></i>
      </span>
      <span v-show="errors.has('password')" class="help is-danger">{{ errors.first('password') }}</span>
    </p>
  </div>
  <div class="field">
    <p class="control">
      <button class="button is-success">
        Register
      </button>
    </p>
  </div>
</div>
</template>

<script>
export default {

}
</script>

