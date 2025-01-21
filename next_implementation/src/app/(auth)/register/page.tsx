import Form from "@/app/ui/auth/register-form";

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
      <Form />
    </>
  );
}
