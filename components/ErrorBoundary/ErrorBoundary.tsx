import { Component, ErrorInfo } from "react"
import Link from "next/link"
import Router from "next/router"

class ErrorBoundary extends Component<any, any> {
  state = { hasError: false, redirect: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Error caught in boundary:", error, info)
    // TODO: add snippet to send error to Sentry here
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 3000)
    }
  }

  render() {
    this.state.hasError && Router.push("/")

    return (
      <div>
        <h1>!Oh Snap! Something has gone terribly wrong.</h1>
        <p>Don't worry, this can be fixed but clicking right <Link href="/">here</Link></p>
      </div>
    )
  }
}
