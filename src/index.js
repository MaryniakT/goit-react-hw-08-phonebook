import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
// import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store.jsx';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';

// const theme = {
//   colors: {
//     black: '#212121',
//     white: '#fff',
//     accent: 'orangered',
//   },
// };

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);