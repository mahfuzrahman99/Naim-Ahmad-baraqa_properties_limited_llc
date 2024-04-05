"use client"

import { AuthContext } from "@/app/provider/AuthProvider"
import { useContext } from "react"
import NavLink from "./NavLink"

export default function DashboardRoute() {
  const { user } = useContext(AuthContext)
  const admin = user?.role === 'Admin' || user?.role === "Super_Admin"

  return (
    admin ? (
      <li>
        <NavLink
          href="/dashboard"
        >
          DASHBOARD
        </NavLink>
      </li>
    ) : null

  )
}