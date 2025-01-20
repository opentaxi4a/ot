<template>
  <v-navigation-drawer v-model="drawer">
    <!--  -->
  </v-navigation-drawer>

  <v-app-bar>
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

    <v-app-bar-title>Application</v-app-bar-title>
  </v-app-bar>

  <v-main>
    <RouterView />
  </v-main>
</template>

<script>
export default {
  data: () => ({
    drawer: null
  }),
}
</script>
