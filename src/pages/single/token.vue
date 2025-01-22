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
            <v-form :disabled="loading" ref="form" fast-fail @submit.prevent="submit()">
              <v-otp-input
      v-model="otp"
      class="mt-3 ms-n2"
      length="5"
      placeholder="0"
    ></v-otp-input>
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
  <v-dialog v-model="dialog.active" width="auto">
    <v-card prepend-icon="mdi-information-outline"
      :text="dialog.msg" :title="dialog.title">
      <template v-slot:actions>
        <v-btn class="ms-auto" color="success" :text="$t('app.ok')" @click="dialog.active = false"></v-btn>
      </template>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from 'axios';


export default {
  data() {
    const self = this;
    return {
      loading: false,
      dialog: {
        active: false,
        title: '',
        msg: '',
        type: ''
      },
      otp: '',
      rules: [
        value => {
          return true;
        },
      ],
    }
  },
  methods: {
    async submit() {
      this.$router.push('/app/home');
      const { valid } = await this.$refs.form.validate();
      if (valid) {
        this.loading = true;
        axios.post('/user/login', { tel: this.tel }).then((response) => {
          if (response.data.success == true) {
            this.$router.push('/user/token/' + this.tel)
          }
          else {
            this.dialog = response.data.message;
          }
        })
      }
    }
  }
}
</script>
