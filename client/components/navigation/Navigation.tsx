import { FC } from "react";
import styles from "./Navigation.module.scss";
import Link from "next/link";
import { PageHeader, Layout } from "antd";
import "antd/dist/antd.css";

const { Header, Footer, Sider, Content } = Layout;

export const NavLinks = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "playground",
        path: "/playground",
    },
    {
        name: "graphql",
        path: "/playground/GraphQL",
    },
    {
        name: "neo4j",
        path: "/playground/Neo4j",
    },
    {
        name: "youtube_jack_herrington",
        path: "/playground/youtube_jack_herrington/ssr_and_ssg",
    },
];
const Navigation: FC = () => {
    return (
        <Layout>
            <PageHeader className={styles.sitePageHeader} title="Playground" subTitle="content">
                <div className={styles.navLinks}>
                    {NavLinks.map(navLink => {
                        return (
                            <ul key={navLink.path}>
                                <Link href={navLink.path}>
                                    <a>{navLink.name}</a>
                                </Link>
                            </ul>
                        );
                    })}
                </div>
            </PageHeader>
        </Layout>
    );
};

export default Navigation;
