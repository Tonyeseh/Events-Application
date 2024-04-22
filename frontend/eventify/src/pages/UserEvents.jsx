import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { axiosPrivate } from "../api/axios";
import useAuth from "../hooks/useAuth";
import UserEventTableRow from "../components/table/UserEventTableRow";

const UserEventPage = () => {
  const { auth } = useAuth();
  const [events, setEvents] = useState([]);

  const handleDelete = async (e, eventId) => {
    e.preventDefault();
    console.log(eventId);

    try {
      const response = await axiosPrivate.delete(`/events/${eventId}`, {
        headers: {
          Authorization: `Bearer ${auth.accessToken}`,
        },
      });
      if (response.status === 200) {
        setEvents((events) => events.filter((e) => e._id !== eventId));
      }
      console.log(events);
    } catch (error) {
      console.log(error);
    }
  };

  // const handleEdit = (e, eventId) => {
  //   e.preventDefault();
  //   console.log(eventId);
  // };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosPrivate("/user/myevents", {
          headers: {
            Authorization: `Bearer ${auth.accessToken}`,
          },
        });
        console.log(response.data.events);
        setEvents(response.data.events);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
    return (() => console.log("interested Page effect"))();
  }, [auth]);
  return (
    <>
      <Header />
      <div className="my-10">
        <div className="mx-5 md:mx-10 text-[#2B293D]">
          <h1 className="text-2xl font-extrabold mb-7">My Events</h1>
          <section className="">
            <div className="px-4 mx-auto max-w-screen-2xl lg:px-12">
              <div className="relative overflow-hidden bg-white shadow-md sm:rounded-lg">
                <div className="flex flex-col px-4 py-5 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4 border-b border-gray-200">
                  <div className="flex items-center flex-1 space-x-4 text-xl">
                    <h5>
                      <span className="text-gray-900">All Events </span>
                      <span className="text-gray-400">123456 results</span>
                    </h5>
                  </div>
                  <div className="flex flex-col flex-shrink-0 space-y-3 md:flex-row md:items-center lg:justify-end md:space-y-0 md:space-x-3">
                    <Link to="/create-event">
                      <button
                        type="button"
                        className="flex items-center justify-center px-4 py-2.5 text-sm font-medium text-white rounded-lg bg-[#2b293de0] hover:bg-[#2b293d] focus:ring-4 focus:ring-primary-300"
                      >
                        <svg
                          className="h-3.5 w-3.5 mr-2"
                          fill="currentColor"
                          viewbox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            clip-rule="evenodd"
                            fill-rule="evenodd"
                            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                          />
                        </svg>
                        Create event
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col px-4 py-5 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
                  <div className="flex items-center flex-1 space-x-4">
                    <form className="w-full">
                      <label
                        htmlFor="default-search"
                        className="mb-2 text-sm font-medium text-gray-900 sr-only"
                      >
                        Search
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                          <svg
                            className="w-4 h-4 text-gray-5000"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                          </svg>
                        </div>
                        <input
                          type="search"
                          id="default-search"
                          className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Search events by their title..."
                          required
                        />
                        <button
                          type="submit"
                          className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          <span className="text-base">Search</span>
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="flex flex-col flex-shrink-0 space-y-3 md:flex-row md:items-center lg:justify-end md:space-y-0 md:space-x-3 w-2/3">
                    <div className="w-1/4">
                      <label htmlFor="underline_select" className="sr-only">
                        Event Category
                      </label>
                      <select
                        id="underline_select"
                        className="block py-2.5 px-0 w-full text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                      >
                        <option selected>Category</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                      </select>
                    </div>
                    <form className="w-1/4">
                      <label htmlFor="underline_select" className="sr-only">
                        Price
                      </label>
                      <select
                        id="underline_select"
                        className="block py-2.5 px-0 w-full text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                      >
                        <option selected>Price</option>
                        <option value="Free">Free</option>
                        <option value="Paid">Paid</option>
                      </select>
                    </form>
                    <form className="w-1/4">
                      <label htmlFor="underline_select" className="sr-only">
                        Underline select
                      </label>
                      <select
                        id="underline_select"
                        className="block py-2.5 px-0 w-full text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                      >
                        <option selected>Choose a country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                      </select>
                    </form>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                      <tr>
                        <th scope="col" className="p-4">
                          <div className="flex items-center">
                            <input
                              id="checkbox-all"
                              type="checkbox"
                              className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500"
                            />
                            <label htmlFor="checkbox-all" className="sr-only">
                              checkbox
                            </label>
                          </div>
                        </th>
                        <th scope="col" className="px-4 py-3">
                          Title
                        </th>
                        <th scope="col" className="px-4 py-3">
                          <div class="flex items-center">
                            Category
                            <button>
                              <svg
                                class="w-3 h-3 ms-1.5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                              </svg>
                            </button>
                          </div>
                        </th>
                        <th scope="col" className="px-4 py-3">
                          Status
                        </th>
                        <th scope="col" className="px-4 py-3">
                          <div class="flex items-center">
                            Interested
                            <button>
                              <svg
                                class="w-3 h-3 ms-1.5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                              </svg>
                            </button>
                          </div>
                        </th>
                        <th scope="col" className="px-4 py-3">
                          <div class="flex items-center">
                            Date
                            <button>
                              <svg
                                class="w-3 h-3 ms-1.5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                              </svg>
                            </button>
                          </div>
                        </th>
                        <th scope="col" className="px-4 py-3">
                          <div class="flex items-center">
                            Price Range
                            <button>
                              <svg
                                class="w-3 h-3 ms-1.5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                              </svg>
                            </button>
                          </div>
                        </th>
                        <th scope="col" className="px-4 py-3">
                          Last Update
                        </th>
                        <th scope="col" className="px-4 py-3">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {events && events.length > 0
                        ? events.map((event) => (
                            <UserEventTableRow
                              key={event._id}
                              event={event}
                              handleDelete={handleDelete}
                            />
                          ))
                        : null}
                    </tbody>
                  </table>
                </div>
                <nav
                  className="flex flex-col items-start justify-between p-4 space-y-3 md:flex-row md:items-center md:space-y-0"
                  aria-label="Table navigation"
                >
                  <span className="text-sm font-normal text-gray-500">
                    Showing
                    <span className="font-semibold text-gray-900">1-10</span>
                    of
                    <span className="font-semibold text-gray-900">1000</span>
                  </span>
                  <ul className="inline-flex items-stretch -space-x-px">
                    <li>
                      <a
                        href="/"
                        className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                      >
                        <span className="sr-only">Previous</span>
                        <svg
                          className="w-5 h-5"
                          aria-hidden="true"
                          fill="currentColor"
                          viewbox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                      >
                        1
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                      >
                        2
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        aria-current="page"
                        className="z-10 flex items-center justify-center px-3 py-2 text-sm leading-tight border text-primary-600 bg-primary-50 border-primary-300 hover:bg-primary-100 hover:text-primary-700"
                      >
                        3
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                      >
                        ...
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                      >
                        100
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                      >
                        <span className="sr-only">Next</span>
                        <svg
                          className="w-5 h-5"
                          aria-hidden="true"
                          fill="currentColor"
                          viewbox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserEventPage;
