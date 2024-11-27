import CountryPicker from '../country-picker';

const Country = () => {
  return (
    <div>
      <div>
        <h4 className="font-semibold lg:text-[1.7rem]">Let's get started!</h4>
        <p className="text-[#717173] font-light lg:text-[0.9rem]">
          Which country did you set up your business in?
        </p>
      </div>

      <div className="lg:pt-6">
        <CountryPicker />
      </div>
    </div>
  );
};

export default Country;
