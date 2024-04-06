
import DemoTableBody from "./DemoTableBody";

const AllDemosToDisplay = ({ demosToDisplay }) => {
  console.log(demosToDisplay)
  return (
    <div className="max-w-5xl mx-auto w-[300px] md:w-auto">
      <div className="bg-gray-100 md:p-4 py-4 md:py-0">
        <h1 className="text-xl md:text-3xl mb-2 font-bold bg-gradient-to-r from-indigo-500 via-[#3a3271] to-[#E91E63] bg-clip-text text-transparent">
          Total Demos: {demosToDisplay?.length}
        </h1>
        <div
          className=" overflow-x-auto h-[60vh] md:h-[65vh] overflow-y-auto"
          style={{ scrollbarWidth: "thin", scrollbarColor: "#a9a3cf #f1f1f1" }}
        >
          <table className="min-w-full bg-gray-300">
            <thead className="rounded-t-xl bg-[#a9a3cf] text-white text-xs md:text-base">
              <tr className="rounded-t-xl bg-[#a9a3cf]">
                <th className="py-2 px-4 border-b">NO</th>
                <th className="py-2 px-4 border-b">Before image</th>
                <th className="py-2 px-4 border-b">After image</th>
                <th className="py-2 px-4 border-b">Demo Name</th>
                <th className="py-2 px-4 border-b">Demo category</th>
                <th className="py-2 px-4 border-b">Description</th>
                <th className="py-2 px-4 border-b">Update</th>
                <th className="py-2 px-4 border-b">Delete</th>
              </tr>
            </thead>
            <DemoTableBody demosToDisplay={demosToDisplay}/>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllDemosToDisplay;
