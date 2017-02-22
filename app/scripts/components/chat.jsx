var React = require('react');
var models = require('../models/chat_model.js');

var ChatroomContainer = React.createClass({
  getInitialState: function(){

    var chatMessageCollection = new models.ChatMessageCollection();
    var self = this;

    chatMessageCollection.fetch().done(function(){
      self.setState({chatList: chatMessageCollection});

      self.forceUpdate();
    });
    return {chatList: chatMessageCollection};
  },
  addChatMessage: function(chatMsg){
    var chatList = this.state.chatList;
    chatList.create(chatMsg);
    this.setState({chatList: chatList});
  },

  render: function(){

    return (
      <div className="wrapper">
        <div className="fluid-container">
          <header className="header-chat"><h1>Chat App</h1></header>
        </div>
      <div className="container">

          <div className="row">
          <div className="col-md-8">

            <div className="chatroom">
              <h3 className="chatroom-title">TIY GVL Chat Room</h3>
              <div className="chatroom-messages">
                <ChatMessageList chatMessages={this.state.chatList}/>
              </div>

              <div className="row">
                <div className="user-input">
                  <ChatSubmitMessageForm addChatMessage = {this.addChatMessage}/>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="user-input">
              <form action="">
                <div className="form-group">
                  <label id="username-labeller" htmlFor="username">Username: </label>
                  <input type="text" className="form-control input-bar" id="username" placeholder="Username..." />
                  <label id="password-labeller" htmlFor="password">Password: </label>
                  <input type="password" className="form-control input-bar" id="password" placeholder="Password..." />
                </div>
                <input id="create-button" type="submit" className="btn btn-success" value="Create User"/>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
});

var ChatSubmitMessageForm = React.createClass({
  getInitialState: function() {
    var msgs = {message: ''};
    return msgs;
  },
  handleMessageChange: function(event) {
    console.log();
    this.setState({message: event.target.value});
  },
  addChatMessage: function(event) {
    event.preventDefault();
    this.props.addChatMessage(this.state);
    this.setState({message: ''});
  },

  render: function(){
    console.log(this.state.message);
    return (
      <form onSubmit={this.addChatMessage}>
        <div className="form-group">
          <label id="message-labeller" htmlFor="message">Add to the Convo... </label>
          <input onChange={this.handleMessageChange} value={this.state.message} type="text" className="form-control input-bar" id="message" placeholder="Your Message..." />
        </div>
        <input id="sub-button" type="submit" className="btn btn-success" value="Send Msg"/>
      </form>
    )
  }
});

var ChatMessageList = React.createClass({

  render: function() {
      var messages = this.props.chatMessages.map(function(msgs){
          return (
            <li key={msgs.cid} className="messages">{msgs.get('username')}:{msgs.get('message')}</li>
          );

      })
    return (
      <ul className="chat-ul">
        {messages}
      </ul>
    );
  }
});

module.exports = {
  ChatroomContainer
};
