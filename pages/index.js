import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DJ events</title>
        <meta name="find dj events around you" content="list of dj events around you" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        hello world
      </div>


      
    </div>
  )
}
