import { Tabs } from '@mui/material';
import Tab from '@mui/material/Tab';
import { Box } from '@mui/system';
import React from 'react'

function CenteredTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    }

    return (
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <Tabs value={value} onChange={handleChange} centered>
                <Tab label="Item One" />
                <Tab label="Item Two" />
            </Tabs>
        </Box>
      );
}

export default CenteredTabs