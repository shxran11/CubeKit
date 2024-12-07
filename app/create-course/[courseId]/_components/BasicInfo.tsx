import { Button } from "@/components/ui/button";
import { courseList } from "@prisma/client";
import Image from "next/image";
import { FaPuzzlePiece } from "react-icons/fa6";
import EditBasicInfo from "./EditBasicInfo";
import { courseOutput } from "../page";
import { useEffect, useState } from "react";
import axios from "axios";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "@/configs/FirebaseConfig";
import Link from "next/link";

interface Props {
  course: courseList | null;
  output?: courseOutput;
  edit: boolean;
}

const BasicInfo = ({ course, output, edit }: Props) => {
  const [name, setName] = useState(output?.["Course Name"] || "");
  const [desc, setDesc] = useState(output?.["Course Description"] || "");

  useEffect(() => {
    const fetchImageUrl = async () => {
      if (course?.courseId) {
        try {
          const response = await axios.get(`/api/saveImage/${course.courseId}`);
          const imageUrl = response.data.imageUrl;
          if (imageUrl) {
            setSelectedFile(imageUrl); // Set the fetched URL here
          }
        } catch (error) {
          console.error("Error fetching image URL:", error);
        }
      }
    };

    fetchImageUrl();

    // Set name and description after the image URL
    if (output) {
      setName(output["Course Name"]);
      setDesc(output["Course Description"]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [output]);

  const handleUpdate = (updatedName: string, updatedDesc: string) => {
    setName(updatedName);
    setDesc(updatedDesc);
  };

  const [selectedFile, setSelectedFile] = useState<string | undefined>();

  const onFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];
    setSelectedFile(URL.createObjectURL(file));

    const filename = Date.now() + ".jpg";
    const storageRef = ref(storage, "ai-course/" + filename);
    await uploadBytes(storageRef, file)
      .then(() => {
        console.log("File Upload Complete.");
      })
      .then(() => {
        getDownloadURL(storageRef).then(async (downloadUrl) => {
          await axios.patch(`/api/saveImage/${course?.courseId}`, {
            imageUrl: downloadUrl,
          });
        });
      });
  };

  return (
    <div className="border rounded-lg mt-7 shadow-sm dark:shadow-gray-900 lg:mx-48">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-5 md:p-10">
          <h2 className="text-2xl font-bold mb-3 flex items-center gap-3">
            {name ? (
              name
            ) : (
              <span className="bg-slate-300 dark:bg-slate-700 w-full h-[15px] animate-pulse rounded-md inline-block"></span>
            )}{" "}
            {edit && (
              <EditBasicInfo
                course={course}
                output={output}
                onUpdate={handleUpdate}
              />
            )}
          </h2>
          <p className="text-md text-gray-500">
            {desc ? (
              desc
            ) : (
              <span>
                <span className="block bg-slate-300 dark:bg-slate-700 w-[200px] h-[10px] animate-pulse rounded-md mb-2"></span>
                <span className="block bg-slate-300 dark:bg-slate-700 w-[150px] h-[10px] animate-pulse rounded-md"></span>
              </span>
            )}
          </p>
          <p className="flex flex-row items-center text-md gap-2 mt-3 text-primary font-semibold">
            <FaPuzzlePiece /> {course?.category}
          </p>
          <Link href={`/course/${course?.courseId}/start`}>
            <Button className="w-full mt-5" disabled={edit}>
              Start
            </Button>
          </Link>
        </div>
        <div className="mx-6 mt-6 overflow-hidden">
          <label htmlFor="upload-image" className="w-full">
            <Image
              key={selectedFile}
              src={selectedFile ? selectedFile : "/image_placeholder.png"}
              alt="placeholder"
              width={1000}
              height={800}
              className="w-full rounded-xl h-[250px] object-cover cursor-pointer"
            />
            <input
              type="file"
              id="upload-image"
              className="opacity-0"
              onChange={onFileChange}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
