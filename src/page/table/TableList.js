/**
 * BootStrap 表格
 */
import React, { Component, Fragment } from 'react';
import TableDemo01 from './TableDemo01';
import TableDemo02 from './TableDemo02';
import TableDemo03 from './TableDemo03';
import TableDemo04 from './TableDemo04';
import TableDemo05 from './TableDemo05';
import TableDemo06 from './TableDemo06';

export default class TableList extends Component {

    render() {
        return (
            <Fragment>
                {/*
                <TableDemo01/>
                <TableDemo02/>
                <TableDemo03/>
                <TableDemo04/>
                <TableDemo05/>
                */}
                <TableDemo06/>
            </Fragment>
        )
    }
}