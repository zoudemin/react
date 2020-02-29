import React, { Component } from 'react';
import LKHeader from '../Header/LKHeader';
import Aside from '../Aside/Aside';

class IndexLayOut extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return (
            <div>
                <div>
                    <LKHeader/>
                </div>
                <div className="main">
                    <Aside/>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
 
export default IndexLayOut;