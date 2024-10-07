// import React from 'react'
import React, { useState, useEffect } from 'react'
import {
  AppBar, Toolbar, Typography, Button, IconButton, Box,
  Container, Grid, Chip, Card, CardMedia, CardActions, CardContent, Popover,
  Avatar, Rating, Divider,
} from '@mui/material'
import { Search, Favorite, ShoppingCart, Visibility } from '@mui/icons-material'
import { GiLipstick } from "react-icons/gi";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { FormatQuote } from '@mui/icons-material'
import { Add, ChevronLeft, ChevronRight } from '@mui/icons-material'
import {
  Truck, DollarSign, Percent, Headphones, Facebook, Twitter, InstagramIcon, Linkedin, Mail, MapPin,
  Phone,
  Link,
} from 'lucide-react'
import Header from './Header';



const productCategories = [
  {
    title: 'Discover Skincare',
    products: 2,
    image: `${process.env.PUBLIC_URL}/beauty-category-1.jpg`
  },
  {
    title: 'Beauty of Skin',
    products: 2,
    image: `${process.env.PUBLIC_URL}/beauty-category-2.jpg`
  },
  {
    title: 'Awesome Lip Care',
    products: 2,
    image: `${process.env.PUBLIC_URL}/beauty-category-3.jpg`
  },
  {
    title: 'Facial Care',
    products: 2,
    image: `${process.env.PUBLIC_URL}/beauty-category-4.jpg`
  },
]

const featuredProducts = [
  {
    title: 'Matte Liquid Lipstick & Lip Liner',
    description: 'Molestias internos et commodi tempora dolores sapiente sed iste.',
    savings: 72,
    image: `${process.env.PUBLIC_URL}/shopping.webp`
  },
  {
    title: 'Crushed Liquid Lip - Cherry Crush',
    description: 'Molestias internos et commodi tempora dolores sapiente sed iste.',
    savings: 98,
    image: `${process.env.PUBLIC_URL}/shopping (1).webp`
  },
  {
    title: 'Mega Waterproof Concealer - 125 Bisque',
    description: 'Molestias internos et commodi tempora dolores sapiente sed iste.',
    savings: 133,
    image: `${process.env.PUBLIC_URL}/shopping (2).webp`
  },
]

const bestSellers = [
  {
    category: 'CREAM',
    name: 'Innisfree Face Wash',
    price: 68.00,
    image: `${process.env.PUBLIC_URL}/cream-1.webp`
  },
  {
    category: 'SUNKISSED',
    name: 'INIKA Mineral Sunkissed',
    price: 85.00,
    image: `${process.env.PUBLIC_URL}/powder-1.webp`
  },
  {
    category: 'LIP LINER',
    name: 'Grand Plumping Highlighter',
    price: 60.00,
    image: `${process.env.PUBLIC_URL}/lip-liner-1.webp`
  },
  {
    category: 'SKIN',
    name: 'Mielle Rosemary Mint Scalp',
    price: 62.00,
    image: `${process.env.PUBLIC_URL}/skin-1.webp`
  },
  {
    category: 'makeup brush',
    name: 'Wet Dewy Cream Beige',
    price: 90.00,
    image: `${process.env.PUBLIC_URL}/makeup-1.webp`
  },
  {
    category: 'cosmetics',
    name: 'Brand Cosmetic Product',
    price: 70.00,
    image: `${process.env.PUBLIC_URL}/cosmetics-1.webp`
  },
  {
    category: 'powder',
    name: 'Blue Rescue Face Mask',
    price: 72.00,
    image: `${process.env.PUBLIC_URL}/beauty-1.webp`

  },
  {
    category: 'makeup brush',
    name: 'Tea Tree Lemon For Fine Hair',
    price: 45.00,
    image: `${process.env.PUBLIC_URL}/cosmetics-4.webp`
  },
]
const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  function calculateTimeLeft() {
    const difference = +new Date(targetDate) - +new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    }

    return timeLeft
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearTimeout(timer)
  })

  const timerComponents = Object.keys(timeLeft).map((interval) => (
    <Box key={interval} sx={{ display: 'inline-block', mx: 1 }}>
      <Typography variant="h6" component="span">
        {timeLeft[interval]}
      </Typography>
      <Typography variant="caption" display="block">
        {interval}
      </Typography>
    </Box>
  ))

  return <Box>{timerComponents.length ? timerComponents : <Typography>Time's up!</Typography>}</Box>
}

