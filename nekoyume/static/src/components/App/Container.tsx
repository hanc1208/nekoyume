import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from './Bar';

class AppContainer extends React.Component {

    render() {
        return (
            <>
                <CssBaseline />
                <AppBar />
            </>
        );
    }
}

export default AppContainer;
