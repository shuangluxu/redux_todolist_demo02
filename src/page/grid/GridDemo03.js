/**
 * BootStrap 嵌套列
 */
import React, {Component} from 'react';

export default class GridDemo03 extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-3">1</div>
                    <div className="col-md-9">
                        <div className="row">
                            <div className="col-md-6">21</div>
                            <div className="col-md-6">22</div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">23</div>
                            <div className="col-md-6">24</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}