import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}


function App() {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className="App">
      <Box sx={{ bgcolor: 'background.paper' }}>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Home" {...a11yProps(0)} />
            <Tab label="About" {...a11yProps(0)} />
            <Tab label="Education" {...a11yProps(1)} />
            <Tab label="Work" {...a11yProps(2)} />
            <Tab label="Blogs" {...a11yProps(2)} />
            <Tab label="Skills" {...a11yProps(2)} />
            <Tab label="Contact" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            Item One
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            Item Three
          </TabPanel>
        </SwipeableViews>
      </Box>
      <Box >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <a href='https://www.linkedin.com/in/akshaykumarmalpani/' target="_blank"><BottomNavigationAction icon={<LinkedInIcon />} /> </a>
          <a href='https://www.facebook.com/akshaykumar.malpani' target="_blank"><BottomNavigationAction icon={<FacebookIcon />} /> </a>
          <a href='https://www.instagram.com/akshaykumar_malpani/' target="_blank"><BottomNavigationAction icon={<InstagramIcon />} /> </a>
          <a href='https://twitter.com/apmalpani' target="_blank"><BottomNavigationAction icon={<TwitterIcon />} /> </a>
          <a href='https://www.youtube.com/channel/UCgRj_gFSDSrFBcLHPhgtG2Q' target="_blank"><BottomNavigationAction icon={<YouTubeIcon />} /> </a>
        </BottomNavigation>
      </Box>
    </div>
  );
}

export default App;
