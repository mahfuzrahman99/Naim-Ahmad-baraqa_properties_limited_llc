"use client"
import { patchUserRole } from '@/lib/fetchData';
import Swal from 'sweetalert2';

export default function updateUserRole({user}) {

  const handleUpdateUserRole = async (event) => {
    const role = event.target.innerText;

    const confirmed = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to update his/shes role!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update his/shes role!",
    });

    if (confirmed.isConfirmed) {
      try {
        console.log(role);
        const res = await patchUserRole(user.id, {role});
        if (res.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            title: "maked!",
            text: `${user?.name} has been maked ${user.role}.`,
            icon: "success",
          });
        }
      } catch (error) {
        console.error("Error updating his/shes role", error);
        Swal.fire({
          title: "Error",
          text: "An error occurred while updating his/shes role.",
          icon: "error",
        });
      }
    }
  };

  return (
    <ul
      onClick={handleUpdateUserRole}
      tabIndex={0}
      className="dropdown-content z-[1] text-lg text-white bg-[#A9A3CF] menu shadow bg-opacity-90 rounded-box w-30"
    >
      <li>
        <a>Super_Admin</a>
      </li>
      <li>
        <a>Admin</a>
      </li>
    </ul>
  )
}