<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col class="">
        <v-card class="mx-auto" :subtitle="$t('app.login')">
          <template v-slot:title>
            <span class="font-weight-black">{{ $t('app.name') }}</span>
          </template>
          <template v-slot:prepend>
            <v-avatar image="/favicons/favicon.svg"></v-avatar>
          </template>
          <v-card-text class="pt-4">
            <v-form fast-fail @submit.prevent="submit">
              <v-text-field :disabled="loading" type="tel" v-model="tel" :rules="rules" :label="$t('app.mobile')"
                prepend-inner-icon="mdi-phone"></v-text-field>
              <v-card-text class="pt-4">
                <v-banner class="border-0 text-error" color="warning" :text="$t('des.terms_accept')"
                  :stacked="true"></v-banner>
              </v-card-text>
              <v-btn :loading="loading" class="my-3" block type="submit" color="primary">{{ $t('app.login') }}</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
import axios from 'axios';


export default {
  data: () => ({
    loading: false,
    tel: '',
    rules: [
      value => {
        if (value) return true

        return 'الزامی است'
      },
    ],
  }),
  methods: {
    submit() {
      this.loading = true;
      axios.post('/ai').then((response)=>{

      });
    }
  }
}
</script>
