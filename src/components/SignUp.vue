<template lang="pug">
  div#sign-up
    nav-blank
    b-container(fluid="sm").d-flex.flex-column.justify-content-center.h-100
      b-col(align-self="center" cols="5")
        b-form-group(label='Login ID:' label-for='login')
          b-form-input#login(v-model='form.id' type='text' required=true placeholder='Login')
        b-form-group(label='Password:' label-for='password')
          b-form-input#password(v-model='form.password' type='password' required=true placeholder='Password')
        b-button(type='submit' variant='primary' v-on:click='') Sign Up

</template>

<script>
import NavBlank from './nav/NavBlank'

export default {
  name: 'SignUp',
  components: {
    'nav-blank': NavBlank
  },
  data () {
    return {
      form: {
        id: '',
        password: ''
      }
    }
  }
}
</script>

<style scoped>
#sign-up {
  height: 100vh;
  width: 100%;
}

</style>
