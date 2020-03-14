# vue-accounts-demo

A minimal replication of an issue with Accounts.loginWithPassword and meteor-vue.

To create yourself a local version:
```
you@yourmachine$ git clone https://github.com/mattsouth/vue-accounts-demo
you@yourmachine$ cd vue-accounts-demo
you@yourmachine$ meteor npm install
you@yourmachine$ meteor
```

You will see a login page that you can authenticate against with the credentials "demo" and "password".   The issue is that I want to be able to present a message if the credentials are wrong, i.e. "demo" and "pass" but I cant seem to stop the form submitting when I call Accounts.loginWithPassword.

## development

The steps to create this demo are:

1. meteor create .
2. meteor remove autopublish insecure reactive-var
3. meteor add akryum:vue-component accounts-password
4. meteor npm install --save vue vue-meteor-tracker bootstrap-vue bootstrap bcrypt
5. edit files:
  * client/App.vue
  * client/main.html
  * client/main.js
  * client/main.css (removed)
  * imports/ui/Anonymous.vue
  * imports/ui/Authenticated.vue
