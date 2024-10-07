import React, { useState } from 'react';
import {
    Box,
    Typography,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Checkbox,
    FormControlLabel,
    List,
    ListItem,
    ListItemText,
    Rating,
    AppBar,
    Container,
    Toolbar,
    // Typography,
    Button,
    IconButton,
    Divider,
} from '@mui/material';
import {
    Facebook,
    Twitter,
    InstagramIcon,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Link,
    // Container,
} from 'lucide-react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import VisibilityIcon from '@mui/icons-material/Visibility';
import StoreIcon from '@mui/icons-material/Store';
import { Search, Favorite, ShoppingCart } from '@mui/icons-material'
// Mock data for categories and products
const categories = [
    { name: 'Lipsticks', count: 3 },
    { name: 'Face Concealer', count: 3 },
    { name: 'Eyeshadow', count: 3 },
    { name: 'Make-up Kits', count: 2 },
    { name: 'Foundation Primers', count: 4 },
    { name: 'Foundations', count: 2 },
    { name: 'Compact Powder', count: 2 },
];

const products = [
    {
        id: 1,
        name: 'Maybelline Liquid Lipstick, High Shine Gloss, Lasts for 16 HRs',
        category: 'Lipsticks',
        price: 120.00,
        oldPrice: 103.20,
        rating: 5,
        image: `${process.env.PUBLIC_URL}/product1.webp`
    },
    {
        id: 2,
        name: 'ELIAS Long Wear Long Lasting Enriched Keeps Lips',
        category: 'Lipsticks',
        price: 130.00,
        oldPrice: 123.50,
        rating: 2,
        image: `${process.env.PUBLIC_URL}/product2.webp`
    },
    {
        id: 3,
        name: 'Just Herbs Ayurvedic Creamy Matte Micro Mini Lipstick Kit ',
        category: 'Lipsticks',
        price: 110.00,
        oldPrice: null,
        rating: 4,
         image: `${process.env.PUBLIC_URL}/product3.webp`
    },
    {
        id: 4,
        name: 'Maybelline Acne-Prone Dark Circles And Blemish Eraser',
        category: 'Face Concealer',
        price: 320.00,
        oldPrice: 288.00,
        rating: 2,
         image: `${process.env.PUBLIC_URL}/product4.webp`
    },
    {
        id: 5,
        name: 'Gleva 5 In 1 Makeup stack, Travel Friendly',
        category: 'Face Concealer',
        price: 1199.00,
        oldPrice: 1019.15,
        rating: 5,
           image: `${process.env.PUBLIC_URL}/product5.webp`
    },
    {
        id: 6,
        name: 'Forest EssentialsSom Rasa Velvet Concealer Badami ',
        category: 'Face Concealer',
        price: 999.00,
        oldPrice: 949.05,
        rating: 3,
         image: `${process.env.PUBLIC_URL}/product6.webp`
    },
    {
        id: 7,
        name: ' 9 in 1 Long Lasting Blendable Eye Makeup Palette',
        category: 'Eyeshadow',
        price: 1200.00,
        oldPrice: 1299.05,
        rating: 4,
        image: `${process.env.PUBLIC_URL}/product7.webp`
    },
    {
        id: 8,
        name: ' Fairyfirst 18 Color Eyeshadow Palette With Mirror ',
        category: 'Eyeshadow',
        price: 1100.00,
        oldPrice: 1199.15,
        rating: 2,
         image: `${process.env.PUBLIC_URL}/product8.webp`
    },
    {
        id: 9,
        name: 'Lakme 9 to 5 Eyeshadow Palette, Desert Rose ',
        category: 'Eyeshadow ',
        price: 800.00,
        oldPrice: 950.05,
        rating: 5,
         image: `${process.env.PUBLIC_URL}/product9.webp`
    },
    {
        id: 10,
        name: 'Noy Makeup Kit Party-Ready Makeup Set for the Festival Long Wear Formula Pack of 10',
        category: 'Make-up Kits ',
        price: 1500.00,
        oldPrice: 1600.00,
        rating: 4,
         image: `${process.env.PUBLIC_URL}/product10.webp`
    },
    {
        id: 11,
        name: 'Kuber Industries Makeup Kit | Jute 3 Layer Cosmetic Kit | Antique Color Travel Kit | Vanity Kit',
        category: 'Make-up Kits ',
        price: 999.00,
        oldPrice: 949.05,
        rating: 3,
        image: `${process.env.PUBLIC_URL}/product11.webp`
    },
    {
        id: 12,
        name: 'Lakme Absolute Blur Perfect Matte Face Primer',
        category: 'Foundation Primers ',
        price: 700.00,
        oldPrice: 750.05,
        rating: 2,
        image: `${process.env.PUBLIC_URL}/product12.webp`
    },
    {
        id: 13,
        name: 'RENEE Glass Glow Pre Makeup Oil Primer 10ml',
        category: 'Foundation Primers ',
        price: 400.00,
        oldPrice: 450.05,
        rating: 4,
        image: `${process.env.PUBLIC_URL}/product13.webp`
    },
    {
        id: 14,
        name: 'Swiss Beauty Natural Makeup Fixer | Natural Dewy Finish ',
        category: 'Foundation Primers ',
        price: 300.00,
        oldPrice: 350.05,
        rating: 1,
        image: `${process.env.PUBLIC_URL}/product14.webp`
    },
    {
        id: 15,
        name: 'Natural Foundation for Light to Medium Coverage with Natural Finish ',
        category: 'Foundations  ',
        price: 999.00,
        oldPrice: 949.05,
        rating: 4,
        image: `${process.env.PUBLIC_URL}/product15.webp`
    },
    {
        id: 16,
        name: 'Maybelline New York Liquid Foundation, Matte & Poreless',
        category: 'Foundations  ',
        price: 467.00,
        oldPrice: 449.05,
        rating: 2,
        image: `${process.env.PUBLIC_URL}/product16.webp`
    },
    {
        id: 17,
        name: 'FACES CANADA Weightless Stay Matte Finish Compact Powder',
        category: 'Compact Powder  ',
        price: 300.00,
        oldPrice: 356.05,
        rating: 3,
        image: `${process.env.PUBLIC_URL}/product17.webp`

    },
    {
        id: 18,
        name: 'Insight Pressed Powder Translucent Face Powder | HD Finishing Loose Powder ',
        category: 'Compact Powder  ',
        price: 999.00,
        oldPrice: 949.05,
        rating: 4,
         image: `${process.env.PUBLIC_URL}/product18.webp`
    },
];

