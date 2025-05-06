import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const AlbumCard = ({ Title, children, withControls = true }) => {
  const scrollRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  const checkScrollPosition = () => {
    const el = scrollRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    const tolerance = 5;

    setShowLeft(scrollLeft > tolerance);
    setShowRight(scrollLeft + clientWidth < scrollWidth - tolerance);
  };

  const scroll = (direction) => {
    const el = scrollRef.current;
    if (!el) return;

    const scrollDistance = el.clientWidth * 0.8;
    const newPosition =
      direction === "left"
        ? el.scrollLeft - scrollDistance
        : el.scrollLeft + scrollDistance;

    el.scrollTo({ left: newPosition, behavior: "smooth" });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!withControls || !el) return;

    const handleScroll = () => requestAnimationFrame(checkScrollPosition);
    const handleResize = () => requestAnimationFrame(checkScrollPosition);

    // Pastikan cek saat komponen siap
    requestAnimationFrame(checkScrollPosition);

    el.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      el.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [withControls]);

  useEffect(() => {
    // Jalankan pengecekan awal saat children selesai render
    if (withControls) {
      requestAnimationFrame(() => {
        checkScrollPosition();
      });
    }
  }, [children, withControls]);

  return (
    <div className="w-full bg-white py-10 px-6 lg:py-10 lg:px-12 shadow-[-12px_12px_25px_0_rgba(138,131,124,0.23)] flex flex-col items-center gap-4">
      <span className="flex items-center gap-2 self-start">
        <span className="h-4 w-4 bg-secondary"></span>
        <h2 className="capitalize text-xl font-bold">{Title}</h2>
      </span>
      <div className="relative w-full">
        {/* Tombol kiri */}
        {withControls && showLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-secondary shadow-md rounded-full p-2"
          >
            <FaChevronLeft className="text-white" />
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
        {withControls && showRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-secondary shadow-md rounded-full p-2"
          >
            <FaChevronRight className="text-white" />
          </button>
        )}
      </div>
    </div>
  );
};
