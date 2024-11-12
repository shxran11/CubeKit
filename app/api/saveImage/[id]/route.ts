import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const course = await prisma.courseList.findUnique({
      where: { courseId: params.id },
      select: { imageUrl: true },
    });

    if (!course) {
      return NextResponse.json({ error: "Course not found" }, { status: 404 });
    }

    return NextResponse.json({ imageUrl: course.imageUrl }, { status: 200 });
  } catch (error) {
    console.error("Error fetching image URL:", error);
    return NextResponse.json(
      { error: "Failed to fetch image URL" },
      { status: 500 }
    );
  }
}

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
