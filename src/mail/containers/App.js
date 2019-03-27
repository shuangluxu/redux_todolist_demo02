/**
 * containers/App.js
 */
import React, {Component, Fragment} from 'react';
import Nav from '../../common/components/Nav';
import PageContainer from '../../common/components/PageContainer';
import Footer from '../../common/components/Footer';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Nav />
                <PageContainer />
                <Footer />
            </Fragment>
        )
    }
}

export default App