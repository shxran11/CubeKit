import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { courseList } from "@prisma/client";
import { DialogClose } from "@radix-ui/react-dialog";
import { FaEdit } from "react-icons/fa";
import { courseOutput } from "../page";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

interface Props {
  course: courseList | null;
  output?: courseOutput | null;
  onUpdate: (name: string, desc: string) => void;
}

const EditBasicInfo = ({ course, output, onUpdate }: Props) => {
  const [name, setName] = useState(course?.name || "");
  const [desc, setDesc] = useState(output?.["Course Description"] || "");
  const router = useRouter();

  useEffect(() => {
    if (course) setName(course.name);
    if (output) setDesc(output["Course Description"]);
  }, [course, output]);

  const onUpdateHandler = async () => {
    if (output) {
      output["Course Name"] = name;
      output["Course Description"] = desc;
    }
    try {
      const result = await axios.patch(`/api/course/${course?.courseId}`, {
        courseOutput: {
          ...output,
          "Course Description": desc,
          "Course Name": name,
        },
      });

      if (result.data) {
        const updatedName = result.data.name || name;
        const updatedDesc = result.data.output?.["Course Description"] || desc;

        onUpdate(updatedName, updatedDesc);
      }
      router.refresh();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger>
        <FaEdit />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-5">
            Edit Course Title & Description
          </DialogTitle>
          <DialogDescription>
            <label className="text-md text-black dark:text-white font-medium mt-6">
              Title
            </label>
            <Input
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="mb-4"
            />
            <label className="text-md text-black dark:text-white font-medium mt-6">
              Description
            </label>
            <Textarea
              value={desc}
              className="h-32"
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

export default EditBasicInfo;
