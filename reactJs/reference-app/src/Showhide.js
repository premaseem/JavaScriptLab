import logo from './logo.svg';
import './App.css';

import React from 'react';

class Showhide extends React.Component {
    render() {
        return (
            <div>
                Hello World!!!
                <span style={{display: this.props.paHide}} > Toggle this content </span>
            </div>
        );
    }
}
export default Showhide;

