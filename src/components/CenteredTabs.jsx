import { Tabs } from '@mui/material';
import Tab from '@mui/material/Tab';
import { Box } from '@mui/system';
import React, { useState } from 'react'

function CenteredTabs() {
    const [activeTab, setActiveTab] = useState("trendingMovie");

    const handleChange = (event, newValue) => {
      setActiveTab(newValue);
    }

    return (
        <Box sx={{ width: 800, bgcolor: 'background.paper' }}>
            <Tabs value={activeTab} onChange={handleChange} centered variant='fullWidth'>
                <Tab label="Movie (Trending)" value="trendingMovie"/>
                <Tab label="Movie (Best of All Time)" value="allTimeBestMovie"/>
                <Tab label="TV Series (Trending)" value="trendingTv"/>
                <Tab label="TV Series (Best of All Time)" value="allTimeBestTv"/>
            </Tabs>
        </Box>
      );
}

export default CenteredTabs