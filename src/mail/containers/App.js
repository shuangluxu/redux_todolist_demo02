/**
 * containers/App.js
 */
import React, {Component, Fragment} from 'react';
import Nav from '../../common/components/Nav';
import PageContainer from '../../common/components/PageContainer';
import Footer from '../../common/components/Footer';

import GridList from '../../page/grid/GridList';
import TypeSettingList from '../../page/typesetting/TypeSettingList';
import TableList from '../../page/table/TableList';
import FormDemoList from '../../page/forms/FormDemoList';

class App extends Component {
    render() {
        return (
            <Fragment>
                {/*
                <Nav />
                <PageContainer />
                <Footer />
                <GridList />
                <TypeSettingList/>
                <TableList/>
                */}
              <FormDemoList/>
            </Fragment>
        )
    }
}

export default App