const categories = ['All Collection', 'Trending', 'Beauty', 'Cosmetics']

const products = [
  {
    category: 'SUNKISSED',
    name: 'INIKA Mineral Sunkissed',
    price: 85.00,
    image: `${process.env.PUBLIC_URL}/powder-1.webp`
  },
  {
    category: 'LIP LINER',
    name: 'Grand Plumping Highlighter',
    price: 60.00,
    image: `${process.env.PUBLIC_URL}/lip-liner-1.webp`
  },
  {
    category: 'COSMETICS',
    name: 'Brand Cosmetic Product',
    price: 70.00,
    image: `${process.env.PUBLIC_URL}/cosmetics-1.webp`
  },
  {
    category: 'MAKEUP BRUSH',
    name: 'Wet Dewy Cream Beige',
    price: 90.00,
    image: `${process.env.PUBLIC_URL}/makeup-1.webp`
  },
  {
    category: 'MAKEUP BRUSH',
    name: 'Tea Tree Lemon For Fine Hair',
    price: 45.00,
    image: `${process.env.PUBLIC_URL}/cosmetics-4.webp`
  },
  {
    category: 'SKIN',
    name: 'Mielle Rosemary Mint Scalp',
    price: 63.00,
    image: `${process.env.PUBLIC_URL}/skin-1.webp`
  },
  {
    category: 'CREAM',
    name: 'Innisfree Face Wash',
    price: 68.00,
    image: `${process.env.PUBLIC_URL}/cream-1.webp`
  },
  {
    category: 'POWDER',
    name: 'Blue Rescue Face Mask',
    price: 72.00,
    image: `${process.env.PUBLIC_URL}/beauty-1.webp`
  },
]
const specialProducts = [
  {
    category: 'Powder',
    name: 'Blue Rescue Face Mask',
    price: 72.00,
    image: `${process.env.PUBLIC_URL}/beauty-1.webp`
  },
  {
    category: 'makeup brush',
    name: 'Tea Tree Lemon For Fine Hair',
    price: 45.00,
    image: `${process.env.PUBLIC_URL}/cosmetics-4.webp`
  },
  {
    category: 'lip liner',
    name: 'Grand Plumping Highlighter',
    price: 60.00,
    image: `${process.env.PUBLIC_URL}/lip-liner-1.webp`
  },
  {
    category: 'makeup brush',
    name: 'Wet Dewy Cream Beige',
    price: 90.00,
    image: `${process.env.PUBLIC_URL}/makeup-1.webp`
  },
]

const testimonials = [
  {
    id: 1,
    name: 'Salim Rana',
    role: 'Web Developer',
    avatar: `${process.env.PUBLIC_URL}/user-2.webp`,
    review: 'Suscipit tellus mauris a diam maecenas. Ut faucibus pulvinar elementum integer enim neque volutpat ac. Auctor urna nunc id cursus. Scelerisque purus semper eget duis at. Pharetra vel turpis nunc eget.',
  },
  {
    id: 2,
    name: 'Selina Gomz',
    role: 'CO Founder',
    avatar: `${process.env.PUBLIC_URL}/user-3.webp`,
    rating: 5,
    review: 'Suscipit tellus mauris a diam maecenas. Ut faucibus pulvinar elementum integer enim neque volutpat ac. Auctor urna nunc id cursus. Scelerisque purus semper eget duis at. Pharetra vel turpis nunc eget.',
  },
  {
    id: 3,
    name: 'John Doe',
    role: 'Designer',
    avatar: `${process.env.PUBLIC_URL}/user-1.webp`,
    rating: 4,
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  },
]

