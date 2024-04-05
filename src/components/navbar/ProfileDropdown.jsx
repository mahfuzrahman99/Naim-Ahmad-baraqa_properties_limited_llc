"use client"

import { AuthContext } from "@/app/provider/AuthProvider"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useContext } from "react"


export default function ProfileDropdown() {
  const {user, logOut} = useContext(AuthContext)

  const router = useRouter()

  const handleLogout = () => {
    logOut();
    router.push("/login");
  };

  return (
    <div className="dropdown dropdown-end flex items-center ">
          {user ? (
            <div className="dropdown z-10 dropdown-bottom dropdown-end">
              <figure tabIndex={0}>
                <Image
                  src={user?.photoURL}
                  className="h-[35px] md:h-[40px] w-[40px] rounded-full"
                  alt={user?.name ? user?.name : "Not Found"}
                  width={40}
                  height={40}
                />
              </figure>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow rounded-box w-52 bg-[#0B0633] bg-opacity-60"
              >
                <li>
                  <a className="text-[#fff]">
                    {user?.name ? user?.name : "No name available"}
                  </a>
                </li>
                <li>
                  <a>
                    <button
                      onClick={handleLogout}
                      className=" btn-sm border-none btn-outline rounded-md font-semibold uppercase hover:bg-transparent  text-[#fff]"
                    >
                      Logout
                    </button>
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
  )
}