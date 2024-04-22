import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { Datepicker } from "flowbite-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import progress from "../img/edit-progress.png";
import UseFormContext from "../hooks/UseFormContext";
import SessionComponent from "../components/SessionInfo";

const CreateEvent = () => {
  const { handleChange, data, setFormData } = UseFormContext();
  const [errorMsg, setErrMsg] = useState("");
  const [sessionChildren, setSessionChildren] = useState({
    id: Math.random(100000),
    startTime: "00:00",
    startDate: new Date(),
    endTime: "00:00",
    endDate: "",
  });

  const addSession = (e) => {
    if (
      sessionChildren.endTime &&
      sessionChildren.startDate &&
      sessionChildren.startTime
    ) {
      setFormData((prevData) => {
        prevData.session.push(sessionChildren);
        return prevData;
      });
      setSessionChildren({
        id: Math.random(100000),
        startTime: "00:00",
        startDate: new Date(),
        endTime: "00:00",
        endDate: "",
      });
    }
  };

  const removeSession = (e) => {
    const id = e.target.getAttribute("data-id");
    setFormData((prevData) => {
      prevData.session = prevData.session.filter((element) => {
        return element.id.toString() !== id;
      });
      return prevData;
    });
    setSessionChildren((prevData) => ({ ...prevData }));
  };

  const handleSessionChange = (e) => {
    setSessionChildren((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  };

  const validateForm = (e) => {
    if (
      !data.title ||
      !data.category ||
      !data.type ||
      !data.session ||
      !data.location ||
      !data.description ||
      data.description?.length < 20
    ) {
      e.preventDefault();
    }
    setErrMsg("Some fields have not been filled or filled incorrectly!");
  };

  return (
    <div>
      <Header />
      <div className="my-10">
        <div className="mx-10 md:mx-24 text-[#2b293d]">
          <h1 className="text-2xl font-extrabold">Create a New Event</h1>
          <img className="w-full my-12" src={progress} alt="" />
          {errorMsg && (
            <div
              className="w-2/3 mx-auto bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-5 rounded relative"
              role="alert"
            >
              <strong className="font-bold">Holy smokes!</strong>
              <span className="block sm:inline"> {errorMsg}</span>
              <span
                onClick={() => setErrMsg("")}
                className="absolute top-0 bottom-0 right-0 px-4 py-3"
              >
                <svg
                  className="fill-current h-6 w-6 text-red-500"
                  role="button"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <title>Close</title>
                  <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                </svg>
              </span>
            </div>
          )}
          <div className="my-5">
            <div className="flex gap-4">
              <div className="w-1/4"></div>
              <h3 className="text-xl font-thin w-full">Event Details</h3>
            </div>
            <div className="flex justify-around my-3 gap-4">
              <label className="text-sm w-1/4 text-right" htmlFor="title">
                Event Title<span className="text-red-500">*</span>
              </label>
              <input
                className="p-2 border border-[#8282827e] rounded-md mb-5 w-full focus:outline-none focus:ring focus:border-[#2b293d] placeholder:text-[#8282827e] placeholder:text-sm"
                type="text"
                id="title"
                placeholder="Enter the name of your event"
                name="title"
                onChange={handleChange}
                value={data.title}
              />
            </div>
            <div className="flex justify-around my-3 gap-4">
              <label className="text-sm w-1/4 text-right" htmlFor="category">
                Event Category<span className="text-red-500">*</span>
              </label>
              <select
                className="p-2 bg-white border border-[#8282827e] rounded-md mb-5 w-full focus:outline-none focus:ring focus:border-[#2b293d] placeholder:text-[#8282827e] placeholder:text-sm"
                name="category"
                id="category"
                onChange={handleChange}
                defaultValue={data.category}
              >
                <option value="">Please select one</option>
                <option value="Category One">Category One</option>
                <option value="Category Two">Category Two</option>
              </select>
            </div>
          </div>
          <div className="my-5">
            <div className="flex gap-4">
              <div className="w-1/4"></div>
              <h3 className="text-xl font-thin w-full">Date & Time</h3>
            </div>
            <div className="flex justify-around my-5 gap-4">
              <div className="text-sm w-1/4 text-right">
                Event Type<span className="text-red-500">*</span>
              </div>
              <div className="w-full">
                <input
                  className="mr-3 text-[#2b293d] border-[#2b293d] focus:ring-[#2b293d]"
                  type="radio"
                  id="single"
                  value="single"
                  name="type"
                  checked={data.type === "single"}
                  onChange={handleChange}
                />
                <label className="text-sm font-bold mr-7" htmlFor="single">
                  Single Event
                </label>
                <input
                  className="mr-3 text-[#2b293d] border-[#2b293d] focus:ring-[#2b293d]"
                  type="radio"
                  id="recurring"
                  value="recurring"
                  name="type"
                  checked={data.type === "recurring"}
                  onChange={handleChange}
                />
                <label className="text-sm font-bold mr-7" htmlFor="recurring">
                  Recurring Event
                </label>
              </div>
            </div>
            {data.type === "recurring" && (
              <div className="flex justify-around my-3 gap-4">
                <label className="text-sm w-1/4 text-right" htmlFor="frequency">
                  Frequency<span className="text-red-500">*</span>
                </label>
                <select
                  className="p-2 bg-white border border-[#8282827e] rounded-md mb-5 w-full focus:outline-none focus:ring focus:border-[#2b293d] placeholder:text-[#8282827e] placeholder:text-sm"
                  name="frequency"
                  id="frequency"
                  onChange={handleChange}
                  defaultValue={data.frequency}
                >
                  <option value="">Please select one</option>
                  <option value="Daily">Daily</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Yearly">Yearly</option>
                </select>
              </div>
            )}
            <div className="flex justify-around my-5 gap-4">
              <label className="text-sm w-1/4 text-right" htmlFor="">
                Session(s)<span className="text-red-500">*</span>
              </label>
              <div className="flex flex-wrap w-full">
                <div
                  id="session-info"
                  className="w-full flex gap-5 text-xs font-bold mb-5"
                >
                  <div className="flex flex-col w-1/4">
                    <label
                      htmlFor="startDate"
                      class="block mb-2 text-sm font-medium text-gray-90"
                    >
                      Start Date<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="startDate"
                      id="startDate"
                      onChange={handleSessionChange}
                      value={sessionChildren.startDate}
                    />
                  </div>
                  {data.type === "recurring" && (
                    <div className="flex flex-col w-1/4">
                      <label
                        htmlFor="endDate"
                        class="block mb-2 text-sm font-medium text-gray-90"
                      >
                        End Date<span className="text-red-500">*</span>:
                      </label>
                      <input
                        type="date"
                        name="endDate"
                        id="endDate"
                        onChange={handleSessionChange}
                        value={sessionChildren.endDate}
                      />

                      {/* <div class="relative max-w-sm">
                        <input
                          type="text"
                          name="endDate"
                          id="endDate"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          placeholder="Select date"
                          min={new Date().toISOString().split("T")[0]}
                          onChange={handleSessionChange}
                          value={sessionChildren.endDate}
                        />
                      </div> */}
                    </div>
                  )}
                  <div className="flex flex-col w-1/4">
                    {/* <label htmlFor="startTime">
                      Start Time<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="time"
                      name="startTime"
                      id="startTime"
                      onChange={handleSessionChange}
                      value={sessionChildren.startTime}
                    /> */}
                    <label
                      for="startTime"
                      class="block mb-2 text-sm font-medium text-gray-90"
                    >
                      Start time<span className="text-red-500">*</span>:
                    </label>
                    <div class="flex">
                      <input
                        type="time"
                        name="startTime"
                        id="startTime"
                        onChange={handleSessionChange}
                        value={sessionChildren.startTime}
                        class="rounded-none rounded-s-lg bg-gray-50 border text-gray-900 leading-none focus:ring-blue-500 focus:border-blue-500 block flex-1 w-full text-sm border-gray-300 p-2.5"
                        required
                      />
                      <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-s-0 border-s-0 border-gray-300 rounded-e-md">
                        <svg
                          class="w-4 h-4 text-gray-500 "
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col w-1/4">
                    {/* <label htmlFor="endTime">
                      End Time<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="time"
                      name="endTime"
                      id="endTime"
                      onChange={handleSessionChange}
                      value={sessionChildren.endTime}
                    /> */}
                    <label
                      for="endTime"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      End time<span className="text-red-500">*</span>:
                    </label>
                    <div class="flex">
                      <input
                        type="time"
                        name="endTime"
                        id="endTime"
                        onChange={handleSessionChange}
                        value={sessionChildren.endTime}
                        class="rounded-none rounded-s-lg bg-gray-50 border text-gray-900 leading-none focus:ring-blue-500 focus:border-blue-500 block flex-1 w-full text-sm border-gray-300 p-2.5"
                        min="09:00"
                        max="18:00"
                        required
                      />
                      <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-s-0 border-s-0 border-gray-300 rounded-e-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        <svg
                          class="w-4 h-4 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="w-1/12">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                      onClick={addSession}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </div>
                </div>
                {data.session.map((session) => {
                  return (
                    <SessionComponent
                      key={session.id}
                      session={session}
                      removeSession={removeSession}
                      type={data.type}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className="my-5">
            <div className="flex gap-4">
              <div className="w-1/4"></div>
              <h3 className="text-xl font-thin w-full">Location</h3>
            </div>
            <div className="flex justify-around my-5 gap-4">
              <div className="text-sm w-1/4 text-right">
                Event Type<span className="text-red-500">*</span>
              </div>
              <div className="w-full">
                <input
                  className="mr-3 text-[#2b293d] border-[#2b293d] focus:ring-[#2b293d]"
                  type="radio"
                  id="physical"
                  value="physical"
                  name="location"
                  checked={data.location === "physical"}
                  onChange={handleChange}
                />
                <label className="text-sm font-bold mr-7" htmlFor="physical">
                  Physical Event
                </label>
                <input
                  className="mr-3 text-[#2b293d] border-[#2b293d] focus:ring-[#2b293d]"
                  type="radio"
                  id="online"
                  value="online"
                  name="location"
                  checked={data.location === "online"}
                  onChange={handleChange}
                />
                <label className="text-sm font-bold mr-7" htmlFor="online">
                  Online Event
                </label>
              </div>
            </div>
            {data.location && data.location === "physical" && (
              <div className="flex justify-around my-3 gap-4">
                <label className="text-sm w-1/4 text-right" htmlFor="address">
                  Where will your event take place?
                  <span className="text-red-500">*</span>
                </label>
                <input
                  className="p-2 border border-[#8282827e] rounded-md mb-5 w-full focus:outline-none focus:ring focus:border-[#2b293d] placeholder:text-[#8282827e] placeholder:text-sm"
                  type="text"
                  id="address"
                  placeholder="Enter an address..."
                  name="address"
                  onChange={handleChange}
                  value={data.address}
                />
              </div>
            )}
            {data.location && data.location === "online" && (
              <div className="flex justify-around my-3 gap-4">
                <label className="text-sm w-1/4 text-right" htmlFor="address">
                  Event Link
                  <span className="text-red-500">*</span>
                </label>
                <input
                  className="p-2 border border-[#8282827e] rounded-md mb-5 w-full focus:outline-none focus:ring focus:border-[#2b293d] placeholder:text-[#8282827e] placeholder:text-sm"
                  type="text"
                  id="address"
                  placeholder="Enter a meeting link..."
                  name="address"
                  onChange={handleChange}
                  value={data.address}
                />
              </div>
            )}
          </div>
          <div className="my-5">
            <div className="flex gap-4">
              <div className="w-1/4"></div>
              <h3 className="text-xl font-thin w-full">
                Additional Information
              </h3>
            </div>
            <div className="flex justify-around my-3 gap-4">
              <label className="text-sm w-1/4 text-right" htmlFor="description">
                Event Description<span className="text-red-500">*</span>
              </label>
              <textarea
                className="p-2 border border-[#8282827e] rounded-md mb-5 w-full focus:outline-none focus:ring focus:border-[#2b293d] placeholder:text-[#8282827e] placeholder:text-sm"
                type="textarea"
                id="description"
                placeholder="Describe what's special about your event & other important details."
                name="description"
                onChange={handleChange}
                value={data.description}
              />
            </div>
          </div>
          <div className="flex justify-end">
            <Link to="/create-event/banner">
              <button
                className="bg-[#2b293d] text-white rounded-md py-2 px-5 font-bold"
                type="button"
                onClick={validateForm}
              >
                Save & Continue
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CreateEvent;
