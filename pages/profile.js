import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link rel="manifest" href="/static/manifest.webmanifest" />
        <meta name = "apple-mobile-web-app-capable" content="yes" />
        <meta name = "apple-mobile-web-app-status-bar-style" content="black" />
        <meta name = "apple-mobile-web-app-title" content="Article wali website" />
        <link rel="apple-touch-icon" href="../public/images/profile.jpg" />
        <link rel="apple-touch-startup-icon" href="../public/images/profile.jpg" />
      </Head>
      <section className={utilStyles.headingMd}>
      <p>Hi, I'm <a href="https://sidx8.github.io/Siddharth-Sinha.github.io/">Sid</a> a computer science student studying engginering in india. 
        you can contact me on <a href="https://twitter.com/siddhar45750060" target="_blank">Twitter</a>.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          {allPostsData.map(({ id, date, title }) => (
              <>
              <Link color="teal.500" href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
              </>
          ))}
      </section>
    </Layout>
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
