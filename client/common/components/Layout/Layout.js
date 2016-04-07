import React from 'react';
import Alert from 'react-s-alert';
import CommonNav from '../Navigation/CommonNav.js';

Layout = React.createClass({
   render(){
       return (
           <div>

            <header>
                <Navigation />
            </header>


            <main className="container">
                {this.props.content}
            </main>
            <Alert stack={{limit: 3}} />
           </div>
        );
   }
});