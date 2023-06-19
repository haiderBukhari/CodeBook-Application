import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './Store/Store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ScrolltoTop } from './Components/ScrolltoTop';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ScrolltoTop/>
        <App />
      </BrowserRouter>
      <ToastContainer autoClose={1000} toastContainerClassName="custom-toast-container"/>
    </Provider>
  // {/* </React.StrictMode> */}
);
