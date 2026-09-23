import {NextResponse} from "next/server";import {mockPhotos} from "@/lib/sources";
export async function POST(){await new Promise(r=>setTimeout(r,800));return NextResponse.json({status:"completed",sourcesScanned:4,newItems:24,items:mockPhotos.slice(0,24)});}
