import React, { Component } from 'react';
import RCPagination from 'rc-pagination';
import 'rc-pagination/dist/rc-pagination.min.css';

class LKPagination extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() { 
        return (
            <div className="pagination pull-right">
                <RCPagination showQuickJumper showTitle hideOnSinglePage {...this.props}/>
            </div>
        );
    }
}
 
export default LKPagination;