"use client"

import NavLink from "@/components/navbar/NavLink"
import { useContext } from "react"
import { AuthContext } from "../provider/AuthProvider"


export default function SuperAdminRoute() {

  const {user} = useContext(AuthContext)

  return user?.role === "Super_Admin" ? (
      <li>
        <NavLink href="/dashboard/allUsers">ALL USERS</NavLink>
      </li>
    ) : (
      ""
    )
  
}