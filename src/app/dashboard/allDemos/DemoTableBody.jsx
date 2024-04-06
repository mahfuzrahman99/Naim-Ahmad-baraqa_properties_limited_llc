"use client"

import { SearchTextContext } from "@/app/provider/SearchTextProvider"
import { useContext } from "react"
import AllDemosRow from "./AllDemosRow"


export default function DemoTableBody({demosToDisplay}) {

  const {searchText} = useContext(SearchTextContext)

  const filterByCat = (demo)=> {
    if(searchText === '') {
      return true
    }else{
     return demo?.demo_category.includes(searchText)
    }
  }

  return (
    <tbody className="">
      {demosToDisplay?.filter(filterByCat)?.map((demo, i) => (
        <AllDemosRow
          key={demo._id}
          demo={demo}
          i={i}
        />
      ))}
    </tbody>
  )
}