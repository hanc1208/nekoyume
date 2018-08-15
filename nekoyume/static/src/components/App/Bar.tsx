import React from 'react';

import AppBar from '@material-ui/core/AppBar/AppBar';
import IconButton from '@material-ui/core/IconButton/IconButton';
import Toolbar from '@material-ui/core/Toolbar/Toolbar';
import Typography from '@material-ui/core/Typography/Typography';
import withStyles, { StyleRules, WithStyles } from '@material-ui/core/styles/withStyles';
import MenuIcon from '@material-ui/icons/Menu';
import { Route } from 'react-router';

const styles: StyleRules = {
    toolbar: {
        flex: 1,
    },
    menu: {
        marginLeft: -12,
        marginRight: 20,
    },
}

class Bar extends React.Component<WithStyles> {

    render() {
        const { classes } = this.props;
        return (
            <AppBar>
                <Toolbar className={classes.toolbar}>
                    <IconButton className={classes.menu} color="inherit">
                        <Route exact path="/" component={MenuIcon} />
                    </IconButton>
                    <Typography variant="title" color="inherit">
                        Nekøyume
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    }
}

export default withStyles(styles)(Bar);
