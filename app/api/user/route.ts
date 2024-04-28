import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
  // do the validation here
  // db hit here

  return NextResponse.json({
    name: "dp",
    email: "dp@gmail.com",
  });
}

// app.get("api/user", (req, res) => {
//   return res.json({
//     name: "dp",
//     emali: "dp@gmail.com",
//   });
// });
//

export async function POST(req: NextRequest) {
  try {
    //BODY
    const body = await req.json();
    // headers
    const authHeaders = req.headers.get("authorization");
    console.log(authHeaders);
    // Query Params
    const qp = req.nextUrl.searchParams.get("a");
    console.log(qp);
    return NextResponse.json({
      data: body,
    });
  } catch (error) {
    console.log(error);
  }
}
