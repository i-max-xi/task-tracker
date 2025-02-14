/* eslint-disable react-hooks/exhaustive-deps */
import InfoCardWithIcon from "@/components/shared/info_card_with_icon";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { useSwipeable } from "react-swipeable";

export const InfoSection = () => {
  const CARDS_TO_SHOW = {
    desktop: 4,
    semidesktop: 3,
    tablet: 2,
    mobile: 1,
  };

  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const getCardsToShow = () => {
    if (window.innerWidth < 640) return CARDS_TO_SHOW.mobile;
    if (window.innerWidth < 1020) return CARDS_TO_SHOW.tablet;
    if (window.innerWidth < 1440) return CARDS_TO_SHOW.semidesktop;
    return CARDS_TO_SHOW.desktop;
  };

  const [cardsToShow, setCardsToShow] = useState(getCardsToShow());
  const maxIndex = Math.max(0, infos.length);

  React.useEffect(() => {
    const handleResize = () => setCardsToShow(getCardsToShow());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // to move the carousel
  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev < maxIndex - 3 ? prev + 1 : 0)); // Loop back to the first slide
    }, 5000); // Change slides every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [index, maxIndex]);

  const nextSlide = () => {
    setIndex((prev) => (prev < maxIndex - 3 ? prev + 1 : prev));
  };
  const prevSlide = () => setIndex((prev) => Math.max(prev - 1, 0));

  const handlers = useSwipeable({
    onSwiping: (event) => {
      if (containerRef.current) {
        containerRef.current.style.transform = `translateX(${
          -index * 100 + event.deltaX
        }px)`;
      }
    },
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    trackMouse: true, // Enables swiping with a mouse
  });

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative overflow-hidden flex-1"
    >
      {/* <motion.section
        className="py-10 lg:mb-20 lg:mx-auto mx-5 flex flex-col overflow-hidden flex-1"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      ></motion.section> */}
      <h2 className=" text-2xl md:text-3xl font-bold">
        <span className="text-black">Bank anytime, anywhere</span>{" "}
      </h2>

      <div className=" w-full overflow-hidden md:ml-[8%] group">
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0  hidden lg:flex lg:top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full "
        >
          <Icon icon="mdi:chevron-left" className="text-3xl text-gray-600" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute hidden lg:flex right-0 top-3/4 lg:top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full "
        >
          <Icon icon="mdi:chevron-right" className="text-3xl text-gray-600" />
        </button>

        {/* Swipeable Carousel */}
        <motion.div
          {...handlers}
          ref={containerRef}
          className="flex gap-2 md:gap-4 cursor-grab active:cursor-grabbing mt-2 md:mt-10 "
          drag="x"
          dragConstraints={{ left: -maxIndex * 360, right: 0 }}
          animate={{ x: `-${(index / maxIndex) * 100}%` }}
          transition={{ type: "tween" }}
          style={{ width: `${(infos.length / cardsToShow) * 100}%` }}
        >
          {infos.map((info, index) => (
            <motion.div
              key={index}
              className="w-[90vw] md:w-[30%] lg:w-[20%] flex-shrink-0 lg:px-2 py-5"
            >
              <InfoCardWithIcon {...info} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

const infos = [
  {
    title: "Susu savings",
    description:
      "Personal banking services that make managing your finances hassle and stress-free.",
    // icon: "mdi:bank-outline", // Represents savings and banking
    img: "/images/piggy_bank.jpg",
    link: "",
  },
  {
    title: "Investment",
    description:
      "Versatile banking solutions to streamline operations, drive growth, and transform your business.",
    // icon: "mdi:chart-line-variant", // Represents financial growth and investments
    img: "/images/chart.jpg",

    link: "",
  },
  {
    title: "Travel for greener pastures",
    description:
      "A lending solution for the provisioning of loans facilitated through our digital platform.",
    // icon: "material-symbols-light:travel", // Represents travel and new opportunities
    img: "/images/plane.jpg",

    link: "",
  },
  {
    title: "Real Estate financing",
    description:
      "Flexible financing options to support your real estate investment and property acquisition.",
    // icon: "mdi:home-outline", // Represents housing and real estate financing
    img: "/images/city.jpg",

    link: "",
  },
];
