import { createContext, useState } from 'react'

export const UIContext = createContext()
export const UIProvider = ({ children }) => {
  const [drawerSwitch, setDrawerSwitch] = useState(false)
  const [showSearchBox, setShowSearchBox] = useState(false)
  const value = {
    drawerSwitch,
    setDrawerSwitch,
    showSearchBox,
    setShowSearchBox,
  }

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>
}
