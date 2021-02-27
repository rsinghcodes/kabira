import Link from "next/link";

const handleNavbar = () => {
  console.log("Hello");
};

export default function header() {
  return (
    <header className="flex justify-between items-center w-screen h-16 px-6 md:px-12 md:py-10 shadow-xl">
      <div className="flex items-center">
        <img src="/logo.png" alt="Kabira's Logo" className="w-7 md:w-8" />
        <span className="hidden md:inline-block md:ml-2 text-lg md:text-3xl">
          |
        </span>
        <h1 className="hidden md:inline-block md:text-3xl font-semibold md:ml-2">
          Kabira
        </h1>
      </div>
      <img
        src="/menu.svg"
        alt="menu navbar"
        className="md:hidden inline-block cursor-pointer w-9"
        onClick={handleNavbar}
      />
      <ul className="hidden md:flex">
        <li className="mr-7">
          <Link href="/">
            <a className="font-semibold">Home</a>
          </Link>
        </li>
        <li className="mr-7">
          <Link href="/">
            <a className="font-semibold">Our Services</a>
          </Link>
        </li>
        <li className="mr-7">
          <Link href="/">
            <a className="font-semibold">Jobs</a>
          </Link>
        </li>
        <li className="mr-7">
          <Link href="/">
            <a className="font-semibold">About</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className="font-semibold">Contact</a>
          </Link>
        </li>
      </ul>
    </header>
  );
}
