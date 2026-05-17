import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";
import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";
import ElectricalServicesRoundedIcon from "@mui/icons-material/ElectricalServicesRounded";
import HandshakeRoundedIcon from "@mui/icons-material/HandshakeRounded";
import SectionHeading from "../components/common/SectionHeading";

const heroImage =
  "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1400&q=80";

const showcaseImage =
  "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80";

const services = [
  {
    title: "المواد الإنشائية",
    text: "توفير مواد إنشائية تلائم احتياجات المشاريع والسوق العراقي.",
    icon: <BusinessCenterRoundedIcon />,
  },
  {
    title: "مواد البناء",
    text: "تجارة مواد البناء بمختلف أنواعها لتلبية احتياجات العملاء.",
    icon: <ConstructionRoundedIcon />,
  },
  {
    title: "العدد الإنشائية",
    text: "توفير عدد إنشائية مناسبة لأعمال البناء والتجهيز.",
    icon: <HandshakeRoundedIcon />,
  },
  {
    title: "العدد الكهربائية",
    text: "تجارة العدد الكهربائية بجميع أنواعها ضمن احتياجات السوق.",
    icon: <ElectricalServicesRoundedIcon />,
  },
];

const features = [
  "شركة مسجلة رسميًا",
  "التزام مهني في التعامل",
  "فهم لاحتياجات السوق العراقي",
  "بناء الثقة والاستمرارية في علاقات التوريد",
];

export default function HomePage() {
  return (
    <>
      <Box sx={{ pt: { xs: 8, md: 11 }, pb: { xs: 8, md: 11 } }}>
        <Container>
          <Grid container spacing={5} alignItems="center">
            <Grid item xs={12} md={6}>
              <Stack spacing={3}>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: "2.3rem", md: "4.2rem" },
                    maxWidth: 760,
                  }}
                >
                  شركة سما الأمل الذهبية
                </Typography>

                <Typography
                  className="english-brand"
                  sx={{
                    fontSize: { xs: 24, md: 34 },
                    color: "text.secondary",
                  }}
                >
                  SAMA AL AMAL
                </Typography>

                <Typography
                  color="text.secondary"
                  sx={{
                    fontSize: { xs: "1rem", md: "1.08rem" },
                    lineHeight: 2,
                    maxWidth: 700,
                  }}
                >
                  شركة عراقية متخصصة لتجارة المواد الإنشائية ومواد البناء والعدد
                  الإنشائية والكهربائية بجميع أنواعها، التي تلبي احتياجات السوق
                  العراقي.
                </Typography>

                <Typography
                  color="text.secondary"
                  sx={{ lineHeight: 2, maxWidth: 700 }}
                >
                  نحرص على تقديم أعمالنا وفق أسس من الجدية والالتزام والمهنية،
                  وبما ينسجم مع متطلبات السوق واحتياجات عملائنا من الشركات
                  والتجار والمكاتب والجهات الحكومية.
                </Typography>

                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                  <Button
                    component={RouterLink}
                    to="/contact"
                    variant="contained"
                    color="primary"
                    size="large"
                  >
                    تواصل معنا
                  </Button>

                  <Button
                    component={RouterLink}
                    to="/about"
                    variant="outlined"
                    color="secondary"
                    size="large"
                  >
                    اعرف المزيد
                  </Button>
                </Stack>
              </Stack>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  borderRadius: 8,
                  overflow: "hidden",
                  minHeight: { xs: 320, md: 560 },
                  border: (theme) => `1px solid ${theme.palette.divider}`,
                  boxShadow: (theme) =>
                    theme.palette.mode === "dark"
                      ? "0 16px 44px rgba(0,0,0,0.35)"
                      : "0 16px 44px rgba(15,50,73,0.12)",
                }}
              >
                <Box
                  component="img"
                  src={heroImage}
                  alt="Construction materials and building supplies"
                  sx={{
                    width: "100%",
                    height: "100%",
                    minHeight: { xs: 320, md: 560 },
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 7, md: 10 } }}>
        <Container>
          <SectionHeading
            eyebrow="خدماتنا"
            title="مواد بناء وعدد إنشائية وكهربائية تلائم احتياجات السوق"
            description="نوفّر مواد إنشائية ومواد بناء وعدد إنشائية وكهربائية بجميع أنواعها، بما ينسجم مع احتياجات السوق العراقي والعملاء في قطاع البناء والتجهيز."
          />

          <Grid container spacing={3}>
            {services.map((item) => (
              <Grid item xs={12} sm={6} md={3} key={item.title}>
                <Card sx={{ height: "100%" }}>
                  <CardContent sx={{ p: 3.5 }}>
                    <Stack spacing={2}>
                      <Box
                        sx={{
                          width: 58,
                          height: 58,
                          borderRadius: 3,
                          display: "grid",
                          placeItems: "center",
                          bgcolor: "primary.main",
                          color: "primary.contrastText",
                        }}
                      >
                        {item.icon}
                      </Box>

                      <Typography variant="h6">{item.title}</Typography>
                      <Typography
                        color="text.secondary"
                        sx={{ lineHeight: 1.9 }}
                      >
                        {item.text}
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 7, md: 10 } }}>
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  borderRadius: 8,
                  overflow: "hidden",
                  minHeight: 420,
                  border: (theme) => `1px solid ${theme.palette.divider}`,
                }}
              >
                <Box
                  component="img"
                  src={showcaseImage}
                  alt="Building materials supply and business logistics"
                  sx={{
                    width: "100%",
                    height: 420,
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <SectionHeading
                eyebrow="لماذا سما الأمل"
                title="الثقة والوضوح أساس كل علاقة تجارية ناجحة"
                description="نؤمن بأن نجاح العمل التجاري يقوم على الثقة والالتزام وبناء العلاقات المهنية المستقرة، ولذلك نحرص على تقديم صورة مؤسسية تعكس الجدية والوضوح في التعامل."
              />

              <Grid container spacing={2}>
                {features.map((item) => (
                  <Grid item xs={12} sm={6} key={item}>
                    <Card>
                      <CardContent sx={{ p: 2.5 }}>
                        <Typography variant="h6" sx={{ fontSize: "1rem" }}>
                          {item}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                sx={{ mt: 4 }}
              >
                <Button
                  component={RouterLink}
                  to="/services"
                  variant="contained"
                  color="primary"
                >
                  استعراض النشاط التجاري
                </Button>
                <Button
                  component={RouterLink}
                  to="/contact"
                  variant="outlined"
                  color="secondary"
                >
                  ابدأ التواصل
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
