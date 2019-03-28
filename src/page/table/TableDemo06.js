/**
 * BootStrap 表格-响应式表格
 */
import React, {Component, Fragment} from 'react';

export default class TableDemo06 extends Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>
                            Bootstrap 表格-响应式表格
                        </h1>
                        <blockquote>
                            <p className="text-primary">
                                通过把任意的 .table 包在 .table-responsive class 内，您可以让表格水平滚动以适应小型设备（小于 768px）。
                                当在大于 768px 宽的大型设备上查看时，您将看不到任何的差别。
                            </p>
                        </blockquote>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 table-responsive">
                        <table className="table table-hover table-bordered ">
                            <caption></caption>
                            <thead>
                            <tr>
                                <th>表格标题001</th>
                                <th>表格标题002</th>
                                <th>表格标题003</th>
                                <th>表格标题004</th>
                                <th>表格标题005</th>
                                <th>表格标题006</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="active">
                                <td>表格内容001</td>
                                <td>表格内容002</td>
                                <td>表格内容003</td>
                                <td>表格内容004</td>
                                <td>表格内容005</td>
                                <td>表格内容006</td>
                            </tr>
                            <tr className="success">
                                <td>表格内容001</td>
                                <td>表格内容002</td>
                                <td>表格内容003</td>
                                <td>表格内容004</td>
                                <td>表格内容005</td>
                                <td>表格内容006</td>
                            </tr>
                            <tr className="warning">
                                <td>表格内容001</td>
                                <td>表格内容002</td>
                                <td>表格内容003</td>
                                <td>表格内容004</td>
                                <td>表格内容005</td>
                                <td>表格内容006</td>
                            </tr>
                            <tr className="danger">
                                <td>表格内容001</td>
                                <td>表格内容002</td>
                                <td>表格内容003</td>
                                <td>表格内容004</td>
                                <td>表格内容005</td>
                                <td>表格内容006</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <blockquote className="blockquote-reverse">
                            <strong className="text-success">注意:
                                <code>.table-responsive</code> 必须加在 table 的上一层容器中
                            </strong>
                        </blockquote>
                    </div>
                </div>
            </div>
        )
    }
}