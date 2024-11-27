import { useFormik } from 'formik';
import CustomInput from '../_form/Input';

const PasswordSetting = () => {
  const { ...form } = useFormik({
    initialValues: {
      password: '',
      confirm_password: '',
    },
    onSubmit: (_) => {},
  });
  return (
    <div className="">
      <div>
        <h4 className="font-semibold lg:text-[1.7rem]">Set Password</h4>
        <p className="text-[#717173] font-light lg:text-[0.9rem]">
          Enter a password to continue?
        </p>
      </div>

      <div className="lg:pt-6 flex flex-col gap-4">
        <CustomInput
          type={'password'}
          label={'Password'}
          placeholder={'••••••••'}
          id={'email-'}
          {...form}
        />
        <CustomInput
          type={'password'}
          label={'Confirm Password'}
          placeholder={'••••••••'}
          id={'email0'}
          {...form}
        />
      </div>
    </div>
  );
};

export default PasswordSetting;
