import { CustomButton } from "@/components/shared/shared_customs";

export const AcrossDomains = () => {
  return (
    <div className=" flex flex-col gap-5 md:gap-10 justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-1 text-black">
        <h2 className=" text-xl md:text-3xl font-semibold">Across multiple</h2>
        <p className="text-black text-xl md:text-3xl font-semibold">domains</p>
      </div>

      <div className="mt-5 md:mt-10 grid md:grid-cols-3 grid-cols-1 gap-4 md:gap-8">
        {infos.map((info, index) => (
          <div
            key={index}
            className={`font-semibold text-base flex flex-col justify-center items-center ${
              index !== 0 ? "md:border-l md:border-gray-300 pl-6" : ""
            }`}
          >
            <p>{info.title}</p>
            <p>{info.description}</p>
          </div>
        ))}
      </div>

      <div>
        <CustomButton className="bg-[#FBB603] text-white rounded-full">
          Learn More
        </CustomButton>
      </div>
    </div>
  );
};

const infos = [
  {
    title: "No minimum deposit",
    description: "required",
  },
  {
    title: "No salary crediting",
    description: "needed",
  },
  {
    title: "No minimum",
    description: "spending necessary",
  },
];
