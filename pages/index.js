import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/Home.module.css'
import stylesUtil from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
     const allPostsData = getSortedPostsData()
     return {
          props: {
               allPostsData
          }
     }
}

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={stylesUtil.headingMd}>
        <p>Hello, my name is <b>Drilon Braha</b>, I'm currently learning Next.js</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section className={`${stylesUtil.headingMd} ${stylesUtil.padding1px}`}>
          <h2 class={stylesUtil.headingLg}>Blog</h2>
          <ul className={stylesUtil.list}>
               {allPostsData.map(({id, date, title}) => (
                    <li className={stylesUtil.listItem} key={id}>
                         {title}
                         <br/>
                         {id}
                         <br/>
                         {date}
                    </li>
               ))}
          </ul>
      </section>
    </Layout>
  )
}
