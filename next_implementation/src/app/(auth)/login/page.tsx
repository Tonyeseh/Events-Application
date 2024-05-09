import ThirdPartySignIn from "@/app/ui/auth/third-party";
import Button from "@/app/ui/button";
import Input from "@/app/ui/components/input";

export default async function Page() {
  return (
    <>
      <h1 className="mb-2 text-2xl font-bold leading-5 tracking-tight text-gray-900 dark:text-white">
        Welcome Back
      </h1>
      <p className="text-sm font-light text-gray-500 dark:text-gray-300">
        Don’t have an account?{" "}
        <a
          href="/register"
          className="font-normal text-yellow-600 hover:underline dark:text-yellow-500"
        >
          Sign up
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
        <div className="flex align-center justify-between">
          <div className="flex items-start">
            <div className="flex align-center h-5">
              <input
                id="remember"
                aria-describedby="remember"
                type="checkbox"
                className="w-4 h-4 rounded border-gray-300 border bg-gray-50 focus:ring-3 focus:ring-yellow-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-yellow-600 dark:ring-offset-gray-800"
                required
              />
            </div>
            <div className="ml-3 text-sm">
              <label
                htmlFor="remember"
                className="text-gray-500 dark:text-gray-300"
              >
                Remember me
              </label>
            </div>
          </div>
          <a
            href="#"
            className="text-sm font-medium text-yellow-600 hover:underline dark:text-yellow-500"
          >
            Forgot password?
          </a>
        </div>

        <Button
          type="submit"
          className="w-full text-white bg-yellow-600 hover:bg-yellow-700 _FONMPVaCsLFJJGDaaIL focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
        >
          Sign in to your account
        </Button>
      </form>
    </>
  );
}
