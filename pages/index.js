import { getPostData, getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Navbar from "../components/navbar";
import Card from "../components/card";
import Head from "next/head";
export default function Home({ allPostsData, articles }) {
  return (
    <div className="w-full bg-gray-50">
      <Head>
        <title>Aww.com</title>
      </Head>
      <Navbar />
      <section className="py-20 antialiased">
        <div className="container max-w-7xl mx-auto">
          <div className="flex flex-row flex-wrap">
            <h1 className="mb-20 mt-10 text-7xl font-bold tracking-tight text-left">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 ">
                {" "}
                Welcome to the{" "}
              </span>
              <br />
              <span
                className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-pink-700 
"
              >
                Article Wali Website .
              </span>
            </h1>
            <img
              className="pl-10 object-scale-down h-48 max-w-6xl"
              src="/article1.svg"
            />
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-left">
            Featured articles : -
          </h2>
          <p className="mt-2 text-lg text-left text-gray-600">
            Check out our list of awesome articles below.
          </p>
          <hr className="border-gray-300 mb-8 my-4" />
          
          <div className="grid grid-cols-4 gap-8 mt-0 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0">
            {allPostsData.map(({ id, date, title, tag, color }) => (
              <>
              <Card color={color} date={date} title={title} tag={tag} key={id} id={id} />
              {/* <Link href={`/posts/${id}`}>
                <a
                  key={id}
                  className="relative flex flex-col col-span-4 px-0 py-0 space-y-2 overflow-hidden sm:rounded-xl"
                >
                  <div
                    className={`py-1 px-2 w-min items-start text-sm font-medium text-${color}-700 bg-${color}-100 rounded-full`}
                  >
                    {tag}
                  </div>
                  <h4 className="m-0 text-xl font-bold text-gray-700">
                    {title}
                  </h4>
                  <p className="text-base text-left text-gray-500 ">
                    Each of our plan will provide you and your team with
                    certifications.
                  </p>
                  <Date
                    className="text-sm md:text-base font-normal text-gray-600"
                    dateString={date}
                  />
                </a>
              </Link> */}
              </>
            ))}
          </div>

          <h2 className="mt-10 text-4xl font-bold text-gray-600 text-left">
            Other popular articles and sources : -
          </h2>
          <hr className="my-4" />
          <div className="flex flex-wrap flex-row gap-2">
            <div className="article-section1">
              <h1 className="mb-0 mt-10 text-6xl font-bold tracking-tight text-left">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600 ">
                  {" "}
                  Tech{" "}
                </span>
                <span
                  className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-pink-700 
          "
                >
                  {" "}
                  Crunch.
                </span>
              </h1>
              {articles.map((article, index) => (
                <div
                  key={index}
                  class="max-w-sm mt-4 bg-white rounded-xl shadow-md overflow-hidden md:max-w-3xl"
                >
                  <div class="md:flex">
                    <div class="md:flex-shrink-0">
                      <img
                        class="h-full w-full object-cover md:w-48"
                        src={article.urlToImage}
                        alt="Man looking at item at a store"
                      />
                    </div>
                    <div class="p-8">
                      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                        Article
                      </div>
                      <a
                        href={article.url}
                        target="_blank"
                        class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                      >
                        {article.title}
                      </a>
                      <p class="mt-2 text-gray-500">{article.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  const TechCrunchapiResponse = await fetch(
    `https://newsapi.org/v2/top-headlines?sources=techcrunch&pageSize=70`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
      },
    }
  ).then((res) => res.json());
  console.log(process.env.NEXT_PUBLIC_NEWS_KEY);
  const { articles: TechCruncharticles } = TechCrunchapiResponse;

  return {
    props: {
      allPostsData,
      articles: TechCruncharticles,
    },
    revalidate: 100,
  };
}
