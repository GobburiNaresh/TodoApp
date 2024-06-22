import { Fragment } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../components/Layout/Header';

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Component {...pageProps} />
      <ToastContainer />
      <Header />
    </Fragment>
  );
}
