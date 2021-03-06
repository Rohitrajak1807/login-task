<template lang="pug">
  div#sign-up
    nav-blank
    b-container(fluid="sm").d-flex.flex-column.justify-content-center.h-100
      b-col(align-self="center" cols="5")
        b-form-group(label="Login ID" label-for="login")
          b-form-input#login(v-model="form.id" type="text" required=true placeholder="Login")
        b-form-group(label="Password" label-for='password')
          b-form-input#password(v-model="form.password" type="password" required=true placeholder="Password")
        b-button(type="submit" variant="primary" v-on:click="signUp") Sign Up
        b-toast#dup-user-toast(title="Error" auto-hide-delay=3000 variant="danger") Email already registered

</template>

<script>
import NavBlank from './nav/NavBlank'
import toast from '../utils/ui-utils'

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
  },
  methods: {
    signUp: function (event) {
      event.preventDefault()
      this.axios.post('http://localhost:8000/signup', this.form)
        .then((res) => {
          console.log(res)
          this.$router.push({path: '/profile'})
        })
        .catch((e) => {
          console.log(e.response.data.error)
          toast(e.response.data.error.message)
        })
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
