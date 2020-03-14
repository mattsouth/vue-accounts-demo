<template>
  <div class="row">
    <div class="col-8 offset-2">
      <b-card bg-variant="light" class="mt-5">
        <b-card-body>
          <div class="h5 text-center mb-0">User Login</div>
          <hr class="mt-2" />
          <b-alert v-model="showMessage" variant="danger" dismissible>
            <strong>Authentication failed</strong> Please check your username and password and retry.
          </b-alert>
          <div class="row">
            <div class="col-8 offset-2">
              <form role="form" @submit.prevent="signIn">
                <b-form-group>
                  <b-form-input v-model.trim="username" placeholder="Username" required />
                </b-form-group>
                <b-form-group>
                  <b-form-input v-model.trim="password" type="password" required placeholder="Password" />
                </b-form-group>
                <b-button type="submit" variant="success" :disabled="loading"><b-spinner small v-if="loading" /> Submit</b-button>
              </form>
            </div>
          </div>
        </b-card-body>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      showMessage: false,
      username: '',
      password: '',
    };
  },
  meteor: {
    loading() {
      return Meteor.loggingIn();
    }
  },
  methods: {
    signIn() {
      this.showMessage = false; // in case it was previously true
      Meteor.loginWithPassword(this.username, this.password, (error) => {
        if (error) {
          this.showMessage = true;
        } else {
          this.username = this.password = ''
        }
      });
    }
  }
}
</script>
