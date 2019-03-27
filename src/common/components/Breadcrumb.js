import React, { Component } from 'react';

class Breadcrumb extends Component {
    render() {
        return (
            <div className="row" style={{borderRadius: 0}}>
                <ul className="breadcrumb">
                    <li><a href="#">首页</a></li>
                    <li><a href="#">Library</a></li>
                    <li className="active">Data</li>
                </ul>
            </div>
        )
    }
}

export default Breadcrumb