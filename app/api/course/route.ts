import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getAuth, clerkClient } from "@clerk/nextjs/server";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  const body = await request.json();
  try {
    const newCourse = await prisma.courseList.create({
      data: {
        courseId: body.courseId,
        name: body.name,
        category: body.category,
        difficulty: body.difficulty,
        includeVideo: body.includeVideo,
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

export async function GET(request: NextRequest) {
  const { userId } = getAuth(request);
  const user = await clerkClient.users.getUser(userId!);
  const email = user?.emailAddresses?.[0]?.emailAddress;

  const courses = await prisma.courseList.findMany({
    where: { createdBy: email },
  });

  if (!courses || courses.length === 0) {
    return NextResponse.json(
      { error: "No courses found for this user" },
      { status: 404 }
    );
  }

  return NextResponse.json(courses, { status: 200 });
}
