import { NextRequest, NextResponse } from "next/server";
import client from "@/db";
export async function GET(req: NextRequest) {
  const user = await client.user.findFirst();
  return NextResponse.json(user);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, password } = body;
    const existingUser = await client.user.findUnique({
      where: {
        email: email,
      },
    });
    if (existingUser) {
      return NextResponse.json({
        message: "You already have an account signin",
      });
    }
    const newUser = await client.user.create({
      data: {
        email: email,
        password: password,
      },
    });
    return NextResponse.json({
      id: newUser.id,
      name: newUser.email,
    });
  } catch (error) {
    console.log(error);
  }
}
