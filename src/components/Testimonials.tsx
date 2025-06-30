'use client'

import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const userTestimonials = [
  {
    avatar: 'SD',
    name: 'Sipho Dlamini',
    reviewer: 'Parent of a Grade 12 learner',
    testimonial:
      "“Enrolling my child in Ezee Learning Centre has been one of the best decisions we've made. The flexibility and support have made homeschooling stress-free and effective.”",
  },
  {
    avatar: 'JM',
    name: 'Jabulani Mokoena',
    reviewer: 'Proud dad',
    testimonial:
      "“We've seen a huge boost in our daughter's confidence and enthusiasm for learning. The curriculum is engaging and the team is always helpful.”",
  },
  {
    avatar: 'PM',
    name: 'Pieter van der Merwe',
    reviewer: 'Homeschooling Parent',
    testimonial:
      "“The structured yet flexible program fits perfectly into our routine. I love being more involved in my child's education and seeing real progress.”",
  },
  {
    avatar: 'HP',
    name: 'Hendrik du Plessis',
    reviewer: 'Father of a Grade 12 student',
    testimonial:
      "“I was nervous about switching to homeschooling, but Ezee Learning Centre made the transition so smooth. My son is thriving academically and emotionally!”",
  },
  {
    avatar: 'TN',
    name: 'Thandiwe Ndlovu',
    reviewer: 'Parent',
    testimonial:
      "“We appreciate the consistent communication and resources provided. It feels like we're part of a supportive community that truly cares.”",
  },
  {
    avatar: 'AB',
    name: 'Ané Botha',
    reviewer: 'Proud parents of two kids',
    testimonial:
      "“From the easy-to-follow lessons to the amazing team, Ezee Learning Centre has exceeded all our expectations!”",
  },
];

export default function Testimonials() {

  return (
    <Box
      sx={{
        backgroundColor: "#D72638",
        color: "text.primary",
      }}
    >
      <Container
        id="testimonials"
        sx={{
          pt: { xs: 4, sm: 12 },
          pb: { xs: 8, sm: 16 },
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: "100%", md: "60%" },
            textAlign: { sm: "left", md: "center" },
          }}
        >
          <Typography
            component="h2"
            variant="h4"
            gutterBottom
            sx={{ color: "white" }}
          >
            Testimonials
          </Typography>
          <Typography variant="body1" sx={{ color: "white" }}>
            See why families love Ezee Learning Centre! Our flexible and
            engaging homeschooling curriculum helps students thrive at their own
            pace—anywhere, anytime. Real stories, real success, and a future
            full of possibilities.
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {userTestimonials.map((testimonial, index) => (
            <Grid
              size={{ xs: 12, sm: 6, md: 4 }}
              key={index}
              sx={{ display: "flex" }}
            >
              <Card
                variant="outlined"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  flexGrow: 1,
                }}
              >
                <CardContent>
                  <Typography
                    variant="body1"
                    gutterBottom
                    sx={{ color: "text.secondary", fontStyle: "italic" }}
                  >
                    {testimonial.testimonial}
                  </Typography>
                </CardContent>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: "#d4af37", color: "white" }}>
                        {testimonial.avatar}
                      </Avatar>
                    }
                    title={testimonial.name}
                    subheader={testimonial.reviewer}
                  />
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
