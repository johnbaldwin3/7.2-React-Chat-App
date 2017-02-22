var Backbone = require('backbone');
var $ = require('jquery');
// var React = require('react');
// var ReactDOM = require('react-dom');
//
// var ChatroomContainer = require('./components/chat.jsx').ChatroomContainer;



require('./router.js');
//var TodoCollection = require('./models/todo.js').TodoCollection;
$(function(){
  Backbone.history.start();
  });

//var chats = new ChatMessageCollection();

// ReactDOM.render(
//   React.createElement(ChatroomContainer),
//   document.getElementById('app')
// );
