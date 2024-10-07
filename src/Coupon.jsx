import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Chip, Snackbar, Container, Tooltip, IconButton, Divider } from '@mui/material';
import { Grid, useMediaQuery, useTheme } from '@mui/material';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin } from 'lucide-react';

const CountdownTimer = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const timerComponents = Object.keys(timeLeft).map((interval) => (
        <Box key={interval} sx={{ display: 'inline-block', mx: 1 }}>
            <Typography variant="h6" component="span">
                {timeLeft[interval]}
            </Typography>
            <Typography variant="caption" display="block">
                {interval}
            </Typography>
        </Box>
    ));

    return <Box>{timerComponents.length ? timerComponents : <Typography>Time's up!</Typography>}</Box>;
};

const CouponCard = ({ image, title, discount, code }) => {
    const [open, setOpen] = useState(false);

    const handleCopyCode = () => {
        navigator.clipboard.writeText(code).then(() => {
            setOpen(true);
        });
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' } }}>
                <CardMedia
                    component="img"
                    height="200"
                    image={image}
                    alt={title}
                    sx={{ width: { xs: '100%', sm: '50%' }, objectFit: 'contain' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom sx={{ fontSize: { xs: '18px', sm: '20px' } }} component="div">
                        {title}
                    </Typography>
                    <Typography sx={{ fontSize: { xs: '16px', sm: '20px' } }} color="error" gutterBottom>
                        {discount} Off
                    </Typography>

                    <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
                        <CountdownTimer targetDate="2024-12-31T23:59:59" />
                    </Box>

                    <Chip
                        label="Coupon Inactive"
                        size="small"
                        onClick={handleCopyCode}
                        sx={{ cursor: 'pointer', marginTop: '10px' }}
                        component={Tooltip}
                        title="This coupon code will apply on Grocery type products and when you shop more than $400"
                    />
                </CardContent>
            </Box>
            <Box sx={{ p: 2, backgroundColor: 'rgba(0, 0, 0, 0.04)' }}>
                <Typography variant="body2" textAlign="center">
                    {code}
                </Typography>
            </Box>
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                open={open}
                autoHideDuration={2000}
                onClose={handleClose}
                message="Coupon code copied to clipboard!"
            />
        </Card>
    );
};

const coupons = [
    { image: `${process.env.PUBLIC_URL}/powder-1.webp`, title: 'Fifty Fifty', discount: '10%', code: 'FIF50' },
    { image: `${process.env.PUBLIC_URL}/lip-liner-1.webp`, title: 'Paper On Demand', discount: '14%', code: 'PAPER12' },
    { image: `${process.env.PUBLIC_URL}/cream-1.webp`, title: 'SUMMER Vacation', discount: '8%', code: 'SUMMER23' },
    { image: `${process.env.PUBLIC_URL}/makeup-1.webp`, title: 'August Gift Voucher', discount: '14%', code: 'AUGUST23' },
];

export default function Coupon() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box>
            <Container sx={{ px: 2 }}>
                <Box>
                    <h1 style={{ marginLeft: '35px', marginBottom: '0px' }}>
                        Grab Best Offer
                    </h1>

                    <ul style={{ display: 'flex', marginTop: '5px', fontSize: '14px' }}>Home<li style={{ marginLeft: '25px' }}>Coupon</li></ul>

                </Box>
                <Grid container spacing={3}>
                    {coupons.map((coupon, index) => (
                        <Grid item xs={12} sm={6} key={index}>
                            <CouponCard {...coupon} />
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Footer */}
            <Box component="footer" sx={{ bgcolor: '#f4f7f9', marginTop: '50px', py: 6 }}>
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
                                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
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
                            <ul style={{ padding: '5px', fontSize: '14px', marginTop: '0px', listStyle: 'none' }}>
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
                            <ul style={{ padding: '5px', fontSize: '14px', marginTop: '0px', listStyle: 'none' }}>
                                <li style={{ marginBottom: '5px' }}>Our Story</li>
                                <li style={{ marginBottom: '5px' }}>Careers</li>
                                <li style={{ marginBottom: '5px' }}>Privacy Policy</li>
                                <li style={{ marginBottom: '5px' }}>Terms & Conditions</li>
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
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                <MapPin size={20} />
                                <Typography variant="body2" sx={{ ml: 1 }}>
                                    524 Broadway, NYC
                                </Typography>
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
