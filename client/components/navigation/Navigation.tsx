import { default as NextLink } from "next/link";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

import styles from "./Navigation.module.scss";

const Navigation = () => {
    function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        event.preventDefault();
        console.info("You clicked a breadcrumb.");
    }

    return (
        <div className={styles.Navigation}>
            <CssBaseline />
            <Container maxWidth="sm">
                <Box sx={{ bgcolor: "#cfe8fc" }}>
                    <div role="presentation" onClick={handleClick}>
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link underline="hover" color="inherit" href="/">
                                <NextLink href="/">
                                    <a>Home</a>
                                </NextLink>
                            </Link>
                            <Link underline="hover" color="inherit" href="/material-ui/getting-started/installation/">
                                <NextLink href="/about">
                                    <a>About</a>
                                </NextLink>
                            </Link>
                            <Typography color="text.primary">Current</Typography>
                        </Breadcrumbs>
                    </div>
                </Box>
            </Container>
        </div>
    );
};

export default Navigation;
