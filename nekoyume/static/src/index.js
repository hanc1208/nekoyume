import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
var container = document.getElementById('root');
var run = function () {
    if (module.hot) {
        module.hot.accept('./components/App', function () {
            setImmediate(function () {
                var App = require('./components/App').default;
                ReactDOM.render(React.createElement(App, null), container);
            });
        });
    }
    ReactDOM.render(React.createElement(App, null), container);
};
run();
//# sourceMappingURL=index.js.map