CurrentCoaches = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    const handle = Meteor.subscribe("coaches");
    return {
      loading: !handle.ready(),
      myCoaches: Meteor.users.find({
        roles: "coach"
      }).fetch()
    };
  },

  render(){
    return(
      <div className="row">
      <div className="col s12 m12 l12">
        <div className="card">
          <div className="card-content black-text">
            <span className="card-title">Current Coaches</span>
              <div className="row">
                <div col="s12 m4 l4">
                  <a className="btn-floating btn-large waves-effect waves-light red right float-button z-depth-1" href="/AddCoach"><i className="material-icons">add</i></a>
                </div>
              </div>

              <CoachTable coachData={this.data.myCoaches} />
          </div>
        </div>
      </div>
    </div>
      );
  }
});