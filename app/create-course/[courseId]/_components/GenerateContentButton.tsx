import { Button } from "@/components/ui/button";
import { courseOutput } from "../page";
import { courseList } from "@prisma/client";
import { GenerateChapterContent_AI } from "@/configs/AiModel";
import { useState } from "react";
import Loader from "../../_components/Loader";
import youtubeAPI from "@/configs/Service";
import axios from "axios";
import { useRouter } from "next/navigation";

interface Props {
  course: courseList | null;
  output?: courseOutput;
}

const GenerateContentButton = ({ course, output }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const GenerateChapterContent = async () => {
    setIsLoading(true);
    const chapters = output?.Chapters;

    if (chapters) {
      try {
        // Map each chapter to a promise and wait for all to resolve
        await Promise.all(
          chapters.map(async (chapter, index) => {
            const PROMPT = `Explain the concept in detail on the Topic: ${course?.name}, Chapter: ${chapter["Chapter Name"]}, in JSON format with a list of array with field names as Title, explanation on given chapter in detail, Code Example(code in <precode> format), if applicable.`;

            // Fetch video ID
            const videoResponse = await youtubeAPI.getVideos(
              `${course?.name}:${chapter["Chapter Name"]}`
            );
            const videoId = videoResponse[0]?.id?.videoId || "";

            // Generate content using AI
            const result = await GenerateChapterContent_AI.sendMessage(PROMPT);
            const content = JSON.parse(result.response.text());
            console.log(content);

            // Post to /api/chapters with content and videoId
            await axios.post("/api/chapters", {
              chapterId: index,
              courseId: course?.courseId,
              content: content,
              videoId: videoId,
            });
          })
        );
        router.push(`/create-course/${course?.courseId}/finish`);
      } catch (error) {
        console.error("Error generating chapter content:", error);
      }
      setIsLoading(false); // Ensures loading state is set to false after all content is generated
    }
  };

  return (
    <div className="lg:mx-48 my-8">
      <Loader loading={isLoading} />
      <Button onClick={GenerateChapterContent}>Generate Course</Button>
    </div>
  );
};

export default GenerateContentButton;
