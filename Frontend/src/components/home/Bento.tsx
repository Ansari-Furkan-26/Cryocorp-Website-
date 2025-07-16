"use client";
import React from "react";

type GridItem = {
  title: string;
  subtitle: string;
  type: "Products" | "Services";
  image: string;
  className: string;
};

const gridItems: GridItem[] = [
  {
    title: "ASU Technology - Gas Production and Distribution",
    subtitle: "Products:",
    type: "Products",
    image: "/images/asu.jpg",
    className: "col-span-2 row-span-2 h-[400px]",
  },
  {
    title: "PSA Technology",
    subtitle: "Products:",
    type: "Products",
    image: "/images/psa.jpg",
    className: "col-span-1 row-span-1 h-[250px]",
  },
  {
    title: "Maintenance Solutions",
    subtitle: "Services:",
    type: "Services",
    image: "/images/maintenance.jpg",
    className: "col-span-1 row-span-1 h-[250px]",
  },
  {
    title: "Plant Installation & Commissioning",
    subtitle: "Services:",
    type: "Services",
    image: "/images/plant-install.jpg",
    className: "col-span-2 row-span-2 row-start-3 row-start-2 h-[250px] -mt-14",
  },
  {
    title: "Liquid Bottling Plants - Storage & Distribution",
    subtitle: "Products:",
    type: "Products",
    image: "/images/liquid-bottling.jpg",
    className: "col-span-2 row-span-2 h-[400px]",
  },
];

const IndustrialGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 max-w-4xl mx-auto">
      {gridItems.map((item, index) => (
        <div
          key={index}
          className={`relative rounded-2xl overflow-hidden bg-cover bg-center text-white flex items-end p-4 ${item.className}`}
          style={{ backgroundImage: `url(${item.image})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10">
            <p className="text-sm font-semibold">{item.subtitle}</p>
            <h3 className="text-lg font-bold leading-tight">{item.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IndustrialGrid;
