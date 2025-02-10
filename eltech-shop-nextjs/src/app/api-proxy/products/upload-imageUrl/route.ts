import {NextRequest, NextResponse} from "next/server";
import {getLogger} from "@/config/logger.config";
import {RequestLogger} from "@/config/loggers/request.logger";
import {ProductUploadImage} from "@/lib/product/models/product.model";
import {uploadProductImage} from "@/lib/product/services/product.service";

const logger = getLogger('server')
export const dynamic = 'force-dynamic'

export async function PUT(request: NextRequest) {
    const reqLogger = new RequestLogger(logger, request);
    const body = (await request.json()) as ProductUploadImage
    reqLogger.info('LOG IMAGE URL: ', JSON.stringify(body));
    if (!body) {
        const status = 400;
        const message = 'Fields image are required';
        reqLogger.error( `[session.user.id] - Bad request`, {
            status,
            message,
        });
        return NextResponse.json({message}, {status});
    }
    const headers = new Headers(request.headers);
    const config = {headers};
    try{
        const product = await uploadProductImage(config,body)
        return NextResponse.json(product, { status: 200});
    } catch {
        const status = 500;
        const message = 'Could not upload product image'
        reqLogger.error('Internal Server Error', {
            status,
            message,
        })
        return NextResponse.json({message}, { status})
    }
}
