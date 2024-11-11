import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { imageUrl } = await request.json();

  try {
    await prisma.courseList.update({
      where: { courseId: params.id },
      data: { imageUrl: imageUrl },
    });
    return NextResponse.json("Image URL saved successfully.", { status: 200 });
  } catch (error) {
    return NextResponse.json("Failed to save image URL.", { status: 500 });
  }
}
