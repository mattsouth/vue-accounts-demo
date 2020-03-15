# vue-accounts-demo

A minimal demo of using Meteor, accounts-password and meteor-vue.

To create a local version:
```
you@yourmachine$ git clone https://github.com/mattsouth/vue-accounts-demo
you@yourmachine$ cd vue-accounts-demo
you@yourmachine$ meteor npm install
you@yourmachine$ meteor
```

You will see a login page that you can authenticate against with the credentials "demo" and "password".

## development

The steps to create this demo are:

1. meteor create .
2. meteor remove autopublish insecure reactive-var jquery blaze-html-templates
3. meteor add akryum:vue-component accounts-password static-html
4. meteor npm install --save vue vue-meteor-tracker bootstrap-vue bootstrap bcrypt
5. meteor npm remove jquery
6. edit files:
  * client/App.vue
  * client/main.html
  * client/main.js
  * client/main.css (removed)
  * imports/ui/Anonymous.vue
  * imports/ui/Authenticated.vue
