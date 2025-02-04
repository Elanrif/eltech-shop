import {getLogger} from "@/config/logger.config";
import {NextRequest, NextResponse} from "next/server";
import {RequestLogger} from "@/config/loggers/request.logger";
import {fetchCategoryById} from "@/lib/category/services/category.service";

const logger = getLogger('server');

export const dynamic = 'force-dynamic'

export async function GET(
    request: NextRequest,
    { params }: { params: { productId: number } },
) {
    const reqLogger = new RequestLogger(logger, request);

    if (Number.isNaN(Number(params.productId))) {
        const status = 400;
        const message = 'Invalid order id';
        reqLogger.error(
            `[session.user.id] - Invalid Product id '${params.productId}' `,
            {
                status,
                message,
            },
        );
        return NextResponse.json({ message }, { status });
    }

    const headers = new Headers(request.headers);
    const config = { headers};
    const product = await fetchCategoryById(config, params.productId);
    if (!product || 'message' in product) {
        const status = 400;
        const message = 'Product not found';
        reqLogger.error(
            `[session.user.id] - product with id '${params.productId}' not found `,
            {
                status,
                message,
            },
        );
        return NextResponse.json({ message}, {status});
    }
    return NextResponse.json(product);
}