"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BsCart3 } from "react-icons/bs";

const Products = () => {
  const products = [
    {
      name: "Refined Soyabean Oil",
      src: "/images/mainproduct.jpeg",
      rating: 4.8,
      price: 130,
      mrp: 140,
      stock: 5,
    },
    {
      name: "Refined bean Oil oil oil oil oil ojloulj o ",
      src: "/images/olive.png",
      rating: 4.8,
      price: 130,
      mrp: 140,
      stock: 0,
    },
    {
      name: "Refined Soyabean Oil",
      src: "/images/image.png",
      rating: 4.8,
      price: 130,
      mrp: 140,
      stock: 1,
    },
    {
      name: "Refined Soyabean Oil",
      src: "/images/c1.png",
      rating: 4.8,
      price: 130,
      mrp: 140,
      stock: 1,
    },
  ];
  return (
    <>
      {/*for mobile  */}
      <div className="sm:hidden flex flex-col items-center flex-grow w-screen justify-center mt-2 p-2 bg-gray-200">
        {products.map((product, ind) => (
          <div
            key={ind}
            className="flex min-w-[250px] w-full  h-[180px] border-1 px-3 bg-white my-2 rounded-lg "
          >
            <div className="">
              <Image
                src={product.src}
                width={150}
                height={100}
                alt={product.name}
              />
            </div>
            <div className="flex flex-col">
              <h1 className="font-bold text-xl">{product.name}</h1>
              <p className="text-md text-gray-500">⭐️ ({product.rating})</p>
              <p className="text-xl">
                {` ₹${product.price}`}
                <span className="text-base">
                  {" MRP:"}
                  <span className="line-through">{` ₹${product.mrp}`}</span>
                </span>
              </p>
              {product.stock > 0 ? (
                <Button className="mt-1 w-[100px]">Add</Button>
              ) : (
                <Button
                  className="mt-1 w-[100px] "
                  //   variant={"ghost"}
                  disabled
                >
                  Out of stock
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
      {/* For tabs and desktop */}
      <div className="max-sm:hidden grid grid-cols-2 lg:grid-cols-4 gap-[40px]">
        {products.map((product, ind) => (
          <div
            key={ind}
            className={`w-[300px] min-h[400px] h-full m-2 py-2 relative rounded overflow-hidden flex flex-col items-center shadow-2xl`}
          >
            <Image
              src={product.src}
              alt="Product"
              width={250}
              height={250}
              className=""
            />
            <div className={`flex flex-col items-center  mt-2 gap-2 w-full`}>
              <div className="text-center text-wrap">
                <p className="font-bold h-[50px] text-xl mb-1">
                  {product.name}
                </p>
                <p className="text-md text-gray-500">⭐️ ({product.rating})</p>
                <p className="text-xl">
                  {` ₹${product.price}`}
                  <span className="text-base">
                    {" MRP:"}
                    <span className="line-through">{` ₹${product.mrp}`}</span>
                  </span>
                </p>
              </div>
              {product.stock > 0 ? (
                <Button className="mt-1 w-[100px]">Add</Button>
              ) : (
                <Button
                  className="mt-1 w-[100px] "
                  //   variant={"ghost"}
                  disabled
                >
                  Out of stock
                </Button>
              )}
              {/* <Button className="mb-1 ">
                Add to cart <BsCart3 className="ml-2" />
              </Button> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
