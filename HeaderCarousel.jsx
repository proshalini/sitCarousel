import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const carouselItems = [
  { id: 1, 
    image: "/img1.png", 
    title: "Welcome to", 
    mainTitle: "Siliguri Institute of Technology", 
    description: "A premier institution committed to fostering academic excellence...", 

  },
  { id: 2, 
    image: "/img2.png", 
    title: "Presenting to You", 
    mainTitle: "SIT Ideathon", 
    description: "An extraordinary platform where creativity meets technology...", 

  },
  { id: 3, 
    image: "/mydp.png", 
    title: "A Glimpse at Origins", 
    mainTitle: "A Legacy of Excellence & Innovation", 
    description: "Two successful editions of Ideathon, featuring innovative ideas...", 
  },
];

const HeaderCarousel = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevents hydration errors in React

  return (
    <div className="container-fluid p-0 mb-5">
      <OwlCarousel
        className="owl-theme"
        loop
        margin={10}
        nav
        items={1}
        autoplay
        autoplayTimeout={5000}
        smartSpeed={1000}
        dots={false}
      >
        {carouselItems.map((item, index) => (
          <div className="relative" key={index}>
            <img className="w-full h-auto" src={item.image} alt={item.title} />
            <div className="absolute inset-0 flex items-center bg-[rgba(24,29,56,0.6)]">
              <div className="container">
                <div className="flex flex-col justify-start max-w-xl">
                  <h5 className="uppercase mb-3 text-orange-400">{item.mainTitle}</h5>
                  <h1 className="text-4xl font-bold text-white">{item.title}</h1>
                  <p className="mb-4 pb-2 text-white">{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
};

export default HeaderCarousel;
