/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "./Details.module.scss";
import { useRouter } from "next/router";

/**
 * 1. EXAMPLE OF CLIENT SIDE RENDERING
 * check the source code. there is nothing in the page.
 */

export default function Details({}) {
    const {
        query: { id },
    } = useRouter();

    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        async function getPokemon() {
            const response = await fetch(`https://jherr-pokemon.s3.us-west-1.amazonaws.com/pokemon/${id}.json`);
            console.log("[index.tsx 13] response : ", response);
            setPokemon(await response.json());
        }
        getPokemon();
    }, [id]);

    if (!pokemon) return null;

    return (
        <div>
            <Head>
                <title>{pokemon.name}</title>9
            </Head>
            <div>
                <Link href="/playground/youtube_jack_herrington/ssr_and_ssg">
                    <a>Back to Home</a>
                </Link>
            </div>

            <div className={styles.layout}>
                <div>
                    <img
                        className={styles.picture}
                        src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
                        alt={pokemon.name.english}
                    />
                </div>
                <div>
                    <div className={styles.name}>{pokemon.name}</div>
                    <div className={styles.type}>{pokemon.type.join(", ")}</div>
                    <table>
                        <thead className={styles.header}>
                            <tr>
                                <th>Name</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pokemon.stats.map(({ name, value }) => (
                                <tr key={name}>
                                    <td className={styles.attribute}>{name}</td>
                                    <td>{value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
