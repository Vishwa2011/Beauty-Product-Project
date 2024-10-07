
import React from 'react'
import {
  Box, Container, Grid, Card, CardMedia, CardContent, Typography, IconButton,
  Divider
} from '@mui/material'
import { Delete } from '@mui/icons-material'
import { Link } from 'lucide-react'
// import Link from 'next/link'
import { Mail, MapPin, Phone, Instagram as InstagramIcon, Linkedin } from 'lucide-react';
import { Facebook, Twitter, LinkedIn } from '@mui/icons-material';

// This should be the same as in MainPage.tsx
const products = [
  {
    id: 1,
    category: 'SUNKISSED',
    name: 'INIKA Mineral Sunkissed',
    price: 85.00,
    image: '/powder-1.webp'
  },
  {
    id: 2,
    category: 'LIP LINER',
    name: 'Grand Plumping Highlighter',
    price: 60.00,
    image: '/lip-liner-1.webp'
  },
  // Add more products as needed
]

export default function Favorites() {
  // In a real application, you would fetch the favorites from a global state or backend
  const [favorites, setFavorites] = React.useState([1, 2]) // Example favorite product IDs

  const removeFromFavorites = (productId) => {
    setFavorites(favorites.filter(id => id !== productId))
  }

  const favoriteProducts = products.filter(product => favorites.includes(product.id))

  return (
    <Box>
      <Container maxWidth="lg" sx={{ my: 8 }}>
        <Box sx={{ marginBottom: '10px' }}>
          <Typography variant="h2" sx={{ fontWeight: 'bold', fontSize: { xs: '2rem', md: '2.5rem' }, mb: 0, marginTop: '10px' }}>
            My Favorites
          </Typography>
          <Typography sx={{ fontSize: { xs: '1rem', md: '1.125rem' }, mt: 0, opacity: 0.75 }}>
            Home • Favorite
          </Typography>
        </Box>

        {favoriteProducts.length === 0 ? (
          <Typography>You haven't added any favorites yet.</Typography>
        ) : (
          <Grid container spacing={4}>
            {favoriteProducts.map((product) => (
              <Grid item xs={12} sm={6} md={3} key={product.id}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia
                    component="img"
                    height="250"
                    image={product.image}
                    alt={product.name}
                    sx={{
                      objectFit: 'contain',
                      p: 2,
                      background: '#f6f6f6',
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                      {product.category}
                    </Typography>
                    <Typography variant="h6" component="h2" gutterBottom sx={{ fontSize: '16px' }}>
                      {product.name}
                    </Typography>
                    <Typography variant="h6" sx={{ color: '#8B4513', fontSize: '16px' }}>
                      ${product.price.toFixed(2)}
                    </Typography>
                    <IconButton
                      onClick={() => removeFromFavorites(product.id)}
                      sx={{ mt: 1, color: '#8B4513' }}
                    >
                      <Delete />
                    </IconButton>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
      {/*  */}
      <Box component="footer" sx={{ bgcolor: '#f4f7f9', py: 6, mt: 5 }}>
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

            {/* My Account Section */}
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

            {/* Information Section */}
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

            {/* Contact Section */}
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
  )
}