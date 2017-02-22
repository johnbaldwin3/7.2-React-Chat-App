var React = require('react');
var ReactDOM = require('react-dom');

var ChatroomContainer = require('./components/chat.jsx').ChatroomContainer;


//var chats = new ChatMessageCollection();

ReactDOM.render(
  React.createElement(ChatroomContainer),
  document.getElementById('app')
);
