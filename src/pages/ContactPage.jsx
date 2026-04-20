import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import PlaceRoundedIcon from "@mui/icons-material/PlaceRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";
import PageHero from "../components/common/PageHero";

const contactImage =
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80";

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="تواصل معنا"
        subtitle="للاستفسار أو التواصل مع شركة سما الأمل الذهبية العامة محدودة المسؤولية، يمكنكم مراسلتنا عبر البريد الإلكتروني أو زيارة موقع الشركة على العنوان التالي."
      />

      <Box sx={{ pb: { xs: 7, md: 10 } }}>
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={5}>
              <Stack spacing={3}>
                <Box
                  sx={{
                    borderRadius: 8,
                    overflow: "hidden",
                    border: (theme) => `1px solid ${theme.palette.divider}`,
                  }}
                >
                  <Box
                    component="img"
                    src={contactImage}
                    alt="Modern office building"
                    sx={{
                      width: "100%",
                      height: 260,
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </Box>

                <Card>
                  <CardContent sx={{ p: 3.5 }}>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <PlaceRoundedIcon color="primary" />
                      <Box sx={{ px: 2 }}>
                        <Typography variant="h6">العنوان</Typography>
                        <Typography color="text.secondary">
                          العراق - بغداد - المأمون
                        </Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent sx={{ p: 3.5 }}>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <MailOutlineRoundedIcon color="primary" />
                      <Box sx={{ px: 2 }}>
                        <Typography variant="h6">البريد الإلكتروني</Typography>
                        <Typography color="text.secondary">
                          info@sama-alamil.com
                        </Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>

                {/* <Card>
                  <CardContent sx={{ p: 3.5 }}>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <BusinessRoundedIcon color="primary" />
                      <Box sx={{ px: 2 }}>
                        <Typography variant="h6">اسم الشركة</Typography>
                        <Typography color="text.secondary">
                          شركة سما الأمل الذهبية العامة محدودة المسؤولية
                        </Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card> */}
              </Stack>
            </Grid>

            <Grid item xs={12} md={7}>
              <Card>
                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                  <Typography variant="h5" sx={{ mb: 3 }}>
                    أرسل لنا رسالة
                  </Typography>

                  <Stack spacing={2}>
                    <TextField label="الاسم الكامل" fullWidth />
                    <TextField label="البريد الإلكتروني" fullWidth />
                    <TextField label="رقم الهاتف" fullWidth />
                    <TextField
                      label="نص الرسالة"
                      fullWidth
                      multiline
                      minRows={5}
                    />

                    <Button variant="contained" color="primary" size="large">
                      إرسال
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
