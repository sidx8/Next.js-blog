import utilStyles from '../styles/utils.module.css'
import { getPostData, getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import Navbar from '../components/navbar'
export default function Home({ allPostsData }) {
  return (
    <div className="container ">
      <Navbar />
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        Blog
        <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight text-center">Our Features</h2>
          <p className="mt-2 text-lg text-center text-gray-600">Check out our list of awesome features below.</p>
          <div className="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0">
          {allPostsData.map(({ id, date, title, tag, color }) => (
            <Link href={`/posts/${id}`}>
            <div key={id} className="relative flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-white sm:rounded-xl">
              <div className="p-1  text-white bg-blue-500 rounded-full">
              {tag}
              </div>
              <Date dateString={date} />
              <h4 className="text-xl font-medium text-gray-700">{title}</h4>
              <p className="text-base text-center text-gray-500 ">Each of our plan will provide you and your team with certifications.</p>
            </div>
            </Link>
          ))}
           </div>
        </div>
      </section>
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
