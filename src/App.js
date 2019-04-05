import React, { Component } from 'react';
import Header from './comments/Header';
import MessageList from './comments/MessageList';
import firebase from 'firebase';
import MessageBox from './comments/MessageBox';

var myColumn = {
  border:1
}

class App extends Component {
  constructor(props) {
    super(props)

    var config = {
      apiKey: "AIzaSyBx4BOSEvPUH8Er4905Q6shu61fEPN6BQ0",
      authDomain: "mycomment-9e778.firebaseapp.com",
      databaseURL: "https://mycomment-9e778.firebaseio.com",
      projectId: "mycomment-9e778",
      storageBucket: "mycomment-9e778.appspot.com",
      messagingSenderId: "208922274925"
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <div className="section">
        <div className="container">
          <Header title="My First firebase program" />

          {/* List */}
          <div className="columns">
            <div className="column is-2"></div>
            <div className="column is-8">
              <MessageList db={firebase} />
            </div>
          </div>

          {/* Text box */}
          <div className="columns">
            <div className="column is-2"></div>
            <div className="column is-8">
              <MessageBox db={firebase} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
