import SearchDemo from "@/components/ui/SearchDemo";
import { getDemos } from "@/utils/fetchData";
import AllDemosToDisplay from "./AllDemosToDisplay";
import ModalOpenButton from "./ModalOpenButton";

const AllDemosPage = async () => {
  const demos = await getDemos();
  return (
    <>
      <div className="md:flex justify-between m-3 md:m-10">
        <div>
          <ModalOpenButton />
        </div>
        <div>
          <SearchDemo demos={demos} />
        </div>
      </div>
      <AllDemosToDisplay demosToDisplay={demos} />
    </>
  );
};

export default AllDemosPage;
