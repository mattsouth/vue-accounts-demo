import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base'

Meteor.startup(() => {
  Accounts.config({});

  // next block for early development - should be moved out before any deployment is made
  if ( Meteor.users.find().count() === 0 ) {
    console.log("creating default users");
    Accounts.createUser({
      username: 'demo',
      password: 'password',
      email: 'demo@meteor.com',
      profile: {
        first_name: 'Demo',
        last_name: 'User',
      }
    });
  }
});
