import { NextResponse } from "next/server";
import { demosCollection } from "../route";

export const GET = async () => {
  try {
    const result = await demosCollection.find().toArray();
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(error);
  }
};
