import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import useAuth from "../hooks/useAuth";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
// import Toast from "../components/Toast";

const EditProfile = () => {
  const { auth } = useAuth();
  const [userData, setUserData] = useState({});
  const [userPersonalData, setUserPersonalData] = useState({});
  const [userContactData, setUserContactData] = useState({});
  const [userSocialHandles, setUserSocialHandles] = useState({});
  const [userPreferences, setUserPreferences] = useState({});
  const [updatePwd, setUpdatePwd] = useState({
    currentPwd: "",
    newPwd: "",
    confirmPwd: "",
  });
  const axiosPrivate = useAxiosPrivate();

  const handleChange = (e, state = "") => {
    const type = e.target.type;

    const name = e.target.name;

    const value = type === "file" ? e.target.files[0] : e.target.value;

    console.log(state);

    if (state === "updatePwd")
      setUpdatePwd((prevData) => ({ ...prevData, [name]: value }));

    if (state === "personal")
      setUserPersonalData((prevData) => ({ ...prevData, [name]: value }));
    if (state === "contact")
      setUserContactData((prevData) => ({ ...prevData, [name]: value }));
    if (state === "socailMedia")
      setUserSocialHandles((prevData) => ({ ...prevData, [name]: value }));

    console.log(updatePwd);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userData);
    try {
      const response = await axiosPrivate.post("user/profile", userData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdatePwd = async (e) => {
    e.preventDefault();
    console.log(updatePwd);

    try {
      if (updatePwd.currentPwd && updatePwd.newPwd === updatePwd.confirmPwd) {
        const result = await axiosPrivate.put(
          "/auth/update-password",
          updatePwd
        );

        console.log(result);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axiosPrivate.get("/user/profile", {
          headers: { Authorization: `Bearer ${auth.accessToken}` },
        });
        console.log(response);

        setUserData(response.data);
        setUserPersonalData(response.data.personalInfo);
        setUserContactData(response.data.contactInfo);
        setUserSocialHandles(response.data.socialMedia);
        setUserPreferences(response.data.preferences);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, []);

  return (
    <>
      <Header />
      <section className="my-auto dark:bg-gray-900">
        <div className="my-10 mx-10 md:mx-24 text-[#2b293d]">
          <h1 className="my-7 text-2xl font-extrabold">Account Settings</h1>
          <form onSubmit={handleSubmit}>
            <div className="w-full rounded-sm bg-[url('https://images.unsplash.com/photo-1449844908441-8829872d2607?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxob21lfGVufDB8MHx8fDE3MTA0MDE1NDZ8MA&ixlib=rb-4.0.3&q=80&w=1080')] bg-cover bg-center bg-no-repeat items-center">
              <div className="mx-auto flex justify-center w-[141px] h-[141px] bg-blue-300/20 rounded-full bg-[url('https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxwcm9maWxlfGVufDB8MHx8fDE3MTEwMDM0MjN8MA&ixlib=rb-4.0.3&q=80&w=1080')] bg-cover bg-center bg-no-repeat">
                <div className="bg-white/90 rounded-full w-6 h-6 text-center ml-28 mt-4">
                  <input
                    type="file"
                    name="profilePics"
                    id="profilePics"
                    accept="image/*"
                    onChange={handleChange}
                    hidden
                    // required
                  />

                  <label htmlFor="profilePics">
                    <svg
                      data-slot="icon"
                      className="w-6 h-5 text-blue-700 cursor-pointer"
                      fill="none"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                      ></path>
                    </svg>
                  </label>
                </div>
              </div>
              <div className="flex justify-end">
                <input
                  type="file"
                  name="profileCover"
                  id="profileCover"
                  accept="image/*"
                  onChange={handleChange}
                  hidden
                  // required
                />

                <div className="bg-white flex items-center gap-1 rounded-tl-md px-2 text-center font-semibold cursor-pointer">
                  <label
                    htmlFor="profileCover"
                    className="inline-flex items-center gap-1 cursor-pointer"
                  >
                    Cover
                    <svg
                      data-slot="icon"
                      className="w-6 h-5 text-blue-700"
                      fill="none"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                      ></path>
                    </svg>
                  </label>
                </div>
              </div>
            </div>
            <h2 className="text-center mt-1 font-semibold dark:text-gray-300">
              <div className="flex justify-end">
                <button
                  className="bg-[#2b293d] text-white rounded-md py-2 px-7 font-bold"
                  type="submit"
                >
                  Upload Profile and Cover Image
                </button>
              </div>
            </h2>

            <div className="my-12 border py-7 pr-5 rounded-lg border-200">
              <div className="flex gap-4">
                <div className="w-1/4"></div>
                <h3 className="text-xl font-bold w-full">
                  Personal Information
                </h3>
              </div>
              <div className="flex justify-around my-3 gap-4">
                <label
                  className="font-bold w-1/4 text-right"
                  htmlFor="firstName"
                >
                  First Name:
                </label>
                <input
                  className="p-2 border border-[#8282827e] rounded-md mb-5 w-full focus:outline-none focus:ring focus:border-[#2b293d] placeholder:text-[#8282827e] placeholder:text-sm"
                  type="text"
                  id="firstName"
                  placeholder="Enter first name"
                  name="firstName"
                  value={userPersonalData.firstName}
                  onChange={(e) => handleChange(e, "personal")}
                />
              </div>
              <div className="flex justify-around my-3 gap-4">
                <label
                  className="font-bold w-1/4 text-right"
                  htmlFor="lastName"
                >
                  Last Name:
                </label>
                <input
                  className="p-2 border border-[#8282827e] rounded-md mb-5 w-full focus:outline-none focus:ring focus:border-[#2b293d] placeholder:text-[#8282827e] placeholder:text-sm"
                  type="text"
                  id="lastName"
                  placeholder="Enter last name"
                  name="lastName"
                  value={userPersonalData.lastName}
                  onChange={(e) => handleChange(e, "personal")}
                />
              </div>
              <div className="flex justify-around my-3 gap-4">
                <label
                  className="font-bold w-1/4 text-right"
                  htmlFor="website"
                >
                  Website:
                </label>
                <input
                  className="p-2 border border-[#8282827e] rounded-md mb-5 w-full focus:outline-none focus:ring focus:border-[#2b293d] placeholder:text-[#8282827e] placeholder:text-sm"
                  type="text"
                  id="website"
                  placeholder="Enter website address"
                  name="website"
                  value={userPersonalData.website}
                  onChange={(e) => handleChange(e, "personal")}
                />
              </div>
              <div className="flex justify-around my-3 gap-4">
                <label
                  className="font-bold w-1/4 text-right"
                  htmlFor="company"
                >
                  Company:
                </label>
                <input
                  className="p-2 border border-[#8282827e] rounded-md mb-5 w-full focus:outline-none focus:ring focus:border-[#2b293d] placeholder:text-[#8282827e] placeholder:text-sm"
                  type="text"
                  id="company"
                  placeholder="Enter company name"
                  name="company"
                  value={userPersonalData.company}
                  onChange={(e) => handleChange(e, "personal")}
                />
              </div>
              <div className="flex justify-around my-3 gap-4">
                <label
                  className="font-bold w-1/4 text-right"
                  htmlFor="aboutMe"
                >
                  About Me:
                </label>
                <textarea
                  className="p-2 border border-[#8282827e] rounded-md mb-5 w-full focus:outline-none focus:ring focus:border-[#2b293d] placeholder:text-[#8282827e] placeholder:text-sm"
                  rows="5"
                  id="aboutMe"
                  placeholder="Write a short description about yourself"
                  name="aboutMe"
                  value={userPersonalData.aboutMe}
                  onChange={(e) => handleChange(e, "personal")}
                />
              </div>
              <div className="flex justify-end">
                <button
                  className="bg-[#2b293d] text-white rounded-md py-2 px-7 font-bold"
                  type="submit"
                >
                  Save
                </button>
              </div>
            </div>
            <div className="my-12 border py-7 pr-5 rounded-lg border-200">
              <div className="flex gap-4">
                <div className="w-1/4"></div>
                <h3 className="text-xl font-bold w-full">Contact Details</h3>
              </div>
              <div className="flex gap-4">
                <div className="w-1/4"></div>
                <h3 className="font-thin w-full">
                  These details are private and only used to contact you for
                  ticketing or prizes.
                </h3>
              </div>
              <div className="flex justify-around my-3 gap-4">
                <label
                  className="font-bold w-1/4 text-right"
                  htmlFor="phoneNumber"
                >
                  Phone Number:
                </label>
                <input
                  className="p-2 border border-[#8282827e] rounded-md mb-5 w-full focus:outline-none focus:ring focus:border-[#2b293d] placeholder:text-[#8282827e] placeholder:text-sm"
                  type="tel"
                  id="phoneNumber"
                  placeholder="Enter phone number"
                  name="phoneNumber"
                  value={userData.phoneNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="flex justify-around my-3 gap-4">
                <label
                  className="font-bold w-1/4 text-right"
                  htmlFor="address"
                >
                  Address:
                </label>
                <textarea
                  className="p-2 border border-[#8282827e] rounded-md mb-5 w-full focus:outline-none focus:ring focus:border-[#2b293d] placeholder:text-[#8282827e] placeholder:text-sm"
                  rows="3"
                  id="address"
                  placeholder="Enter address"
                  name="address"
                  value={userContactData.address}
                  onChange={(e) => handleChange(e, "contact")}
                />
              </div>
              <div className="flex justify-around my-3 gap-4">
                <label
                  className="font-bold w-1/4 text-right"
                  htmlFor="city"
                >
                  City/Town:
                </label>
                <input
                  className="p-2 border border-[#8282827e] rounded-md mb-5 w-full focus:outline-none focus:ring focus:border-[#2b293d] placeholder:text-[#8282827e] placeholder:text-sm"
                  type="text"
                  id="city"
                  placeholder="Enter city"
                  name="city"
                  value={userContactData.city}
                  onChange={(e) => handleChange(e, "contact")}
                />
              </div>
              <div className="flex justify-around my-3 gap-4">
                <label
                  className="font-bold w-1/4 text-right"
                  htmlFor="country"
                >
                  Country:
                </label>
                <input
                  className="p-2 border border-[#8282827e] rounded-md mb-5 w-full focus:outline-none focus:ring focus:border-[#2b293d] placeholder:text-[#8282827e] placeholder:text-sm"
                  type="text"
                  id="country"
                  placeholder="Enter country"
                  name="country"
                  value={userContactData.country}
                  onChange={(e) => handleChange(e, "contact")}
                />
              </div>
              <div className="flex justify-end">
                <button
                  className="bg-[#2b293d] text-white rounded-md py-2 px-7 font-bold"
                  type="submit"
                >
                  Save
                </button>
              </div>
            </div>
            <div className="my-12 border py-7 pr-5 rounded-lg border-200">
              <div className="flex gap-4">
                <div className="w-1/4"></div>
                <h3 className="text-xl font-bold w-full">
                  Social Media Handles
                </h3>
              </div>
              <div className="flex justify-around my-3 gap-4">
                <label
                  className="font-bold w-1/4 text-right"
                  htmlFor="twitter"
                >
                  Twitter handle:
                </label>
                <input
                  className="p-2 border border-[#8282827e] rounded-md mb-5 w-full focus:outline-none focus:ring focus:border-[#2b293d] placeholder:text-[#8282827e] placeholder:text-sm"
                  type="text"
                  id="twitter"
                  placeholder="Enter Twitter handle"
                  name="twitter"
                  value={userSocialHandles.twitter}
                  onChange={(e) => handleChange(e, "socialMedia")}
                />
              </div>
              <div className="flex justify-around my-3 gap-4">
                <label
                  className="font-bold w-1/4 text-right"
                  htmlFor="facebook"
                >
                  Facebook handle:
                </label>
                <input
                  className="p-2 border border-[#8282827e] rounded-md mb-5 w-full focus:outline-none focus:ring focus:border-[#2b293d] placeholder:text-[#8282827e] placeholder:text-sm"
                  id="facebook"
                  type="text"
                  placeholder="Enter Facebook handle"
                  name="facebook"
                  value={userSocialHandles.facebook}
                  onChange={(e) => handleChange(e, "socialMedia")}
                />
              </div>
              <div className="flex justify-around my-3 gap-4">
                <label
                  className="font-bold w-1/4 text-right"
                  htmlFor="instagram"
                >
                  Instagram handle:
                </label>
                <input
                  className="p-2 border border-[#8282827e] rounded-md mb-5 w-full focus:outline-none focus:ring focus:border-[#2b293d] placeholder:text-[#8282827e] placeholder:text-sm"
                  type="text"
                  id="instagram"
                  placeholder="Enter Instagram handle"
                  name="instagram"
                  value={userSocialHandles.instagram}
                  onChange={(e) => handleChange(e, "socialMedia")}
                />
              </div>
              <div className="flex justify-end">
                <button
                  className="bg-[#2b293d] text-white rounded-md py-2 px-7 font-bold"
                  type="submit"
                >
                  Save
                </button>
              </div>
            </div>
            <div className="my-12 border py-7 pr-5 rounded-lg border-200">
              <div className="flex gap-4">
                <div className="w-1/4"></div>
                <h3 className="text-xl font-bold w-full">Notifications</h3>
              </div>
              <div className="flex gap-4">
                <div className="w-1/4"></div>
                <h3 className="font-thin w-full">
                  We'll always let you know about important changes, but you
                  pick what else you want to hear about.
                </h3>
              </div>
              <div className="flex justify-around my-3 gap-4">
                <label
                  className="font-bold w-1/4 text-right"
                  htmlFor="twitter"
                >
                  By Email:
                </label>
                <div className="space-y-6 w-full">
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id="comments"
                        name="comments"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label
                        htmlFor="comments"
                        className="font-medium text-gray-900"
                      >
                        Comments
                      </label>
                      <p className="text-gray-500">
                        Get notified when someones posts a comment on a posting.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id="candidates"
                        name="candidates"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label
                        htmlFor="candidates"
                        className="font-medium text-gray-900"
                      >
                        Candidates
                      </label>
                      <p className="text-gray-500">
                        Get notified when a candidate applies for a job.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id="offers"
                        name="offers"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label
                        htmlFor="offers"
                        className="font-medium text-gray-900"
                      >
                        Offers
                      </label>
                      <p className="text-gray-500">
                        Get notified when a candidate accepts or rejects an
                        offer.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  className="bg-[#2b293d] text-white rounded-md py-2 px-7 font-bold"
                  type="submit"
                >
                  Save Preferences
                </button>
              </div>
            </div>
            <div className="my-12 border py-7 pr-5 rounded-lg border-200">
              <div className="flex gap-4">
                <div className="w-1/4"></div>
                <h3 className="text-xl font-bold w-full">Change Password</h3>
              </div>
              <div className="flex gap-4">
                <div className="w-1/4"></div>
                <h3 className="font-thin w-full">
                  Update your password associated with your account.
                </h3>
              </div>
              <div className="flex justify-around my-3 gap-4">
                <label
                  className="font-bold w-1/4 text-right"
                  htmlFor="currentPwd"
                >
                  Current Password:
                </label>
                <input
                  className="p-2 border border-[#8282827e] rounded-md mb-5 w-full focus:outline-none focus:ring focus:border-[#2b293d] placeholder:text-[#8282827e] placeholder:text-sm"
                  type="password"
                  id="currentPwd"
                  name="currentPwd"
                  value={updatePwd.currentPwd}
                  onChange={(e) => {
                    handleChange(e, "updatePwd");
                  }}
                />
              </div>
              <div className="flex justify-around my-3 gap-4">
                <label
                  className="font-bold w-1/4 text-right"
                  htmlFor="newPwd"
                >
                  New Password:
                </label>
                <input
                  className="p-2 border border-[#8282827e] rounded-md mb-5 w-full focus:outline-none focus:ring focus:border-[#2b293d] placeholder:text-[#8282827e] placeholder:text-sm"
                  id="newPwd"
                  type="password"
                  name="newPwd"
                  value={updatePwd.newPwd}
                  onChange={(e) => {
                    handleChange(e, "updatePwd");
                  }}
                />
              </div>
              <div className="flex justify-around my-3 gap-4">
                <label
                  className="font-bold w-1/4 text-right"
                  htmlFor="confirmPwd"
                >
                  Confirm Password:
                </label>
                <input
                  className="p-2 border border-[#8282827e] rounded-md mb-5 w-full focus:outline-none focus:ring focus:border-[#2b293d] placeholder:text-[#8282827e] placeholder:text-sm"
                  type="password"
                  id="confirmPwd"
                  name="confirmPwd"
                  value={updatePwd.confirmPwd}
                  onChange={(e) => {
                    handleChange(e, "updatePwd");
                  }}
                />
              </div>
              <div className="flex justify-end">
                <button
                  className="bg-[#2b293d] text-white rounded-md py-2 px-7 font-bold"
                  type="submit"
                  onClick={handleUpdatePwd}
                >
                  Update Password
                </button>
              </div>
            </div>
          </form>
        </div>
        {/* <Toast message={"Password Updated"}>
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
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <span className="sr-only">Check icon</span>
        </Toast> */}
      </section>
      <Footer />
    </>
  );
};

export default EditProfile;
