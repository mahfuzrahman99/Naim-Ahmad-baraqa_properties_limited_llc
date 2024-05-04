"use client"
import { deleteDemo } from "@/lib/fetchData";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";

export default function DeleteDemoButton({demo}) {
  const handleDelete = async (id, demo) => {
    const confirmed = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to delete this!",
      icon: "warning",
      iconColor: "#A9A3CF",
      showCancelButton: true,
      confirmButtonColor: "#A9A3CF",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete this!",
    });

    if (confirmed.isConfirmed) {
      try {
        const data = await deleteDemo(id);
        console.log("console log from hare", data);
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: `${demo?.demo_Name} has been delete from demos lists.`,
            icon: "success",
          });
        }
      } catch (error) {
        console.error("Error deleting demo:", error);
        Swal.fire({
          title: "Error",
          text: "An error occurred while deleting demo.",
          icon: "error",
        });
      }
    }
  };

  return (
    <button
      onClick={() => handleDelete(demo._id, demo)}
      className="bg-red-500 text-white px-2 py-1 rounded ml-2 shadow-lg"
    >
      <span className="text-3xl">
        <RiDeleteBin6Line />
      </span>
    </button>
  )
}