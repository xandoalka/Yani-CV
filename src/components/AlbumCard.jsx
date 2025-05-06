import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const AlbumCard = ({ Title, children, withControls = true}) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 1; // Scroll by half the width of the container
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="w-full bg-white py-10 px-6 lg:py-10 lg:px-12 shadow-[-12px_12px_25px_0_rgba(138,131,124,0.23)] flex flex-col items-center gap-4">
      <span className="flex items-center gap-2 self-start">
        <span className="h-4 w-4 bg-secondary"></span>
        <h2 className="capitalize text-xl font-bold">{Title}</h2>
      </span>
      <div className="relative w-full">
        {/* Tombol kiri */}
        {withControls && (
          <button
            onClick={() => scroll("left")}
            className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 bg-secondary shadow-md rounded-full p-2 lg:hidden"
          >
            <FaChevronLeft className="text-white"/>
          </button>
        )}

        {/* Kontainer foto */}
        <div
          ref={scrollRef}
          className="flex lg:scrollbar-auto gap-2 w-full items-center overflow-x-auto lg:gap-4 snap-x scroll-smooth scrollbar-hide px-10 lg:px-4"
        >
          {children}
        </div>

        {/* Tombol kanan */}
        {withControls && (
          <button
            onClick={() => scroll("right")}
            className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 bg-secondary shadow-md rounded-full p-2 lg:hidden"
          >
            <FaChevronRight className="text-white" />
          </button>
        )}
      </div>
    </div>
  );
};
