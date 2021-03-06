<template>
  <v-app app>
    <v-main>
      <Header />
      <v-container class="py-0">
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from "@/components/Header";
import { mapActions } from "vuex";
export default {
  name: "App",

  components: {
    Header,
  },

  data: () => ({
    //
  }),

  methods: {
    ...mapActions(["getCollections"]),
  },

  mounted() {
    this.getCollections();
  },
};
</script>

<style lang="scss" scoped>
.v-application {
  background: #f1f1f1 !important;
}
</style>
