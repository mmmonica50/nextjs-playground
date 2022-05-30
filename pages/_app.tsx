import "../styles/globals.css"
import type { AppProps } from "next/app"
import { ThemeProvider } from "@mui/material/styles"
import { nordenPurple } from "../theme.config"
import { AppProvider } from "../context/appContext"

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <AppProvider>
      <ThemeProvider theme={nordenPurple}>
        <Component {...pageProps} />
      </ThemeProvider>
    </AppProvider>
  )
}

export default MyApp
