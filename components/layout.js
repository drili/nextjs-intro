import Head from 'next/head'
import Image from 'next/image'
import stylesLayout from '../styles/components/layout.module.css'
import stylesUtil from '../styles/utils.module.css'
import Link from 'next/link'

const name = "Drilon Braha"
export const siteTitle = "Next.js Sample Site"

export default function Layout({ children, home }) {
     return(
          <div className={stylesLayout.container}>
               <Head>
                    <link rel="icon" href="/favicon.ico"/>
                    <meta
                         name="description"
                         content="Building a personal website using Next.js"
                    />
                    <meta
                         property="og:image"
                         content={`https://og-image.vercel.app/${encodeURI(
                           siteTitle
                         )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                    />
                    <meta
                         name="og:title"
                         content={siteTitle}
                    />
                    <meta
                         name="twitter:card"
                         content="summary_large_image"
                    />
               </Head>

               <header className={stylesLayout.header}>
                    {
                         home ? (
                              <>
                                   <Image
                                        priority
                                        src="/../public/images/profile.jpg"
                                        className={stylesUtil.borderCircle}
                                        height={144}
                                        width={144}
                                        alt={name}
                                   />
                                   <h1 className={stylesUtil.heading2Xl}>{name}</h1>
                              </>
                         ) : (
                              <>
                                   <Link href="/">
                                        <a>
                                             <Image
                                                  priority
                                                  src="/../public/images/profile.jpg"
                                                  className={stylesUtil.borderCircle}
                                                  height={108}
                                                  width={108}
                                                  alt={name}
                                             />
                                             <h2 className={stylesUtil.headingLg}>
                                               <Link href="/">
                                                 <a className={stylesUtil.colorInherit}>{name}</a>
                                               </Link>
                                             </h2>
                                        </a>
                                   </Link>
                              </>
                         )
                    }
               </header>

               <main>{children}</main>
               {!home && (
                    <div className={stylesLayout.backToHome}>
                         <Link href="/">
                              <a>← Back to home</a>
                         </Link>
                    </div>
               )}
          </div>
     )
}
