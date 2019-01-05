import React, { Component } from 'react';

import Header from "../Header";
import Footer from "../Footer";

import "./Layout.css";
class Layout extends Component {
    render() {
        return (
            <div>
                <Header/>
                <main>
                    <div className="container general-cont">
                        <div className="row">
                            {this.props.children}
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }
}

export default Layout;