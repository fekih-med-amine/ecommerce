import React, { useState } from 'react';
import {
  CssBaseline,
  ThemeProvider,
  Box,
  Typography,
  Grid,
  Paper,
  Avatar,
  Divider,
  TextField,
  Button,
  IconButton,
} from '@mui/material';
import Header1 from '../components/header/Header1';
import { ColorModeContext, useMode } from '../theme';
import Footer from '../components/footer/Footer';
import { Link } from 'react-router-dom';
import { HomeOutlined } from '@mui/icons-material';


const ProfilePage = () => {
  const [theme, colorMode] = useMode();
  const [name, setName] = useState('Amine');
  const [email, setEmail] = useState('Amine@example.com');
  const [phone, setPhone] = useState('+1234567890');
  const [address, setAddress] = useState('123 rue de l\'Exemple, Ville, Pays');
  const [password, setPassword] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleUpdateProfile = () => {
    // Logique pour mettre à jour le profil
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header1 />
        <Box
          bgcolor={theme.palette.background.default}
          flexGrow={1}
          py={2}
          px={3}
        >
          <Link to="/">
              <IconButton sx={{ position: 'fixed', top: 10, left: 10, zIndex: 1000 }}>
                <HomeOutlined />
              </IconButton>
            </Link>
          <Typography variant="h4" gutterBottom>
            Mon Profil
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 2, textAlign: 'center' }}>
                <Avatar sx={{ width: 150, height: 150, margin: 'auto' }} />
                <Typography variant="h6" mt={2}>
                  {name}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={8}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="h6" mb={2}>
                  Informations Personnelles
                </Typography>
                <Divider />
                <Box mt={2}>
                  <TextField
                    label="Nom"
                    fullWidth
                    margin="normal"
                    value={name}
                    onChange={handleNameChange}
                  />
                  <TextField
                    label="Email"
                    fullWidth
                    margin="normal"
                    value={email}
                    disabled
                  />
                  <TextField
                    label="Téléphone"
                    fullWidth
                    margin="normal"
                    value={phone}
                    onChange={handlePhoneChange}
                  />
                  <TextField
                    label="Adresse"
                    fullWidth
                    margin="normal"
                    value={address}
                    onChange={handleAddressChange}
                  />
                  <TextField
                    label="Mot de passe"
                    type="password"
                    fullWidth
                    margin="normal"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2 }}
                    onClick={handleUpdateProfile}
                  >
                    Enregistrer
                  </Button>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
        <Footer />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ProfilePage;
