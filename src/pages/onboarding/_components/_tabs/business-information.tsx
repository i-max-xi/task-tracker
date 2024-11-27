import { useFormik } from 'formik';
import CustomInput from '../_form/Input';
import SelectInput from '../_form/Select-Input';

const BasicInformation = () => {
  const { ...form } = useFormik({
    initialValues: {
      business_name: '',
      location: '',
      business_type: '',
    },
    onSubmit: (_) => {},
  });
  return (
    <div className="">
      <div>
        <h4 className="font-semibold lg:text-[1.7rem]">Business Information</h4>
        <p className="text-[#717173] font-light lg:text-[0.9rem]">
          Tell as more about your business?
        </p>
      </div>

      <div className="lg:pt-6 flex flex-col gap-4">
        <CustomInput
          type={'text'}
          label={'Business name'}
          placeholder={'e.g. Cepodek'}
          id={'email'}
          {...form}
        />
        <CustomInput
          type={'text'}
          label={'Location'}
          placeholder={'e.g. Oyarifa - Teiman'}
          id={'email'}
          {...form}
        />
        <SelectInput
          items={[
            { label: 'Limited Liability', value: 'Limited Liability' },
            { label: 'Sole Proprietorship', value: 'Sole Proprietorship' },
          ]}
          label={'Nature of Business'}
          placeholder={'e.g. Limited Liability'}
          id={'email'}
          {...form}
        />
        <SelectInput
          items={[
            // { label: 'Hospital', value: 'Hospital' },
            { label: 'Retail', value: 'Retail' },
            // { label: 'School', value: 'School' },
            { label: 'Wholesale', value: 'Wholesale' },
            { label: 'Micro Finance', value: 'Micro Finance' },
            { label: 'Micro Credit', value: 'Micro Credit' },
            { label: 'Restaurant', value: 'Restaurant' },
            { label: 'Savings and Loans', value: 'Savings and Loans' },
            { label: 'Fund Management', value: 'Fund Management' },
          ]}
          label={'Business Type'}
          placeholder={'e.g. Limited Liability'}
          id={'email'}
          {...form}
        />
      </div>
    </div>
  );
};

export default BasicInformation;
