import React, {Component} from 'react';
import Breadcrumb from "./Breadcrumb";
import MailTypeForm from '../../mail/containers/MailTypeForm';
import MailTable from '../../mail/components/MailTable'

/**
 * common/components/PageContainer.js
 */
class PageContainer extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        <h1>Left</h1>
                    </div>
                    <div className="col-md-10">
                        <Breadcrumb />
                        <MailTypeForm />
                        <MailTable />
                    </div>
                </div>
            </div>
        )
    }
}

export default PageContainer