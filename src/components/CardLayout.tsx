import CardItem from "./CardItem";
import LoadingSceleton from "./LoadingSceleton";
import { useEffect, useState } from "react";
import { Grid, Stack, Box, ButtonGroup, Button } from "@mui/material";

interface Iproducts {
  id: number;
  price: number;
  title: string;
  description: string;
  category: string;
  image: string;
  quantity: number;
}

const CardLayout = () => {
  const [products, setProducts] = useState<Iproducts[]>();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [loading, setLoading] = useState(false);

  const filterProduct = (category: string) => {
    const updatedProducts = products?.filter(
      (prod) => prod.category === category
    );
    setFilteredProducts(updatedProducts);
  };

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      setProducts(await response.clone().json());
      setFilteredProducts(await response.json());
    };

    setLoading(false);

    getProducts();
  }, []);

  return (
    <Stack>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginY: ".5rem",
          "& > *": {
            m: 1,
          },
        }}
      >
        <ButtonGroup variant="text" aria-label="text button group">
          <Button size="small" onClick={() => setFilteredProducts(products)}>
            all
          </Button>
          <Button size="small" onClick={() => filterProduct("men's clothing")}>
            men
          </Button>
          <Button
            size="small"
            onClick={() => filterProduct("women's clothing")}
          >
            women
          </Button>
          <Button size="small" onClick={() => filterProduct("electronics")}>
            electronics
          </Button>
          <Button size="small" onClick={() => filterProduct("jewelery")}>
            jewelery
          </Button>
        </ButtonGroup>
      </Box>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        {!loading && <LoadingSceleton />}
        {loading &&
          filteredProducts?.map((product, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
              <CardItem
                id={product.id}
                price={product.price}
                title={product.title}
                description={product.description}
                category={product.category}
                image={product.image}
                quantity={product.quantity}
              />
            </Grid>
          ))}
      </Grid>
    </Stack>
  );
};

export default CardLayout;
