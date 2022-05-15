/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../index.module.scss";
import Link from "next/link";

/**
 * 1. CSR - EXAMPLE OF CLIENT SIDE RENDERING
 * check the source code. there is nothing in the page.
 */
const Example1: NextPage = ({}) => {
    const [pokemon, setPokemon] = useState<any[]>([]);

    useEffect(() => {
        async function getPokemon() {
            const response = await fetch("https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json");
            setPokemon(await response.json());
        }
        getPokemon();
    }, []);

    return (
        <div className={styles.container}>
            <Head>
                <title>Client side rendering</title>
            </Head>

            <div>
                <Link href="/playground/youtube_jack_herrington/ssr_and_ssg">
                    <a>Back to Home</a>
                </Link>
            </div>
            <h2>Client side rendering</h2>
            <div className={styles.grid}>
                {pokemon.map(pokemon => (
                    <div className={styles.card} key={pokemon.id}>
                        <Link href={`/playground/youtube_jack_herrington/ssr_and_ssg/Example1/pokemon/${pokemon.id}`}>
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
};

export default Example1;

//
