import '../styles/globals.css'
import { AnimatePresence } from "framer-motion"
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  )
}
export default MyApp
