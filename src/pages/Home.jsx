import { CssBaseline, ThemeProvider, Box } from "@mui/material";
import { ColorModeContext, useMode } from '../theme';
import Header1 from '../components/header/Header1';
import Header2 from '../components/header/Header2';
import Header3 from '../components/header/Header3';
import Clother from "../components/category/Clother";
import Electronics from "../components/category/Electronics";
import Hero from "../components/Hero/Hero";
const Home = () => {
    const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header1 />
      <Header2 />
      <Header3 />
      <Box bgcolor={theme.palette.bg.main}>
         <Hero />
      </Box>
      < Clother />
      <Electronics />
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default Home
