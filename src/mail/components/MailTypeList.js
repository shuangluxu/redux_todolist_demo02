/**
 * components/MailTypeList.js
 */
import React from 'react';
import MailTypeItem from './MailTypeItem';

const MailTypeList = () => (
    <div className="col-sm-10">
        <select className="form-control">
            <MailTypeItem/>
        </select>
    </div>
)

export default MailTypeList