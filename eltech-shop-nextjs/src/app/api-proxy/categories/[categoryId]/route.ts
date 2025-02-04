import {getLogger} from "@/config/logger.config";
import {NextRequest, NextResponse} from "next/server";
import {RequestLogger} from "@/config/loggers/request.logger";
import {fetchCategoryById} from "@/lib/category/services/category.service";

const logger = getLogger('server');

export const dynamic = 'force-dynamic'

export async function GET(
    request: NextRequest,
    { params }: { params: { categoryId: number } },
) {
    const reqLogger = new RequestLogger(logger, request);

    if (Number.isNaN(Number(params.categoryId))) {
        const status = 400;
        const message = 'Invalid order id';
        reqLogger.error(
            `[session.user.id] - Invalid category id '${params.categoryId}' `,
            {
                status,
                message,
            },
        );
        return NextResponse.json({ message }, { status });
    }

    const headers = new Headers(request.headers);
    const config = { headers};
    const category = await fetchCategoryById(config, params.categoryId);
    if (!category || 'message' in category) {
        const status = 400;
        const message = 'Category not found';
        reqLogger.error(
            `[session.user.id] - category with id '${params.categoryId}' not found `,
            {
                status,
                message,
            },
        );
        return NextResponse.json({ message}, {status});
    }
    return NextResponse.json(category);
}