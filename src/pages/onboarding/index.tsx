import { Button } from '@nextui-org/react';
import Country from './_components/_tabs/Country';
import { useState } from 'react';
import BasicInformation from './_components/_tabs/basic-information';
import { Icon } from '@iconify/react/dist/iconify.js';
import BusinessInformation from './_components/_tabs/business-information';
import PasswordSetting from './_components/_tabs/password';
import { useNavigate } from 'react-router-dom';
type ITab = 'country' | 'basic-information' | 'business-information';
const Onboarding = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<ITab>('country');
  const tabs: Record<
    string,
    {
      prev: string | (() => void);
      next: string | (() => void);
      component: JSX.Element;
    }
  > = {
    country: {
      prev: () => {
        navigate('/');
      },
      next: 'basic-information',
      component: <Country />,
    },
    'basic-information': {
      prev: 'country',
      next: 'business-information',
      component: <BasicInformation />,
    },
    'business-information': {
      prev: 'basic-information',
      next: 'password',
      component: <BusinessInformation />,
    },
    password: {
      prev: 'business-information',
      next: () => null,
      component: <PasswordSetting />,
    },
  };
  return (
    <div className="lg:w-[700px] lg:h-screen lg:pt-12 lg:px-6  mx-auto font-sans flex flex-col justify-between lg:pb-12">
      <div className="flex flex-col gap-4">
        <div
          className="flex items-center justify-start cursor-pointer"
          onClick={(event) => {
            event.preventDefault();
            if (typeof tabs?.[activeTab]?.prev == 'string') {
              setActiveTab(tabs?.[activeTab]?.prev as ITab);
            } else if (typeof tabs?.[activeTab]?.prev == 'function') {
              tabs?.[activeTab]?.prev();
            }
          }}
        >
          <Icon icon={'fluent:arrow-left-16-filled'} height={25} />
        </div>
        {tabs?.[activeTab]?.component}
      </div>

      <Button
        className="lg:w-[50%] lg:py-6 rounded-3xl mx-auto bg-[#4C7F64] text-white shadow-xl shadow-[#4C7F64]/30 focus:outline-none"
        onClick={() => {
          if (typeof tabs?.[activeTab]?.next == 'string') {
            setActiveTab(tabs?.[activeTab]?.next as ITab);
          } else if (typeof tabs?.[activeTab]?.next == 'function') {
            tabs?.[activeTab]?.next();
          }
        }}
      >
        Continue
      </Button>
    </div>
  );
};

export default Onboarding;
