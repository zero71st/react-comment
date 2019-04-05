import React, { Component } from 'react';
import Header from './comments/Header';
import MessageList from './comments/MessageList';
import firebase from 'firebase';
import MessageBox from './comments/MessageBox';

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
      <div className="container">
        <Header title="Simple Firebase App" />
        <div className="columns">
          <div className="column is-3"></div>
          <div className="column is-6">
            <MessageList db={firebase} />
          </div>
        </div>
        <div className="columns">
          <div className="column is-3"></div>
          <div className="column is-6">
            <MessageBox db={firebase} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
