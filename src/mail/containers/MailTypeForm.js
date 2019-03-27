/**
 * containers/MailTypeForm.js
 */
import React, {Component} from 'react';
import MailTypeList from '../components/MailTypeList';

class MailTypeForm extends Component {
    render() {
        return (

            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <form role="form">
                        <div className="form-group">
                            <label htmlFor="name">请选择Mail模板</label>
                            <MailTypeList/>
                        </div>
                        <button type="submit" className="btn btn-default">Submit</button>
                    </form>
                </div>
            </div>

        )
    }
}

export default MailTypeForm