import '../styles/globals.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { initGA, logPageView } from '../path/to/googleAnalytics'



 function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp;