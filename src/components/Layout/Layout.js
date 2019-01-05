import React, { Component } from 'react';

import Header from "../Header";
import Footer from "../Footer";

class Layout extends Component {
    render() {
        return (
            <div>
                <Header/>
                <main>
                    <div>{this.props.children}</div>
                </main>
                <Footer />
            </div>
        );
    }
}

export default Layout;