import {getLogger} from "@/config/logger.config";
import {NextRequest, NextResponse} from "next/server";
import {RequestLogger} from "@/config/loggers/request.logger";
import {deleteCategory, fetchCategoryById, updateCategory} from "@/lib/category/services/category.service";
import {Product} from "@/lib/category/models/category.model";

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

export async function PUT(request: NextRequest, { params }: { params: { categoryId: number } },) {
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
        const category = await updateCategory(config,body)
        return NextResponse.json(category, { status: 200});
    } catch {
        const status = 500;
        const message = 'Could not update category'
        reqLogger.error('Internal Server Error', {
            status,
            message,
        })
        return NextResponse.json({message}, { status})
    }
}

export async function DELETE(request: NextRequest, { params }: { params: { categoryId: number } },) {
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
    const config = {headers};
    try{
        const category = await deleteCategory(config,params.categoryId)
        return NextResponse.json(category, { status: 200});
    } catch {
        const status = 500;
        const message = 'Could not delete category'
        reqLogger.error('Internal Server Error', {
            status,
            message,
        })
        return NextResponse.json({message}, { status})
    }
}