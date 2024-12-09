import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const courses = await prisma.courseList.findMany();
    if (!courses || courses.length === 0) {
      return NextResponse.json(
        { error: "No courses found in the database" },
        { status: 404 }
      );
    }

    return NextResponse.json(courses, {
      status: 200,
      headers: {
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("Error fetching all courses:", error);
    return NextResponse.json(
      { error: "An error occurred while fetching courses" },
      { status: 500 }
    );
  }
}
