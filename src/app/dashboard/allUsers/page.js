import { getUsers } from "@/lib/fetchData";
import AddUserModal from "./AddUserModal";
import UsersRow from "./UsersRow";

const AllUsers = async () => {
  const users = await getUsers();

  return (
    <div className="max-w-5xl mx-auto w-[95vw] md:w-auto h-[83vh]">
      <div className="mt-5 md:mt-20">
        <AddUserModal />
      </div>
      <div className=" bg-white mt-2 md:mt-5">
        <div className=" p-4 ">
          <h1 className="text-xl md:text-3xl font-bold  bg-gradient-to-r from-indigo-500 via-[#3a3271] to-[#E91E63] bg-clip-text text-transparent">
            Total Users: {users.length}
          </h1>
          <div
            className=" overflow-x-auto h-[60vh] md:h-[69vh] overflow-y-auto"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "#a9a3cf #f1f1f1",
            }}
          >
            <table className="min-w-full bg-white overflow-x-auto">
              <thead className="rounded-t-xl bg-[#A9A3CF]">
                <tr className="rounded-t-xl bg-[#A9A3CF]">
                  <th className="py-2 px-4 border-b">NO</th>
                  <th className="py-2 px-4 border-b">IMAGE</th>
                  <th className="py-2 px-4 border-b">NAME</th>
                  <th className="py-2 px-4 border-b">EMAIL</th>
                  <th className="py-2 px-4 border-b">ROLE</th>
                  <th className="py-2 px-4 border-b">EDIT</th>
                  <th className="py-2 px-4 border-b">REMOVE</th>
                </tr>
              </thead>
              <tbody>
                {users?.map((user, i) => (
                  <UsersRow key={user._id} user={user} i={i} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
