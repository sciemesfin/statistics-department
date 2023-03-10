import Link from "next/link";

export default function FourOhFour() {
  return (
    <div>
     <div className="">
    <div className="w-9/12 m-auto py-16 flex items-center justify-center">
      <div className="bg-white overflow-hidden sm:rounded-lg pb-8">
        <div className=" text-center pt-8">
          <h1 className="text-9xl font-extrabold text-blue-400">404</h1>
          <h1 className="text-6xl font-medium py-8">oops! Page not found</h1>
          <p className="text-2xl pb-8 px-12 font-medium">
            Oops! The page you are looking for does not exist. It might have
            been moved or deleted.
          </p>
          <Link href="/" className="bg-gradient-to-r from-blue-400 to-blue-500 hover:from-pink-500 hover:to-blue-500 text-white font-semibold px-6 py-3 rounded-md mr-6">
            HOME
          </Link>
          <Link href="/contact" className="bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-500 text-white font-semibold px-6 py-3 rounded-md">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  </div>
    </div>
  );
}
