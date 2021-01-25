import utilStyles from '../styles/utils.module.css'
import { getPostData, getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import Navbar from '../components/navbar'
import Head from 'next/head'
export default function Home({ allPostsData, articles }) {
  return (
    <div className="w-full bg-gray-50">
      <Head>
        <title>Aww.com</title> 
      </Head>
      <Navbar />
        <section className="py-20 antialiased">
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-row flex-wrap">
          <h1 className="mb-20 mt-10 text-7xl font-bold tracking-tight text-left"><span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 "> Welcome to the </span><br /><span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-pink-700 
"> Article Wali Website .</span></h1>
          <img className="pl-10 object-scale-down h-48 max-w-6xl" src="/article1.svg"/>
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-left">Featured articles : -</h2>
          <p className="mt-2 text-lg text-left text-gray-600">Check out our list of awesome articles below.</p>
          <hr className="border-gray-300 mb-8 my-4" />
          <div className="grid grid-cols-4 gap-8 mt-0 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0">
          {allPostsData.map(({ id, date, title, tag, color }) => (
            <Link href={`/posts/${id}`}>
              <a key={id} className="relative flex flex-col col-span-4 px-0 py-0 space-y-2 overflow-hidden sm:rounded-xl">
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
           <hr className="my-4" />
        {articles.map((article, index) => (
            // <div key={index} className={styles.post}>
            //   <h1 onClick={() => (window.location.href = article.url)}>{article.title}</h1>
            //   <p>{article.description}</p>
            //   {!!article.urlToImage && <img src={article.urlToImage} />}
            // </div>
            <div key={index} class="max-w-xl mt-4 bg-white rounded-xl shadow-md overflow-hidden md:max-w-3xl">
            <div class="md:flex">
              <div class="md:flex-shrink-0">
                <img class="h-full w-full object-cover md:w-48" src={article.urlToImage} alt="Man looking at item at a store" />
              </div>
              <div class="p-8">
              <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Article</div>
              <a href={article.url} target="_blank" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{article.title}</a>
              <p class="mt-2 text-gray-500">{article.description}Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      </div>
  )
}

export async function getStaticProps() {
  

  const allPostsData = getSortedPostsData()
  const apiResponse = await fetch(
    // `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=1`
    `https://newsapi.org/v2/top-headlines?sources=techcrunch&pageSize=70`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
      },
    },
  ).then(res => res.json());
  console.log(process.env.NEXT_PUBLIC_NEWS_KEY)
  const { articles } = apiResponse;

  return {
    props: {
      allPostsData,
      articles: articles,
     // pageNumber: Number.parseInt(pageNumber),
    },
  };
};

  // const res = await fetch(`http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=0394b897967c4d50b2daaf474b15cdd9`)
  // const data = await res.json()
  // const allPostsData = getSortedPostsData()
  // return {
  //   props: {
  //     allPostsData,
  //     data
  //   }
  // }

