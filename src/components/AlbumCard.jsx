import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const AlbumCard = ({ Title, children, withControls = true}) => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollButtons = () => {
    const el = scrollRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;

    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 0);
  };

  const scrollByAmount = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
  
    const scrollDistance = el.clientWidth * 0.8; // 80% dari lebar tampilan
    el.scrollBy({
      left: direction === "left" ? -scrollDistance : scrollDistance,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || !withControls) return;

    updateScrollButtons();

    const onScroll = () => updateScrollButtons();
    const onResize = () => updateScrollButtons();

    el.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);

    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [withControls, children]);

  useEffect(() => {
    if (withControls) updateScrollButtons();
  }, [children, withControls]);
  return (
    <div className="w-full bg-white py-10 px-6 lg:py-10 lg:px-12 shadow-[-12px_12px_25px_0_rgba(138,131,124,0.23)] flex flex-col items-center gap-4">
      <span className="flex items-center gap-2 self-start">
        <span className="h-4 w-4 bg-secondary"></span>
        <h2 className="capitalize text-xl font-bold">{Title}</h2>
      </span>
      <div className="relative w-full">
        {/* Tombol kiri */}
        {withControls && canScrollLeft && (
          <button
          onClick={() => scrollByAmount("left")}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-secondary shadow-md rounded-full p-2"
          >
            <FaChevronLeft className="text-white"/>
          </button>
        )}

        {/* Kontainer foto */}
        <div
          ref={scrollRef}
          className="flex gap-2 w-full items-center overflow-x-auto lg:gap-4 snap-x scroll-smooth scrollbar-hide px-10"
        >
          {children}
        </div>

        {/* Tombol kanan */}
        {withControls && canScrollRight && (
          <button
          onClick={() => scrollByAmount("right")}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-secondary shadow-md rounded-full p-2"
          >
            <FaChevronRight className="text-white"/>
          </button>
        )}
      </div>
    </div>
  );
};
