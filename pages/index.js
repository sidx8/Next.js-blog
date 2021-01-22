import utilStyles from '../styles/utils.module.css'
import { getPostData, getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import Navbar from '../components/navbar'
import Head from 'next/head'
export default function Home({ allPostsData }) {
  return (
    <div className="w-full">
      <Head>
        <title>Aww.com</title> 
      </Head>
      <Navbar />
        <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight text-left">Featured articles</h2>
          <p className="mt-2 text-lg text-left text-gray-600">Check out our list of awesome articles below.</p>
          <hr className="border-gray-300 mb-8 my-4" />
          <div className="grid grid-cols-4 gap-8 mt-0 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0">
          {allPostsData.map(({ id, date, title, tag, color }) => (
            <Link href={`/posts/${id}`}>
              <a key={id} className="relative flex flex-col col-span-4 px-0 py-10 space-y-2 overflow-hidden bg-white sm:rounded-xl">
              <div className={`py-1 px-2 w-min items-start text-sm font-medium text-${color}-700 bg-${color}-100 rounded-full`}>
              {tag}
              </div>
              <h4 className="m-0 text-xl font-bold text-gray-700">{title}</h4>
              <p className="text-base text-left text-gray-500 ">Each of our plan will provide you and your team with certifications.</p>
              <Date className="text-sm md:text-base font-normal text-gray-600" dateString={date} />
            </a>
            </Link>
          ))}
           </div>
        </div>
      </section>
      </div>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
