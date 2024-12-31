/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFormik } from "formik";
import CustomInput from "../_form/Input";
import { useDispatch, useSelector } from "react-redux";
import { updateSubscriberState } from "@/store/features/subscriber";
import { RootState } from "@/store/store";
import { useEffect } from "react";

const PasswordSetting = () => {
  const dispatch = useDispatch();

  const { password } = useSelector((state: RootState) => state.subscriber);

  const { ...form } = useFormik({
    initialValues: {
      password: "",
      confirm_password: "",
    },
    onSubmit: () => {},
  });

  useEffect(() => {
    if (form.values.confirm_password === password) {
      dispatch(
        updateSubscriberState({
          safe: true,
        })
      );
    }
  }, [form.values.confirm_password, dispatch, password]);

  return (
    <div className="">
      <div>
        <h4 className="font-semibold lg:text-[1.7rem] text-[1.2rem]">
          Set Password
        </h4>
        <p className="text-[#717173] font-light lg:text-[0.9rem] text-[0.8rem]">
          Enter a password to continue?
        </p>
      </div>

      <div className="lg:pt-6 flex flex-col gap-4 pt-4">
        <CustomInput
          type={"password"}
          label={"Password"}
          placeholder={"••••••••"}
          id={"initial_password"}
          {...form}
          handleChange={(e: any) => {
            dispatch(updateSubscriberState({ password: e.target.value }));
          }}
        />
        <CustomInput
          type={"password"}
          label={"Confirm Password"}
          placeholder={"••••••••"}
          id={"confirm_password"}
          {...form}
          handleChange={(e: any) => {
            form.setFieldValue("confirm_password", e.target.value); // Correct usage
          }}
        />
      </div>
    </div>
  );
};

export default PasswordSetting;
