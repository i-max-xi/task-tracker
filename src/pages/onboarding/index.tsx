import { Button } from '@nextui-org/react';
import Country from './_components/_tabs/Country';
import { useState } from 'react';
import BasicInformation from './_components/_tabs/basic-information';
import { Icon } from '@iconify/react/dist/iconify.js';
import BusinessInformation from './_components/_tabs/business-information';
import PasswordSetting from './_components/_tabs/password';
import { useNavigate } from 'react-router-dom';

type ITab = 'country' | 'basic-information' | 'business-information';
type TReturnValue = void | string;

const Onboarding = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<ITab>('country');
  const tabs: Record<
    string,
    {
      prev: () => TReturnValue;
      next: () => TReturnValue;
      component: JSX.Element;
    }
  > = {
    country: {
      prev: () => {
        navigate('/');
      },
      next: () => {
        return 'basic-information';
      },
      component: <Country />,
    },
    'basic-information': {
      prev: () => {
        return 'country';
      },
      next: () => {
        return 'business-information';
      },
      component: <BasicInformation />,
    },
    'business-information': {
      prev: () => {
        return 'basic-information';
      },
      next: () => {
        return 'password';
      },
      component: <BusinessInformation />,
    },
    password: {
      prev: () => {
        return 'business-information';
      },
      next: () => {
        navigate('pricing');
      },
      component: <PasswordSetting />,
    },
  };
  return (
    <div className="lg:w-[700px] lg:h-screen lg:pt-12 lg:px-6  mx-auto font-sans flex flex-col justify-between lg:pb-12 px-6 pt-6 h-[85vh]">
      <div className="flex flex-col gap-4">
        <div
          className="flex items-center justify-start cursor-pointer"
          onClick={(event) => {
            event.preventDefault();
            const returnValue = tabs?.[activeTab]?.prev();
            if (typeof returnValue == 'string') {
              setActiveTab(returnValue as ITab);
            }
          }}
        >
          <Icon icon={'fluent:arrow-left-16-filled'} height={25} />
        </div>
        {tabs?.[activeTab]?.component}
      </div>

      <Button
        className="lg:w-[50%] w-[90%] py-4 lg:py-6 rounded-3xl mx-auto bg-[#4C7F64] text-white shadow-xl shadow-[#4C7F64]/30 focus:outline-none"
        onClick={() => {
          const returnValue = tabs?.[activeTab]?.next();
          if (typeof returnValue == 'string') {
            setActiveTab(returnValue as ITab);
          }
        }}
      >
        Continue
      </Button>
    </div>
  );
};

export default Onboarding;
