import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

import "server-only";

export async function POST(request: Request) {
  const body: any = await request.json();
  console.log(body.input.fileName);
  const jsonDirectory = path.resolve("resources");
  console.log(jsonDirectory);
  const fileContents = await fs.readFile(
    jsonDirectory + "/" + body.input.fileName,
    "utf8"
  );
  //Return the content of the data file in json format
  console.log(fileContents);

  return NextResponse.json({ fileContents });
}
