"use client";

import { createEvent } from "@/app/lib/actions";
import { otherEvents } from "@/app/lib/placeholder";
import SubmitButton from "@/app/ui/auth/submit-button";
import BannerForm from "@/app/ui/event/createEventBanner";
import EventDetailsForm from "@/app/ui/event/createEventDetails";
import AddTickets from "@/app/ui/event/createEventTickets";
import PreviewEvent from "@/app/ui/event/previewEvent";
import Link from "next/link";
import { MouseEvent, use, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

const steps = [
  {
    id: "Step 1",
    name: "Event Details",
    fields: [
      "title",
      "category",
      "type",
      "location",
      "meeting-adress",
      "description",
    ],
  },
  { id: "Step 1", name: "Add Banner", fields: ["coverImg"] },
  { id: "Step 1", name: "Ticket Information", fields: ["ticketType"] },
  { id: "Step 1", name: "Preview Event", fields: [""] },
];


export default function Page() {
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setFormData] = useState({
    title: "",
    category: "",
    type: "",
    frequency: "",
    location: "",
    description: "",
    address: "",
    ticketType: "",
    tickets: [],
    isPublished: false,
    tags: [],
    coverImg: "",
  });

  const handleChange = (e: any) => {
    const type = e.target?.type;

    const name = e.target.name;

    const value = type === "file" && e.target.files ? e.target.files[0] : e.target.value;

    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };


  const next = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    e.preventDefault()
    if (currentStep < steps.length - 1) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step + 1);
    }
  };

  const prev = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    e.preventDefault();
    if (currentStep > 0) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step - 1);
    }
  };

  return (
    <section>
      <div className="my-10">
        <div className="mx-10 md:mx-24 text-[#2b293d] dark:text-gray-300">
          <h1 className="text-2xl font-extrabold">
          {`${steps[currentStep].name}`}
          </h1>
          <ol className="flex items-center w-full my-4 sm:my-5">
            <li className="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800">
              <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
                <svg
                  className="w-4 h-4 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
                </svg>
              </div>
            </li>
            <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
              <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                <svg
                  className="w-4 h-4 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 14"
                >
                  <path d="M18 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM2 12V6h16v6H2Z" />
                  <path d="M6 8H4a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2Zm8 0H9a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2Z" />
                </svg>
              </div>
            </li>
            <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
              <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                <svg
                  className="w-4 h-4 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 14"
                >
                  <path d="M18 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM2 12V6h16v6H2Z" />
                  <path d="M6 8H4a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2Zm8 0H9a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2Z" />
                </svg>
              </div>
            </li>
            <li className="flex items-center w-full">
              <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                <svg
                  className="w-4 h-4 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z" />
                </svg>
              </div>
            </li>
          </ol>
          <form onSubmit={() => console.log("submitted")}>
            {currentStep === 0 && <EventDetailsForm handleChange={handleChange} data={data} />}
            {currentStep === 1 && <BannerForm handleChange={handleChange} data={data} />}
            {currentStep === 2 && <AddTickets handleChange={handleChange} data={data} />}
            {currentStep === 3 && <PreviewEvent data={data} />}
            <div className="flex gap-5 justify-between my-5">
              {currentStep !== 0 ? (
                <button
                  type="button"
                  className="flex gap-3 py-2 px-5 rounded-md font-bold"
                  onClick={(e) => prev(e)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                    />
                  </svg>
                  Go back
                </button>
              ) : (
                <div></div>
              )}

              {currentStep < steps.length - 1 ? (
                <button
                  type="button"
                  className="flex gap-3 py-2 px-5 md:text-base text-sm rounded-md font-bold text-white bg-[#2b293d]"
                  onClick={(e) => {
                    next(e);
                  }}
                >
                  Save & Continue{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </button>
              ) : (
                <button
                  type="submit"
                  className="py-2 px-5 rounded-md font-bold text-white bg-[#2b293d]"
                >
                  Finish
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
