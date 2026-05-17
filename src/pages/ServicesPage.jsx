import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import PageHero from "../components/common/PageHero";
import SectionHeading from "../components/common/SectionHeading";

const servicesImage =
  "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1400&q=80";

const services = [
  "تجارة المواد الإنشائية",
  "تجارة مواد البناء",
  "تجارة العدد الإنشائية",
  "تجارة العدد الكهربائية",
  "تجهيز احتياجات المشاريع الإنشائية",
  "التعامل مع الشركات والمقاولين",
  "توفير مواد ومنتجات تلائم السوق العراقي",
  "بناء علاقات توريد مستقرة مع العملاء والشركاء",
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="خدماتنا ونشاطنا"
        subtitle="تتمحور أعمال الشركة حول تجارة المواد الإنشائية ومواد البناء والعدد الإنشائية والكهربائية بجميع أنواعها، بما يلبي احتياجات السوق العراقي والشركات والمقاولين والجهات العاملة في قطاع البناء والتجهيز."
      />

      <Box sx={{ pb: { xs: 7, md: 10 } }}>
        <Container>
          <Grid container spacing={5} alignItems="center">
            <Grid item xs={12} md={6}>
              <SectionHeading
                eyebrow="مجالات العمل"
                title="مواد بناء وعدد إنشائية وكهربائية وفق متطلبات السوق"
                description="تتمثل أنشطة الشركة في توفير وتجارة المواد الإنشائية ومواد البناء والعدد الإنشائية والكهربائية بمختلف أنواعها، مع التركيز على تلبية احتياجات السوق العراقي والشركات والمقاولين والجهات العاملة في قطاع البناء."
              />
            </Grid>

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
                  src={servicesImage}
                  alt="Construction materials and building supplies"
                  sx={{
                    width: "100%",
                    height: 420,
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={3} sx={{ mt: 1 }}>
            <Grid item xs={12} md={7}>
              <Card>
                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                  <List disablePadding>
                    {services.map((item) => (
                      <ListItem key={item} disableGutters sx={{ py: 1.25 }}>
                        <ListItemIcon sx={{ minWidth: 40 }}>
                          <CheckCircleRoundedIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>
                              {item}
                            </Typography>
                          }
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={5}>
              <Card sx={{ height: "100%" }}>
                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                  <Typography variant="h5" sx={{ mb: 2.5 }}>
                    كيف نقدّم خدماتنا؟
                  </Typography>

                  <Typography color="text.secondary" sx={{ lineHeight: 2 }}>
                    نعتمد على الجدية والمرونة في توفير المواد والعدد المطلوبة
                    للمشاريع الإنشائية، مع اهتمام خاص بتلبية احتياجات العملاء
                    وفق طبيعة السوق العراقي ومتطلبات قطاع البناء.
                  </Typography>

                  <Typography
                    color="text.secondary"
                    sx={{ lineHeight: 2, mt: 2 }}
                  >
                    كما نحرص على بناء علاقات توريد مستقرة مع العملاء والشركاء،
                    بما يدعم استمرارية العمل ويوفر حلولًا مناسبة لاحتياجات
                    المشاريع والجهات العاملة في السوق العراقي.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
