/* eslint-disable @next/next/no-img-element */
import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../index.module.scss";

/**
 * 2. SSR - server side rendering
 */
export async function getServerSideProps() {
    const response = await fetch("https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json");
    return {
        props: {
            pokemon: await response.json(),
        },
    };
}

export default function Details({ pokemon }: { pokemon: any }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Server side rendering</title>
            </Head>
            <div>
                <Link href="/playground/youtube_jack_herrington/ssr_and_ssg">
                    <a>Back to Home</a>
                </Link>
            </div>
            <h2>Server side rendering</h2>
            <div className={styles.grid}>
                {pokemon.map((pokemon: any) => (
                    <div className={styles.card} key={pokemon.id}>
                        <Link href={`/playground/youtube_jack_herrington/ssr_and_ssg/Example2/pokemon/${pokemon.id}`}>
                            <a>
                                <img
                                    src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
                                    alt={pokemon.name}
                                />
                                <h3>{pokemon.name}</h3>
                            </a>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
