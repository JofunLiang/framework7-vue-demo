<template>
  <f7-page>
    <f7-navbar title="Framework7 Vue"></f7-navbar>
    <f7-page-content>
      <img alt="Vue logo" src="../assets/logo.png"> 
      <f7-block>
        <f7-button fill @click="toAbout">关于</f7-button>
      </f7-block>
    </f7-page-content>
  </f7-page>
</template>

<script>
export default {
  name: 'home',
  methods: {
    toAbout () {
      this.$router.push({
        path: "/about"
      })
    }
  }
}
</script>