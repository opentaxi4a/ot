<template>
  <v-navigation-drawer v-model="drawer">
    
  </v-navigation-drawer>

  <v-app-bar color="indigo-darken-2">
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-app-bar-title>{{ $t('app.name') }}</v-app-bar-title>
  </v-app-bar>

  <v-main class="">
    <RouterView />
  </v-main>
</template>

<script>
export default {
  data: () => ({
    drawer: false
  }),
}
</script>
