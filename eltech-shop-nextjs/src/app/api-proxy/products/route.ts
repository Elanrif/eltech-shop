import {NextRequest, NextResponse} from "next/server";
import {fetchAllProducts} from "@/lib/product/services/product.service";

export async function GET(request: NextRequest) {
    const headers = new Headers(request.headers);
    const config = {headers};
    const categories = await fetchAllProducts(config) ?? [];
    console.log(categories);
    return NextResponse.json(categories);

}