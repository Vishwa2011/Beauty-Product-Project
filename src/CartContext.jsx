

import React, { createContext, useContext, useState, useEffect } from 'react'
import {
  AppBar, Toolbar, Typography, Button, IconButton, Box,
  Container, Grid, Card, CardMedia, CardContent, CardActions,
  Divider, Dialog, DialogTitle, DialogContent, DialogActions,
  TextField,
} from '@mui/material'
import { ShoppingCart, Add, Remove } from '@mui/icons-material'
import { Mail, MapPin, Instagram as InstagramIcon, Linkedin } from 'lucide-react';
import { Facebook, Twitter, LinkedIn } from '@mui/icons-material';

// Cart context
const CartContext = createContext(null)

const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const newTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    setTotal(newTotal)
  }, [cart])

  const addToCart = (product) => {
    setCart(currentCart => {
      const existingItem = currentCart.find(item => item.id === product.id)
      if (existingItem) {
        return currentCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...currentCart, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (productId) => {
    setCart(currentCart => currentCart.filter(item => item.id !== productId))
  }

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return
    setCart(currentCart =>
      currentCart.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, total }}>
      {children}
    </CartContext.Provider>
  )
}

// Sample product data
const products = [
  { id: 1, name: 'Mega Waterproof Concealer - 125 Bisque', price: 200, image: `${process.env.PUBLIC_URL}/shopping (2).webp` },
  { id: 2, name: 'Wet Dewy Cream Beige', price: 120, image: `${process.env.PUBLIC_URL}/makeup-1.webp` },
  { id: 3, name: 'INIKA Mineral Sunkissed', price: 85, image: `${process.env.PUBLIC_URL}/powder-1.webp` },
  { id: 4, name: 'Mielle Rosemary Mint Scalp', price: 63, image: `${process.env.PUBLIC_URL}/skin-1.webp` },
]

// Main component
export default function CartPage() {
  return (
    <CartProvider>
      <Box sx={{ flexGrow: 1 }}>
        <Container maxWidth="lg" sx={{ mt: { xs: 2, md: 4 } }}>
          <Box sx={{ marginBottom: '10px', textAlign: { xs: 'center', md: 'left' } }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 'bold',
                fontSize: { xs: '2rem', md: '2.5rem' },
                mb: 0,
                mt: { xs: 2, md: '10px' }
              }}
            >
              My Products
            </Typography>
            <Typography sx={{ fontSize: { xs: '1rem', md: '1.125rem' }, mt: 0, opacity: 0.75 }}>
              Home • Products
            </Typography>
          </Box>

          <Grid container spacing={2}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </Grid>

          <CartSection />
        </Container>
        {/* Footer */}
        <Box component="footer" sx={{ bgcolor: '#f4f7f9', py: { xs: 4, md: 6 }, mt: 5 }}>
          <Container maxWidth="lg">
            <Grid container spacing={4}>
              <Grid item xs={12} md={3}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>GlamAura</Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  We are a dynamic team of full-stack developers and designers crafting high-quality web applications.
                </Typography>
                <Box>
                  {[Facebook, Twitter, Linkedin, InstagramIcon].map((Icon, index) => (
                    <IconButton key={index} size="small" sx={{ mr: 1 }}>
                      <Icon size={20} />
                    </IconButton>
                  ))}
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="h6" gutterBottom>My Account</Typography>
                <ul style={{ padding: '5px', fontSize: '14px', marginTop: '0px' }}>
                  <li>Track Orders</li>
                  <li>Shipping</li>
                  <li>My Account</li>
                  <li>Order History</li>
                  <li>Returns</li>
                </ul>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="h6" gutterBottom>Information</Typography>
                <ul style={{ padding: '5px', fontSize: '14px', marginTop: '0px' }}>
                  <li>Our Story</li>
                  <li>Careers</li>
                  <li>Privacy Policy</li>
                  <li>Terms & Conditions</li>
                  <li>Contact Us</li>
                </ul>
              </Grid>

              <Grid item xs={12} md={3}>
                <Typography variant="h6" gutterBottom>Talk To Us</Typography>
                <Typography variant="body2" color="text.secondary">Got Questions? Call us</Typography>
                <Typography variant="h6" gutterBottom>+966 595 035 008</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Mail size={20} />
                  <Typography variant="body2" sx={{ ml: 1 }}>support@glamaura.com</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                  <MapPin size={20} />
                  <Typography variant="body2" sx={{ ml: 1 }}>79 Sleepy Hollow St. Jamaica, Jeddah 1432</Typography>
                </Box>
              </Grid>
            </Grid>

            <Divider sx={{ my: 4 }} />
            <Typography variant="body2" color="text.secondary" align="center">
              {' © 2024 All Rights Reserved By Vishwa Italiya.'}
            </Typography>
          </Container>
        </Box>
      </Box>
    </CartProvider>
  )
}