const features = [
  {
    icon: <Truck size={24} />,
    title: 'Free Delivery',
    description: 'Orders from all item',
  },
  {
    icon: <DollarSign size={24} />,
    title: 'Return & Refund',
    description: 'Money back guarantee',
  },
  {
    icon: <Percent size={24} />,
    title: 'Member Discount',
    description: 'On every order over $140.00',
  },
  {
    icon: <Headphones size={24} />,
    title: 'Support 24/7',
    description: 'Contact us 24 hours a day',
  },
]

export default function First() {
  const [anchorEl, setAnchorEl] = useState(null)
  const [anchorEl2, setAnchorEl2] = useState(null)
  const [currentProductIndex, setCurrentProductIndex] = useState(0)

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handlePopoverClose = () => {
    setAnchorEl(null)
  }
  const handlePopoverOpen2 = (event) => {
    setAnchorEl2(event.currentTarget)
  }

  const handlePopoverClose2 = () => {
    setAnchorEl2(null)
  }

  const open = Boolean(anchorEl)
  const open2 = Boolean(anchorEl2)

  const handlePrevProduct = () => {
    setCurrentProductIndex((prevIndex) =>
      prevIndex === 0 ? specialProducts.length - 1 : prevIndex - 1
    )
  }

  const handleNextProduct = () => {
    setCurrentProductIndex((prevIndex) =>
      prevIndex === specialProducts.length - 1 ? 0 : prevIndex + 1
    )
  }
  const [currentIndex, setCurrentIndex] = useState(0)

  return (

    <Box sx={{ flexGrow: 1 }}>
      <Box
        sx={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/slider-1.5e2c8309.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '600px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Container>
          <Typography variant="h6" color="white">
            Winter Collection 2023
          </Typography>
          <Typography
            variant={{ xs: 'h4', sm: 'h3', md: 'h2' }}
            color="white"
            sx={{
              mb: 4,
              fontSize: {
                xs: '1.5rem',
                sm: '2rem',
                md: '3rem',
              },
              textAlign: 'center' 
            }}
          >
            Be your kind of beauty
          </Typography>
          <Grid container spacing={2} sx={{ marginBottom: '30px' }}>
            <Grid item sx={{ margin: '0px 10px' }}>
              <Button startIcon={<GiLipstick />} sx={{ color: 'white' }}>
                High-end <br /> Cosmetics
              </Button>
            </Grid>
            <Grid item sx={{ margin: '0px 10px' }}>
              <Button sx={{ color: 'white' }}>Vegan <br /> Product</Button>
            </Grid>
            <Grid item sx={{ margin: '0px 10px' }}>
              <Button sx={{ color: 'white' }}>Express <br /> Make-up</Button>
            </Grid>
          </Grid>
          <Grid>
            <Button sx={{ color: 'white', background: '#8B4513', padding: '10px' }}>
              Discover Now
            </Button>
          </Grid>
        </Container>



      </Box>






      {/*  */}
      <Box sx={{ py: 8, backgroundColor: '#f5f5f5' }}>
        <Container>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
            <Box>
              <Typography variant="overline" sx={{ color: '#8B4513', display: 'flex' }}>
                Product Collection
              </Typography>
             
              <Typography
                variant={{ xs: 'h5', sm: 'h4', md: 'h3' }} 
                sx={{
                  fontWeight: 'bold',
                  color: '#333',
                  fontSize: {
                    xs: '1.5rem', 
                    sm: '2rem',   
                    md: '2.5rem', 
                    lg: '3rem'   
                  },
                  textAlign: 'center', 
                }}
              >
                Discover our products
              </Typography>
            </Box>
            <Button
              variant="outlined"
              endIcon={<ArrowForwardIcon />}
              sx={{ borderColor: '#8B4513', color: '#8B4513' }}
            >
              Shop All Products
            </Button>
          </Box>
          <Grid container spacing={3}>
            {productCategories.map((category, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card sx={{ position: 'relative', height: '100%' }}>
                  <CardMedia
                    component="img"
                    height="400"
                    image={category.image}
                    alt={category.title}
                  />
                  <CardContent
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      backgroundColor: 'rgba(0, 0, 0, 0.6)',
                      color: 'white',
                    }}
                  >
                    <Typography variant="h6" component="div">
                      {category.title}
                    </Typography>
                    <Typography variant="body2">{category.products} Products</Typography>
                    <Button
                      size="small"
                      sx={{ color: 'white', mt: 1 }}
                      endIcon={<ArrowForwardIcon />}
                    >
                      View Now
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      {/*  */}
      <Box sx={{ py: 8, backgroundColor: '#fff' }}>
        <Container>
          <Grid container spacing={3}>
            {featuredProducts.map((product, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 'none', border: '1px solid #e0e0e0' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={product.image}
                    alt={product.title}
                    sx={{ objectFit: 'contain', p: 2 }}
                  />
                  <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                    <Typography gutterBottom variant="h6" component="div">
                      {product.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {product.description}
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#8B4513' }}>
                      Save ${product.savings}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      {/* */}

      <Box sx={{ py: 8, backgroundColor: '#eae4de' }}>
        <Container>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
            <Box>
              <Typography variant="overline" sx={{ color: '#8B4513', display: 'flex' }}>
                Shop by Category
              </Typography>
             
              <Typography
                variant={{ xs: 'h5', sm: 'h4', md: 'h3' }} // Responsive variant based on screen size
                sx={{
                  fontWeight: 'bold',
                  color: '#333',
                  fontSize: {
                    xs: '1.5rem', // Font size for extra-small screens
                    sm: '2rem',   // Font size for small screens
                    md: '2.5rem', // Font size for medium screens
                    lg: '3rem'    // Font size for large screens
                  },
                  textAlign: 'center', // Center the text for better alignment
                  mb: 2, // Margin bottom for spacing
                }}
              >
                Best sellers in beauty
              </Typography>
            </Box>
            <Button
              variant="outlined"
              endIcon={<ShoppingCart />}
              sx={{ borderColor: '#8B4513', color: '#8B4513' }}
            >
              Shop All Products
            </Button>
          </Box>
          <Grid container spacing={3}>
            {bestSellers.map((product, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }}>
                  <CardMedia
                    component="img"
                    height="300"
                    image={product.image}
                    alt={product.name}
                    sx={{ objectFit: 'contain', p: 2 }}
                  />
                  <CardContent sx={{ flexGrow: 1, background: '#eae4de' }}>
                    <Typography variant="overline" color="text.secondary">
                      {product.category}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div" sx={{ marginBottom: '0px', fontSize: '14px' }}>
                      {product.name}
                    </Typography>
                    <Typography variant="h6" color="text.primary" sx={{ fontSize: '16px' }}>
                      ${product.price.toFixed(2)}
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: 'rgba(0,0,0,0.3)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      opacity: 0,
                      transition: 'opacity 0.3s',
                      '&:hover': {
                        opacity: 1,
                      }
                    }}
                  >
                    <Button
                      variant="contained"
                      startIcon={<ShoppingCart />}
                      sx={{ mb: 2, backgroundColor: '#8B4513', '&:hover': { backgroundColor: '#8B4513' } }}
                    >
                      Add To Cart
                    </Button>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <IconButton sx={{ bgcolor: 'white' }}>
                        <Favorite fontSize="small" sx={{ color: '#8B4513' }} />
                      </IconButton>
                      <IconButton sx={{ bgcolor: 'white' }}>
                        <Visibility fontSize="small" sx={{ color: '#8B4513' }} />
                      </IconButton>
                      <IconButton sx={{ bgcolor: 'white' }}>
                        <ShoppingCart fontSize="small" sx={{ color: '#8B4513' }} />
                      </IconButton>
                    </Box>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      {/*  */}

      <Box sx={{ margin: { xs: '0px 50px', sm: '0px 100px', md: '0px 100px', lg: '0px 200px' } }}>
        <Container maxWidth="lg" sx={{ my: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%', position: 'relative' }}>
                <CardMedia
                  component="img"
                  image={`${process.env.PUBLIC_URL}/collection-1.a3292fae.jpg`}
                  alt="Foundation and powder brush"
                  sx={{ objectFit: 'cover', height: '100%' }}
                />
                <CardContent
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'start',
                    alignItems: 'start',
                    bgcolor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for better visibility
                    color: 'white',
                    p: 2, // Add padding for content spacing
                  }}
                >
                  <Typography variant="overline" component="div" gutterBottom sx={{ marginTop: '20px' }}>
                    Cosmetics Collection
                  </Typography>

                  <Typography
                    variant={{ xs: 'h5', sm: 'h4', md: 'h3' }} // Responsive variant based on screen size
                    component="div"
                    gutterBottom
                    sx={{
                      fontWeight: 'bold',
                      fontSize: {
                        xs: '1rem', // Font size for extra-small screens
                        sm: '2rem',   // Font size for small screens
                        md: '2.5rem', // Font size for medium screens
                        lg: '3rem'    // Font size for large screens
                      },
                      textAlign: 'center', // Center the text for better alignment
                    }}
                  >
                    Foundation and <br /> powder brush
                  </Typography>
                  <Button
                    variant="contained"
                    endIcon={<ArrowForwardIcon />}
                    sx={{ mt: 2, bgcolor: '#8B4513', color: 'background.paper' }}
                  >
                    Discover Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%', position: 'relative' }}>
                <CardMedia
                  component="img"
                  height="100%"
                  image={`${process.env.PUBLIC_URL}/collection-2.dcbff2c9.jpg`}
                  alt="Woman in dark top"
                  sx={{ objectFit: 'cover' }}
                />
              </Card>
            </Grid>
          </Grid>
          <Box sx={{ mt: 4, textAlign: 'center' }}>
            <Typography variant="h6" gutterBottom>
              Discover our Beauty Selection
            </Typography>
            <Typography variant="subtitle1" color="primary" gutterBottom>
              75% Extra Discount for your...
            </Typography>
            <CountdownTimer targetDate="2024-12-31T23:59:59" />
          </Box>
        </Container>
      </Box>
      {/*  */}
      <Box>
        <Container maxWidth="lg" sx={{ my: 8 }}>
          <Typography variant="subtitle1" sx={{ color: '#8B4513' }} gutterBottom>
            Best Seller This Week's
          </Typography>
          
          <Typography
            variant={{ xs: 'h5', sm: 'h4', md: 'h3' }} // Responsive variant based on screen size
            component="h2" // Use 'h2' as the underlying HTML element
            gutterBottom
            sx={{
              fontWeight: 'bold',
              mb: 4,
              fontSize: {
                xs: '1.5rem', // Font size for extra-small screens
                sm: '2rem',   // Font size for small screens
                md: '2.5rem', // Font size for medium screens
                lg: '3rem'    // Font size for large screens
              },
              textAlign: 'start', // Center the text for better presentation
            }}
          >
            Enjoy the best quality
          </Typography>



          <Grid container spacing={4}>
            {products.map((product, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover .hoverContent': {
                      opacity: 1,
                      transform: 'translateY(0)',
                    },
                  }}
                >
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
                    <Typography
                      variant="subtitle2"
                      color="text.secondary"
                      gutterBottom
                    >
                      {product.category}
                    </Typography>
                    <Typography
                      variant="h6"
                      component="h3"
                      gutterBottom
                      sx={{ fontSize: '16px' }}
                    >
                      {product.name}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ color: '#8B4513', fontSize: '16px' }}
                    >
                      ${product.price.toFixed(2)}
                    </Typography>
                  </CardContent>

                  {/* Hover content */}
                  <Box
                    className="hoverContent"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      bgcolor: 'rgba(0, 0, 0, 0.3)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      opacity: 0,
                      transform: 'translateY(20px)',
                      transition: 'all 0.3s ease-in-out',
                    }}
                  >
                    <Button
                      variant="contained"
                      sx={{ mb: 2, width: '80%', bgcolor: '#8B4513' }}
                      startIcon={<ShoppingCart />}
                    >
                      Add To Cart
                    </Button>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <IconButton sx={{ bgcolor: 'white' }}>
                        <Favorite fontSize="small" sx={{ color: '#8B4513' }} />
                      </IconButton>
                      <IconButton sx={{ bgcolor: 'white' }}>
                        <Visibility fontSize="small" sx={{ color: '#8B4513' }} />
                      </IconButton>
                      <IconButton sx={{ bgcolor: 'white' }}>
                        <ShoppingCart fontSize="small" sx={{ color: '#8B4513' }} />
                      </IconButton>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      {/*  */}

     
      <Box sx={{ flexGrow: 1, p: 3, margin: { xs: '0px 20px', sm: '0px 40px', md: '0px 60px' } }}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Box sx={{ position: 'relative', height: '100%' }}>
                <CardMedia
                  component="img"
                  image={`${process.env.PUBLIC_URL}/special-big-1.webp`}
                  alt="Woman with long dark hair"
                  sx={{ height: { xs: '300px', md: '550px' }, objectFit: 'contain' }} // Responsive height
                />
                <IconButton
                  sx={{
                    position: 'absolute',
                    top: '20%',
                    left: '20%',
                    backgroundColor: 'white',
                    '&:hover': { backgroundColor: 'white' },
                  }}
                  onMouseEnter={handlePopoverOpen}
                  onMouseLeave={handlePopoverClose}
                >
                  <Add />
                </IconButton>
                <Popover
                  sx={{
                    pointerEvents: 'none',
                  }}
                  open={open}
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  onClose={handlePopoverClose}
                  disableRestoreFocus
                >
                  <Box sx={{ p: 2, maxWidth: 200 }}>
                    <Typography variant="h6">Face Care</Typography>
                    <Typography variant="body2">
                      Our face care products nourish and protect your skin.
                    </Typography>
                  </Box>
                </Popover>
                <IconButton
                  sx={{
                    position: 'absolute',
                    bottom: '30%',
                    right: '20%',
                    backgroundColor: 'white',
                    '&:hover': { backgroundColor: 'white' },
                  }}
                  onMouseEnter={handlePopoverOpen2}
                  onMouseLeave={handlePopoverClose2}
                >
                  <Add />
                </IconButton>
                <Popover
                  sx={{
                    pointerEvents: 'none',
                  }}
                  open={open2}
                  anchorEl={anchorEl2}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  onClose={handlePopoverClose2}
                  disableRestoreFocus
                >
                  <Box sx={{ p: 2, maxWidth: 200 }}>
                    <Typography variant="h6">Skincare Product</Typography>
                    <Typography variant="body2">
                      Discover our range of skincare products for all skin types.
                    </Typography>
                  </Box>
                </Popover>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box>
                <Typography variant="subtitle1" sx={{ color: '#8B4513' }} gutterBottom>
                  Trending This Week's
                </Typography>
                <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Special products
                </Typography>
                <Card sx={{ mt: 2, position: 'relative' }}>
                  <CardMedia
                    component="img"
                    height="300"
                    image={specialProducts[currentProductIndex].image}
                    alt={specialProducts[currentProductIndex].name}
                    sx={{ objectFit: 'contain', bgcolor: '#f6f6f6' }}
                  />
                  <CardContent>
                    <Typography variant="subtitle2" color="text.secondary" sx={{ textAlign: 'center' }}>
                      {specialProducts[currentProductIndex].category}
                    </Typography>
                    <Typography sx={{ fontSize: '16px', textAlign: 'center' }} component="div">
                      {specialProducts[currentProductIndex].name}
                    </Typography>
                    <Typography variant="h6" sx={{ color: '#8B4513', textAlign: 'center', fontSize: '16px' }}>
                      ${specialProducts[currentProductIndex].price.toFixed(2)}
                    </Typography>
                  </CardContent>
                  <IconButton
                    sx={{ position: 'absolute', top: '50%', left: 16, transform: 'translateY(-50%)', bgcolor: 'white' }}
                    onClick={handlePrevProduct}
                  >
                    <ChevronLeft />
                  </IconButton>
                  <IconButton
                    sx={{ position: 'absolute', top: '50%', right: 16, transform: 'translateY(-50%)', bgcolor: 'white' }}
                    onClick={handleNextProduct}
                  >
                    <ChevronRight />
                  </IconButton>
                </Card>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                  {specialProducts.map((_, index) => (
                    <Button
                      key={index}
                      sx={{
                        width: 10,
                        height: 10,
                        minWidth: 'auto',
                        borderRadius: '50%',
                        p: 0,
                        mx: 0.5,
                        bgcolor: index === currentProductIndex ? '#8B4513' : 'grey.300',
                      }}
                      onClick={() => setCurrentProductIndex(index)}
                    />
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/*  */}
      <Box>
        <Container maxWidth="lg" sx={{ py: 8 }}>

          <Box textAlign="center" mb={6}>
            <Typography
              variant="subtitle1"
              sx={{
                color: '#8B4513',
                fontSize: { xs: '0.8rem', sm: '1rem' }, // Responsive font size for subtitle
              }}
              gutterBottom
            >
              Customers Review
            </Typography>
            <Typography
              variant="h3"
              component="h2"
              fontWeight="bold"
              sx={{
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }, // Responsive font size for h3
              }}
            >
              What our Clients say
            </Typography>
          </Box>


          <Grid container spacing={4} >
            {testimonials.slice(currentIndex, currentIndex + 2).map((testimonial) => (
              <Grid item xs={12} md={6} key={testimonial.id}>
                <Box
                  sx={{
                    bgcolor: 'background.paper',
                    p: 4,
                    borderRadius: 2,
                    boxShadow: 1,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Box sx={{ mb: 2 }}>
                    <Rating value={testimonial.rating} readOnly precision={0.5} />
                  </Box>
                  <Typography variant="body1" paragraph>
                    {testimonial.review}
                  </Typography>
                  <Box sx={{ mt: 'auto', display: 'flex', alignItems: 'center' }}>
                    <Avatar src={testimonial.avatar} alt={testimonial.name} sx={{ mr: 2 }} />
                    <Box>
                      <Typography variant="subtitle1" fontWeight="bold">
                        {testimonial.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {testimonial.role}
                      </Typography>
                    </Box>
                    <FormatQuote sx={{ ml: 'auto', transform: 'rotate(180deg)', color: '#8B4513', fontSize: 40 }} />
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Button
              sx={{
                marginTop: '60px',
                minWidth: 14,
                width: 14,
                height: 14,
                borderRadius: '50%',
                p: 0,
                mr: 1,
                bgcolor: currentIndex === 0 ? '#8B4513' : 'grey.300',
              }}
              onClick={() => setCurrentIndex(0)}
            />
            <Button
              sx={{
                marginTop: '60px',
                minWidth: 14,
                width: 14,
                height: 14,
                borderRadius: '50%',
                p: 0,
                bgcolor: currentIndex !== 0 ? '#8B4513' : 'grey.300',
              }}
              onClick={() => setCurrentIndex(1)}
            />
          </Box>
        </Container>
      </Box>
      {/*  */}
      <Box sx={{ py: 4, borderTop: 1, borderBottom: 1, borderColor: 'divider' }}>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box
                    sx={{
                      mr: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 48,
                      height: 48,
                      borderRadius: '50%',
                      backgroundColor: '#8B4513',
                      color: 'primary.contrastText',
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Box>
                    <Typography variant="subtitle1" component="h3" sx={{ fontWeight: 'bold' }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
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
  )
}