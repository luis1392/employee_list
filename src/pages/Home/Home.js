import React, { Component } from 'react';

import "./Home.css";

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                
                <div className="container-fluid back-img">
                    <div className="home-sty"></div>
                    <div className="col-md-12 home-container">
                        <p className="text-home">We create and integrate systems into any existing business model to provide our clients with the most accurate and decision-making information at a glance. We are not just engineers, we are business people with an IT background.</p>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;