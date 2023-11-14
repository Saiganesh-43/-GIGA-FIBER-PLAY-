import React from 'react';
import './BottomBar.css'; // Import your CSS file for styling
// import { Badge , styled , Box } from '@mui/material';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import DiningRoundedIcon from '@mui/icons-material/DiningRounded';
import AdsClickRoundedIcon from '@mui/icons-material/AdsClickRounded';
import PaymentsRoundedIcon from '@mui/icons-material/PaymentsRounded';
import { red } from '@mui/material/colors';
// const Icons = styled(Box)(({ theme }) => ({
//   // display: "flex",
//   gap: "5rem",
//   // flexWrap:'wrap'
  
// }))
const BottomBar = () => {
  return (
    <div className="bottom-bar">
     <div className="bottom-bar-item"><PlayArrowRoundedIcon sx={{ color: red.A700, fontSize: 35 }}/>Play</div>
      <div className="bottom-bar-item"><DiningRoundedIcon sx={{ color: red.A700, fontSize: 30 }}/>Eat</div>
      <div className="bottom-bar-item"><AdsClickRoundedIcon sx={{ color: red.A700, fontSize: 30 }}/>Quik</div>
      <div className="bottom-bar-item"><PaymentsRoundedIcon sx={{ color: red.A700, fontSize: 30 }}/>Pay</div>
    </div>
  );
};

export default BottomBar;
