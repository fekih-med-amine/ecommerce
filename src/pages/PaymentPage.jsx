import React from 'react';
import {
  CssBaseline,
  ThemeProvider,
  Box,
  IconButton,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
} from '@mui/material';
import { HomeOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import Header1 from '../components/header/Header1';
import { ColorModeContext, useMode } from '../theme';
import Footer from '../components/footer/Footer';

const PaymentPage = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box
          display="flex"
          flexDirection="column"
          minHeight="100vh" // Rend la boîte de contenu au moins aussi haute que l'écran
        >
          <Header1 />
          <Box
            bgcolor={
              // @ts-ignore
              theme.palette.bg.main
            }
            flexGrow={1} // Fait en sorte que cette boîte prenne tout l'espace disponible
            py={2} // Ajoute un peu d'espace en haut et en bas
          >
            <Link to="/">
              <IconButton sx={{ position: 'fixed', top: 10, left: 10, zIndex: 1000 }}>
                <HomeOutlined />
              </IconButton>
            </Link>
            <Typography variant="h4" gutterBottom>
              Paiement
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Paper sx={{ p: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    Détails de la commande
                  </Typography>
                  {/* Affichez ici les détails de la commande, tels que les articles, les prix, etc. */}
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper sx={{ p: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    Informations de paiement
                  </Typography>
                  <TextField label="Nom sur la carte" fullWidth margin="normal" />
                  <TextField label="Numéro de carte" fullWidth margin="normal" />
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <TextField label="Date d'expiration" fullWidth margin="normal" />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField label="CVC" fullWidth margin="normal" />
                    </Grid>
                  </Grid>
                  <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                    Payer
                  </Button>
                </Paper>
              </Grid>
            </Grid>
          </Box>
          <Footer />
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default PaymentPage;
