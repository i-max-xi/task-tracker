import CountryPicker from "../country-picker";

const Country = () => {
  return (
    <div>
      <div>
        <h4 className="font-semibold lg:text-[1.7rem] text-[1.2rem]">
          Let's get started!
        </h4>
        <p className="text-[#717173] font-light lg:text-[0.9rem] text-[0.8rem]">
          Which country did you set up your business in?
        </p>
      </div>

      <div className="lg:pt-6 pt-4">
        <CountryPicker />
      </div>
    </div>
  );
};

export default Country;
