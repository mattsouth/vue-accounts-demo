<template>
  <authenticated v-if="currentUser" />
  <anonymous v-else />
</template>

<script>
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
    }
  }
}
</script>
