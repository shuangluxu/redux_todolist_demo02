/**
 * BootStrap-Form表单-垂直或基本表单
 */
import React, {Component} from 'react';

export default class FormDemo03 extends Component {
    render() {

        return (

            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <form className="form-horizontal" role="form">
                            <div className="form-group">
                                <label htmlFor="" className="control-label col-sm-2">用户名</label>
                                <div className="col-sm-10">
                                    <input type="text" name="" id="firstname" className="form-control" placeholder="请输入用户名"/>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="" className="control-label col-sm-2">密码</label>
                                <div className="col-sm-10">
                                    <input type="text" name="" id="" placeholder="请输入密码" className="form-control"/>
                                </div>
                            </div>


                        </form>
                    </div>
                </div>
            </div>

        )
    }
}