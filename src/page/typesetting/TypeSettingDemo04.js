/**
 * BootStrap 排版-强调文本
 */
import React, { Component, Fragment } from 'react';

export default class TypeSettingDemo04 extends Component {
    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="row">
                        <h1>排版-强调</h1>
                        <div className="col-md-6 col-md-offset-3">
                            <small>内联子标题</small>
                            <strong>强调内容文本</strong>
                            <em>斜体文本</em>
                            <p className="text-left">左对齐文本</p>
                            <p className="text-center">居中对齐文本</p>
                            <p className="text-right">右对齐文本</p>
                            <p className="text-muted">文本内容减弱</p>
                            <p className="text-primary">主要的文本-text-primary</p>
                            <p className="text-success">带有 text-succes样式的文本</p>
                            <p className="text-info">带有 text-info 样式的文本</p>
                            <p className="text-warning">带有 text-warning 样式的文本</p>
                            <p className="text-danger">带有 text-danger 样式的文本</p>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}