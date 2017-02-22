

var Backbone = require('backbone');

var User = Backbone.Model.extend({

});

var ChatMessage = Backbone.Model.extend({
  idAttribute: '_id',
  defaults: {
      username: 'somebody',
      message: '',
      timestamp: ''

  }

});

var ChatMessageCollection = Backbone.Collection.extend({
  model: ChatMessage,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/messages/'
});

module.exports = {
  User,
  ChatMessage,
  ChatMessageCollection
}
