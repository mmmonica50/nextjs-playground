import styles from "./loading.module.scss"
import { FunctionComponent } from "react"
import { LoadingProps } from "./loading.interface"

const Loading: FunctionComponent<LoadingProps> = ({ message }): JSX.Element => {
  return <div className={styles.loading}>
    {message ? message : "Loading..."}
  </div>
}

export default Loading
