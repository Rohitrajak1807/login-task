<template lang="pug">
  #profile
    nav-logged-in
    b-container(fluid="sm").d-flex.flex-column.justify-content-center.h-100
      b-col(fluid="sm").d-flex.flex-column.justify-content-center.h-100
        b-form-group(label="First Name" label-for="first-name")
          b-form-input#f-name(v-model="form.firstName" type="text" required=true placeholder="First Name")
        b-form-group(label="Last Name" label-for="last-name")
          b-form-input#f-name(v-model="form.lastName" type="text" required=true placeholder="Last Name")
        b-button(type="submit" variant="primary" v-on:click="") Update Profile
</template>

<script>
import NavLoggedIn from './nav/NavLoggedIn'

export default {
  name: 'Profile',
  components: {
    'nav-logged-in': NavLoggedIn
  }
}
</script>

<style scoped>

</style>
