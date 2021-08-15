import '../styles/globals.css'
import { AnimatePresence } from "framer-motion"
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <AnimatePresence exitBeforeEnter initial={false}>
        <Component {...pageProps} />
      </AnimatePresence>
  )
}
export default MyApp
