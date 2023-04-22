import { Button, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProducts } from "../app/productsSlice";
import { addToCart } from "../app/badgeSlice";

interface IProduct {
  id: number;
  price: number;
  title: string;
  description: string;
  category: string;
  image: string;
  quantity: number;
  totalPrice?: number;
}

const ItemDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState<IProduct>();
  const dispatch = useDispatch();

  const add = () => {
    dispatch(
      addProducts({
        price: item!.price,
        title: item!.title,
        description: item!.description,
        category: item!.category,
        image: item!.image,
        id: item!.id,
        quantity: item!.quantity,
        totalPrice: 0,
      })
    );
    dispatch(addToCart(1));
  };

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [id]);

  return (
    <Stack direction={{ md: "row" }}>
      <img className="card-detail-img" src={item?.image} />
      <Stack marginX={{ md: 6 }} marginY={{ md: 12 }} spacing={{ md: 6 }}>
        <Typography variant="h5">{item?.title}</Typography>
        <Typography variant="subtitle2" marginY="1rem">
          {item?.description}
        </Typography>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="baseline"
          spacing={11}
        >
          <Typography variant="h6">${item?.price}</Typography>
          <Button size="large" onClick={add}>
            add to cart
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ItemDetail;
