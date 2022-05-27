import "../styles/globals.css"
import type { AppProps } from "next/app"
import { ThemeProvider } from "@mui/material/styles"
import { nordenPurple } from "../theme.config"
function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider theme={nordenPurple}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
