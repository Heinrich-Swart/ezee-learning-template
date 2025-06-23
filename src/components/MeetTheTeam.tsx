import { Box, Container, Typography, Card } from '@mui/material';

export default function MeetTheFounder() {
  return (
    <Box sx={{ backgroundColor: '#FBE5A6', py: 10 }}>
      <Container maxWidth="md">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'center', md: 'flex-start' },
            gap: { xs: 4, md: 6 },
          }}
        >
          {/* Left: Image and caption */}
          <Box sx={{ flexShrink: 0, textAlign: 'center' }}>
            <Card
              elevation={4}
              sx={{
                borderRadius: 4,
                overflow: 'hidden',
                width: 300,
                height: 360,
                mx: 'auto',
                backgroundColor: 'transparent',

              }}
            >
              <Box
                component="img"
                src="/founder.jpg"
                alt="Kayla Smith"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
                
              />
            </Card>
            <Typography
              variant="caption"
              sx={{ display: 'block', mt: 1.5, color: 'text.secondary' }}
            >
              Kayla Smith, passionate advocate for home-based education in South Africa.
            </Typography>
          </Box>

          {/* Right: Text */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h4" gutterBottom>
              Meet the Founder
            </Typography>

            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
              With a heart rooted in compassion and a lifelong passion for education, our founder has always believed in the power of nurturing young minds. Her love for children goes beyond academics — it's about building confidence, creating safe learning spaces, and celebrating every small victory.
              <br /><br />
              Ezee Learning was born from this vision: to make quality education accessible, flexible, and joyful for learners at home. Through personalized tutoring, interactive resources, and a caring community, she ensures every child feels seen, supported, and inspired to succeed.
            </Typography>

            <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
              “Every child has the potential to shine — they just need someone who believes in them.
              That's what Ezee Learning is here for.”
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
