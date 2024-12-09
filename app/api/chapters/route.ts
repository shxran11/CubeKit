import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log(body);

  if (body.videoId !== undefined && typeof body.videoId !== "string") {
    return NextResponse.json(
      { error: "Invalid videoId format" },
      { status: 400 }
    );
  }

  try {
    const newChapter = await prisma.chapters.create({
      data: {
        chapterId: body.chapterId,
        courseId: body.courseId,
        content: body.content,
        videoId: body.videoId || null,
      },
    });
    return NextResponse.json(newChapter, { status: 201 });
  } catch (error) {
    let errorMessage = "An unknown error occurred.";
    if (error instanceof Error) {
      errorMessage = error.message; // Safely access error.message
    }

    console.error("Error creating chapter:", errorMessage, error);
    return NextResponse.json(
      { error: "Failed to create chapter", details: errorMessage },
      { status: 500 }
    );
  }
}
