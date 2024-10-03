"use client"
import { Button } from "@/components/ui/button";
import React from "react";
import { BsCart3 } from "react-icons/bs";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";

const Discountedproducts = () => {
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
      <h1 className="text-center text-2xl font-bold mt-4">Discounted Products</h1>
      <div className="flex items-center justify-between w-full">
        <Carousel
          opts={{
            align: "start",
          }}
          className="max-md:hidden bg-gray-200   w-full min-w-[400px] h-[500px] flex  items-center justify-center m-2"
        >
          <CarouselContent className="-ml-1">
            {products.map((product, index) => (
              <CarouselItem
                key={index}
                className="pl-1 ml-2  md:basis-1/2 lg:basis-1/4"
              >
                <div
                  className={`w-[300px] z-10 bg-white aspect-square h-[420px] m-2  py-2 relative rounded overflow-hidden flex flex-col items-center shadow-2xl`}
                >
                  <Image
                    src={product.src}
                    alt="Product"
                    width={250}
                    height={250}
                    className=""
                  />
                  <div
                    className={`flex flex-col items-center  mt-2 gap-2 w-full`}
                  >
                    <div className="text-center text-wrap">
                      <p className="font-bold text-xl mb-1 h-[50px]">
                        {product.name}
                      </p>
                      <p className="text-md text-gray-500">
                        ⭐️ ({product.rating})
                      </p>
                      <p className="text-xl">
                        ₹{product.price}
                        <span className="text-base">
                          {" MRP:"}
                          <span className="line-through">₹{product.mrp}</span>
                        </span>
                      </p>
                    </div>
                    {product.stock > 0 ? (
                      <Button className="mb-2 ">
                        Add to cart&nbsp;
                        <BsCart3 size={15} />
                      </Button>
                    ) : (
                      <Button className="mb-2 " disabled>
                        Out of stock
                      </Button>
                    )}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <Carousel className="md:hidden w-full  min-w-[350px]  m-4 flex justify-center items-center">
          <CarouselContent>
            {products.map((product, ind) => (
              <CarouselItem key={ind} className="pl-1 ml-2 ">
                <div
                  key={ind}
                  className="flex min-w-[350px] w-full  h-[180px] border-1 px-3 gap-1 bg-white my-2 rounded-lg "
                >
                  <div className="h-[80px]">
                    <Image
                      src={product.src}
                      width={150}
                      height={100}
                      alt={product.name}
                    />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="font-bold text-xl">{product.name}</h1>
                    <p className="text-md text-gray-500">
                      ⭐️ ({product.rating})
                    </p>
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-ml-2" />
          <CarouselNext className="-mr-2" />
        </Carousel>
      </div>
    </>
  );
};

export default Discountedproducts;
