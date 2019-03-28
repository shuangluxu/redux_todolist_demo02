/**
 * BootStrap 排版-缩写
 */
import React, { Component, Fragment } from 'react';

export default class TypeSettingDemo05 extends Component {
    render() {
        return (
            <Fragment>
                <div className="container">
                    <h1>排版-缩写</h1>
                    <div className="row">
                        <div className="col-md-4 col-md-offset-4">
                            <abbr title="World Wide Web">WWW</abbr><br/>
                            <abbr title="Real Simple Syndication" className="initialism">RSS</abbr>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}