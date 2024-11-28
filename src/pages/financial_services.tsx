import InfoCard from '@/components/shared/info_card';
import CustomModal from '@/components/shared/modal';
import { CustomButton } from '@/components/shared/shared_customs';
import { Icon } from '@iconify/react/dist/iconify.js';
import {
  Image,
  Input,
  Select,
  SelectItem,
  useDisclosure,
} from '@nextui-org/react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { variables } from '@/utils/helper';
const bookAFormSchema = z.object({
  business_name: z.string().min(1, { message: 'Business name is required' }),
  industry: z.string().min(1, { message: 'Industry is required' }),
  contact_person: z.string().min(1, { message: 'Contact person is required' }),
  email: z
    .string()
    .email({ message: 'Please enter a valid email address' })
    .min(1, { message: 'Email is required' }),
  phone_number: z.string().min(1, { message: 'Phone number is required' }),
  country: z.string().min(1, { message: 'Country is required' }),
  services: z.string().min(1, { message: 'Services is requrired' }),
  additional_information: z.string().optional(),
});

const FinancialServices = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
    getValues,
    watch,
  } = useForm<z.infer<typeof bookAFormSchema>>({
    resolver: zodResolver(bookAFormSchema),
  });
  const bookDemoModal = useDisclosure();
  watch();
  const onSubmit = async (data: z.infer<typeof bookAFormSchema>) => {
    try {
      const response = await axios({
        url: `${variables.base_url}/landing/create/prospect`,
        data,
        method: 'post',
        withCredentials: true,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main className="container md:pt-5">
      <section className="border-3 border-white rounded-xl px-5 lg:px-28 md:pt-16 pb-28 md:mt-[4.5rem] mt-6 relative">
        <div className="absolute -bottom-24 lg:-bottom-10 left-1/2 transform -translate-x-1/2 w-[60%] md:w-[42%] mx-auto bg-white rounded-3xl p-4 grid grid-cols-auto-fill-200 gap-3">
          {[
            {
              title: 'Digital Banking',
              description:
                'A digital banking platform is an online or mobile application that allows customers to access banking services remotely',
            },
            {
              title: 'Embedded Finance',
              description:
                'Embedded finance integrates financial services into non-financial platforms and products',
            },
          ].map((item, index) => (
            <div key={index}>
              <h2>{item.title}</h2>
              <div className="w-[20%] h-0.5 bg-black my-1" />
              <p className="text-xs text-secondary-black">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="my-auto pt-5 md:pt-16 mb-5 md:mb-0">
          <h1 className="font-medium text-center lg:text-start text-3xl md:text-4xl md:pr-60 mb-8">
            Digital Finance is paving the way for embedded finance
          </h1>

          <div className="flex items-center flex-col lg:flex-row gap-2">
            <CustomButton className="bg-primary text-white font-medium px-5 lg:w-fit ">
              Explore <Icon icon="solar:arrow-right-outline" fontSize={20} />
            </CustomButton>
            <CustomButton
              className="bg-transparent border-primary border-2 text-primary font-medium px-5 lg:w-fit "
              onPress={() => {
                bookDemoModal.onOpen();
              }}
            >
              Book a Demo{' '}
              <Icon icon="solar:arrow-right-outline" fontSize={20} />
            </CustomButton>
          </div>
        </div>
        <Image
          src="/images/FS_1.webp"
          width={256}
          height={500}
          alt="mobile device"
          classNames={{
            wrapper: 'hidden md:block absolute -right-3 -top-16',
          }}
        />
        <Image
          src="/images/FS_1.webp"
          width={208}
          height={400}
          alt="mobile device"
          classNames={{
            wrapper: 'md:hidden mx-auto mb-5',
          }}
        />
      </section>

      <section className="py-10 pt-28 lg:pt-20">
        <div className="flex justify-between">
          <h2 className="font-medium text-3xl md:text-4xl mb-5">
            More from Financial Service
          </h2>
        </div>
        <div className="md:grid md:grid-cols-auto-fill-300 gap-5 space-y-5 md:space-y-0">
          {moreConstant.map((item, index) => (
            <InfoCard
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>

      <CustomModal
        isOpen={bookDemoModal.isOpen}
        onOpenChange={bookDemoModal.onOpenChange}
        body={
          <div className="p-4">
            <div>
              <h4 className="lg:text-[1.3rem] font-semibold">Book a Demo</h4>
              <p className="font-light text-[0.85rem] ">
                Fill out the form below and our team will get in touch with you
                shortly.
              </p>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="pt-4 space-y-3 lg:space-y-5"
            >
              {data.map((item) => {
                const fieldName = item.name as keyof z.infer<
                  typeof bookAFormSchema
                >;
                switch (item.type) {
                  case 'text':
                    return (
                      <div>
                        <Input
                          value={getValues()[fieldName]}
                          className="w-full"
                          type={'text'}
                          label={item.label}
                          placeholder={item.placeHolder}
                          {...register(fieldName)}
                        />
                        <span className="text-red-400 text-xs">
                          {errors?.[fieldName]?.message}
                        </span>
                      </div>
                    );

                  case 'select':
                    return (
                      <div>
                        <Select
                          items={item.options}
                          label={item.label}
                          value={getValues()[fieldName]}
                          placeholder={item.placeHolder}
                          onSelectionChange={(selected) =>
                            register(fieldName).onChange({
                              target: { value: selected },
                            })
                          }
                          {...register(fieldName)}
                          selectionMode={item?.multiple ? 'multiple' : 'single'}
                        >
                          {(item) => (
                            <SelectItem key={item.value}>
                              {item.label}
                            </SelectItem>
                          )}
                        </Select>
                        <span className="text-red-400 text-xs">
                          {errors?.[fieldName]?.message}
                        </span>
                      </div>
                    );
                }
              })}

              <div className="w-full pt-2">
                <CustomButton
                  type="submit"
                  className=" bg-primary text-white w-full text-base"
                >
                  Submit
                </CustomButton>
              </div>
            </form>
          </div>
        }
      />
    </main>
  );
};

export default FinancialServices;

const moreConstant = [
  {
    title: 'Digital Onboarding',
    description:
      'Simplify and enhance onboarding for businesses and customers with our intuitive, user-friendly digital platform. ',
  },
  {
    title: 'Loan Origination',
    description:
      'Empower your business with our digital lending solution, providing your customers with quick and convenient access to the financing they need',
  },
  {
    title: 'Credit Scoring',
    description:
      'Transform your credit analysis with our Decision Module, providing fast and accurate loan assessments for quicker approvals and enhanced customer satisfaction.',
  },
  {
    title: 'Mobile Banking',
    description:
      'Enhance your banking experience with our user-friendly mobile application, bringing convenience to your fingertip',
  },
  {
    title: 'Sentinel',
    description:
      'Safeguard your businesses with robust regulatory compliance and fraud detection measures',
  },
  {
    title: 'Agency',
    description:
      'Expand banking access with our agent network platform, connecting underserved areas to essential financial services through local intermediaries',
  },
];
const data = [
  {
    label: 'Business name',
    name: 'business_name',
    type: 'text',
    placeHolder: 'e.g. Cepodek',
  },
  {
    placeHolder: 'e.g. Banking',
    label: 'Industry',
    name: 'industry',
    type: 'select',
    options: [
      'Banking',
      'Insurance',
      'Microfinance',
      'Credit Union',
      'Investment Banking',
      'Asset Management',
      'Fund Management',
      'Payment Services',
      'Digital Banking',
      'Fintech',
      'Lending',
      'Micro Credit',
      'Savings and Loans',
      'Other Financial Services',
    ].map((e) => ({ label: e, value: e })),
  },
  {
    label: 'Contact Person',
    name: 'contact_person',
    type: 'text',
    placeHolder: 'e.g. Nana Gyamfi',
  },
  {
    label: 'Email',
    name: 'email',
    type: 'text',
    placeHolder: 'e.g. papa@example.com',
  },
  {
    label: 'Phone Number',
    name: 'phone_number',
    type: 'text',
    placeHolder: 'e.g. 02039298437',
  },
  {
    label: 'Country',
    name: 'country',
    type: 'select',
    options: ['Ghana', 'Nigeria', 'Senegal', 'Mali'].map((e) => ({
      label: e,
      value: e,
    })),
    placeHolder: 'e.g. Ghana',
  },
  {
    label: 'Services',
    name: 'services',
    type: 'select',
    options: [
      'Financial Services',
      'Business Automation',
      'Foundry Hub',
      'Logistics & Supply Chain',
    ].map((e) => ({ label: e, value: e })),
    multiple: true,
    placeHolder: 'e.g. Financial Services',
  },
  {
    label: 'Additional Information',
    name: 'additional_information',
    type: 'text',
    placeHolder: 'e.g. Can we schedule a meeting',
  },
];
