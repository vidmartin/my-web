
import fs from "fs/promises";
import path from "path";
import mime from "mime";
import { ENV_BLOG_POSTS_DIR } from "@/app/globals";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
    request: NextRequest,
    context: RouteContext<"/images/[name]">
) {
    const { name } = await context.params;
    if (name.indexOf("/") != -1) {
        return new NextResponse(null, { status: 400 });
    }

    const blogPostDir = process.env[ENV_BLOG_POSTS_DIR];
    if (blogPostDir == undefined) {
        return new NextResponse(null, { status: 404 });
    }
    
    try {
        const fullPath = path.join(blogPostDir, "images", name);
        const content = await fs.readFile(fullPath);
        const contentType = mime.getType(fullPath);
        if (contentType == null) {
            return new NextResponse(null, { status: 500 });
        }
        return new Response(
            content,
            { headers: { "Content-Type": contentType } }
        );
    } catch (e: any) {
        if (e.code == "ENOENT" || e.code == "EISDIR") {
            return new NextResponse(null, { status: 404 });
        }
        throw e;
    }
}