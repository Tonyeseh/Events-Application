import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <section className="h-full bg-white dark:bg-slate-700">
      <div className=" px-4 mx-auto my-auto max-w-7xl py-16">
        <div className="mx-auto max-w-screen-sm text-center">
          <Image
            className="mx-auto mb-1"
            src="/404-computer.svg"
            alt="404 Not Found"
            width={640}
            height={360}
          />
          <h1 className="mb-1 text-2xl font-extrabold text-primary-800 dark:text-primary-500">
            404 Not Found
          </h1>
          <p className="mb-2.5 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-300">
            Whoops! That page doesn’t exist.
          </p>
          <p className="mb-1 text-gray-500 dark:text-gray-100">
            Here are some helpful links instead:
          </p>
          <ul className="flex justify-center items-center text-gray-500 dark:text-gray-50">
            <li>
              <Link href="/" className="underline mx-2">
                Home
              </Link>
            </li>
            <li>
              <Link href="/events" className="underline mx-2">
                Search
              </Link>
            </li>
            <li>
              <Link href="/about" className="underline mx-2">
                Help
              </Link>
            </li>
            <li>
              <Link href="/contact" className="underline mx-2">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
