"use client"

import { useState } from "react"
import Register from "./Register"


export default function AddUserModal() {

  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="btn btn-ghost bg-[#a9a3cf] hover:bg-[#311A36] transform duration-1000 text-white p-2 rounded-md w-[120px]"
      >
        ADD USER
      </button>
      <Register showModal={showModal} setShowModal={setShowModal} />
    </>
  )
}