import type { NextPage } from "next";
import Head from "next/head";
import styles from "./index.module.scss";
import Navigation from "components/navigation/Navigation";
import data from ".././data.json";

const Playground: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>client</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navigation navLinks={data.links} />
            <h1>Playground</h1>
        </div>
    );
};

export default Playground;
