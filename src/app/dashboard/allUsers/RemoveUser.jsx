"use client"

import { IoPersonRemoveOutline } from "react-icons/io5";

export default function RemoveUser() {
  const handleRemove = async (id, user) => {
    console.log(id);
    const confirmed = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to remove him!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove him!",
    });
    if (confirmed.isConfirmed) {
      try {
        const res = await axios.delete(
          `https://baraqa-properties-server.vercel.app/api/users/${id}`
        );
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Removed!",
            text: `${user?.name} has been Removed from users lists.`,
            icon: "success",
          });
        }
      } catch (error) {
        console.error("Error removing user:", error);
        Swal.fire({
          title: "Error",
          text: "An error occurred while Removing User.",
          icon: "error",
        });
      }
    }
  };
  return (
    <button
    onClick={() => handleRemove(user._id, user)}
    className="bg-red-500 text-white text-3xl p-2 rounded ml-2"
  >
    <IoPersonRemoveOutline />
  </button>
  )
}