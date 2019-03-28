/**
 * BootStrap 表格-上下文类
 */
import React, {Component, Fragment} from 'react';

export default class TableDemo05 extends Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Bootstrap 表格-上下文类</h1>
                        <blockquote>
                            <p className="text-primary">
                                下表中所列出的上下文类允许您改变表格行或单个单元格的背景颜色
                            </p>
                        </blockquote>
                        <table className="table table-bordered">
                            <thead className="text-primary">
                            <th>类</th>
                            <th>描述</th>
                            </thead>
                            <tbody>
                            <tr>
                                <td>.active</td>
                                <td>对某一特定单元格应用悬念颜色</td>
                            </tr>
                            <tr>
                                <td>.success</td>
                                <td>表示一的或积极的动作</td>
                            </tr>
                            <tr>
                                <td>.warning</td>
                                <td>表示一个需要注意的警告</td>
                            </tr>
                            <tr>
                                <td>.danger</td>
                                <td>表示一个危险的或潜在的负面动作</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <table className="table table-hover">
                            <thead>
                            <th>产品</th>
                            <th>付款日期</th>
                            <th>状态</th>
                            </thead>
                            <tbody>
                            <tr className="active">
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                            </tr>
                            <tr className="success">
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                            </tr>
                            <tr className="warging">
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                            </tr>
                            <tr className="danger">
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}