/* eslint-disable react/prop-types */
import { PhotoView } from "@/components/ui/PhotoView";
import Image from "next/image";
import { MdSecurityUpdateGood } from "react-icons/md";
import RemoveUser from "./RemoveUser";
import UpdateUserRole from "./UpdateUserRole";
const UsersRow = ({ user, i }) => {


  return (
    <>
      <tr className="bg-gray-100">
        <td className="py-2 px-4 border-b-4">{i + 1}</td>
        <td className="py-2 px-4 border-b-4">
          <PhotoView src={user?.photoURL || user?.photoURL}>
            <Image
            width={48}
            height={48}
              className="h-12 w-12 rounded shadow-lg"
              src={user?.photoURL || user?.photoURL}
              alt={user?.name}
            />
          </PhotoView>
        </td>
        <td className="py-2 px-4 border-b-4">{user?.name}</td>
        <td className="py-2 px-4 border-b-4">{user?.email}</td>
        <td className="py-2 px-4 border-b-4 p-1 text-xl w-4">
          <p className="text-lg">{user?.role}</p>
        </td>
        <td className="py-2 px-4 border-b-4">
          <div className="w-full col-span-2">
            <div className="dropdown dropdown-bottom dropdown-end text-[#A9A3CF] text-3xl rounded">
              <div tabIndex={0} role="button" className="">
                <button className="">
                  <MdSecurityUpdateGood size={40} />
                </button>
              </div>
              
              <UpdateUserRole user={user}/>
            </div>
          </div>
        </td>
        <td className="py-2 px-4 border-b-4">
         <RemoveUser user={user}/>
        </td>
      </tr>
    </>
  );
};

export default UsersRow;
