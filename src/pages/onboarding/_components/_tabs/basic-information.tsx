import { useFormik } from 'formik';
import CustomInput from '../_form/Input';
import PhoneInput from '../_form/phone-input';

const BasicInformation = () => {
  const { ...form } = useFormik({
    initialValues: {
      email: '',
      phone: '',
    },
    onSubmit(_) {},
  });
  return (
    <div className="">
      <div>
        <h4 className="font-semibold lg:text-[1.7rem]">Basic Information</h4>
        <p className="text-[#717173] font-light lg:text-[0.9rem]">
          What is your phone number and email address?
        </p>
      </div>

      <div className="lg:pt-6 flex flex-col gap-4">
        <CustomInput
          type={'email'}
          label={'Email'}
          placeholder={'john@foundry.com'}
          id={'email'}
          {...form}
        />
        <PhoneInput
          type={'text'}
          label={''}
          placeholder={'23984392'}
          id={'phone'}
          {...form}
        />
      </div>
    </div>
  );
};

export default BasicInformation;
