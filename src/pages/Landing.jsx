// pages/Landing.jsx
import { Box, Typography, Button, Paper, Grid } from "@mui/material";
import PartnerCarousel from "../components/PartnerCarousel";
import logo from "../assets/logo2.png";

export default function Landing() {
  return (
    <Grid container justifyContent="center" sx={{ px: 2 }}>
      <Grid item md={10} xs={12}>
        {/* HERO SECTION */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            mt: 4,
            borderRadius: 3,
            overflow: "hidden",
            height: { xs: 350, md: 450 },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* BACKGROUND IMAGE */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "url('https://ratback.tdelta.net/public/uzf/1/mud2qfghez/car-tires.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "brightness(0.45)",
            }}
          />

          {/* TRANSPARENT COLOR OVERLAY */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, rgba(11, 60, 109, 0.29), rgba(25,118,210,0.35))",
              backdropFilter: "blur(2px)",
            }}
          />

          {/* CONTENT */}
          <Box
            sx={{
              position: "relative",
              textAlign: "center",
              px: 2,
              maxWidth: "900px",
              color: "white",
            }}
          >
            <Box
              component={"img"}
              src={logo}
              sx={{ height: { md: 120, sm: 90, xs: 80 } }}
            />
            <Typography
              variant="h3"
              fontWeight={700}
              sx={{
                textShadow: "0 2px 12px rgba(0,0,0,0.35)",
                fontSize: { xs: "2rem", md: "3rem" },
                opacity: 0.9,
              }}
            >
              Quality Auto Spare Parts
            </Typography>

            <Typography
              variant="h6"
              sx={{
                mt: 2,
                opacity: 0.85,
                textShadow: "0 1px 8px rgba(0,0,0,0.25)",
              }}
            >
              Genuine spare parts, accessories, tyres, and automotive batteries.
            </Typography>

            <Button
              variant="contained"
              size="large"
              sx={{
                mt: 4,
                backgroundColor: "rgba(255,255,255,0.2)",
                border: "1px solid rgba(255,255,255,0.3)",
                backdropFilter: "blur(4px)",
                color: "white",
                fontWeight: 600,
                px: 4,
              }}
              href="/products"
            >
              VIEW PRODUCTS
            </Button>
          </Box>
        </Box>

        {/* FEATURES */}
        <Grid container spacing={4} sx={{ mt: 6 }}>
          {["Genuine Spare Parts", "Automotive Batteries", "Premium Tyres"].map(
            (text, i) => (
              <Grid item md={4} xs={12} key={i}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    borderRadius: 3,
                    background: "rgba(255,255,255,0.55)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <Typography variant="h6" fontWeight={600}>
                    {text}
                  </Typography>

                  <Typography sx={{ mt: 1 }}>
                    We supply reliable and high-quality automotive products.
                  </Typography>
                </Paper>
              </Grid>
            )
          )}
        </Grid>

        {/* HALF IMAGE / HALF TEXT SECTION */}
        <Grid container spacing={4} alignItems="center" sx={{ mt: 10, px: 2 }}>
          {/* IMAGE LEFT */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: "100%",
                height: { xs: 250, md: 350 },
                borderRadius: 3,
                overflow: "hidden",
              }}
            >
              <Box
                component="img"
                src="https://ratback.tdelta.net/public/uzf/1/mud2qfghez/car-accessories.webp"
                alt="Automotive Accessories"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Grid>

          {/* TEXT RIGHT */}
          <Grid item xs={12} md={6}>
            <Box sx={{ px: { xs: 1, md: 4 } }}>
              <Typography
                variant="h4"
                fontWeight={700}
                sx={{
                  mb: 2,
                  lineHeight: 1.2,
                }}
              >
                Space to make your <br />
                greatest impact.
              </Typography>

              <Typography variant="h6" sx={{ opacity: 0.85, mb: 3 }}>
                Tal Aljazerah – a name synonymous with reliability and
                excellence in customer service.
              </Typography>

              <Button
                variant="contained"
                color="secondary"
                href="/contact"
                sx={{
                  fontWeight: 600,
                  px: 4,
                  py: 1.2,
                  borderRadius: 2,
                }}
              >
                Get Your Place
              </Button>
            </Box>
          </Grid>
        </Grid>

        {/* PARTNER CAROUSEL — FIXED */}
        <Box sx={{ width: "100%", display: "block", mx: "auto" }}>
          <PartnerCarousel />
        </Box>
      </Grid>
    </Grid>
  );
}
