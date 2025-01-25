<template>
  <v-app>
    <v-main class="bg-indigo-darken-2 pa-0 ma-0">
      <router-view />
    </v-main>
  </v-app>
  <div class="text-center">
    <v-overlay :model-value="overlay" class="align-center justify-center">
      <div class="text-center text-blue-lighten-5">
        <v-progress-circular color="blue-lighten-5" class="mb-4" size="42" indeterminate></v-progress-circular>
        <br>
        {{ $t('app.loading') }}
      </div>
    </v-overlay>
  </div>
</template>

<script>
export default {
  data: () => ({
    overlay: true,
  }),
  mounted() {
    setTimeout(() => {
      this.overlay = false
    }, 300);
  },
}
</script>
