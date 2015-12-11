import 'babel-core/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';
import store from './lib/store';


// Needed for material ui
const injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();


if (__DEVTOOLS__) {
  const { DebugPanel, DevTools, LogMonitor } = require('redux-devtools/lib/react');

      // <DebugPanel top right bottom>
      //   <DevTools store={store} monitor={LogMonitor} />
      // </DebugPanel>
  render(
    <div>
      <Provider store={store}>
        <ReduxRouter />
      </Provider>
    </div>,
    document.getElementById('content')
  );
} else {
  render(
    <Provider store={store}>
      <ReduxRouter />
    </Provider>,
    document.getElementById('content')
  );
}
