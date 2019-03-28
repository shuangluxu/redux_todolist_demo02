/**
 * BootStrap 列排序,可以通过col-md-push, col-md-pull指定列的排列顺序
 */
import React, {Component} from 'react';

export default class GridDemo04 extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4">Left</div>
                    <div className="col-md-8">Right</div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-md-push-8">Left</div>
                    <div className="col-md-4 col-md-pull-4">Right</div>
                </div>
            </div>
        )
    }
}