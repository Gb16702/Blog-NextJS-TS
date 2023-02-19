import React from "react";

type formValues = {
  titre: string;
};

export default function formTitle({
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
