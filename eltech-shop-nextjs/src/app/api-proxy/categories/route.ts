import {NextRequest, NextResponse} from "next/server";
import {createCategory, fetchAllCategories, updateCategory} from "@/lib/category/services/category.service";
import {getLogger} from "@/config/logger.config";
import {RequestLogger} from "@/config/loggers/request.logger";
import {Product} from "@/lib/category/models/category.model";

const logger = getLogger('server')
export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
    const headers = new Headers(request.headers);
    const config = {headers};
    const categories = await fetchAllCategories(config) ?? [];
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
        const category = await createCategory(config,body)
        return NextResponse.json(category, { status: 200});
    } catch {
        const status = 500;
        const message = 'Could not create category'
        reqLogger.error('Internal Server Error', {
            status,
            message,
        })
        return NextResponse.json({message}, { status})
    }
}
