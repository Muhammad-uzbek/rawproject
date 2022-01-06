import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/appStyle.js';
import axios from 'axios';

export default function Home() {
//create a function that will post to /adminniy and return a response with cors
  return (
    <div className={styles.container}>
      {/* create a form input that takes title, content, link and image and post it to /adminniy */}
      <Head>
        <title>Create a post</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Create a post
        </h1>
        <form className={styles.form}>
          <input className={styles.input} type="text" placeholder="Title" />
          <input className={styles.input} type="text" placeholder="Content" />
          <input className={styles.input} type="text" placeholder="Link" />
          <input className={styles.input} type="text" placeholder="Image" />
          <button className={styles.button} type="submit">Submit</button>
        </form>
      </main>
    </div>
  )
}