function ProductCard({ product }) {
  const { addToCart } = useCart()

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardMedia
          component="img"
          height="200"
          image={product.image}
          alt={product.name}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ${product.price.toFixed(2)}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            startIcon={<ShoppingCart />}
            onClick={() => addToCart(product)}
            sx={{ color: '#8B4513' }}
          >
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

function CartSection() {
  const { cart, removeFromCart, updateQuantity, total } = useCart()
  const [openDialog, setOpenDialog] = useState(false);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const handlePayment = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const handleConfirmPayment = () => {
    alert("Order placed successfully!");
    setOpenDialog(false);
  };
  return (
    <Box sx={{ mt: { xs: 2, md: 4 } }}>
      <Typography
        variant="h4"
        sx={{ mb: { xs: 2, md: 3 }, textAlign: { xs: 'center', md: 'left' }, fontSize: { xs: '1.75rem', md: '2rem' } }}
      >
        Cart
      </Typography>

      {cart.length > 0 ? (
        <>
          {cart.map(item => (
            <Box
              key={item.id}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: '1px solid #ccc',
                py: 2,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <img src={item.image} alt={item.name} width="80" />
                <Box sx={{ ml: 2 }}>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    ${item.price.toFixed(2)} x {item.quantity} = $
                    {(item.price * item.quantity).toFixed(2)}
                  </Typography>
                </Box>
              </Box>

              <Box>
                <Button
                  startIcon={<Remove sx={{color:'#8B4513'}}/>}
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                />
                <Typography sx={{ display: 'inline-block', mx: 2 }}>{item.quantity}</Typography>
                <Button
                  startIcon={<Add sx={{color:'#8B4513'}}/>}
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                />
                <Button onClick={() => removeFromCart(item.id)} sx={{color:'#8B4513'}}>Remove</Button>
              </Box>
            </Box>
          ))}

          <Box sx={{ mt: 3, textAlign: { xs: 'center', md: 'right' } }}>
            <Typography variant="h6" sx={{ mb: 1 }}>
              Total: ${total.toFixed(2)}
            </Typography>
            <Button
              variant="contained"
              
              sx={{ mt: { xs: 2, md: 0 } ,background:'#8B4513'}}
              onClick={handlePayment}
            >
              Proceed to Payment
            </Button>
          </Box>
          <Dialog open={openDialog} onClose={handleCloseDialog}>
            <DialogTitle>Payment Details</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                label="Name"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                margin="dense"
                label="Address"
                fullWidth
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <TextField
                margin="dense"
                label="Contact"
                fullWidth
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
              <TextField
                margin="dense"
                label="Email"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog} sx={{color:'#8B4513'}}>Cancel</Button>
              <Button onClick={handleConfirmPayment} sx={{color:'#8B4513'}}>Confirm Payment</Button>
            </DialogActions>
          </Dialog>
        </>
      ) : (
        <Typography variant="body1">Your cart is empty.</Typography>
      )}
    </Box>
  )
}
