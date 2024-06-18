<template>
  <!-- <TopNav v-if="!hide" /> -->
  <router-view />
</template>
<script>
// import TopNav from '@/components/TopNav.vue';
export default {
  name: 'App',
  components: {
    // TopNav,
  },
  computed: {
    hide() {
      const hiddenPages = ['DemoPage1', 'ThankYou', 'LoginPage', 'RegistrationPage', 'TemplateOne', 'TemplateTwo', 'TemplateThree']
      return hiddenPages.includes(this.$route.name)
    },
  }

}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

:root {
  --bg-primary: #02539E;
  --bg-secondary: #02539E;
  --bg-tertiary: #894718;
  --bg-forth: #FBF4F4;
}

.smaller {  
  font-size: 12px;
}
</style>
