import React, { ReactElement, ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import {
  Box,
  Link,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import type { ROUTE } from './../../typesShared';
import { COLORS } from './../../utilities';

export type HCHAPPBAR_TYPES = {
  routes: Array<ROUTE>;
  logo?: ReactNode;
  navTitle: string;
  userGreeting: string;
};

const CustomizedToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: theme.spacing(5),
  [theme.breakpoints.up('xs')]: {
    minHeight: theme.spacing(7),
  },
  svg: {
    marginRight: '1rem',
    height: '4rem',
    width: '8rem',
  },
}));

export const HchAppBar = ({
  logo,
  navTitle,
  routes,
  userGreeting,
}: HCHAPPBAR_TYPES): ReactElement => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: 'auto',
        backgroundColor: 'white',
        zIndex: 200,
        boxShadow: 1,
        flexGrow: 0,
      }}
    >
      <Container maxWidth="xl">
        <CustomizedToolbar disableGutters>
          {logo}
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', sm: 'flex' },
            }}
          >
            {navTitle}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', sm: 'none' },
              }}
            >
              {routes.map((page) => (
                <Link
                  key={page.key + 'b'}
                  component={NavLink}
                  to={page.path}
                  underline="none"
                  variant="button"
                  color="secondary"
                  sx={{
                    textTransform: 'capitalize',
                    '&.MuiLink-root:hover:': {
                      fontWeight: 'bold',
                      color: COLORS.HCH_PLUMB,
                    },
                  }}
                >
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.title}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="body1"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}
          >
            {navTitle}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                flexGrow: 1,
              }}
            >
              {routes.map((page) => (
                <Link
                  key={page.key + 'c'}
                  component={NavLink}
                  to={page.path}
                  underline="none"
                  variant="body1"
                  sx={{
                    textTransform: 'capitalize',
                    marginLeft: '1rem',
                    // color: 'black',
                    '&:hover:': {
                      color: purple[500],
                      fontWeight: 'bold',
                    },
                  }}
                >
                  {page.title}
                </Link>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Typography variant="body1" sx={{ p: 0 }}>
                {userGreeting}
              </Typography>
            </Box>
          </Box>
        </CustomizedToolbar>
      </Container>
    </Box>
  );
};

export default HchAppBar;
