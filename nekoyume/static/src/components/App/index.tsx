import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme  from '@material-ui/core/styles/createMuiTheme';

import AppContainer from './Container';

class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <MuiThemeProvider theme={createMuiTheme()}>
                    <AppContainer />
                </MuiThemeProvider>
            </BrowserRouter>
        );
    }
}

export default App;
