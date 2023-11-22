import React from "react";

const logos = [
  { src: "/Figma.svg", alt: "Figma" },
  { src: "/GitHub.svg", alt: "GitHub" },
  { src: "/Miro.svg", alt: "Miro" },
  { src: "/Framer.svg", alt: "Framer" },
  { src: "/Notion.svg", alt: "Notion" },
  { src: "/WebFlow.svg", alt: "Webflow" },
];

export default function LogoCarousel() {
  return (
    <div className="relative m-auto w-auto before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:content-['']">
      <div className="animate-infinite-slider flex w-[calc(50%*10)]">
        {logos.map((logo, index) => (
          <div
            className="slide flex w-[125px] items-center justify-center"
            key={index}
          >
            <img
              className="hover:-translate-y-6 ease-out delay-75 duration-200"
              src={logo.src}
              alt={logo.alt}
            />
          </div>
        ))}
        {logos.map((logo, index) => (
          <div
            className="slide flex w-[125px] items-center justify-center"
            key={index}
          >
            <img
              className="hover:-translate-y-6 ease-out delay-75 duration-200"
              src={logo.src}
              alt={logo.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
