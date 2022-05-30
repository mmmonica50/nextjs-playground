import "../styles/globals.css"
import type { AppProps } from "next/app"
import { useRouter } from "next/router"
import Loading from "../components/Loading/Loading"

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter()

  if(router.isFallback) return <Loading />
  return <Component {...pageProps} />
}

export default MyApp
