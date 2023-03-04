import { useState, useEffect } from "react";
import { Box, Stack, Typography} from '@mui/material/';

const Feed = () => {
  return (
    //where md is the medium device
    <Stack sx={{flexDirection: {sx: "column", md: "row"}}}>
      <Box sx={{ height: { sx: "auto", md: '92vh'}, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
        Sidebar
        <Typography>
          Copyright @ 2023 Naushad
        </Typography>
      </Box>
    </Stack>
  )
}

export default Feed;