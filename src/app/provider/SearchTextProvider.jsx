"use client"
import { createContext, useState } from "react"

export const SearchTextContext = createContext(null)

export default function SearchTextProvider({ children }) {
  const [searchText, setSearchText] = useState('')

  return (
    <SearchTextContext.Provider value={{searchText, setSearchText}}>{children}</SearchTextContext.Provider>
  )
}