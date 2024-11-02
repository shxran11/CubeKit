import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  const body = await request.json();
  try {
    const newCourse = await prisma.courseList.create({
      data: {
        name: body.name,
        category: body.category.toLowerCase(),
        difficulty: body.difficulty.toLowerCase(),
        courseOutput: body.courseOutput,
        createdBy: body.createdBy,
        userProfileImage: body.userProfileImage,
      },
    });

    return NextResponse.json(newCourse, { status: 201 });
  } catch (error) {
    console.error("Error creating course:", error);
    return NextResponse.json(
      { error: "Failed to create course" },
      { status: 500 }
    );
  }
}
