import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import Diversity3RoundedIcon from "@mui/icons-material/Diversity3Rounded";
import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import PageHero from "../components/common/PageHero";
import SectionHeading from "../components/common/SectionHeading";

const aboutImage =
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80";

const teamImage =
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80";

const values = [
  {
    title: "شركة مسجلة رسميًا",
    text: "نعمل ضمن إطار مؤسسي واضح يعكس الجدية والموثوقية في جميع تعاملاتنا.",
    icon: <VerifiedRoundedIcon />,
  },
  {
    title: "التزام مهني في التعامل",
    text: "نضع المهنية والوضوح في مقدمة أسلوبنا في إدارة العلاقات التجارية.",
    icon: <WorkspacePremiumRoundedIcon />,
  },
  {
    title: "شراكات وعلاقات مستقرة",
    text: "نبني علاقات تعاون مستمرة مع الموردين والشركاء والعملاء بما يخدم المصالح المشتركة.",
    icon: <Diversity3RoundedIcon />,
  },
  {
    title: "فهم للسوق المحلي والخارجي",
    text: "نواكب احتياجات جهات متعددة داخل العراق وخارجه ونطوّر أعمالنا بناءً على ذلك.",
    icon: <PublicRoundedIcon />,
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="من نحن"
        subtitle="شركة سما الأمل الذهبية العامة محدودة المسؤولية هي شركة عراقية مقرها في بغداد - المأمون، متخصصة في تجارة المواد الإنشائية ومواد البناء والعدد الإنشائية والكهربائية بجميع أنواعها، بما يلبي احتياجات السوق العراقي."
      />

      <Box sx={{ pb: { xs: 7, md: 10 } }}>
        <Container>
          <Grid container spacing={5} alignItems="center">
            <Grid item xs={12} md={6}>
              <SectionHeading
                eyebrow="نبذة تعريفية"
                title="حضور مهني موثوق قائم على الجدية والاستمرارية"
                description="تسعى الشركة إلى بناء حضور مهني موثوق في السوق من خلال الالتزام بأعلى درجات الجدية في العمل، وتطوير علاقات تعاون مستمرة مع العملاء والشركاء والموردين، بما يحقق المصالح المشتركة ويدعم فرص النمو والتوسع."
              />

              <Stack spacing={2.5}>
                <Typography color="text.secondary" sx={{ lineHeight: 2 }}>
                  نعمل في مجال تجارة المواد الإنشائية ومواد البناء والعدد
                  الإنشائية والكهربائية، مع تركيز واضح على توفير منتجات تلائم
                  احتياجات السوق العراقي والجهات العاملة في قطاعات البناء
                  والتجهيز.، مع تركيز واضح على المرونة والاستجابة لاحتياجات
                  السوق المحلي والخارجي， وبما ينسجم مع متطلبات الجهات الحكومية
                  والخاصة والتجارية.
                </Typography>

                <Typography color="text.secondary" sx={{ lineHeight: 2 }}>
                  هدفنا هو تقديم صورة مؤسسية راقية تعبّر عن الثقة والوضوح
                  والالتزام، مع الحرص على بناء علاقات مهنية مستقرة وطويلة الأمد.
                </Typography>
              </Stack>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  borderRadius: 8,
                  overflow: "hidden",
                  minHeight: 480,
                  border: (theme) => `1px solid ${theme.palette.divider}`,
                }}
              >
                <Box
                  component="img"
                  src={aboutImage}
                  alt="Corporate office interior"
                  sx={{
                    width: "100%",
                    height: 480,
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ pb: { xs: 7, md: 10 } }}>
        <Container>
          <Grid container spacing={4}>
            {values.map((item) => (
              <Grid item xs={12} sm={6} key={item.title}>
                <Card sx={{ height: "100%" }}>
                  <CardContent sx={{ p: 3.5 }}>
                    <Stack spacing={2}>
                      <Box
                        sx={{
                          width: 56,
                          height: 56,
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

      <Box sx={{ pb: { xs: 7, md: 10 } }}>
        <Container>
          <Grid container spacing={5} alignItems="center">
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
                  src={teamImage}
                  alt="Professional business team meeting"
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
                eyebrow="لماذا نحن"
                title="نقدّم تعاملاً مؤسسيًا يعكس الثقة والوضوح"
                description="نؤمن بأن نجاح العمل التجاري يقوم على الثقة والالتزام وبناء العلاقات المهنية المستقرة، ولذلك نحرص على تقديم صورة مؤسسية تعكس الجدية والوضوح في التعامل."
              />

              <Stack spacing={2.25}>
                <Typography color="text.secondary" sx={{ lineHeight: 2 }}>
                  نعمل على تطوير بيئة تعاون مستمرة مع العملاء والشركاء
                  والموردين، مع فهم لاحتياجات جهات متعددة داخل العراق وخارجه.
                </Typography>

                <Typography color="text.secondary" sx={{ lineHeight: 2 }}>
                  نهتم ببناء الثقة والاستمرارية في كل علاقة تجارية، ونسعى إلى أن
                  تكون خدماتنا انعكاسًا مباشرًا لقيم المهنية والدقة والالتزام.
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
