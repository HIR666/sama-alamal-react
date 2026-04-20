import { Box, Chip, Stack, Typography } from "@mui/material";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}) {
  return (
    <Stack
      spacing={2}
      sx={{
        textAlign: centered ? "center" : "right",
        alignItems: centered ? "center" : "flex-start",
        mb: 5,
      }}
    >
      {eyebrow && <Chip label={eyebrow} color="primary" variant="outlined" />}

      <Typography
        variant="h3"
        sx={{
          maxWidth: 820,
          fontSize: { xs: "2rem", md: "3rem" },
        }}
      >
        {title}
      </Typography>

      {description && (
        <Typography
          color="text.secondary"
          sx={{
            maxWidth: 850,
            fontSize: { xs: "1rem", md: "1.08rem" },
            lineHeight: 1.95,
          }}
        >
          {description}
        </Typography>
      )}

      <Box
        sx={{
          width: 90,
          height: 4,
          borderRadius: 999,
          bgcolor: "primary.main",
        }}
      />
    </Stack>
  );
}
