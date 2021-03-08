<template lang="pug">
  #skills
    nav-logged-in
    b-container(fluid="sm").d-flex.flex-column.justify-content-center.h-100
      b-col(cols=5 align-self="center")
        b-table(striped=true hover=true v-bind:items="skills" v-bind:fields="fields" v-bind:currentPage="currentPage" v-bind:per-page=10)
          template(v-slot:head(name)="Skill")
        b-pagination(v-model="currentPage" v-bind:total-rows="totalRows" v-bind:per-page=10)
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
      skills: [],
      fields: [
        {key: 'name', label: 'Skill', class: 'text-center', sortable: true}
      ],
      currentPage: 1,
      totalRows: 1
    }
  },
  created () {
    this.axios.get('http://localhost:8000/skills').then((res) => {
      this.skills = res.data
      this.totalRows = this.skills.length
    }).catch((e) => {
      console.log(e)
      this.$bvToast.toast(e.response.data.error.message, toastConfig.default)
    })
  }
}
</script>

<style scoped>

</style>
