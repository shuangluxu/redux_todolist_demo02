/**
 * BootStrap 排版-地址（Address）
 */
import React, { Component, Fragment } from 'react';

export default class TypeSettingDemo07 extends Component {
    render() {
        return (
            <Fragment>

                <div className="container">
                    <div className="row">
                        <div className="col-md-offset-4">
                            <h1>排版-引用（Blockquote）</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">

                            <blockquote>
                                <p>
                                    这是一个默认的引用实例。这是一个默认的引用实例。这是一个默认的引用实例。这是一个默认的引用实例。这是一个默认的引用实例。这是一个默认的引用实例。这是一个默认的引用实例。这是一个默认的引用实例。
                                </p>
                            </blockquote>

                            <blockquote>
                                这量个带有源标题的引用
                                <small>Someone famous in <cite title="Source Title">Source Title</cite></small>
                            </blockquote>

                            <blockquote className="blockquote-reverse">
                                这是一个向右对齐的引用
                                <small>Someone famous in <cite title="Source Title">Source Title</cite></small>
                            </blockquote>

                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}