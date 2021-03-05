<template lang="pug">
  div
    b-navbar(variant="dark" type="dark")
      b-container
        b-navbar-brand Demo
        b-navbar-nav.ml-auto
          b-nav-item(to="/") Login
          b-nav-item(to="/signup") Signup
</template>

<script>
export default {
  name: 'NavBlank'
}
</script>

<style scoped>

</style>
