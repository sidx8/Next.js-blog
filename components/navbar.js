import Link from 'next/link'
export default function Navbar() {
    return (
      <section class="w-full antialiased bg-white select-none">
      <div className="mx-auto max-w-7xl">
      <nav>
        <div className="px-4 container relative flex flex-wrap items-center justify-between h-24 mx-auto font-medium border-b border-gray-200 sm:px-4 md:px-2">
          <Link href="/">
          <a href="#_" className="w-1/4 py-4 px-4 md:py-0">
            <span className="text-xl font-black leading-none text-gray-900 select-none logo">Aww<span className="text-indigo-600">.</span>com</span>
          </a>
          </Link>
          <svg className="inline w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor">
                   <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
      </div>
      </nav>
      </div>
      </section>

    
    //  <nav id="header" className="bg-white shadow fixed w-full z-10 top-0">
    //     <div id="progress" className="h-1 z-20 top-0" style={{background: 'linear-gradient(to right, #4dc0b5 var(--scroll), transparent 0)'}} />
    //     <div className="w-full md:max-w-4xl mx-auto flex flex-wrap items-center justify-between mt-0 py-3">
    //       <div className="pl-4">
    //       <Link href="/">
    //         <a className="text-gray-900 text-base no-underline hover:no-underline font-extrabold text-xl">Aww.com</a>
    //         </Link>
    //       </div>
    //       <div className="block lg:hidden pr-4">
    //         <button id="nav-toggle" className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-900 hover:border-green-500 appearance-none focus:outline-none">
    //           <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    //             <title>Menu</title>
    //             <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    //           </svg>
    //         </button>
    //       </div>
    //       <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-gray-100 md:bg-transparent z-20" id="nav-content">
    //         <ul className="list-reset lg:flex justify-end flex-1 items-center">
    //           <li className="mr-3">
    //             <a className="inline-block py-2 px-4 text-gray-900 font-bold no-underline" href="#">Create</a>
    //           </li>
    //           <li className="mr-3">
    //             <a className="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4" href="#">link</a>
    //           </li>
    //           <li className="mr-3">
    //             <a className="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4" href="#">link</a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav> 

    )}
