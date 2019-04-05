import React, { Component } from 'react'
import Message from '../comments/Message'
import _ from 'lodash';

export default class MessageList extends Component {
    constructor(props){
        super(props);
        this.state = {
          messages: []
        };
        let app = this.props.db.database().ref('messages');
        app.on('value', snapshot => {
          this.getData(snapshot.val());
        });
      }
    
      getData(values){
        let messagesVal = values;
        let messages = _(messagesVal)
                        .keys()
                        .map(messageKey => {
                          let cloned = _.clone(messagesVal[messageKey]);
                          cloned.key = messageKey;
                          return cloned;
                        }).value();
        this.setState({
          messages: messages
        });
      }

  render() {
      let messageNodes = this.state.messages.map((message) => {
          return (
              <div className="card">
                  <div className="card-content">
                      <Message
                          msgKey={message.key}
                          msg={message.message}
                          db={this.props.db}/>
                  </div>
              </div>
          )
      });
      return (
          <div>
              {messageNodes}
          </div>
      );
  }
}
