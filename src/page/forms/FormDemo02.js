/**
 * BootStrap-Form表单-垂直或基本表单
 */
import React, {Component} from 'react';

export default class FormDemo02 extends Component {
    render() {

        return (

            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <form action="/abc.html" className="form-inline" role="form">
                            <div className="form-group">
                                <label htmlFor="username" className="sr-only">用户名</label>
                                <input type="text" name="username" id="username" className="form-control" placeholder="请输入用户名"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="password" className="sr-only">用户密码</label>
                                <input type="password" name="password" id="password" className="form-control" placeholder="请输入密码"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="" className="sr-only">文件</label>
                                <input type="file" name="" id=""/>
                            </div>

                            <div className="checkbox">
                                <label htmlFor="">
                                    <input type="checkbox" name="" id=""/>请勾选
                                </label>
                            </div>
                            <button className="btn btn-defalt">提交</button>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}