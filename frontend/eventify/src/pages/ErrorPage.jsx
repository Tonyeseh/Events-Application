import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

import errorImage from "../img/404-computer.svg";

const ErrorPage = () => {
  return (
    <div>
      <Header />
      <section class="bg-white max-h-screen">
        <div class=" px-4 mx-auto my-auto max-w-7xl py-16">
          <div class="mx-auto max-w-screen-sm text-center">
            <img
              class="mx-auto mb-1"
              src={errorImage}
              alt="404 Not Found"
            />
            <h1 class="mb-1 text-2xl font-extrabold text-primary-600 dark:text-primary-500">
              404 Not Found
            </h1>
            <p class="mb-2.5 text-3xl font-bold tracking-tight text-gray-900">
              Whoops! That page doesn’t exist.
            </p>
            <p class="mb-1 text-gray-500 ">
              Here are some helpful links instead:
            </p>
            <ul class="flex justify-center items-center text-gray-500">
              <li>
                <Link
                  to="/"
                  class="underline mx-2"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  class="underline mx-2"
                >
                  Search
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  class="underline mx-2"
                >
                  Help
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  class="underline mx-2"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ErrorPage;
