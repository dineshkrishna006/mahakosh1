import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { BsCart3 } from "react-icons/bs";
const Productcard = () => {
  return (
    <main className="flex  justify-center">
      <div
        className={`w-[300px] h-[420px] m-2 py-2 relative rounded overflow-hidden flex flex-col items-center shadow-2xl`}
      >
        <Image
          src="/images/mainproduct.jpeg"
          alt="Product"
          width={250}
          height={250}
          className=""
        />
        <div className={`flex flex-col items-center  mt-2 gap-2 w-full`}>
          <div className="text-center text-wrap">
            <p className="font-bold text-xl mb-1">Refined Soyabean Oil</p>
            <p className="text-md text-gray-500">⭐️ (4.8)</p>
            <p className="text-xl">
              ₹130
              <span className="text-base">
                {" MRP:"}
                <span className="line-through">₹140</span>
              </span>
            </p>
          </div>
          <Button className="mb-1 ">
            Add to cart <BsCart3 className="ml-2" />
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Productcard;
