import { Icon } from "@iconify/react/dist/iconify.js";
import { cn } from "@nextui-org/react";
import { Link } from "react-router-dom";

interface IInfoCard {
  title: string;
  description: string;
  icon: string;
  link: string;
}
const InfoCardWithIcon = ({ title, description, icon, link }: IInfoCard) => {
  return (
    <Link
      to={link}
      className="h-full flex flex-col gap-2 justify-between  bg-white shadow-[0px_2px_11px_2px_rgba(0,0,0,0.07)] hover:shadow-[0px_4px_15px_3px_rgba(0,0,0,0.09)] transition-all ease-in-out  py-4 px-5 rounded-lg"
    >
      <div className="flex flex-col md:gap-4">
        <p className="mt-10 md:mt-16">
          <Icon
            strokeWidth={0.1}
            fontSize={54}
            icon={icon}
            className="filter brightness-90 contrast-90"
          />
        </p>
        <div className="flex flex-col gap-y-3">
          <h1 className={cn("text-base md:text-xl font-bold")}>{title}</h1>
          <p className={cn(" text-sm font-normal leading-6 ")}>{description}</p>
        </div>
      </div>

      <div className="w-full flex justify-between">
        <div></div>
        <Link
          to={link}
          className="mt-4 flex w-fit rounded-full border border-[#212121] p-2"
        >
          <Icon
            icon="prime:arrow-right"
            className="text-[#212121]"
            fontSize={24}
          />
        </Link>{" "}
      </div>
    </Link>
  );
};

export default InfoCardWithIcon;
