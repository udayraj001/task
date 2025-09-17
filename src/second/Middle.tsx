import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// Dummy images (replace with your actual images & logos)
import img1 from "../../dist/assets/card-1.jpg";
import img2 from "../../dist/assets/card-2.png";
import img3 from "../../dist/assets/card-3.png";

import logo1 from "../../dist/logo/bmw.svg";
import logo2 from "../../dist/logo/cummins.svg";
import logo3 from "../../dist/logo/gm.svg";
import logo4 from "../../dist/logo/honda.svg";
import logo5 from "../../dist/logo/jaguar.svg";
import logo6 from "../../dist/logo/mercedes.svg";

const Middle = () => {
  // Card Data
  const cards = [
    {
      img: img1,
      title: "KPIT’s New Technology Center in Sweden unlocks Mobility Innovation",
      link: "#",
    },
    {
      img: img2,
      title: "KPIT collaborates with Mercedes-Benz Research and Development India",
      link: "#",
    },
    {
      img: img3,
      title: "Chairman’s message",
      link: "#",
    },
  ];

  // Logo Slider Data
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 2 },
      },
    ],
  };

  return (
    <div className="w-full flex flex-col items-center bg-white py-10">
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full px-4 mb-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl overflow-hidden border hover:shadow-lg transition-all"
          >
            <img src={card.img} alt="card" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-gray-800">{card.title}</h3>
              <a
                href={card.link}
                className="text-purple-600 font-medium mt-2 inline-block hover:underline"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Section Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-6">
        Trusted By Mobility <br /> Leaders Worldwide
      </h2>

      {/* Logo Slider */}
      <div className="w-full max-w-6xl px-4">
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center px-4 py-6"
            >
              <div className="bg-white rounded-xl shadow-md p-4 flex items-center justify-center h-24 w-40">
                <img
                  src={logo}
                  alt="logo"
                  className="max-h-12 object-contain grayscale hover:grayscale-0 transition"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Middle;
