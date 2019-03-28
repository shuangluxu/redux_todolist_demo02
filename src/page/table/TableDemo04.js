/**
 * BootStrap 表格-精简表格
 */
import React, {Component, Fragment} from 'react';

export default class TableDemo04 extends Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Bootstrap 表格-精简表格</h1>
                        <blockquote>
                            <p className="text-primary">
                                通过添加 .table-condensed class，行内边距（padding）被切为两半，以便让表看起来更紧凑，如下面的实例所示：
                            </p>
                        </blockquote>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <table className="table table-condensed">
                            <caption>通过添加 .table-condensed class，行内边距（padding）被切为两半，让表看起来更紧凑</caption>
                            <thead>
                            <th>列标题1</th>
                            <th>列标题2</th>
                            <th>列标题3</th>
                            <th>列标题4</th>
                            </thead>
                            <tbody>
                            <tr>
                                <td>表格内容1</td>
                                <td>表格内容2</td>
                                <td>表格内容3</td>
                                <td>表格内容4</td>
                            </tr>
                            <tr>
                                <td>表格内容1</td>
                                <td>表格内容2</td>
                                <td>表格内容3</td>
                                <td>表格内容4</td>
                            </tr>
                            <tr>
                                <td>表格内容1</td>
                                <td>表格内容2</td>
                                <td>表格内容3</td>
                                <td>表格内容4</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}