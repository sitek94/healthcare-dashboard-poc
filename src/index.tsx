import '@primer/css/index.scss';
import '@primer/css/forms/index.scss';

import ReactDOM from 'react-dom';

import App from 'app/App';
import AppProviders from 'app/AppProviders';

ReactDOM.render(
  <AppProviders>
    <App />
  </AppProviders>,
  document.getElementById('root'),
);
