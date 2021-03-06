<template>
  <v-toolbar dense class="mb-5">
    <v-toolbar-title>
      <router-link to="/">MY COLLECTIONS</router-link></v-toolbar-title
    >

    <v-spacer></v-spacer>

    <router-link to="/">
      <v-btn class="nav__btn" elevation="0">
        Home
      </v-btn>
    </router-link>

    <router-link to="/collections">
      <v-btn class="nav__btn" elevation="0">
        Collections
      </v-btn>
    </router-link>
  </v-toolbar>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: #333 !important;
}
.nav__btn {
  background: transparent;
}
</style>
