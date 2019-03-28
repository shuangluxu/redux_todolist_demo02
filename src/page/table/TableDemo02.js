/**
 * BootStrap 表格-边框表格
 */
import React, { Component, Fragment } from 'react';

export default class TableDemo02 extends Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Bootstrap 表格-边框表格</h1>
                        <blockquote>
                            <p className="text-primary">
                                通过添加 .table-bordered class，您将看到每个元素周围都有边框，且占整个表格是圆角的，如下面的实例所示：
                            </p>
                        </blockquote>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <table className="table table-bordered">
                            <caption>边框表格布局</caption>
                            <thead>
                            <tr>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>4</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                                <td>4</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}