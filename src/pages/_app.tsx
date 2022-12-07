import '../styles/globals.css'
import { ManagementData } from 'src/data/management'

const management = ManagementData

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
