import React from "react";

type formValues = {
  titre: string;
};

export default function FormTitle({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <>
      <h2 className=" text-[#607bd4] font-semibold text-2xl  rounded-sm tracking-[1.1px] ">
        {children}
      </h2>
    </>
  );
}

export const FormTitleError = ({children } : {children : React.ReactNode}) =>  {
  return (
    <h2 className=" text-red-400 font-semibold text-2xl  rounded-sm tracking-[1.1px] ">
      {children}
    </h2>
  )
}
