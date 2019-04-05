import React, { Component } from 'react'

export default class Header extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="level">
                    <nav class="navbar" role="navigation" aria-label="main navigation">
                        <div class="navbar-brand">
                            <a class="navbar-item" href="https://bulma.io">
                                {/* <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, & modern CSS framework based on Flexbox" width="112" height="28" /> */}
                                {this.props.title}
                            </a>

                            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                            </a>
                        </div>
                    </nav>
            </div>

            // <nav className="navbar">
            //     <div className="navbar-brand">
            //         <a className="navbar-item" href="http://bulma.io">
            //             {this.props.title}
            //         </a>
            //     </div>
            // </nav>
        )
    }
}
