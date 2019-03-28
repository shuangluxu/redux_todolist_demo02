/**
 * BootStrap 排版-地址（Address）
 */
import React, { Component, Fragment } from 'react';

export default class TypeSettingDemo06 extends Component {
    render() {
        return (
            <Fragment>

                <div className="container">
                    <div className="row">
                        <div className="col-md-offset-4">
                            <h1>排版-地址（Address）</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <address>
                                <strong>Some Company, Inc.</strong><br/>
                                007 street<br/>
                                Some City, State XXXX<br/>
                                <abbr title="Phone">P:</abbr>(123)458-789
                            </address>
                            <address>
                                <strong>Full Name</strong><br/>
                                <a href="mailto:#">mailto@somedomain.com</a>
                            </address>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}