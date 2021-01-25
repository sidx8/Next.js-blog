import Layout from '../../components/layout'
import Footer from '../../components/footer'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import Link from 'next/link'
import utilStyles from '../../styles/utils.module.css'
import Navbar from '../../components/navbar'

export default function Post({ postData }) {
  return (
      <div className="w-full"> 
      <div className="bg-gray-100  font-sans leading-normal tracking-normal">
        <Head>
        <title>{postData.title}</title>
      </Head>
       <Navbar />
      <div className="container w-full md:max-w-3xl mx-auto pt-20">
        <div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal" style={{fontFamily: 'Georgia,serif'}}>
          {/*Title*/}
          <div className="font-sans">
            <p className="text-base md:text-sm text-green-500 font-bold">&lt; 
            <Link href="/">
            <a className="text-base md:text-sm text-green-500 font-bold no-underline hover:no-underline"> Back to home</a>
            </Link>
            </p>
            <h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">{postData.title}</h1>
            <Date className="text-sm md:text-base font-normal text-gray-600" dateString={postData.date} />
          </div>
          <div className="py-6" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />          
        </div>
        {/*Tags */}
        <div className="text-base md:text-sm text-gray-500 px-4 py-6">
          Tags: <a href="#" className="text-base md:text-sm text-green-500 no-underline hover:underline">Code</a> . <a href="#" className="text-base md:text-sm text-green-500 no-underline hover:underline">Learn</a>
        </div>
        {/*Divider*/}
        <hr className="border-b-2 border-gray-400 mb-8 mx-4" />
      </div>
      <Footer />
      </div>
      </div>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}
