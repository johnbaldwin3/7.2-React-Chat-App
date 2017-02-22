var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var ChatroomContainer = require('./components/chat.jsx').ChatroomContainer;

var LoginContainer = require('./components/login.jsx').LoginContainer;


var ChatRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'login': 'login'
  },
  initialize: function() {
    // create user property on Router
    //gets the user from local storage

    this.username = localStorage.getItem('username');
    console.log('router username', this.username);
  },
  index: function() {
    if(!this.username) {
      this.navigate('login', {trigger: true});
      return;
    }

    ReactDOM.render(
      React.createElement(ChatroomContainer, {router: this}),
      document.getElementById('app')
    );
  },
  login: function() {
    ReactDOM.render(
      React.createElement(LoginContainer, {router: this}),
      document.getElementById('app')
    );
  }

});


var chatRouter = new ChatRouter();

module.exports = {
  chatRouter
};
