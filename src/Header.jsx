import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Box,
  Badge,
} from '@mui/material';
import { Search, Favorite, ShoppingCart, Menu } from '@mui/icons-material';
import { useMediaQuery, useTheme } from '@mui/material';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const list = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Coupons', path: '/coupons' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
    { name: <Badge badgeContent={2} color="primary"><Favorite /></Badge>, path: '/favrite' },
    { name: <Badge badgeContent={4} color="primary"><ShoppingCart /></Badge>, path: '/cartcontext' },
  ];


  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ width: 250 }}>
      <List>
        {list.map((item, index) => (
          <ListItem
            button
            key={index}
            component={Link}
            to={item.path}
          >
            {typeof item.name === 'string' ? (
              <ListItemText primary={item.name} />
            ) : (
              <>
                <ListItemIcon>{item.name}</ListItemIcon>
                <ListItemText primary={item.path} />
              </>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (

    <AppBar position="sticky" sx={{ backgroundColor: '#8B4513', top: 0 }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          GlamAura
        </Typography>

        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <Menu />
            </IconButton>
            <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
              {drawer}
            </Drawer>
          </>
        ) : (
          <>
            {list.map((item, index) => (
              <Button
                key={index}
                color="inherit"
                component={Link}
                to={item.path}
                sx={{ minWidth: 'auto', padding: '6px 8px' }}
              >
                {item.name}
              </Button>
            ))}
          </>
        )}
      </Toolbar>
    </AppBar>

  );
};

export default Header;