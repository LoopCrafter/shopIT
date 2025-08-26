import React, { FormEvent, useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleSearchbar = () => {
    setIsOpen((prev) => !prev);
  };
  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("search form");
  };
  return (
    <div className="transition-all duration-300">
      {isOpen ? (
        <form
          onSubmit={handleSearch}
          className="fixed top-0 left-0 w-full h-[100px] bg-white z-[200]"
        >
          <button
            className="absolute top-4 right-4"
            onClick={handleToggleSearchbar}
          >
            <IoClose className="w-6 h-6 text-gray-700" />
          </button>
          <div className="relative container mx-auto h-full flex flex-col items-center justify-center w-full">
            <div className="relative w-full">
              <input
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search..."
                className="w-full px-4 py-2  bg-gray-100 rounded-lg focus:outline-none placeholder:text-gray-700 pr-8"
              />
              <button type="submit" className="absolute right-2 top-2">
                <HiMagnifyingGlass className="h-6 w-6" />
              </button>
            </div>
          </div>
        </form>
      ) : (
        <button onClick={handleToggleSearchbar}>
          <HiMagnifyingGlass className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default Searchbar;
