/* eslint-disable react/prop-types */
import Image from "next/image";
import { PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import DeleteDemoButton from "./DeleteDemoButton";
import UpdateDemoModal from "./UpdateDemoModal";

const AllDemosRow = ({ demo, i }) => {
  const {
    demo_Name,
    demo_before_image,
    demo_after_image,
    demo_description,
    demo_category,
  } = demo || {};

 
  return (
    <>
      <tr className="bg-gray-100 text-xs text-black font-semibold">
        <td className="py-2 px-4 border-b-4">{i + 1}</td>
        <td className="py-2 px-4 border-b-4">
          <PhotoView src={demo_before_image}>
            <Image
              width={80}
              height={40}
              className="md:h-12 h-10 md:w-[80px] rounded shadow-lg"
              src={demo_before_image}
              alt={demo_Name}
            />
          </PhotoView>
        </td>
        <td className="py-2 px-4 border-b-4">
          <PhotoView src={demo_after_image}>
            <Image
              width={80}
              height={40}
              className="md:h-12 h-10 md:w-[80px] rounded shadow-lg"
              src={demo_after_image}
              alt={demo_Name}
            />
          </PhotoView>
        </td>
        <td className="py-2 px-4 border-b-4">{demo_Name}</td>
        <td className="py-2 px-4 border-b-4">{demo_category}</td>
        <td className="py-2 px-4 border-b-4">
          {demo_description?.slice(0, 10)}
        </td>
        <td className="py-2 px-4 border-b-4 p-1 text-xl w-4">
        <UpdateDemoModal demo={demo}/>
        </td>
        <td className="py-2 px-4 border-b-4">
          <DeleteDemoButton demo={demo}/>
        </td>
      </tr>
    </>
  );
};

export default AllDemosRow;
