
var moment = require('moment');
var Backbone = require('backbone');

// var User = Backbone.Model.extend({
//   idAttribute: '_id',
//   defaults: {
//     username: 'someone'
//   }
// });

var ChatMessage = Backbone.Model.extend({
  idAttribute: '_id',
  defaults: {
    username: localStorage.getItem('username'),
    message: ''
    // timestamp: ''

  },
  initialize: function(){
     this.isNew() ? this.set('timestamp', moment().format('LTS')) : this.set('timestamp', this.get('timestamp'));
  }

});

var ChatMessageCollection = Backbone.Collection.extend({
  model: ChatMessage,
  comparator: -'timestamp',
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/messages/'
});

module.exports = {
  //User,
  ChatMessage,
  ChatMessageCollection
}
