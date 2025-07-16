"use client";
import React from "react";

type Section = {
  id: string;
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
};

const sections: Section[] = [
  {
    id: "relaxair",
    title: "01. RelaxAir",
    image: "/NEXT/relaxair.png",
    description: `
In today’s world, the quality of the air we breathe indoors directly impacts the well-being, productivity, and comfort of employees, guests, patients, and visitors across various institutions. High levels of carbon dioxide and volatile organic compounds (VOCs) can lead to fatigue, reduced concentration, and a less healthy environment.

Introducing RelaxAir, your advanced indoor CO₂ Capturing System designed to significantly improve indoor air quality. RelaxAir effectively captures carbon dioxide, helping you achieve Indoor Air Quality Below 500 PPM CO₂, a level widely recognized as excellent. Beyond just CO₂, the system is also 100% free from chemical toxins for a greener, healthier space.

You can rest assured knowing this breakthrough design is compliant with ASHRAE, NIOSH, and OSHA standards. RelaxAir is a powerful, compliant, and efficient solution to elevate air quality in your environment.`,
  },
  {
    id: "dryers",
    title: "2. Medical Air Dryers",
    image: "/NEXT/medical-dryers.png",
    description: `
In hospitals and cleanrooms where accidental particle emission can be hazardous, medical air dryers play a vital role in removing moisture and ensuring compressed air purity.

Our dryers comply with international standards for hospital-grade compressed air. The SuryaTech BreatheDry series features high-efficiency adsorption technology, and advanced purification modules, ensuring moisture-free, sterile air supply suitable for surgical and critical care usage.

These systems are compact, silent, energy-efficient, and easily integrated with central pipelines. They also come with real-time humidity sensors and alarms for extra safety.`,
    reverse: true,
  },
  {
    id: "hydrogen",
    title:
      "03. Hydrogen Storage Tanks, Hydrogen Filling Manifolds and Hydrogen Compressors",
    image: "/NEXT/hydrogen-tanks.png",
    description: `
Hydrogen Buffer Tanks: Ensure your hydrogen storage is both reliable and compliant with industry standards. These tanks are engineered for demanding industrial applications, featuring ASME U-Stamp, high-pressure ratings, and excellent corrosion resistance.

Hydrogen Manifolds: Streamline your hydrogen cylinder management and ensure precision with our modular manifold systems, supporting 4500+ PSI, leak-proof quick connects, and remote access features.

Hydrogen Compressors: Our high-pressure compressors deliver up to 200kg/cm² and are oil-free, vibration-isolated, and customizable with cooling options. Suitable for refueling stations, labs, and production lines.`,
  },
];

const IndoorSolutionsSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 space-y-24">
      {sections.map((sec) => (
        <div
          key={sec.id}
          className={`flex flex-col-reverse lg:flex-row ${
            sec.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
          } items-center gap-10`}
        >
          {/* Image */}
          <div className="lg:w-1/2">
            <img
              src={sec.image}
              alt={sec.title}
              className="w-full max-w-md mx-auto object-contain"
            />
          </div>

          {/* Text */}
          <div className="lg:w-1/2 text-gray-700 space-y-4">
            <h2 className="text-xl font-semibold text-sky-800">{sec.title}</h2>
            {sec.description.split("\n").map((para, i) => (
              <p key={i} className="text-sm leading-relaxed">
                {para.trim()}
              </p>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default IndoorSolutionsSection;
