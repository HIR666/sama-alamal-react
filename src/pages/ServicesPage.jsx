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
  "التجارة العامة",
  "الاستيراد",
  "التصدير",
  "المقايضة للسلع والبضائع",
  "تجهيز السلع والبضائع",
  "التعامل مع شركات ومؤسسات القطاع الخاص",
  "التعامل مع الجهات الحكومية",
  "المساهمة في بناء علاقات تجارية داخل العراق وخارجه",
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="خدماتنا ونشاطنا"
        subtitle="تمارس الشركة أعمالها في إطار التجارة العامة، وتشمل أنشطتها مختلف الأعمال المرتبطة بالاستيراد والتصدير والمقايضة وتجهيز السلع والبضائع والتعامل مع شركات ومؤسسات وجهات متعددة داخل العراق وخارجه."
      />

      <Box sx={{ pb: { xs: 7, md: 10 } }}>
        <Container>
          <Grid container spacing={5} alignItems="center">
            <Grid item xs={12} md={6}>
              <SectionHeading
                eyebrow="مجالات العمل"
                title="أنشطة تجارية متنوعة وفق متطلبات السوق"
                description="تتمثل أنشطة الشركة في مزاولة أعمال التجارة العامة بكافة صورها المشروعة، بما في ذلك الاستيراد والتصدير والمقايضة وتجهيز السلع والبضائع والتعامل مع مختلف الجهات من شركات وتجار ومكاتب ومؤسسات حكومية داخل العراق وخارجه."
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
                  alt="Global trade and logistics"
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
                    نعتمد على الجدية والمرونة في تنفيذ الأعمال التجارية، مع
                    اهتمام خاص بتوفير حلول مناسبة وفعالة للجهات المختلفة، سواء
                    في القطاع الخاص أو الحكومي، وبما ينسجم مع احتياجات السوق.
                  </Typography>

                  <Typography
                    color="text.secondary"
                    sx={{ lineHeight: 2, mt: 2 }}
                  >
                    كما نحرص على بناء علاقات تجارية مستقرة داخل العراق وخارجه،
                    بما يفتح المجال أمام فرص توسع وتعاون مستمرة.
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
