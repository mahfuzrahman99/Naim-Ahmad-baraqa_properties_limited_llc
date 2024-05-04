"use client"
import { useState } from "react";
import { MdOutlineSecurityUpdateGood } from "react-icons/md";
import UpdateDemo from "./UpdateDemo";

export default function UpdateDemoModal({demo}) {

  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="flex justify-center m-1 p-1 rounded bg-[#a9a3cf] shadow-lg"
      >
        <span className="text-4xl">
          <MdOutlineSecurityUpdateGood />
        </span>
      </button>
      <UpdateDemo
        demo={demo}
        showModal={showModal}
        setIsLoading={setIsLoading}
        isLoading={isLoading}
        setShowModal={setShowModal}
      />
    </>
  )
}