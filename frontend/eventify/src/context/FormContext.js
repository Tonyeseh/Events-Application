import { createContext, useState } from "react";

const FormContext = createContext({});

export const FormProvider = ({ children }) => {
  const title = {
    0: "Edit",
    1: "Banner",
    2: "Ticketing",
    3: "review",
  };
  const [page, setPage] = useState(0);
  const [data, setFormData] = useState({
    title: "",
    category: "",
    type: "",
    session: [],
    location: "",
    description: "",
    address: "",
    ticketType: "",
    tickets: [],
    isPublished: false,
    tags: [],
    coverImg: "",
  });

  const handleChange = (e) => {
    const type = e.target.type;

    const name = e.target.name;

    const value = type === "file" ? e.target.files[0] : e.target.value;

    if (name.startsWith("session")) {
      setFormData((prevData) => {
        prevData.session = {
          ...prevData.session,
          [name]: value,
        };
        return prevData;
      });
    } else {
      setFormData((prevData) => {
        return {
          ...prevData,
          [name]: value,
        };
      });
    }
  };

  return (
    <FormContext.Provider
      value={{ title, page, setPage, data, setFormData, handleChange }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
