import React, { useState } from 'react';
import { Box, Typography, Button, Divider, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = () => {
  // Supposez que vous avez une liste d'articles dans votre panier
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'T-shirt', price: 20, quantity: 2 },
    { id: 2, name: 'Jeans', price: 40, quantity: 1 },
    { id: 3, name: 'Sneakers', price: 60, quantity: 1 },
  ]);

  // Calcul du total du panier
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Fonction pour ajouter une quantité à un article
  const handleIncrement = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Fonction pour diminuer une quantité d'un article
  const handleDecrement = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  // Fonction pour supprimer un article du panier
  const handleRemoveItem = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <Box sx={{ p: 2 }}>
      {cartItems.map((item) => (
        <Box key={item.id} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography>{item.name}</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton onClick={() => handleDecrement(item.id)}>
              <RemoveIcon />
            </IconButton>
            <Typography>{item.quantity}</Typography>
            <IconButton onClick={() => handleIncrement(item.id)}>
              <AddIcon />
            </IconButton>
            <Typography>${item.quantity * item.price}</Typography>
            <IconButton onClick={() => handleRemoveItem(item.id)}>
              <DeleteIcon />
            </IconButton>
          </Box>
        </Box>
      ))}

      <Divider sx={{ my: 2 }} />

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="subtitle1">Total:</Typography>
        <Typography variant="subtitle1">${total}</Typography>
      </Box>

      <Link to="/payement" style={{ textDecoration: 'none' }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<ShoppingCartOutlinedIcon />}
          sx={{ mt: 2, width: '100%' }}
        >
          Procéder au paiement
        </Button>
      </Link>
    </Box>
  );
};

export default Cart;
