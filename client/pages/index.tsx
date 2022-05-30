import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>client</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff"></meta>
            </Head>

            <main className={styles.main}>
                <h1>hello world</h1>
                <p>version 4</p>
                <Link href="/playground">Playground</Link>
            </main>
        </div>
    );
};

export default Home;
