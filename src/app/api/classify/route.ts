import {NextResponse} from "next/server";
// Phase 4: browser-side TensorFlow.js MobileNet identifies general visual concepts. It does not claim NFL/player identification.
export async function POST(req:Request){const {labels=[]}=await req.json();return NextResponse.json({provider:process.env.IMAGE_CLASSIFIER_PROVIDER||"mobilenet-browser",labels,notice:"Run MobileNet in the browser; NFL-specific labels require a separately configured model."});}
