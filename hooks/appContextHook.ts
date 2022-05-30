import { AppContext, AppContextProps } from "../context/appContext"
import { useContext } from "react"

const useAppContext = (): AppContextProps => {
  const context = useContext<AppContextProps>(AppContext)

  if(context === undefined) {
    throw new Error("useAppContext hook must be used within a context provider")
  }

  return context
}

export default useAppContext
