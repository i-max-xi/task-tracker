import { cn } from "@nextui-org/react";

interface IInfoCard {
  title: string;
  description: string;
  img_src: string;
}
const InfoCardWithImage = ({ title, description, img_src }: IInfoCard) => {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-col gap-y-3">
        <h1 className={cn("text-xl font-medium")}>{title}</h1>
        <p className={cn("text-[#575757] text-sm leading-6 font-light")}>
          {description}
        </p>
      </div>
      <div>
        <img src={img_src} className="w-10 h-10" />
      </div>
    </div>
  );
};

export default InfoCardWithImage;
