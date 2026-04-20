import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
        mt: 6,
        position: "relative",
        zIndex: 1,
      }}
    >
      <Container sx={{ py: 4 }}>
        <Stack spacing={2}>
          <Typography variant="h6" sx={{ fontWeight: 800 }}>
            شركة سما الأمل الذهبية العامة محدودة المسؤولية
          </Typography>

          <Typography
            className="english-brand"
            sx={{ fontSize: 22, opacity: 0.9 }}
          >
            SAMA AL AMIL
          </Typography>

          <Typography color="text.secondary">
            العراق - بغداد - المأمون
          </Typography>

          <Divider />

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="space-between"
          >
            <Typography color="text.secondary">
              © {new Date().getFullYear()} سما الأمل
            </Typography>

            <Stack direction="row" spacing={2}>
              <Typography
                component={RouterLink}
                to="/"
                sx={{ color: "text.secondary", textDecoration: "none" }}
              >
                الرئيسية
              </Typography>
              <Typography
                component={RouterLink}
                to="/about"
                sx={{ color: "text.secondary", textDecoration: "none" }}
              >
                من نحن
              </Typography>
              <Typography
                component={RouterLink}
                to="/services"
                sx={{ color: "text.secondary", textDecoration: "none" }}
              >
                خدماتنا
              </Typography>
              <Typography
                component={RouterLink}
                to="/contact"
                sx={{ color: "text.secondary", textDecoration: "none" }}
              >
                تواصل معنا
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
