import React from 'react';
import { Badge, styled, Box } from '@mui/material';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { red } from '@mui/material/colors';
import MenuIcon from '@mui/icons-material/Menu';
import AWL from '../Images/AW LOGO.png';
import GFP from '../Images/GF Logo.png';
import './Header.css'
// import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Icons = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "20px",
}))

function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <nav className='header'>
            <div className='HeaderEEE'>
            <img className='Andriod_logo' src={AWL} alt="Andriod Logo" />
            <img className='header_logo' src={GFP} alt="logo" />
            <div className='header_search' >
                <input type="text" placeholder='Search' className='header_input' />
                <select name="All Category" id="All Category" className='header_select' placeholder='All Category'>
                    <option value="">All Category</option>
                    <option value="">Entertainment</option>
                    <option value="">Groceries</option>
                    <option value="">Tickets Booking</option>
                    <option value="">Eating Food</option>
                    <option value="">Recharge</option>
                    {/* Add more options here */}
                </select>
                <button className='header_button'>Search</button>
            </div>
            <div className='header_elementss'>
                <Icons>
                    <Badge badgeContent={null} color="primary" className='PIcon'>
                        <PersonRoundedIcon sx={{ color: red.A700, fontSize: 25 }} />
                        <p>Profile</p>
                    </Badge>
                    <Badge badgeContent={null} color="primary" className='MIcon'>
                        <MessageRoundedIcon sx={{ color: red.A700, fontSize: 25 }} />
                        <p>Message</p>
                    </Badge>
                    <Badge badgeContent={null} color="primary" className='HIcon'>
                        <FavoriteRoundedIcon sx={{ color: red.A700, fontSize: 25 }} />
                        <p>Orders</p>
                    </Badge>
                    <Badge badgeContent={null} color="primary" className='CIcon'>
                        <ShoppingCartRoundedIcon sx={{ color: red.A700, fontSize: 25 }} />
                        <p>My Cart</p>
                    </Badge>
                </Icons>
            </div>
            <div className='MenIcon'>
                {/* <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        textDecoration: 'none',
                        padding: '0%',

                    }}
                > */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    position: 'relative',
                    top: '0.4rem'
                }}>
                    <MenuIcon id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        sx={{ color: red.A700, fontSize: 36, }} />
                    <p>Menu</p>
                </div>
                {/* </Button> */}
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose} sx={{ gap: '0.3rem' }}><PersonRoundedIcon sx={{ color: red.A700, fontSize: 25 }} />Profile</MenuItem>
                    <MenuItem onClick={handleClose} sx={{ gap: '0.3rem' }}><MessageRoundedIcon sx={{ color: red.A700, fontSize: 25 }} />Messages</MenuItem>
                    <MenuItem onClick={handleClose} sx={{ gap: '0.3rem' }}><FavoriteRoundedIcon sx={{ color: red.A700, fontSize: 25 }} />Orders</MenuItem>
                    <MenuItem onClick={handleClose} sx={{ gap: '0.3rem' }}><ShoppingCartRoundedIcon sx={{ color: red.A700, fontSize: 25 }} />My Cart</MenuItem>
                </Menu>
            </div>
            </div>
        </nav>
    )
}

export default Header;
