import Link from "next/link";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0";

export default function Navbar() {
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <section className="w-full antialiased bg-white select-none">
      <div className="mx-auto max-w-7xl">
        <nav>
          <div className="px-4 container flex flex-wrap items-center justify-between h-24 mx-auto font-medium border-b border-gray-200 sm:px-4 md:px-2">
            <Link href="/">
              <a href="#_" className="w-1/4 py-4 px-4 md:py-0">
                <span className="text-xl font-black leading-none text-gray-900 select-none logo">
                  Aww<span className="text-indigo-600">.</span>com
                </span>
              </a>
            </Link>
            {user ? (
              <a href="/api/auth/logout">
                <button className="px-3 py-2 flex justify-center items-center bg-gradient-to-tl from-pink-500 to-red-400 rounded text-white focus:outline-none font-semibold shadow hover:transition-colors hover:bg-gradient-to-tr transform transition hover:scale-110 ease-out duration-300 hover:shadow-md">
                  <Image
                    className="rounded-full px-5"
                    src={user.picture}
                    width={30}
                    height={30}
                  />
                  Logout 
                </button>
              </a>
            ) : (
              <a href="/api/auth/login">
                <button className="px-3 py-2 flex justify-center items-center bg-gradient-to-tl from-pink-500 to-red-400 rounded text-white focus:outline-none font-semibold shadow hover:transition-colors hover:bg-gradient-to-tr transform transition hover:scale-110 ease-out duration-300 hover:shadow-md">
                  Login
                </button>
              </a>
            )}
          </div>
        </nav>
      </div>
    </section>
  );
}
