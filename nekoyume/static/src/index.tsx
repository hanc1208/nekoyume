import React from 'react';
import ReactDOM from 'react-dom';

import App from 'components/App';

const container = document.getElementById('root');

const run = () => {
    if (module.hot) {
        module.hot.accept('./components/App', () => {
            setImmediate(() => {
                const App = require('./components/App').default;
                ReactDOM.render(<App />, container);
            });
        });
    }

    ReactDOM.render(<App />, container);
};

run();
