import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string; chapterId: string } }
) {
  try {
    const { id, chapterId } = params;

    // Ensure id and chapterId are valid
    if (!id || !chapterId) {
      return NextResponse.json(
        { error: "Missing id or chapterId in request" },
        { status: 400 }
      );
    }

    // Parse chapterId into a number if necessary
    const chapterIdNumber = parseInt(chapterId, 10);
    if (isNaN(chapterIdNumber)) {
      return NextResponse.json(
        { error: "Invalid chapterId format" },
        { status: 400 }
      );
    }

    // Fetch the chapter from the database
    const chapter = await prisma.chapters.findFirst({
      where: {
        chapterId: chapterIdNumber,
        courseId: id, // Ensure the chapter belongs to the specified course
      },
    });

    if (!chapter) {
      return NextResponse.json({ error: "Chapter not found" }, { status: 404 });
    }

    return NextResponse.json({ chapter }, { status: 200 });
  } catch (error) {
    console.error("Error fetching chapter:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
