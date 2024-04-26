import React from "react";
import { FormProvider } from "../context/FormContext";
import { Outlet } from "react-router-dom";

const CreateEventLayout = () => {
  return (
    <FormProvider>
      <Outlet />
    </FormProvider>
  );
};

export default CreateEventLayout;
