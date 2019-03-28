/**
 * BootStrap-Form表单-垂直或基本表单
 */
import React, {Component} from 'react';

export default class FormDemo01 extends Component {
    render() {

        return (

            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <form action="" role="form">
                            <div className="form-group">
                                <label htmlFor="userame">名称</label>
                                <input type="text" name="userame" id="name" className="form-control" placeholder="请输入用户名"/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="">文件输入</label>
                                <input type="file" name="" id=""/>
                                <p className="help-block">这里是块级帮助文本的实例</p>
                            </div>

                            <div className="checkbox">
                                <label htmlFor="">
                                    <input type="checkbox" name="" id=""/>请勾选
                                </label>
                            </div>

                            <div className="form-group">
                                <label htmlFor="">留言内容</label>
                                <textarea name="" id="" rows="5" className="form-control">

                                </textarea>
                            </div>

                            <button type="submit" className="btn btn-default">提交</button>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}