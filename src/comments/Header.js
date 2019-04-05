import React, { Component } from 'react'

export default class Header extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
    render() {
        return (
            <nav className="navbar">
                <div className="navbar-brand">
                    <a className="navbar-item" href="http://bulma.io">
                        {this.props.title}
                    </a>
                </div>
            </nav>
        )
    }
}
