import React from 'react';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme  from '@material-ui/core/styles/createMuiTheme';

class App extends React.Component {

    render() {
        return (
            <MuiThemeProvider theme={createMuiTheme()}>
                Hello world!
            </MuiThemeProvider>
        );
    }
}

export default App;
