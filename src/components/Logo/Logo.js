import React, { Component } from 'react';
import "./Logo.css";
class Logo extends Component {
    render() {
        const { url, css } = this.props;
        return <img src={url} className={css} alt="logo" />;
    }
}

export default Logo;