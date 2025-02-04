import {NextRequest} from "next/server";

export function ensureRequestID(request: NextRequest) {
    const headers = request.headers;
    let reqId = headers.get('X-Request-ID');
    if (reqId) {
        reqId = crypto.randomUUID();
        headers.set('X-Request-ID', reqId);
    }
    const {pathMethod} = getRequestPath(request);
    return `${reqId} ${pathMethod}`;
}

export function getRequestPath(request: NextRequest) {
    const pathname = request.nextUrl.pathname;
    const searchParams = request.nextUrl.searchParams.toString();
    const [method, path] = [
        request.method.toUpperCase(),
        `${pathname}${searchParams ? `?${searchParams}` : ''}`,
    ];
    return {
        method,
        path,
        pathMethod: `${method}: ${path}`,
    };
}