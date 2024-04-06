"use client"

import { useState } from "react";
import AddDemo from "./AddDemo";


export default function ModalOpenButton() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="btn btn-ghost bg-[#a9a3cf] hover:bg-[#311A36] transform duration-1000 text-white w-full md:w-auto p-2 rounded-md mb-2 md:mb-auto"
      >
        ADD A DEMO
      </button>
      <AddDemo showModal={showModal} setShowModal={setShowModal} />
    </>
  )
}