import { Box } from '@mui/material';
import React from 'react';
import {
    Container,
    Typography,
    Button,
    Card,
    CardMedia,
    CardContent,
    Grid,
    IconButton,
    Divider,
    Stack
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
} from 'lucide-react';
import { styled } from '@mui/material/styles';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

const MetadataItem = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.text.secondary,
    '& .MuiSvgIcon-root': {
        fontSize: 16,
        marginRight: theme.spacing(0.5),
    },
}));

export default function Blog() {
    return (
        <Box>
            {/* Banner Section */}
            <Box sx={{
                position: 'relative',
                width: '100%',
                height: '100%',
                marginBottom: { xs: '50px', md: '100px' }, // Responsive margin
            }}>
                <img
                    src={`${process.env.PUBLIC_URL}/blogpage.jpg`}
                    alt="Team working together"
                    layout="fill"
                    objectFit="cover"
                    width="100%"
                    height="100%"
                />
                <Box sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: '99%',
                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                }} />
                <Box sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                }}>
                    <Typography variant="h2" sx={{
                        fontSize: { xs: '2rem', md: '2.5rem' }, // Responsive font size
                        fontWeight: 'bold',
                        marginBottom: '0.5rem',
                    }}>
                        Our Blog
                    </Typography>
                    <Typography variant="body1" sx={{
                        fontSize: { xs: '1rem', md: '1.125rem' }, // Responsive font size
                        opacity: 0.75,
                    }}>
                        <span>Home</span> • <span>Blog</span>
                    </Typography>
                </Box>
            </Box>

            {/* Blog Content */}
            <Box>
                <Container maxWidth="md" sx={{ mb: { xs: 4, md: 6 } }}>
                    {/* First Card */}
                    <Card elevation={0} sx={{ mb: { xs: 3, md: 5 } }}>
                        <CardMedia
                            component="video"
                            height="400"
                            src={`${process.env.PUBLIC_URL}/productVideoOptimized.mp4`}
                            controls
                            alt="Sample video"
                            sx={{
                                width: '100%',
                                aspectRatio: '16/9', // Maintain 16:9 aspect ratio
                                height: 'auto',
                            }}
                        />
                        <CardContent>
                            <Stack direction="row" spacing={2} mb={2}>
                                <MetadataItem>
                                    <CalendarTodayIcon />
                                    <Typography variant="body2">July 21, 2023</Typography>
                                </MetadataItem>
                                <MetadataItem>
                                    <PersonIcon />
                                    <Typography variant="body2">John Smith</Typography>
                                </MetadataItem>
                                <MetadataItem>
                                    <ChatBubbleOutlineIcon />
                                    <Typography variant="body2">10 Comments</Typography>
                                </MetadataItem>
                            </Stack>
                            <Typography sx={{ fontSize: '20px', fontWeight: 600 }} component="h1" gutterBottom>
                                MAYCREATE® Makeup Brush Set 18pcs Premium Synthetic Makeup Brushes Set Makeup Tools Full Set Makeup Brush for Beginners Makeup Artists Makeup Brush Set
                            </Typography>
                            <Typography sx={{ fontSize: '20px', fontWeight: '700' }}>About this item :</Typography>
                            <Typography variant="body1" paragraph>
                                <ul>
                                    <li>🎀【COMPLETE MAKEUP BRUSH SET】: This 18 pcs makeup brushes is a pro-level brush set featuring all brush essentials-6 big kabuki brushes and 12 pcs precision brushes, foundation brushes, eye shadow brushes, concealer brush, and powder brush in an all-inclusive brush kit. These makeup brushes are an indispensable tool for creating exquisite makeup and the best choice for professional makeup artists or novices</li>
                                    <li>🌺【APPLY EVENLY AND QUICKLY】: The ability to grab cosmetics with makeup brushes is strong, and the powder attached to the makeup brush is very uniform. They makeup kit can better grasp the powder and spread evenly on the face, which not only makes your makeup more natural, but also gentle and non-irritating to the skin. Each make up brush in our set is comfortable, easy to use, and makes makeup application effortless and fast.</li>
                                    <li>💄【SOFT AND NO SHEDDING FIBER】: Soft bristles are made of durable, high-quality synthetic fibers, not easily damaged to ensure long-lasting use. The bristles are rich, soft and fluffy, and will not fall off easily. All makeup brushes are fine and dense, and they are suitable for even the most sensitive skin. High density fluffy bristles, soft but hard, make up brushes set hold cosmetics very well without shedding.</li>
                                </ul>
                            </Typography>
                        </CardContent>
                    </Card>

                    {/* Second Card */}
                    <Card elevation={0}>
                        <img
                            width="100%"
                            height="400"
                            src={`${process.env.PUBLIC_URL}/blog-big-5.webp`}
                        />
                        <CardContent>
                            <Stack direction="row" spacing={2} mb={2}>
                                <MetadataItem>
                                    <CalendarTodayIcon />
                                    <Typography variant="body2">November 17, 2023</Typography>
                                </MetadataItem>
                                <MetadataItem>
                                    <PersonIcon />
                                    <Typography variant="body2">Selina Gomz</Typography>
                                </MetadataItem>
                                <MetadataItem>
                                    <ChatBubbleOutlineIcon />
                                    <Typography variant="body2">19 Comments</Typography>
                                </MetadataItem>
                            </Stack>
                            <Typography sx={{ fontSize: '20px', fontWeight: 600 }} component="h1" gutterBottom>
                                Time for Spring Cleaning? Use These Tips From the Professionals
                            </Typography>
                            <Typography sx={{ fontSize: '20px', fontWeight: '700' }}>About this item :</Typography>
                            <Typography variant="body1" paragraph>
                                <ul>
                                    <li>🎀 sales process is critically important to the success of your reps and your business. If you have never seen a really skilled salesperson work, it seems almost effortless. They ask great questions, craftt perfect proposal, answer questions, address concerns and seamlessly seal the Underneath the surface of all of that, the salesperson has probably dedicated hours honing their craft and ensuring the process moves smoothly.</li>
                                    <li>🌺 One of the challenges that often surfaces when working with a remote sales team is a lack of transparency over what is happening, and where in the process things are taking place. We’re going to peel back the curtain and show you how to create the best sales.</li>
                                </ul>
                            </Typography>
                        </CardContent>
                    </Card>
                </Container>
            </Box>

            {/* Footer */}
            <Box component="footer" sx={{ bgcolor: '#f4f7f9', py: 6 }}>
                <Container maxWidth="lg">
                    <Grid container spacing={4}>
                        {/* Company Info */}
                        <Grid item xs={12} md={3}>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                                GlamAura
                            </Typography>
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
                            <Typography variant="h6" gutterBottom>
                                My Account
                            </Typography>
                            <ul style={{ padding: '5px', fontSize: '14px', marginTop: '0px' }}>
                                <li style={{ marginBottom: '5px' }}>Track Orders</li>
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
                                <Typography variant="body2" sx={{ ml: 1 }}>support@glamaura.com</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                <MapPin size={20} />
                                <Typography variant="body2" sx={{ ml: 1 }}>27 Division St, New York, NY 10002, USA</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Phone size={20} />
                                <Typography variant="body2" sx={{ ml: 1 }}>+971 487 349 16</Typography>
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
    );
}
