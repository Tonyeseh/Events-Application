import ThirdPartySignIn from "@/app/ui/auth/third-party";
import Button from "@/app/ui/button";
import Input from "@/app/ui/components/input";

export default async function Page() {
  return (
    <>
      <h1 className="mb-2 text-2xl font-bold leading-5 tracking-tight text-gray-900 dark:text-white">
        Create your Account
      </h1>
      <p className="text-sm font-light text-gray-500 dark:text-gray-300">
        Already have an account?{" "}
        <a
          href="/login"
          className="font-normal text-yellow-600 _5zvlMLkN1qETxEl3IhT dark:text-yellow-500"
        >
          Login here
        </a>
        .
      </p>
      <form className="mt-4 space-y-5 md:mt-6" action="#">
        <div className="grid gap-6 md:grid-cols-2">
          <Input
            id="firstName"
            type="text"
            label="First Name"
            placeholder="Enter first name"
          />
          <Input
            id="lastName"
            type="text"
            label="Last Name"
            placeholder="Enter last name"
          />
          <Input
            id="email"
            type="email"
            label="Your email"
            placeholder="email@email-provider.com"
          />
          <Input
            id="password"
            type="password"
            label="Password"
            placeholder="••••••••"
          />
        </div>
        <div className="flex items-center">
          <div className="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
          <div className="px-5 text-center text-gray-500 dark:text-gray-400">
            or
          </div>
          <div className="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
        </div>
        <ThirdPartySignIn />
        <div className="space-y-5">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="terms"
                aria-describedby="terms"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-yellow-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-yellow-600 apRlbPZRJ4JWA5RVdURT"
                required
              />
            </div>
            <div className="ml-3.5 text-sm">
              <label
                htmlFor="terms"
                className="font-light text-gray-500 dark:text-gray-300"
              >
                By signing up, you are creating a Flowbite account, and you
                agree to Flowbite’s{" "}
                <a
                  className="font-normal text-yellow-600 dark:text-yellow-500 _5zvlMLkN1qETxEl3IhT"
                  href="#"
                >
                  Terms of Use
                </a>{" "}
                and{" "}
                <a
                  className="font-normal text-yellow-600 dark:text-yellow-500 _5zvlMLkN1qETxEl3IhT"
                  href="#"
                >
                  Privacy Policy
                </a>
                .
              </label>
            </div>
          </div>
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="newsletter"
                aria-describedby="newsletter"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-yellow-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-yellow-600 apRlbPZRJ4JWA5RVdURT"
                required
              />
            </div>
            <div className="ml-3.5 text-sm">
              <label
                htmlFor="newsletter"
                className="font-light text-gray-500 dark:text-gray-300"
              >
                Email me about product updates and resources.
              </label>
            </div>
          </div>
        </div>
        <Button
          type="submit"
          className="w-full text-white bg-yellow-600 hover:bg-yellow-700 _FONMPVaCsLFJJGDaaIL focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
        >
          Create an account
        </Button>
        <button></button>
      </form>
    </>
  );
}
