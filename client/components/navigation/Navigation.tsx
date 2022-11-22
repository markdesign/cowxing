import React, { FC } from "react";
import styles from "./Navigation.module.scss";
import Link from "next/link";
import { PageHeader, Layout } from "antd";
import "antd/dist/antd.css";

const { Header, Footer, Sider, Content } = Layout;

interface NavLinks {
    name: string;
    path: string;
};

interface NavigationProps {
    navLinks: Array<NavLinks>;
}


const Navigation: FC<NavigationProps> = props => {
    console.log("[Navigation.tsx 32] props : ", props.navLinks);
    return (
        <Layout>
            <PageHeader className={styles.sitePageHeader} title="Playground" subTitle="content">
                <div className={styles.navLinks}>
                    {props.navLinks.map((navLink: NavLinks) => {
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
