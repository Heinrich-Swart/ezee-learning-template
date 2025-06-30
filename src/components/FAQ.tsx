"use client";

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqData = [
  {
    question: "What is American Curriculum?",
    answer: `The American Curriculum is an American High School Equivalency Certificate. It is internationally recognized as a high school diploma equivalent or Grade 12 equivalent in South Africa. Many parents choose this after following a variety of home education approaches.

The South African Qualifications Authority (SAQA) evaluates each submission of a foreign qualification on a case-by-case basis. SAQA has evaluated the American Curriculum and found the South African National Senior Certificate (NSC) as its closest comparable qualification.`,
  },
  {
    question: "What Are the Requirements for a American Curriculum Diploma?",
    answer: `- American Curriculum tests can be taken from 17 years of age.
- No prior grades are necessary to qualify to write the 4 American Curriculum tests.
- Good knowledge of English comprehension and basic math skills are recommended.

Subjects:
1. Mathematical Reasoning
2. Science
3. Reasoning through Language Arts (Reading, writing and language)
4. Social Studies

Exams are booked through the American Curriculum website and written at Pearson VUE testing centers located at Boston City campuses. There are approximately 45 centers across South Africa.`,
  },
  {
    question: "Can I study with a American Curriculum diploma?",
    answer: `Boston City Campus accepts American Curriculum students for many degree programs, provided they achieve the required scores. Boston handles the application process in alignment with USAf requirements. Several universities accept the American Curriculum diploma in South Africa.

- American Curriculum graduates can also apply for Higher Certificates (NQF Level 5), which may allow credit transfers (up to 50%) into degree programs.

- Overseas: Many universities accept the American Curriculum for admission. South African graduates may consider overseas or online universities for degree study.

- SAQA Evaluation: American Curriculum graduates can apply to SAQA for certification of an NSC (South Africa National Senior Certificate) as an NQF Level 4 qualification in South Africa.`,
  },
  {
    question: "Is this program self-paced?",
    answer: `Yes! With EzeeLearning you can study at your own pace. 
You get immediate access to all your study materials after registration, 
including a 24/7 online portal that works on computer or mobile.`,
  },
  {
    question: "What support does EzeeLearning provide?",
    answer: `- One-on-one online tutoring from a certified teacher.
- Exam preparation tailored to your needs.
- Regular progress check-ins to keep you on track.
- A personalized learning path that focuses on areas where you need the most help.`,
  },
  {
    question: "How do I know what to study first?",
    answer: `You start with a placement test. 
Our AI-powered system then recommends your ideal study sequence. 
This helps you skip what you already know and focus on what you need.`,
  },
  {
    question: "What study materials are included?",
    answer: `- Short video lessons (5–15 min each)
- Interactive quizzes with instant feedback
- Downloadable workbooks for extra practice`,
  },
  {
    question: "Can I use this qualification to study overseas?",
    answer: `Yes. Many international and online universities accept the American Curriculum (GED) for admission.
It’s recognized in many countries as a high school diploma equivalent. 
However, always check the specific university’s requirements before applying.`,
  },
];

export default function FAQ() {
  const [expanded, setExpanded] = React.useState<string[]>([]);

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(
        isExpanded
          ? [...expanded, panel]
          : expanded.filter((item) => item !== panel)
      );
    };

  return (
    <Box sx={{ backgroundColor: "#f49ac2", py: 10 }}>
      <Container
        id="faq"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Typography
          component="h2"
          variant="h4"
          sx={{
            color: "text.primary",
            width: { sm: "100%", md: "60%" },
            textAlign: { sm: "left", md: "center" },
          }}
        >
          Frequently Asked Questions
        </Typography>

        <Typography
          variant="body1"
          align="center"
          sx={{ color: "text.secondary", maxWidth: 700 }}
        >
          Have questions about the American Curriculum programme or how
          EzeeLearning works? We’ve answered some of the most common ones below
          to help guide your journey.
        </Typography>

        <Box sx={{ width: "100%" }}>
          {faqData.map((item, index) => {
            const panelId = `panel${index + 1}`;
            return (
              <Accordion
                key={panelId}
                expanded={expanded.includes(panelId)}
                onChange={handleChange(panelId)}
                sx={{
                  backgroundColor: "#fff5f9",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  border: "1px solid #e0a3bc",
                  borderRadius: 3,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                    borderColor: "#f49ac2",
                  },
                  mb: 2,
                  "&:before": {
                    display: "none",
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#333" }} />}
                  aria-controls={`${panelId}d-content`}
                  id={`${panelId}d-header`}
                  sx={{
                    backgroundColor: expanded.includes(panelId)
                      ? "#fde4ec"
                      : "#fff5f9",
                    "&:hover": {
                      backgroundColor: "#fde4ec",
                    },
                    borderBottom: expanded.includes(panelId)
                      ? "1px solid #e0a3bc"
                      : "none",
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{ color: "#000", fontWeight: 600 }} // Bold only here
                  >
                    {item.question}
                  </Typography>
                </AccordionSummary>
                <Box
                  sx={{
                    width: "100%",
                    textAlign: "center",
                    mt: "4px",
                    mb: "12px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "20px",
                      letterSpacing: "8px",
                      color: "#d4af37",
                    }}
                  >
                    • • •
                  </span>
                </Box>
                <AccordionDetails>
                  <Typography
                    variant="body1"
                    gutterBottom
                    sx={{
                      whiteSpace: "pre-line",
                      color: "#444",
                      lineHeight: 1.7,
                    }}
                  >
                    {item.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
