import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import liao from './image/liao.jpg';
class ErrorPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return (
            <div className="container-fluid" style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',paddingTop:100}}>
                <img style={{width:100}} src={liao} alt="zdm"/>
                <Link to="/">
                    <h3 className="text-primary">我草 迷路了!</h3>
                </Link>
            </div>
        );
    }
}
 
export default ErrorPage;