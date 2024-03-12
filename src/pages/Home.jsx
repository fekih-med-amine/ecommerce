import React from "react";
import { CssBaseline, ThemeProvider , Box} from "@mui/material";
import { ColorModeContext, useMode } from '../theme';
import Header1 from '../components/header/Header1';
import Header2 from '../components/header/Header2';
import Header3 from '../components/header/Header3';
import Hero from "../components/Hero/Hero";
import Main from "../components/main/Main";
import Footer from "../components/footer/Footer";

const Home = () => {
    const [theme, colorMode] = useMode();

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Header1 />
                <Header2 />
                <Header3 />
                <Box
                  bgcolor={
                  // @ts-ignore
                  theme.palette.bg.main
                  }
                >
                  <Hero />
                  <Main />
                </Box>
                <Footer />
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
};

export default Home;
