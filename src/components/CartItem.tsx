import { Box, Fab, Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { addToCart, removeFromCart } from "../app/badgeSlice";
import { useDispatch } from "react-redux";
import { addProducts, removeProduct } from "../app/productsSlice";

interface IMyProps {
  price: number;
  title: string;
  description: string;
  category: string;
  image: string;
  id: number;
  quantity: number;
  totalPrice: number;
}

const CartItem = (props: IMyProps) => {
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
        quantity: props.quantity,
        totalPrice: props.price,
      })
    );
    dispatch(addToCart(1));
  };

  const remove = () => {
    dispatch(
      removeProduct({
        price: props.price,
        title: props.title,
        description: props.description,
        category: props.category,
        image: props.image,
        id: props.id,
        quantity: props.quantity,
        totalPrice: props.price,
      })
    );
    dispatch(removeFromCart(1));
  };

  return (
    <Stack direction="row" marginY={1}>
      <Box component="span">
        <img className="img" src={props.image} />
      </Box>
      <Box>
        <Stack
          width={{ xs: "65vw", md: "45vw" }}
          justifyContent="center"
          alignItems="center"
        >
          <Typography className="text" marginBottom={1} variant="subtitle2">
            {props.title.slice(0, 60)}
          </Typography>
          <Stack>
            <Typography variant="body2">
              price: ${props.price} x {props.quantity}
            </Typography>
            <Typography marginBottom={1}>
              Total: ${props.totalPrice.toFixed(2)}
            </Typography>
            <Stack direction="row" spacing={2}>
              <Fab
                color="primary"
                size="small"
                sx={{ zIndex: 0 }}
                aria-label="add"
                onClick={add}
              >
                <AddIcon />
              </Fab>
              <Fab
                color="primary"
                size="small"
                sx={{ zIndex: 0 }}
                aria-label="remove"
                onClick={remove}
              >
                <RemoveIcon />
              </Fab>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};

export default CartItem;
