import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { variables } from '@/utils/helper';
import { Input, Select, SelectItem } from '@nextui-org/react';
import { CustomButton } from '@/components/shared/shared_customs';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useNavigate } from 'react-router-dom';
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

const BookADemo = () => {
  const navigate = useNavigate();
  const {
    formState: { errors },
    handleSubmit,
    register,
    getValues,
    watch,
  } = useForm<z.infer<typeof bookAFormSchema>>({
    resolver: zodResolver(bookAFormSchema),
  });
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
    <div className="lg:py-10 p-6 lg:w-[700px] mx-auto">
      <div className="lg:pb-8 pb-4">
        <div
          className="flex items-center justify-start cursor-pointer lg:pb-4 pb-2"
          onClick={(event) => {
            event.preventDefault();
            navigate('/financial-services');
          }}
        >
          <Icon icon={'fluent:arrow-left-16-filled'} height={25} />
        </div>
        <h4 className="lg:text-[1.6rem] text-[1.2rem] font-semibold">
          Book a Demo
        </h4>
        <p className="font-light lg:text-[0.95rem] text-[0.85rem] text-[#717173] ">
          Fill out the form below and our team will get in touch with you
          shortly.
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="pt-4 space-y-4 lg:space-y-6"
      >
        {data.map((item) => {
          const fieldName = item.name as keyof z.infer<typeof bookAFormSchema>;
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
                      <SelectItem key={item.value}>{item.label}</SelectItem>
                    )}
                  </Select>
                  <span className="text-red-400 text-xs">
                    {errors?.[fieldName]?.message}
                  </span>
                </div>
              );
          }
        })}

        <div className="w-full pt-6">
          <CustomButton
            type="submit"
            className=" bg-primary text-white w-full text-base"
          >
            Submit
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

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

export default BookADemo;
