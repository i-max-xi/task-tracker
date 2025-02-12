import { cn } from "@nextui-org/react";

interface IInfoCard {
  title: string;
  description: string;
  img_src: string;
}
const InfoCardWithImage = ({ title, description, img_src }: IInfoCard) => {
  return (
    <div className="relative flex flex-col w-full justify-between">
      <div className="absolute top-0 left-2 w-full h-full border-t-2 border-l-2 border-[#F4B233] rounded-tl-lg rounded-bl-lg"></div>

      <div className="flex flex-col gap-y-3 p-5">
        <h1 className={cn("text-xl font-bold")}>{title}</h1>
        <p
          className={cn(
            "text-[#575757] text-sm leading-6 font-medium md:pr-10"
          )}
        >
          {description}
        </p>
      </div>
      <div className="md:w-full max-h-[15rem] overflow-hidden flex items-center justify-center rounded-b-lg">
        <img src={img_src} className="w-full  object-cover" />
      </div>
    </div>
  );
};

export default InfoCardWithImage;
