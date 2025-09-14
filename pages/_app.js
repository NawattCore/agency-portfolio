
import '../styles/globals.css'
import { Provider } from 'react-redux'
import store from '../store/store'
import { NextIntlProvider } from 'next-intl'

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <NextIntlProvider messages={pageProps.messages}>
        <Component {...pageProps} />
      </NextIntlProvider>
    </Provider>
  )
}
