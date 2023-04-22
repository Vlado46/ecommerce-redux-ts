import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function LoadingSceleton() {
  return (
    <Stack spacing={3} direction={{ xs: "column", md: "row" }} marginTop="2rem">
      <Skeleton variant="rounded" width={280} height={490} />
      <Skeleton variant="rounded" width={280} height={490} />
      <Skeleton variant="rounded" width={280} height={490} />
      <Skeleton variant="rounded" width={280} height={490} />
    </Stack>
  );
}
