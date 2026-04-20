// pages/Products.jsx
import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CircularProgress,
} from "@mui/material";
import { axiosClient } from "../utilities/axiosConfig";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosClient
      .get("/variables/partify_products")
      .then((res) => {
        console.log(res);
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (products.length === 0 && !loading) return null;

  return (
    <Grid container justifyContent="center" sx={{ px: 2 }}>
      <Grid item md={10} xs={12}>
        <Box sx={{ mt: 4 }}>
          {/* PAGE TITLE */}
          <Typography variant="h4" fontWeight={700} textAlign="center">
            Our Products
          </Typography>

          <Typography
            variant="h6"
            sx={{
              mt: 2,
              opacity: 0.8,
              textAlign: "center",
              maxWidth: 700,
              mx: "auto",
            }}
          >
            We take pride in collaborating with some of the best global brands
            in the automotive supplies sector, ensuring the delivery of
            top-quality products and services.
          </Typography>

          {/* LOADING SPINNER */}
          {loading && (
            <Grid container justifyContent="center" sx={{ mt: 6 }}>
              <Grid
                item
                md={10}
                xs={12}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <CircularProgress />
              </Grid>
            </Grid>
          )}

          {/* PRODUCT GRID */}
          {!loading && (
            <Grid container spacing={3} sx={{ mt: 4 }}>
              {products.map((item) => {
                const title =
                  item.name || item.data?.title || "Untitled Product";
                const image = item.data?.image;

                return (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                    <Card
                      sx={{
                        borderRadius: 3,
                        overflow: "hidden",
                        transition: "0.3s",
                        boxShadow: "0px 4px 12px rgba(0,0,0,0.08)",
                        "&:hover": {
                          transform: "translateY(-5px)",
                          boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
                        },
                      }}
                    >
                      <CardActionArea>
                        {image && (
                          <CardMedia
                            component="img"
                            height="200"
                            image={image}
                            alt={title}
                            sx={{
                              objectFit: "cover",
                              backgroundColor: "#f8f8f8",
                            }}
                          />
                        )}

                        <CardContent>
                          <Typography
                            variant="h6"
                            fontWeight={600}
                            sx={{ textAlign: "center" }}
                          >
                            {title}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          )}
        </Box>
      </Grid>
    </Grid>
  );
}
