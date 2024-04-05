"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NavLink(props) {
  const pathname = usePathname()

  return (
    <Link {...props} className={`${props.className} ${pathname === props.href ? "text-[#311A36] hover:text-[#311A36] hover:font-bold underline font-bold" : "font-bold hover:text-[#8A8B8C] hover:font-bold  text-[#8A8B8C]"}`}>
      {props.children}
    </Link>
  )
}