<template lang="pug">
  #skills
    nav-logged-in
    b-container(fluid="sm").d-flex.flex-column.justify-content-center.h-100
      b-col(cols=5 align-self="center")
        input(type="checkbox")
</template>

<script>
import NavLoggedIn from './nav/NavLoggedIn'
import toastConfig from '../utils/ui-utils'

export default {
  name: 'Skills',
  components: {
    'nav-logged-in': NavLoggedIn
  },
  data () {
    return {
      skills: []
    }
  },
  mounted () {
    this.axios.get('http://localhost:8000/skills').then((res) => {
      this.skills = res.data
      console.log(res.data)
    }).catch((e) => {
      console.log(e)
      this.$bvToast.toast(e.response.data.error.message, toastConfig.default)
    })
  }
}
</script>

<style scoped>

</style>
