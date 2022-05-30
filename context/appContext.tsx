import { createContext, Dispatch, ReactNode, useState } from "react"

export interface AppContextProps {
  loading: boolean,
  setLoading: Dispatch<boolean>
}

export interface AppProviderProps {
  children: ReactNode
}

export const AppContext = createContext<AppContextProps>({
  loading: false,
  setLoading: (data: boolean) => void data,
})

const Provider = AppContext.Provider

export const AppProvider = ({ children }: AppProviderProps): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false)

  return <Provider value={{ loading, setLoading }}>
    {children}
  </Provider>
}
