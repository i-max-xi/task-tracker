import { Icon } from '@iconify/react/dist/iconify.js';
import { cn } from '@nextui-org/react';

interface IInfoCard {
  title: string;
  description: string;
  titleClassName?: string;
  descriptionClassName?: string;
}
const InfoCard = ({
  title,
  description,
  titleClassName,
  descriptionClassName,
}: IInfoCard) => {
  return (
    <div className="bg-secondary-light rounded-2xl p-4 lg:px-6 w-full flex flex-col gap-y-3 hover:scale-[1.02] duration-700 cursor-pointer  hover:shadow-[#4C7F64]/30 hover:shadow-lg">
      <Icon
        icon="eva:checkmark-square-fill"
        fontSize={24}
        className="text-secondary"
      />
      <h1 className={cn('text-xl font-medium', titleClassName)}>{title}</h1>
      <p
        className={cn('text-[#575757] text-sm leading-6 font-light', descriptionClassName)}
      >
        {description}
      </p>
    </div>
  );
};

export default InfoCard;
