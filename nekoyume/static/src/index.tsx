import React from 'react';
import ReactDOM from 'react-dom';

import App from 'components/App';
import { initializeI18n } from 'utils/translations';

const container = document.getElementById('root');

const run = async () => {
    if (module.hot) {
        module.hot.accept('./components/App', () => {
            setImmediate(() => {
                const App = require('./components/App').default;
                ReactDOM.render(<App />, container);
            });
        });
    }

    try {
        await initializeI18n('/translations/');
    } catch {
        console.warn('Failed to load translations.');
    }
    ReactDOM.render(<App />, container);
};

run();
