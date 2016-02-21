NoStudents = React.createClass({
  render(){
    return (
     <div className="row">
      <div className="col s12 m8 l6 offset-l3 offset-m2">
        <div className="card">
          <div className="card-content black-text">
            <span className="card-title">Welcome to LU Tracker</span>
            <p>Welcome to the Lindenwood University athelete / student tracking
            system. You can now add atheletes your interested in recruiting and 
            keep track of all of their data for easy access and management!</p>
            
            <hr />
            
            <p>You currently have no atheletes added to your tracking system. 
            To begin adding atheletes click the plus(+) sign in the bottom 
            right.</p>
            
            <hr />
            
            <p>If you have any questions feel free to contact the 
            <a href="mailto:alexanderknipfer@gmail.com?Subject=LU%20Tracker_Ticket" target="_top"> web administrator</a>.</p>
 
          </div>
        </div>
      </div>
    </div>
    );
  }
});