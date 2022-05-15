/* eslint-disable @next/next/no-img-element */
import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../../Details.module.scss";

/**
 * 2. EXAMPLE OF SERVER SIDE RENDERING
 */
export async function getServerSideProps({ params }: any) {
    console.log("[[id].tsx 12] params : ", params);
    const response = await fetch(`https://jherr-pokemon.s3.us-west-1.amazonaws.com/pokemon/${params.id}.json`);
    return {
        props: {
            pokemon: await response.json(),
        },
    };
}

export default function Details({ pokemon }: any) {
    if (!pokemon || Object.keys(pokemon).length === 0) return null;

    return (
        <div>
            <Head>
                <title>{pokemon.name}</title>9
            </Head>
            <div>
                <Link href="/playground/youtube_jack_herrington/ssr_and_ssg/Example2/Example2">
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
                            {pokemon.stats.map(({ name, value }: { name: string; value: string }) => (
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
