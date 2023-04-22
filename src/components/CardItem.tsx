import { FC } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Stack,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { addProducts } from "../app/productsSlice";
import { addToCart } from "../app/badgeSlice";
import { Link } from "react-router-dom";

interface IMyProps {
  price: number;
  title: string;
  description: string;
  category: string;
  image: string;
  id: number;
  quantity: number;
}

const CardItem: FC<IMyProps> = (props: IMyProps) => {
  const dispatch = useDispatch();

  const add = () => {
    dispatch(
      addProducts({
        price: props.price,
        title: props.title,
        description: props.description,
        category: props.category,
        image: props.image,
        id: props.id,
        quantity: 1,
        totalPrice: props.price,
      })
    );
    dispatch(addToCart(1));
  };

  return (
    <Card
      sx={{
        maxWidth: 420,
        height: 490,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 4,
        marginTop: 1,
      }}
    >
      <Link className="link" to={`./${props.id}`}>
        <Stack alignItems="center">
          <CardMedia
            sx={{ height: 310, width: 230, position: "center" }}
            image={props.image}
            component="div"
          />
        </Stack>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {props.title.slice(0, 20)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description.slice(0, 60)}
          </Typography>
        </CardContent>
      </Link>
      <CardActions>
        <Stack
          direction="row"
          gap="4rem"
          justifyContent="flex-end"
          alignItems="flex-start"
        >
          <Typography variant="h6">${props.price}</Typography>
          <Button onClick={add}>Add to Cart</Button>
        </Stack>
      </CardActions>
    </Card>
  );
};

export default CardItem;
