import { NextResponse } from "next/server";
import Ngo from "../../(models)/(ngo)/ngo";

interface Request {
  json: () => Promise<any>;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const ngoData = body.formData;
    await Ngo.create(ngoData);
    return NextResponse.json({ message: "Ngo Created" }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
