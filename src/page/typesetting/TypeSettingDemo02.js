/**
 * BootStrap 排版-内联子标题
 */
import React, { Component, Fragment } from 'react';

export default class TypeSettingDemo02 extends Component {
    render() {
        return (
            <Fragment>
                <div className="container">
                    <h1 className="text-primary">BootStrap 排版-内联子标题</h1>
                    <div className="row">
                        <div className="col-md-12">
                            <h1>我是标题 1
                                <small>我是内联子标题 1</small>
                            </h1>
                            <h2>我是标题 2
                                <small>我是内联子标题 2</small>
                            </h2>
                            <h3>我是标题 3
                                <small>我是内联子标题 3</small>
                            </h3>
                            <h4>我是标题 4
                                <small>我是内联子标题 4</small>
                            </h4>
                            <h5>我是标题 5
                                <small>我是内联子标题 5</small>
                            </h5>
                            <h6>我是标题 6
                                <small>我是内联子标题 6</small>
                            </h6>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}