export default function Shop() {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [hoveredProduct, setHoveredProduct] = useState(null);
    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const filteredProducts = selectedCategory
        ? products.filter(product => product.category.includes(selectedCategory))
        : products;

    return (
        <Box>
            
            {/*  */}
            <Box>
                <h1 style={{ marginLeft: '35px', marginBottom: '0px' }}>
                    Shop Grid
                </h1>
                <ul style={{ display: 'flex', marginTop: '5px', fontSize: '14px' }}>Home<li style={{ marginLeft: '25px' }}>Shop Grid</li></ul>
            </Box>
            <Box sx={{ display: 'flex', p: 3 }}>
                {/* <Box sx={{ width: '17%', mr: 4 }}> */}
                <Box sx={{ width: {md:'100%',sm:'30%', xs: '40%', md: '17%' }, mr: { xs: 0, md: 4 }, mb: { xs: 2, md: 0 } }}>
                    <Typography variant="h6" gutterBottom sx={{color:'#8B4513',fontWeight:700}}>
                        Categories
                    </Typography>
                    <List>
                        {categories.map((category) => (
                            <ListItem
                                key={category.name}
                                button
                                onClick={() => handleCategoryClick(category.name)}
                                selected={selectedCategory === category.name}
                                sx={{
                                    backgroundColor: selectedCategory === category.name ? '#8B4513' : 'transparent',
                                    color: selectedCategory === category.name ? 'white' : 'inherit',borderRadius:'5px',
                                    '&:hover': {
                                      backgroundColor: selectedCategory === category.name ? '#8B4513' : 'rgba(0, 0, 0, 0.04)',
                                    },
                                  }}
                            >
                                <ListItemText primary={`${category.name} (${category.count})`} />
                            </ListItem>
                        ))}
                    </List>
                </Box>

                {/* <Box sx={{ flexGrow: 1, width: '83%' }} > */}
                <Box sx={{ flexGrow: 1, width: { md:'100%',sm:'70%',xs: '60%', md: '83%' } }}>
                    <Grid container spacing={3}>
                        {filteredProducts.map((product) => (
                            <Grid item xs={12} sm={6} md={4} key={product.id}>
                                <Card
                                    sx={{
                                        height: '100%',
                                        position: 'relative',
                                        '&:hover .hover-icons': { // Show icons on hover
                                            opacity: 1
                                        }
                                    }}
                                    onMouseEnter={() => setHoveredProduct(product.id)}
                                    onMouseLeave={() => setHoveredProduct(null)}>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={product.image}
                                        alt={product.name}
                                        style={{
                                            width: '100%',
                                            objectFit: 'contain'
                                        }}
                                    />
                                    <Box
                                        className="hover-icons"
                                        sx={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            opacity: 0,
                                            backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                            transition: 'opacity 0.3s ease',
                                        }}
                                    >
                                        <IconButton
                                            sx={{
                                                color: 'white',
                                                backgroundColor: '#8B4513',
                                                marginRight: '10px',
                                                '&:hover': {
                                                    backgroundColor: '#8B4513'
                                                }
                                            }}
                                        >
                                            <ShoppingCartIcon />
                                        </IconButton>
                                        <IconButton
                                            sx={{
                                                color: 'white',
                                                backgroundColor: '#8B4513',
                                                marginRight: '10px',
                                                '&:hover': {
                                                    backgroundColor: '#8B4513'
                                                }
                                            }}
                                        >
                                            <VisibilityIcon />
                                        </IconButton>
                                        <IconButton
                                            sx={{
                                                color: 'white',
                                                background: '#8B4513',
                                                '&:hover': {
                                                    backgroundColor: '#8B4513'
                                                }
                                            }}>
                                            <StoreIcon />
                                        </IconButton>
                                    </Box>
                                    <CardContent >
                                        <Typography variant="subtitle2" color="text.secondary">
                                            {product.category}
                                        </Typography>
                                        <Typography sx={{fontSize:'16px'}} component="div">
                                            {product.name}
                                        </Typography>
                                        <Rating name={`rating-${product.id}`} value={product.rating} readOnly />
                                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                                            <Typography variant="h6" component="span">
                                                ${product.price.toFixed(2)}
                                            </Typography>
                                            {product.oldPrice && (
                                                <Typography variant="body2" color="text.secondary" sx={{ ml: 1, textDecoration: 'line-through' }}>
                                                    ${product.oldPrice.toFixed(2)}
                                                </Typography>
                                            )}
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
            {/*  */}
            <Box component="footer" sx={{ bgcolor: '#f4f7f9', py: 6 }}>
                <Container maxWidth="lg">
                    <Grid container spacing={4}>
                        {/* Company Info */}
                        <Grid item xs={12} md={3}>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                GlamAura
                                </Typography>
                            </Box>
                            <Typography variant="body2" color="text.secondary" paragraph>
                                We are a dynamic team of full stack developers and designers crafting high-quality web applications
                            </Typography>
                            <Box>
                                {[Facebook, Twitter, Linkedin, InstagramIcon].map((Icon, index) => (
                                    <IconButton key={index} size="small" sx={{ mr: 1 }}>
                                        <Icon size={20} />
                                    </IconButton>
                                ))}
                            </Box>
                        </Grid>

                        {/* My Account */}
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography variant="h6" gutterBottom >
                                My Account
                            </Typography>
                            <ul style={{ padding: '5px', fontSize: '14px', marginTop: '0px' }}>
                                <li style={{ marginBottom: '5px' }} >Track Orders</li>
                                <li style={{ marginBottom: '5px' }}>Shipping</li>
                                <li style={{ marginBottom: '5px' }}>Shipping</li>
                                <li style={{ marginBottom: '5px' }}>My Account</li>
                                <li style={{ marginBottom: '5px' }}>Order History</li>
                                <li style={{ marginBottom: '5px' }}>Returns</li>
                            </ul>
                        </Grid>

                        {/* Information */}
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography variant="h6" gutterBottom>
                                Information
                            </Typography>
                            <ul style={{ padding: '5px', fontSize: '14px', marginTop: '0px' }}>
                                <li style={{ marginBottom: '5px' }}>Our Story</li>
                                <li style={{ marginBottom: '5px' }}>Careers</li>
                                <li style={{ marginBottom: '5px' }}>Privacy Policy</li>
                                <li style={{ marginBottom: '5px' }}>Terms & Conditions</li>
                                <li style={{ marginBottom: '5px' }}>Latest News</li>
                                <li style={{ marginBottom: '5px' }}>Contact Us</li>
                            </ul>

                        </Grid>

                        {/* Talk To Us */}
                        <Grid item xs={12} md={3}>
                            <Typography variant="h6" gutterBottom>
                                Talk To Us
                            </Typography>
                            <Typography variant="body2" color="text.secondary" gutterBottom>
                                Got Questions? Call us
                            </Typography>
                            <Typography variant="h6" gutterBottom>
                                +966 595 035 008
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                <Mail size={20} />
                                <Typography variant="body2" sx={{ ml: 1 }}>
                                support@glamaura.com
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                                <MapPin size={20} />
                                <Typography variant="body2" sx={{ ml: 1 }}>
                                    79 Sleepy Hollow St. Jamaica, Jeddah 1432
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>

                    <Divider sx={{ my: 4 }} />

                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
                        <Typography variant="body2" color="text.secondary">
                            © 2024 All Rights Reserved By Vishwa Italiya.
                        </Typography>

                    </Box>
                </Container>
            </Box>
        </Box>
    );
}