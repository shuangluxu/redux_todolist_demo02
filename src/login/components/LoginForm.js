import React, {Component} from 'react';

class LoginForm extends Component {

    render() {
        return (
            <div className="row">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label htmlFor="inputUserName" className="col-sm-2 control-label">用户名</label>
                        <div className="col-sm-3">
                            <input type="text" className="form-control" id="inputUserName" placeholder="UserName"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPassword" className="col-sm-2 control-label">密码</label>
                        <div className="col-sm-3">
                            <input type="password" className="form-control" id="inputPassword3" placeholder="Password"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-3">
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox"/> 记住我
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="submit" className="btn btn-default">登录</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }

}

export default LoginForm