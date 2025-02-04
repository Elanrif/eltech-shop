import {NextRequest, NextResponse} from "next/server";
import {fetchAllCategories} from "@/lib/category/services/category.service";

export async function GET(request: NextRequest) {
    const headers = new Headers(request.headers);
    const config = {headers};
    const categories = await fetchAllCategories(config) ?? [];
    console.log(categories);
    return NextResponse.json(categories);

}