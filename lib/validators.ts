import { z } from "zod";
import { formatNumberForPrice } from "./utils";

const currency = z
  .string()
  .refine(
    (value) => /^\d+(\.\\d{2})?$/.test(formatNumberForPrice(Number(value))),
    "Price must have exactly 2 decimal places."
  );

// Schema for inserting products
export const insertProductSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  slug: z.string().min(3, "Slug must be at least 2 characters."),
  category: z.string().min(3, "Category must be at least 2 characters."),
  brand: z.string().min(3, "Brand must be at least 2 characters."),
  description: z.string().min(3, "Description must be at least 2 characters."),
  stock: z.coerce.number(),
  images: z.array(z.string()).min(1, "Product must have at least 1 image."),
  isFeatured: z.boolean(),
  banner: z.string().nullable(),
  price: currency,
});
