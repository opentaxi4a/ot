<template>
  <v-app>
    <v-main class="bg-yellow-darken-2">
      <router-view />
    </v-main>
  </v-app>
  <div class="text-center">
    <v-overlay :model-value="overlay" class="align-center justify-center">
      <div class="text-center text-primary">
        <v-progress-circular color="primary" class="mb-4" size="42" indeterminate></v-progress-circular>
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
    }, 3000);
  },
}
</script>
