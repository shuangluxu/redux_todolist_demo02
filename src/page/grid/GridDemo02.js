/**
 * BootStrap 列偏移 demo
 */
import React, { Component } from 'react';

export default class GridEmo02 extends Component {
    render() {
        return (
            <div className="container" style={{background: "#e6ecb3"}}>
                <div className="row">
                    <div className="col-md-3 col-md-offset-6" style={{background: "#eee"}}>
                        clo-md-6 col-md-offset-2
                    </div>
                </div>
            </div>
        )
    }
}