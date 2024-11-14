import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const course = await prisma.courseList.findUnique({
    where: { courseId: params.id },
  });

  if (!course) {
    return NextResponse.json({ error: "Invalid issue" }, { status: 404 });
  }

  return NextResponse.json(course, { status: 200 });
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const course = await prisma.courseList.findUnique({
    where: { courseId: params.id },
  });

  if (!course) {
    return NextResponse.json({ error: "Invalid issue" }, { status: 404 });
  }

  const updateData: { courseOutput?: string; publish?: boolean } = {};
  if (body.courseOutput !== undefined)
    updateData.courseOutput = body.courseOutput;
  if (body.publish !== undefined) updateData.publish = body.publish;

  const updatedCourse = await prisma.courseList.update({
    where: { courseId: params.id },
    data: updateData,
  });

  return NextResponse.json(updatedCourse, { status: 200 });
}
