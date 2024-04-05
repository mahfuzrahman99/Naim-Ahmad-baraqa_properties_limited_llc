"use client"

import { SearchTextContext } from "@/app/provider/SearchTextProvider";
import { useContext, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function SearchDemo({ demos }) {
  const [searchText, setSearchTex] = useState("");
  const [categories, setCategories] = useState([]);
  const {setSearchText} = useContext(SearchTextContext)

  const handleInputText = (e) => {
    const value = e.target.value;
    setSearchTex(value);
    if (value.length >= 1) {
      const filteredDemo = demos?.filter((demo) =>
        demo?.demo_category.toLowerCase().includes(value)
      );

      setCategories(filteredDemo?.map((demo) => demo.demo_category));
    } else if (value === "") {
      setSearchText("")
      setCategories([])
    } else {
      setCategories([]);
    }
  };

  const handleSearchBlog = (e) => {
    e.preventDefault();
    setSearchText(searchText)
  };

  const handleCategory = (category) => {
    setSearchTex(category);
    setCategories([]);
  };

  return (
    <div>
      <form onSubmit={handleSearchBlog} className="join w-full md:w-auto">
        <input
          onChange={handleInputText}
          value={searchText}
          type="text"
          name="search"
          className="hover:border-none px-5 join-item outline-none w-full md:w-[250px]"
          placeholder="Search a demo by category..."
          autoComplete="off"
        />
        <button className="btn join-item rounded-r-md bg-[#a9a3cf] hover:bg-[#311A36] transform duration-1000 text-white p-2">
          SEARCH
        </button>
      </form>
      {categories.length ? (
        <ul className="menu bg-white shadow-lg absolute z-10 rounded-t-none rounded-b-md  rounded-box  w-[250px]">
          {categories.map((category) => (
            <li key={category}>
              <a href="#" onClick={() => handleCategory(category)}>
                <FaMagnifyingGlass /> {category}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
