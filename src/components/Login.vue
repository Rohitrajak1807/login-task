<template lang="pug">
  div#login
    nav-blank
    b-container(fluid="sm").d-flex.flex-column.justify-content-center.h-100
      b-col(align-self="center" cols="5")
        b-form-group(label="User ID" label-for="user-name")
          b-form-input#user-name(v-model="form.id" required=true placeholder="User ID")
        b-form-group(label="Password" label-for="password")
          b-form-input#password(v-model="form.password" type="password" required=true placeholder="Password")
        b-button(type="submit" variant="primary" v-on:click="onSubmit") Login
</template>

<script>
import NavBlank from './nav/NavBlank'

export default {
  name: 'Login',
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
    onSubmit: async function (event) {
      event.preventDefault()
      let response = await this.axios.post('http://localhost:8000/login', this.form)
      console.log(response)
      await this.$router.push('/profile')
    }
  }
}
</script>

<style scoped>
#login {
  height: 100vh;
  width: 100%;
}
</style>
