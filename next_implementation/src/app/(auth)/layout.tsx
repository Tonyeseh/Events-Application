import Image from "next/image";
import Logo from "../ui/logo";
import Link from "next/link";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="grid max-w-7xl px-4 py-8 mx-auto md:gap-20 md:py-16 md:grid-cols-12">
        <div className="w-full p-6 md:p-8 mx-auto bg-white rounded-lg shadow dark:bg-gray-800 max-w-xl md:col-span-6">
          <Link
            href="/"
            className="inline-flex items-center mb-4 text-xl font-semibold text-gray-900 dark:text-white"
          >
            <Image
              className="w-8 h-8 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
              width={30}
              height={30}
            />
            Flowbite
          </Link>
          {children}
        </div>
        <div className="place-self-center md:col-span-6">
          <Image
            className="hidden mx-auto md:flex"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/authentication/illustration.svg"
            alt="illustration"
            width={640}
            height={400}
          />
        </div>
      </div>
    </section>
  );
}
