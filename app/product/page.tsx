import Products from "@/components/products";
import Popularproducts from "@/components/popularproduct";
import Productcard from "@/components/productcard";
import React from "react";
import Discountedproducts from "@/components/discountedproducts";

export default function page() {
  return (
    <div className="flex flex-col items-center justify-center" >
        {/* <Discountedproducts/> */}
      <Products/>
      {/* <Popularproducts /> */}
      {/* <Productcard/> */}
    </div>
  );
}
