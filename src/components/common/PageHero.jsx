import { Box, Container, Typography } from "@mui/material";

export default function PageHero({ title, subtitle }) {
  return (
    <Box
      sx={{
        pt: { xs: 8, md: 11 },
        pb: { xs: 5, md: 7 },
      }}
    >
      <Container>
        <Box
          sx={{
            p: { xs: 3, md: 5 },
            borderRadius: 3,
            border: (theme) => `1px solid ${theme.palette.divider}`,
            background: (theme) =>
              theme.palette.mode === "dark"
                ? "linear-gradient(135deg, rgba(119,124,83,0.16), rgba(149,177,198,0.08))"
                : "linear-gradient(135deg, rgba(119,124,83,0.10), rgba(149,177,198,0.12))",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2.1rem", md: "3.6rem" },
              mb: 2,
            }}
          >
            {title}
          </Typography>

          <Typography
            color="text.secondary"
            sx={{
              maxWidth: 900,
              lineHeight: 1.95,
            }}
          >
            {subtitle}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
