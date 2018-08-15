import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme  from '@material-ui/core/styles/createMuiTheme';

class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <MuiThemeProvider theme={createMuiTheme()}>
                    Hello world!
                </MuiThemeProvider>
            </BrowserRouter>
        );
    }
}

export default App;
