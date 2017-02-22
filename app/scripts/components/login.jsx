var React = require('react');

var LoginContainer = React.createClass({
  loginUser: function(user) {
    //localStorage here?
    //pass down to LoginForm in the JSX below
    var router = this.props.router;
    router.username= user.username;
    localStorage.setItem('username', user.username);

    console.log('rout-user',router.username);

    router.navigate('', {trigger: true});
  },
  render: function() {
      return (
      <div>
        <LoginForm loginUser={this.loginUser} />
      </div>
    );
  }

});

var LoginForm = React.createClass({
  getInitialState: function() {
    return {username: ''}
  },
  handleUsernameChange: function(event){
    this.setState({username: event.target.value});
  },
  handleLogin: function(event){
    event.preventDefault();
    var user = this.state;
    this.props.loginUser(user);


    this.setState({username: ''});
  },
  render: function(){
    //console.log(this.state.title);
    return (
      <div className="col-md-4">
        <div className="user-input">
          <form onSubmit={this.handleLogin}>
            <div className="form-group">
              <label id="username-labeller" htmlFor="username">Username: </label>
              <input onChange={this.handleUsernameChange} value={this.state.username} type="text" className="form-control input-bar" id="username" placeholder="Username..." />
            </div>
            <input id="create-button" type="submit" className="btn btn-success" value="Create User"/>
          </form>
        </div>
      </div>
    )
  }
});

module.exports = {
  LoginForm,
  LoginContainer
}
