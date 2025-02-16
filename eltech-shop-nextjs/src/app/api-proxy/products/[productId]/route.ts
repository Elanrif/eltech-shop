import {getLogger} from "@/config/logger.config";
import {NextRequest, NextResponse} from "next/server";
import {RequestLogger} from "@/config/loggers/request.logger";
import {deleteProduct, fetchProductById, updateProduct} from "@/lib/product/services/product.service";
import {Product} from "@/lib/product/models/product.model";

const logger = getLogger('server');

export const dynamic = 'force-dynamic'

export async function GET(
    request: NextRequest,
    { params }: { params: { productId: number } },
) {
    const reqLogger = new RequestLogger(logger, request);
    const {productId} = await params;
    if (Number.isNaN(Number(productId))) {
        const status = 400;
        const message = 'Invalid product id';
        reqLogger.error(
            `[session.user.id] - Invalid product id '${productId}' `,
            {
                status,
                message,
            },
        );
        return NextResponse.json({ message }, { status });
    }

    const headers = new Headers(request.headers);
    const config = { headers};
    const product = await fetchProductById(config, productId);
    if (!product || 'message' in product) {
        const status = 400;
        const message = 'product not found';
        reqLogger.error(
            `[session.user.id] - product with id '${productId}' not found `,
            {
                status,
                message,
            },
        );
        return NextResponse.json({ message}, {status});
    }
    return NextResponse.json(product);
}

export async function PUT(request: NextRequest, { params }: { params: { productId: number } },) {
    const reqLogger = new RequestLogger(logger, request);
    const {productId} = await params;

    if (Number.isNaN(Number(productId))) {
        const status = 400;
        const message = 'Invalid order id';
        reqLogger.error(
            `[session.user.id] - Invalid product id '${productId}' `,
            {
                status,
                message,
            },
        );
        return NextResponse.json({ message }, { status });
    }
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
        const product = await updateProduct(config,body)
        return NextResponse.json(product, { status: 200});
    } catch {
        const status = 500;
        const message = 'Could not update product'
        reqLogger.error('Internal Server Error', {
            status,
            message,
        })
        return NextResponse.json({message}, { status})
    }
}

export async function DELETE(request: NextRequest, { params }: { params: { productId: number } },) {
    const reqLogger = new RequestLogger(logger, request);
    const {productId} = await params;

    if (Number.isNaN(Number(productId))) {
        const status = 400;
        const message = 'Invalid order id';
        reqLogger.error(
            `[session.user.id] - Invalid product id '${productId}' `,
            {
                status,
                message,
            },
        );
        return NextResponse.json({ message }, { status });
    }
    const headers = new Headers(request.headers);
    const config = {headers};
    try{
        const product = await deleteProduct(config,productId)
        return NextResponse.json(product, { status: 200});
    } catch {
        const status = 500;
        const message = 'Could not delete product'
        reqLogger.error('Internal Server Error', {
            status,
            message,
        })
        return NextResponse.json({message}, { status})
    }
}