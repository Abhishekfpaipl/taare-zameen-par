<template>
  <TopNav v-if="!hide" />
  <router-view />
  <FooterBar v-if="!hide" />
</template>
<script>
import TopNav from '@/components/TopNav.vue';
import FooterBar from '@/components/FooterBar.vue';
export default {
  name: 'App',
  components: {
    TopNav,
    FooterBar,
  },
  computed: {
    hide() {
      const hiddenPages = ['DemoPage1', 'ThankYou', 'LoginPage', 'RegistrationPage','ForgotPasswordPage']
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
