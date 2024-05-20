import React, { useEffect, useState } from "react";
import { work } from "../constants";

const Portfolio = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Scroll to the top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#090517ff] flex justify-center">
      <div className="max-w-screen-lg w-full px-4 py-8">
        <h1 className="lg:text-5xl md:text-4xl text-2xl font-semibold leading-10 text-white text-center mb-8">
          Short From Videos
        </h1>
        <div
          className={`grid grid-cols-${
            isMobile ? "1" : "3"
          } gap-6 md:grid-cols-3`}
        >
          {work.map((item, index) => (
            <div
              key={item.id}
              className="rounded-lg overflow-hidden border border-white dark:border-gray-800"
              data-aos="flip-left"
            >
              <iframe
                src={item.link}
                title={`Sample Work ${index + 1}`}
                width="100%"
                height={isMobile ? "500" : "645"}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
