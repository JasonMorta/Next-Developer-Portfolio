import ReactGA from 'react-ga'

export const initGA = () => {
  ReactGA.initialize('G-RFCK3CHKGL')
  ReactGA.pageview(window.location.pathname)
}

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}
