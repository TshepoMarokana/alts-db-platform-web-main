import Header from "../components/header";
import { store } from '../../store/app';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app'
import Footer from "../components/footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
        <div id="main-container">
        <Header/>
      <Component {...pageProps} />
        <Footer/>
        </div>
    </Provider>
  )
}

export default MyApp;
