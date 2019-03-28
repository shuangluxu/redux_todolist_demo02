/**
 * common/components/Nav.js
 * 页面导航
 */
import React, {Component} from 'react';

class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-default" role="navigation" style={{marginBottom: 0}}>
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#example-navbar-collapse">
                            <span className="sr-only">切换导航</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">IT-FORCE</a>
                    </div>
                    <div className="collapse navbar-collapse" id="example-navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="#">Home</a></li>
                            <li><a href="#">BootStrap</a></li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    React <b className="caret"></b>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">React</a></li>
                                    <li><a href="#">React-Route</a></li>
                                    <li><a href="#">React-Redux</a></li>
                                    <li className="divider"></li>
                                    <li><a href="#">React-BootStrap</a></li>
                                    <li className="divider"></li>
                                    <li><a href="#">Redux-Form</a></li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#"><span className="glyphicon glyphicon-user"></span> 注册</a></li>
                            <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> 登录</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Nav

