import styles from "./loading.module.scss"
import { createPortal } from "react-dom"
import { FunctionComponent, MutableRefObject, useEffect, useRef } from "react"
import { LoadingProps } from "./loading.interface"

const Loading: FunctionComponent<LoadingProps> = ({ children }): JSX.Element => {
  const elementRef: MutableRefObject<HTMLDivElement | null> = useRef(null)

  if(!elementRef.current) {
    elementRef.current = document.createElement("div")
  }

  useEffect(() => {
    const loadingRoot: HTMLElement | null = document.getElementById("loading")
    if(!loadingRoot || !elementRef.current) throw new Error("HTML root element not present in document")

    loadingRoot.appendChild(elementRef.current)

    return () => {
      if(loadingRoot && elementRef.current)
        loadingRoot.removeChild(elementRef.current)
    }
  }, [])

  return createPortal(<div className={styles.loading}>
    {children ? children : <p>Loading...</p>}
  </div>, elementRef.current)
}

export default Loading
