import React from 'react';
import {
    Box,
    TextField,
    Checkbox,
    Button,
    Typography,
    Container,
    Grid,
    FormControlLabel,
    IconButton,
    Divider
} from '@mui/material';
import { Facebook, Twitter, LinkedIn } from '@mui/icons-material';
import { Formik, Field, Form } from 'formik';
import { Mail, MapPin, Phone, Instagram as InstagramIcon, Linkedin } from 'lucide-react';
import * as Yup from 'yup';

export default function Contact() {
    const validationSchema = Yup.object({
        name: Yup.string().required('Please enter your name'),
        email: Yup.string().email('Invalid email address').required('Please enter your email'),
        subject: Yup.string().required('Please enter a subject'),
        message: Yup.string().required('Please enter your message')
    });

    const initialValues = {
        name: '',
        email: '',
        subject: '',
        message: '',
        saveInfo: false,
    };

    const handleSubmit = (values, { resetForm }) => {
        console.log('Form Submitted', values);
        alert('Message Sent!');
        resetForm();
    };

    return (
        <Box>
            <Container maxWidth="lg" >
                {/* Title Section */}
                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h2" sx={{ fontWeight: 'bold', fontSize: { xs: '2rem', md: '2.5rem' }, mb: 0, marginTop: '10px' }}>
                        Keep In Touch with Us
                    </Typography>
                    <Typography sx={{ fontSize: { xs: '1rem', md: '1.125rem' }, mt: 0, opacity: 0.75 }}>
                        Home • Contact
                    </Typography>
                </Box>

                {/* Form Section */}
                <Box sx={{ background: '#b4b3b31c', mt: 4, p: { xs: 2, md: 4 }, borderRadius: '10px' }}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={8}>
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={handleSubmit}
                            >
                                {({ errors, touched }) => (
                                    <Form noValidate autoComplete="off">
                                        <Typography variant="h4" gutterBottom>
                                            Send A Message
                                        </Typography>
                                        <Field
                                            as={TextField}
                                            name="name"
                                            fullWidth
                                            label="Your Name"
                                            variant="outlined"
                                            margin="normal"
                                            error={touched.name && Boolean(errors.name)}
                                            helperText={touched.name && errors.name}
                                        />
                                        <Field
                                            as={TextField}
                                            name="email"
                                            fullWidth
                                            label="Your Email"
                                            variant="outlined"
                                            margin="normal"
                                            error={touched.email && Boolean(errors.email)}
                                            helperText={touched.email && errors.email}
                                        />
                                        <Field
                                            as={TextField}
                                            name="subject"
                                            fullWidth
                                            label="Subject"
                                            variant="outlined"
                                            margin="normal"
                                            error={touched.subject && Boolean(errors.subject)}
                                            helperText={touched.subject && errors.subject}
                                        />
                                        <Field
                                            as={TextField}
                                            name="message"
                                            fullWidth
                                            label="Your Message"
                                            variant="outlined"
                                            margin="normal"
                                            multiline
                                            rows={4}
                                            placeholder="Write your message here..."
                                            error={touched.message && Boolean(errors.message)}
                                            helperText={touched.message && errors.message}
                                        />
                                        <Field
                                            name="saveInfo"
                                            type="checkbox"
                                            as={FormControlLabel}
                                            control={<Checkbox />}
                                            label="Save my name, email, and website in this browser for the next time I comment."
                                        />
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            size="large"
                                            type="submit"
                                            sx={{ mt: 2, backgroundColor: '#0f172a' }}
                                        >
                                            Send Message
                                        </Button>
                                    </Form>
                                )}
                            </Formik>
                        </Grid>

                        {/* Contact Info Section */}
                        <Grid item xs={12} md={4}>
                            <Box mt={{ xs: 4, md: 10 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    <img width="20%" src={`${process.env.PUBLIC_URL}/contact-icon-1.webp`} alt="contact email" />
                                    <Box ml={2}>
                                        <Typography variant="body2" sx={{ fontSize: '16px', color: 'gray' }}>contact@GlamAura.com</Typography>
                                        <Typography variant="body2" sx={{ fontWeight: '700' }}>+670 413 90 762</Typography>
                                    </Box>
                                </Box>

                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    <img width="20%" src={`${process.env.PUBLIC_URL}/contact-icon-2.webp`} alt="contact address" />
                                    <Box ml={2}>
                                        <Typography variant="body2" sx={{ fontSize: '16px' }}>84 Sleepy Hollow St.</Typography>
                                        <Typography variant="body2" sx={{ fontSize: '16px' }}>Jamaica, New York 1432</Typography>
                                    </Box>
                                </Box>

                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    <img width="20%" src={`${process.env.PUBLIC_URL}/contact-icon-3.webp`} alt="social media" />
                                    <Box ml={2}>
                                        <Typography variant="body2" sx={{ fontSize: '16px' }}>Find on social media</Typography>
                                        <Box mt={1}>
                                            <IconButton size="small" aria-label="facebook"><Facebook /></IconButton>
                                            <IconButton size="small" aria-label="twitter"><Twitter /></IconButton>
                                            <IconButton size="small" aria-label="linkedin"><LinkedIn /></IconButton>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                </Container >
                {/* Footer Section */}
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
            
        </Box >
    );
}
