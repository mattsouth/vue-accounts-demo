<template>
  <b-spinner v-if="loading" />
  <div class="container" v-else>
    <authenticated v-if="currentUser" />
    <anonymous v-else />
  </div>
</template>

<script>
import { Meteor } from 'meteor/meteor';
import Authenticated from '/imports/ui/Authenticated';
import Anonymous from '/imports/ui/Anonymous';

export default {
  components: {
    anonymous: Anonymous,
    authenticated: Authenticated
  },
  meteor: {
    currentUser() {
      return Meteor.user();
    },
    loading() {
      return Meteor.loggingIn();
    }
  }
}
</script>
