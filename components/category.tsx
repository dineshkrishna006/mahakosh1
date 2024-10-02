import Image from "next/image";
import React from "react";
const Category = () => {
  return (
    <div className="">
      <div className="grid grid-cols-2 gap-6 p-4 md:grid-cols-3 lg:grid-cols-4 m-3 place-content-center">
        {/* <!-- Spotify-like Category Box --> */}
        <div className="relative group p-4 h-[100px]  rounded-lg bg-gradient-to-tr from-purple-600 to-indigo-600 cursor-pointer hover:scale-105 transition-transform duration-300">
          <h3 className="mb-2 text-lg font-semibold text-white z-10">
            Peanut Oil
          </h3>
          <Image
            className="absolute bottom-0 right-0 w-20 rotate-12 transform opacity-90 transition-all duration-300 group-hover:rotate-0"
            src="/images/olive.png"
            alt="Chill Hits"
            width={100}
            height={100}
          />
        </div>
        <div className="relative group p-4 h-[100px] rounded-lg bg-gradient-to-tr from-yellow-500 to-orange-600 cursor-pointer hover:scale-105 transition-transform duration-300">
          <h3 className="mb-2 text-lg font-semibold text-white z-10">
            Olive Oil
          </h3>
          <Image
            className="absolute bottom-0 right-0 w-20 rotate-12 transform opacity-90 transition-all duration-300 group-hover:rotate-0"
            src="/images/olive.png"
            alt="Chill Hits"
            width={100}
            height={100}
          />
        </div>
        <div className="relative group p-4 h-[100px] rounded-lg bg-gradient-to-tr from-pink-500 to-purple-500 cursor-pointer hover:scale-105 transition-transform duration-300">
          <h3 className="mb-2 text-lg font-semibold text-white z-10">
           Soyabean Oil
          </h3>
          <Image
            className="absolute bottom-0 right-0 w-20 rotate-12 transform opacity-90 transition-all duration-300 group-hover:rotate-0"
            src="/images/olive.png"
            alt="Chill Hits"
            width={100}
            height={100}
          />
        </div>
        <div className="relative group p-4 h-[100px] rounded-lg bg-gradient-to-tr from-blue-500 to-cyan-500 cursor-pointer hover:scale-105 transition-transform duration-300">
          <h3 className="mb-2 text-lg font-semibold text-white z-10">
            Olive Oil
          </h3>
          <Image
            className="absolute bottom-0 right-0 w-20 rotate-12 transform opacity-90 transition-all duration-300 group-hover:rotate-0"
            src="/images/olive.png"
            alt="Chill Hits"
            width={100}
            height={100}
          />
        </div>
        <div className="relative group p-4 h-[100px] rounded-lg bg-gradient-to-tr from-red-500 to-orange-500 cursor-pointer hover:scale-105 transition-transform duration-300">
          <h3 className="mb-2 text-lg font-semibold text-white z-10">
            Olive Oil
          </h3>
          <Image
            className="absolute bottom-0 right-0 w-20 rotate-12 transform opacity-90 transition-all duration-300 group-hover:rotate-0"
            src="/images/olive.png"
            alt="Chill Hits"
            width={100}
            height={100}
          />
        </div>
        <div className="relative group p-4 h-[100px] rounded-lg bg-gradient-to-tr from-green-600 to-teal-600 cursor-pointer hover:scale-105 transition-transform duration-300">
          <h3 className="mb-2 text-lg font-semibold text-white z-10">
            Olive Oil
          </h3>
          <Image
            className="absolute bottom-0 right-0 w-20 rotate-12 transform opacity-90 transition-all duration-300 group-hover:rotate-0"
            src="/images/olive.png"
            alt="Chill Hits"
            width={100}
            height={100}
          />
        </div>
        <div className="relative group p-4 h-[100px] rounded-lg bg-gradient-to-tr from-green-600 to-teal-600 cursor-pointer hover:scale-105 transition-transform duration-300">
          <h3 className="mb-2 text-lg font-semibold text-white z-10">
            Olive Oil
          </h3>
          <Image
            className="absolute bottom-0 right-0 w-20 rotate-12 transform opacity-90 transition-all duration-300 group-hover:rotate-0"
            src="/images/olive.png"
            alt="Chill Hits"
            width={100}
            height={100}
          />
        </div>
        
      </div>
    </div>
  );
};

export default Category;
