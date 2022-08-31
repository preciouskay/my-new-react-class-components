import React from "react";

export const Footer = ( {amount}) => {
  return (
    <div className="bg-primary ">
      <div className=" bg-light text-dark py-3 my-1 px-5 rounded  ">
        <h2 className=" text-center text-info">
            {amount}
        </h2>
        <p className="text-dark text-center col-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident reiciendis rerum quisquam dolores velit ullam molestias neque placeat eius ipsa.</p>
         <div className="text-center position-relative bg-warning ">
            <button className=" rounded-pill  fourthsec text-white px-3 py-1  bg-info border-0 position-absolute  end-75">Purchase</button>
         </div>
      
      </div>
    </div>
  );
};
