import React from "react";
import GetProductById from "./poduct-by-id";

export default async function PageProductById({
  params,
}: {
  params: { id: number };
}) {
  const {id} = await params;
  return (
    <>
      <GetProductById productId={id} />
    </>
  );
}
