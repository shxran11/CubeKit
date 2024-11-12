import { Button } from "@/components/ui/button";
import { courseOutput } from "../page";
import { courseList } from "@prisma/client";
import { GenerateChapterContent_AI } from "@/configs/AiModel";
import { useState } from "react";
import Loader from "../../_components/Loader";

interface Props {
  course: courseList | null;
  output?: courseOutput;
}

const GenerateContentButton = ({ course, output }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const GenerateChapterContent = () => {
    setIsLoading(true);
    const chapters = output?.Chapters;
    chapters?.forEach(async (chapter, index) => {
      const PROMPT = `Explain the concept in detail on the Topic: ${course?.name}, Chapter: ${chapter["Chapter Name"]}, in JSON format with a list of array with field names as Title, explanation on given chapter in detail, Code Example(code in <precode> format), if applicable.`;
      //console.log(PROMPT);
      if (index < chapters.length) {
        try {
          const result = await GenerateChapterContent_AI.sendMessage(PROMPT);
          console.log(result.response.text());
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      }
    });
  };
  return (
    <div className="lg:mx-48 my-8">
      <Loader loading={isLoading} />
      <Button onClick={GenerateChapterContent}>Generate Course</Button>
    </div>
  );
};

export default GenerateContentButton;
