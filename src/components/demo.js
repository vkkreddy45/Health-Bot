import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

export function Demo({videoSrc}) {
  return (
    <Box id="demo-page">
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 5 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
          <Typography
            component="h1"
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
            }}
          >
            <Typography
              component="span"
              variant="h3"
              sx={{
                color: (theme) =>
                  theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
              }}
            >
             Your Personal Health Assistant
            </Typography>
          </Typography>
          <Typography variant="body1" textAlign="center" color="text.secondary">
          Let HealthBot help you make healthier choices, manage conditions, and answer your health questions.
          </Typography>
            {/* <div className="mx-auto aspect-w-16 aspect-h-9 overflow-hidden rounded-xl object-cover object-center sm:w-full">
                <video controls className="w-full h-auto" style={{ }}>
                  <source src="/videos/Promotional.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
            </div> */}
            <video controls className="w-full h-auto" style={{ maxWidth: '1000px' }}>
            {/* Include video source here */}
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Stack>
      </Container>
    </Box>
  );
}
