<template>
  <div class="container">
    <div class="jumbotron mt-4">
      <h1>Hello {{usersName}}!</h1>
      <b-button @click="logout">logout</b-button>
    </div>
  </div>
</template>

<script>
import { Meteor } from 'meteor/meteor';

export default {
  computed: {
    usersName() {
      return this.currentUser ? this.currentUser.profile.first_name + ' ' + this.currentUser.profile.last_name : '';
    }
  },
  methods: {
    logout() {
      const _this = this;
      Meteor.logout();
    }
  },
  meteor: {
    currentUser() {
      return Meteor.user();
    }
  }
}
</script>
