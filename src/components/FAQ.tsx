'use client'

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Place this array outside the component or import from a separate file
const faqData = [
  {
    question: "What is GED?",
    answer: `The GED is an American High School Equivalency Certificate. It is internationally recognized as a high school diploma equivalent or Grade 12 equivalent in South Africa. Many parents choose this after following a variety of home education approaches.

The South African Qualifications Authority (SAQA) evaluates each submission of a foreign qualification on a case-by-case basis. SAQA has evaluated the GED and found the South African National Senior Certificate (NSC) as its closest comparable qualification.`,
  },
  {
    question: "What Are the Requirements for a GED Diploma?",
    answer: `- GED tests can be taken from 17 years of age.
- No prior grades are necessary to qualify to write the 4 GED tests.
- Good knowledge of English comprehension and basic math skills are recommended.

Subjects:
1. Mathematical Reasoning
2. Science
3. Reasoning through Language Arts (Reading, writing and language)
4. Social Studies

Exams are booked through the GED website and written at Pearson VUE testing centers located at Boston City campuses. There are approximately 45 centers across South Africa.`,
  },
  {
    question: "Can I study with a GED diploma?",
    answer: `Boston City Campus accepts GED students for many degree programs, provided they achieve the required scores. Boston handles the application process in alignment with USAf requirements. Several universities accept the GED diploma in South Africa.

- GED graduates can also apply for Higher Certificates (NQF Level 5), which may allow credit transfers (up to 50%) into degree programs.

- Overseas: Many universities accept the GED for admission. South African graduates may consider overseas or online universities for degree study.

- SAQA Evaluation: GED graduates can apply to SAQA for certification of an NSC (South Africa National Senior Certificate) as an NQF Level 4 qualification in South Africa.`,
  },
];

export default function FAQ() {
  const [expanded, setExpanded] = React.useState<string[]>([]);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(
        isExpanded
          ? [...expanded, panel]
          : expanded.filter((item) => item !== panel),
      );
    };

  return (
    <Container
      id="faq"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Typography
        component="h2"
        variant="h4"
        sx={{
          color: 'text.primary',
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        Frequently Asked Questions
      </Typography>
      <Box sx={{ width: '100%' }}>
        {faqData.map((item, index) => {
          const panelId = `panel${index + 1}`;
          return (
            <Accordion
              key={panelId}
              expanded={expanded.includes(panelId)}
              onChange={handleChange(panelId)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`${panelId}d-content`}
                id={`${panelId}d-header`}
              >
                <Typography component="span" variant="subtitle2">
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{ whiteSpace: 'pre-line' }}
                >
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Box>
    </Container>
  );
}
