import { CustomButton } from '@/components/shared/shared_customs';
import { Icon } from '@iconify/react/dist/iconify.js';
import { cn } from '@nextui-org/react';

const PricingPage = () => {
  return (
    <div className="lg:w-[80vw] lg:mx-auto lg:pt-12 ">
      <div>
        <h4 className="font-semibold lg:text-[1.7rem]">Pricing Plan</h4>
        <p className="text-[#717173] font-light lg:text-[0.9rem]">
          Select a pricing plan that suits your organization.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6 space-y-5 md:space-y-0 lg:pt-12 ">
        {allPlans.map((plan, index) => (
          <div
            key={index}
            className="p-6 bg-[#619B7D]/10 lg:rounded-[1.8rem] cursor-pointer hover:scale-[1.01] duration-700 justify-between grid grid-rows-3"
            // flex flex-col
          >
            <div className=" ">
              <h3 className="lg:text-[3rem] font-medium">{plan.title}</h3>
              <p className="lg:text-[1.1rem]  font-light text-secondary-black my-2">
                {plan.description}
              </p>
            </div>
            <div className="row-span-2 flex flex-col justify-between">
              <div className="">
                <h6 className="font-semibold text-[1.2rem] mb-1">Features</h6>
                <div className="grid grid-cols-1 gap-y-2">
                  {plan?.features?.map((feature) => (
                    <div className="flex items-center gap-2">
                      <Icon icon={'uil:check'} className="text-primary" />
                      <p className="font-light">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:pt-6 ">
                <div className="lg:mb-4">
                  <p className="">
                    <span className="lg:text-[2.7rem] font-medium">
                      {plan.price}
                    </span>
                    {index !== 2 && '/mo'}
                    {/* <br />
                    <p className="text-sm text-secondary-black ">
                      + processing fees
                    </p> */}
                  </p>
                </div>

                <CustomButton
                  className={cn(
                    'bg-primary text-white font-medium w-full mt-auto lg:py-6 lg:text-[1.1rem]',
                    index === 2 &&
                      'border-2 border-primary bg-transparent text-primary'
                  )}
                >
                  {index == 2 ? 'Contact Sales' : 'Subscribe'}
                </CustomButton>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
const allPlans = [
  {
    title: 'Basic',
    description:
      'Expand your reach and sell anywhere: in-store, online, over the phone, or while on the move.',
    price: '₵650',
    features: [
      'Virtual Terminal (POS)',
      'Generate Invoices',
      'Manage Inventory',
      'Basic Accounting and Book keeping',
      'Manage Cash flow',
      'Single Location ',
    ],
  },
  {
    title: 'Plus',
    description:
      ' Unlock advanced features tailored to meet the unique needs of restaurants, retail shops, and appointment-based businesses. Enjoy the flexibility to upgrade your plan whenever it suits you and cancel at any time without hassle.',
    price: '₵1,500',
    features: [
      'Advance invoicing',
      'Generate Purchase Orders',
      'Inventory analytics',
      'Live phone support',
      'Online Checkout',
      'Single Location',
      '1 Warehouse',
      'Barcode generation and printing',
    ],
  },
  {
    title: 'Advanced',
    description:
      'Create a tailored plan designed to address the unique complexities of your operations. Custom processing rates may be offered based on eligibility.',
    price: 'Custom',
    features: [
      'Staff Payroll',
      'Advanced Accounting',
      'Warehouse Management',
      '24/7 support',
      'Integrations',
      'Online Ordering',
      'Multi Store ',
      'Business Account ',
      'Business Analytics ',
    ],
  },
];
export default PricingPage;
