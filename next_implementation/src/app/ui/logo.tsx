import Image from "next/image";

export default function Logo() {
  return (
    <a
      href="#"
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
    </a>
  );
}
