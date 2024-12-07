import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaRegEdit } from "react-icons/fa";
import { courseOutput } from "../page";
import { useEffect, useState } from "react";
import axios from "axios";
import { courseList } from "@prisma/client";
import { useRouter } from "next/navigation";

interface Props {
  course: courseList | null;
  output?: courseOutput;
  index: number;
}

const EditChapterDetails = ({ course, output, index }: Props) => {
  const chapters = output?.Chapters;
  const [name, setName] = useState(
    chapters ? chapters[index]?.["Chapter Name"] : ""
  );
  const [desc, setDesc] = useState(
    chapters ? chapters[index]?.["Chapter Description"] : ""
  );

  const router = useRouter();

  useEffect(() => {
    if (chapters) setName(chapters[index]["Chapter Name"]);
    if (chapters) setDesc(chapters[index]["Chapter Description"]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chapters]);

  const onUpdateHandler = async () => {
    if (chapters) {
      chapters[index]["Chapter Name"] = name;
      chapters[index]["Chapter Description"] = desc;
    }
    try {
      await axios.patch(`/api/course/${course?.courseId}`, {
        courseOutput: {
          ...output,
          Chapters: chapters,
        },
      });

      router.refresh();
    } catch (error) {
      console.error("Update error:", error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger>
        <FaRegEdit />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-5">Edit Course Details</DialogTitle>
          <DialogDescription>
            <label className="text-md text-black dark:text-white font-medium mt-6">
              Chapter Title
            </label>
            <Input
              className="mb-4"
              defaultValue={name}
              onChange={(event) => setName(event.target.value)}
            />
            <label className="text-md text-black dark:text-white font-medium mt-6">
              Chapter Description
            </label>
            <Textarea
              className="h-32"
              defaultValue={desc}
              onChange={(event) => setDesc(event.target.value)}
            />
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose
            className="bg-primary rounded-sm p-2 text-white text-sm"
            onClick={onUpdateHandler}
          >
            Update
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditChapterDetails;
