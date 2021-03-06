<template lang="pug">
  #profile
    nav-logged-in
    b-container(fluid="sm").d-flex.flex-column.justify-content-center.h-100
      b-col(cols=5 align-self="center")
        b-form-group(label="First Name" label-for="first-name")
          b-form-input#first-name(v-model="form.firstName" type="text" required=true placeholder="First Name")
        b-form-group(label="Last Name" label-for="last-name")
          b-form-input#last-name(v-model="form.lastName" type="text" required=true placeholder="Last Name")
        b-button(type="submit" variant="primary" v-on:click="") Update Profile
</template>

<script>
import NavLoggedIn from './nav/NavLoggedIn'
import toast from '../utils/ui-utils'

export default {
  name: 'Profile',
  components: {
    'nav-logged-in': NavLoggedIn
  },
  data () {
    return {
      form: {
        firstName: '',
        lastName: ''
      }
    }
  },
  methods: {
    updateProfile: function () {
      this.axios.put('http://localhost:8000/update-profile', this.form)
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
          toast(err.response.error.message, 'Error', 5000, 'danger')
        })
    }
  }
}
</script>

<style scoped>

</style>
