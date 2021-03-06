import React from 'react';
import Alert from 'react-s-alert';
import CommonNav from '../Navigation/CommonNav.js';

export default class Login extends React.Component{
  handleSubmit(e){
    e.preventDefault();
    const username = this.refs.username.value;
    const password = this.refs.password.value;

    if(username == "" && password == ""){
      Alert.error("Please enter valid username and password",{
        position: "bottom",
        effect: "stackslide",
        timeout: 3000
      });
    }

    else if(username == ""){
      Alert.error("Please enter valid username",{
        position: "bottom",
        effect: "stackslide",
        timeout: 3000
      });
    }

    else if(password == ""){
      Alert.error("Please enter valid password",{
        position: "bottom",
        effect: "stackslide",
        timeout: 3000
      });
    }

    else{
      Meteor.loginWithPassword(username, password, (error, reason) => {
        if (error) {
          Alert.error(error.reason, {
              position: 'bottom',
              effect: 'stackslide',
              timeout: 3000
          });
        }
        else {
          Alert.success('Welcome to LU Tracker!', {
              position: 'bottom',
              effect: 'stackslide',
              timeout: 3000
          });
        }
      });
    }

    Accounts.onLogin(() =>{
      if(Roles.userIsInRole(Meteor.userId(), "admin")){
        FlowRouter.go("/currentCoaches");
      }

      if(Roles.userIsInRole(Meteor.userId(), "coach")){
        FlowRouter.go("/manageStudents");
      }

      if(Roles.userIsInRole(Meteor.userId(), "admissions")){
        FlowRouter.go("/enrolledStudents");
      }
    });
  }

 render(){
   return (
     <div className="row">
      <div className="col s12 m8 l6 offset-l3 offset-m2">
        <div className="card login-padding">
            <div className="card-image image-padding">
                  <img src="images/logo.jpg" width="130" height="170" />
            </div>
          <div className="card-content black-text">
            <span className="card-title">Login</span>

            <form onSubmit={this.handleSubmit.bind(this)}>
              <div className="row">
                <div className="col s12">
                  <input type="text" ref="username" className="validate" placeholder="Username" minLength={2} />
                </div>
              </div>

              <div className="row">
                <div className="col s12">
                  <input type="password" ref="password" className="validate" placeholder="Password" minLength={2} />
                </div>
              </div>
              <div className="row right">
                <a href="/forgotPassword">Forgot Password</a>
              </div>
              <button className="btn waves-effect login grey" type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
 }
}
