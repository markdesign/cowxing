/* eslint-disable @next/next/no-img-element */
import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../../Details.module.scss";

/**
 * 3. SSG - static site generation
 */

export async function getStaticPaths() {
    const resp = await fetch("https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json");
    const pokemon = await resp.json();

    return {
        paths: pokemon.map(pokemon => ({
            params: { id: pokemon.id.toString() },
        })),
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const response = await fetch(`https://jherr-pokemon.s3.us-west-1.amazonaws.com/pokemon/${params.id}.json`);
    return {
        props: {
            pokemon: await response.json(),
        },
        // revalidate: 30, // 30 seconds check for new data
    };
}

export default function Details({ pokemon }) {
    if (!pokemon) return null;

    return (
        <div>
            <Head>
                <title>{pokemon.name}</title>9
            </Head>
            <div>
                <Link href="/playground/youtube_jack_herrington/ssr_and_ssg/Example3/Example3">
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
