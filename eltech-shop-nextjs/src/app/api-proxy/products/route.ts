import {NextRequest, NextResponse} from "next/server";
import {getLogger} from "@/config/logger.config";
import {RequestLogger} from "@/config/loggers/request.logger";
import {Product} from "@/lib/product/models/product.model";
import {createProduct, fetchAllProducts} from "@/lib/product/services/product.service";

const logger = getLogger('server')
export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
    const headers = new Headers(request.headers);
    const config = {headers};
    const categories = await fetchAllProducts(config) ?? [];
    console.log(categories);
    return NextResponse.json(categories);

}

export async function POST(request: NextRequest) {
    const reqLogger = new RequestLogger(logger, request);
    const body = (await request.json()) as Product
    if (!body) {
        const status = 400;
        const message = 'Fields name are required';
        reqLogger.error( `[session.user.id] - Bad request`, {
            status,
            message,
        });
        return NextResponse.json({message}, {status});
    }
    const headers = new Headers(request.headers);
    const config = {headers};
    try{
        const product = await  createProduct(config,body)
        return NextResponse.json(product, { status: 200});
    } catch {
        const status = 500;
        const message = 'Could not create product'
        reqLogger.error('Internal Server Error', {
            status,
            message,
        })
        return NextResponse.json({message}, { status})
    }
}
