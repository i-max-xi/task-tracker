import React, { Suspense } from "react";

interface ILazyPageWrapper {
  component: React.ReactElement;
}

const LazyPageWrapper = ({ component }: ILazyPageWrapper) => {
  return (
    <Suspense
      fallback={
        <div className="w-full h-screen grid place-items-center">
          <div className="flex flex-col items-center justify-center gap-y-2">
            <img
              src="/icons/logo.webp"
              alt="logo"
              className="w-[2rem] aspect-square"
            />
            <p className="text-sm">Unity Savings</p>
          </div>
        </div>
      }
    >
      {component}
    </Suspense>
  );
};

export default LazyPageWrapper;
