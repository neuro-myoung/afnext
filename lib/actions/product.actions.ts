'use server'

import { prisma } from "@/db/prisma"
import { convertToJSObject } from "../utils";
import { LATEST_PRODUCTS_LIMIT } from "../constants";

//Get latest products
export async function getLatestProducts() {

    const data = await prisma.product.findMany({
        take: LATEST_PRODUCTS_LIMIT,
        orderBy: {createdAt:'desc'}
    });

    return convertToJSObject(data);
}

//Get single product by slug
export async function getProductBySlug(slug:string){
    return await prisma.product.findFirst({
        where: { slug: slug },
    })
}