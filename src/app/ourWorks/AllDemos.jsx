"use client"
import Aos from "aos";
import { useContext, useEffect } from "react";
import { SearchTextContext } from "../provider/SearchTextProvider";
import DemoOneCard from "./DemoOneCard";
export default function AllDemos({demos}) {

  const {searchText} = useContext(SearchTextContext)

useEffect(()=>{
  Aos.init()
}, [])

const filterByCat = (demo)=> {
  if(searchText === '') {
    return true
  }else{
   return demo?.demo_category.includes(searchText)
  }
}

  return (
    <div className="max-w-5xl mx-auto">
      {demos?.filter(filterByCat).map((demo) => (
        <DemoOneCard key={demo.id} demo={demo} />
      ))}
    </div>
  )
}