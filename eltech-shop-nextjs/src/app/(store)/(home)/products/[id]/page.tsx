import React from "react";
import GetProductById from "./poduct-by-id";

export default function PageProductById({
  params,
}: {
  params: { id: number };
}) {

  return (
    <>
      <GetProductById productId={params.id} />
    </>
  );
}
