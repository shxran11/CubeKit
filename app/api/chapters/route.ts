import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  const body = await request.json();
  try {
    const newChapter = await prisma.chapters.create({
      data: {
        chapterId: body.chapterId,
        courseId: body.courseId,
        content: body.content,
        videoId: body.videoId,
      },
    });

    return NextResponse.json(newChapter, { status: 201 });
  } catch (error) {
    console.error("Error creating course:", error);
    return NextResponse.json(
      { error: "Failed to create course" },
      { status: 500 }
    );
  }
}
