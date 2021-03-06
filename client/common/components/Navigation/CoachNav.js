import React from 'react';
import Alert from 'react-s-alert';

export default class CoachNav extends React.Component{
  componentDidMount() {
    $('.button-collapse').sideNav({
      menuWidth: 210,
      edge: 'left',
      closeOnClick: true
    });

    $(".dropdown-button").dropdown();
  }

  logout(){
    Meteor.logout();
    Alert.error('Goodbye, ' + this.props.userName + "!", {
        position: 'bottom',
        effect: 'stackslide',
        timeout: 3000
    });
    FlowRouter.go("/");
  }

  render(){
    return(
      <div className="navbar-fixed">
        <ul id="dropdown1" className="dropdown-content">
          <li><a href="/profile">Profile<i className="material-icons left">account_box</i></a></li>
          <li className="divider"></li>
          <li><a onClick={this.logout.bind(this)}>Logout<i className="material-icons left">exit_to_app</i></a></li>
        </ul>
        <nav className="indigo">
          <div className="nav-wrapper">
            <a href="/manageStudents" className="brand-logo bold"><i className="material-icons large left">trending_up</i>LU Tracker</a>
            <a href="#" data-activates="mobile-demo" className="button-collapse">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li><a href="/schools">Schools</a></li>
              <li><a href="/currentAdmissions">Manage Admissions</a></li>
              <li><a href="/manageStudents">Manage Recruits</a></li>
              <li><a className="dropdown-button" href="#!" data-activates="dropdown1">{this.props.userName}<i className="material-icons right">arrow_drop_down</i></a></li>
            </ul>
            <ul className="side-nav" id="mobile-demo">
              <li><a href="/schools">Schools</a></li>
              <li><a href="/currentAdmissions">Manage Admissions</a></li>
              <li><a href="/manageStudents">Manage Recruits</a></li>
              <li><a href="/profile">Profile</a></li>
              <li><a onClick={this.logout.bind(this)}>Logout</a></li>
            </ul>
          </div>
        </nav>
      </div>
      );
  }
}
