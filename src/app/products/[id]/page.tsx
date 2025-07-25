import React, { use } from "react";
import { notFound } from "next/navigation";
import { getProductById } from "@/lib/actions/product-action";
import ProductPageClient from "./ProductPageClient";
import { Types } from "mongoose";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: Types.ObjectId }>;
}) {
  const { id } = await params;
  const product = await getProductById(id);
  if (!product) return;

  return {
    title: `${product.title ?? product._id}`,
    description: product.description || "",
    openGraph: {
      title: `${product.title ?? product._id}`,
      images: product.image || "",
      description: product.description || "",
    },
  };
}
async function productDetailPage({
  params,
}: {
  params: Promise<{ id: Types.ObjectId }>;
}) {
  const { id } = await params;

  const product = await getProductById(id);
  // const [product] = await Promise.all([
  //   getProductById(params.id)
  // ]);

  const data = JSON.parse(JSON.stringify(product));
  // const updatedProduct = { ...product, _id: product._id.toString() }

  return <ProductPageClient product={data} />;
}

export default productDetailPage;
