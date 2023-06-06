import '../styles/globals.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { initGA, logPageView } from '../utils/googleAnalytics'



 function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()

    // Track page view on route change
    const handleRouteChange = () => {
      logPageView()
    }
    router.events.on('routeChangeComplete', handleRouteChange)

    // Clean up events on component unmount
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])
  return <Component {...pageProps} />
}

export default MyApp;