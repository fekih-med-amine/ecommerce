import React, { useState } from "react";
import {
  Box,
  Container,
  Stack,
  Typography,
  useTheme,
  CircularProgress,
  Button,
  Rating,
  Dialog,
  IconButton,
} from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { AnimatePresence, motion } from "framer-motion";
import { Close } from "@mui/icons-material";
import ProductDetails from "./ProductDetails";

const Main = () => {
  const [alignment, setAlignment] = useState("all"); // État pour la valeur sélectionnée
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([
    {
      id: 1,
      attributes: {
        productTitle: "Sample Product 1",
        productPrice: 50,
        productRating: 4.5,
        productImg: {
          data: [{ attributes: { url: "src/components/images/banner-17.jpg" } }],
        },
      },
    },
    {
      id: 2,
      attributes: {
        productTitle: "Sample Product 2",
        productPrice: 60,
        productRating: 4,
        productImg: {
          data: [{ attributes: { url: "src/components/images/banner-16.jpg" } }],
        },
      },
    },
    {
      id: 3,
      attributes: {
        productTitle: "Sample Product 3",
        productPrice: 70,
        productRating: 3.5,
        productImg: {
          data: [{ attributes: { url: "https://via.placeholder.com/300" } }],
        },
      },
    },
    // Ajoutez autant de produits factices que nécessaire
  ]);
  const [clickedProduct, setClickedProduct] = useState({});

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (!data) {
    return (
      <Box sx={{ py: 11, textAlign: "center" }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container sx={{ py: 9 }}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        gap={3}
      >
        <Box>
          <Typography variant="h6">Selected Products</Typography>
          <Typography fontWeight={300} variant="body1">
            All our new arrivals in an exclusive brand selection
          </Typography>
        </Box>

        <ToggleButtonGroup
          color="error"
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
          sx={{
            ".Mui-selected": {
              border: "1px solid rgba(233, 69, 96, 0.5) !important",
              color: "#e94560",
              backgroundColor: "initial",
            },
          }}
        >
          <ToggleButton
            sx={{ color: theme.palette.text.primary }}
            className="myButton"
            value="all"
            aria-label="left aligned"
          >
            Tous les produits
          </ToggleButton>

          <ToggleButton
            sx={{ mx: "16px !important", color: theme.palette.text.primary }}
            className="myButton"
            value="hommes"
            aria-label="centered"
          >
            Hommes
          </ToggleButton>

          <ToggleButton
            sx={{ mx: "16px", color: theme.palette.text.primary }}
            className="myButton"
            value="femmes"
            aria-label="right aligned"
          >
            Femmes
          </ToggleButton>

          <ToggleButton
            sx={{ mx: "16px", color: theme.palette.text.primary }}
            className="myButton"
            value="enfants"
            aria-label="right aligned"
          >
            Enfants
          </ToggleButton>

          <ToggleButton
            sx={{ mx: "16px", color: theme.palette.text.primary }}
            className="myButton"
            value="autre"
            aria-label="right aligned"
          >
            Acéssoire et chaussures
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>

      <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"space-between"}>
        <AnimatePresence>
          {data
            .filter((item) => alignment === "all" || item.attributes.category === alignment)
            .map((item) => (
              <Card
                component={motion.section}
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ duration: 1.6, type: "spring", stiffness: 50 }}
                key={item.id}
                sx={{
                  maxWidth: 333,
                  mt: 6,
                  ":hover .MuiCardMedia-root ": {
                    rotate: "1deg",
                    scale: "1.1",
                    transition: "0.35s",
                  },
                }}
              >
                <CardMedia
                  sx={{ height: 277 }}
                  image={item.attributes.productImg.data[0].attributes.url}
                  title="Product Image"
                />

                <CardContent>
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Typography gutterBottom variant="h6" component="div">
                      {item.attributes.productTitle}
                    </Typography>

                    <Typography variant="subtitle1" component="p">
                      ${item.attributes.productPrice}
                    </Typography>
                  </Stack>

                  <Typography variant="body2" color="text.secondary">
                    {/* Vos informations de description de produit peuvent rester inchangées */}
                  </Typography>
                </CardContent>

                <CardActions sx={{ justifyContent: "space-between" }}>
                    <Button
                      onClick={() => {
                      handleClickOpen(); // Appel correct de la fonction handleClickOpen
                      }}
                      sx={{ textTransform: "capitalize" }}
                      size="large"
                    >
                    <AddShoppingCartOutlinedIcon sx={{ mr: 1 }} fontSize="small" />
                     add to cart
                    </Button>
                  <Rating
                    precision={0.1}
                    name="read-only"
                    value={item.attributes.productRating}
                    readOnly
                  />
                </CardActions>
              </Card>
            ))}
        </AnimatePresence>
      </Stack>

      <Dialog
          sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } } }}
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <IconButton
            sx={{
              ":hover": { color: "red", rotate: "180deg", transition: "0.3s" },
              position: "absolute",
              top: 0,
              right: 10,
            }}
            onClick={handleClose}
          >
            <Close />
          </IconButton>

          <ProductDetails  />
        </Dialog>
    </Container>
  );
};

export default Main;
