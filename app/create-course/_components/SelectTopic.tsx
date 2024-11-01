import { UserInputContext } from "@/app/_context/UserInputContext";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useContext } from "react";

const SelectTopic = () => {
  const context = useContext(UserInputContext);
  if (!context) {
    throw new Error(
      "SelectCategory must be used within a UserInputContext provider"
    );
  }

  const { userCourseInput, setUserCourseInput } = context;

  const handleDetailsChange = (fieldName: string, value: string) => {
    setUserCourseInput((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };
  return (
    <div className="flex flex-col gap-5">
      <div className="mb-4">
        <label className="text-sm font-semibold">
          Write the title of the course you want to generate.
        </label>
        <Input
          type="text"
          placeholder="Enter the title of the course.."
          defaultValue={userCourseInput?.topic}
          onChange={(e) => handleDetailsChange("topic", e.target.value)}
        />
      </div>
      <div>
        <label className="text-sm font-semibold">
          Describe the structure and contents of the course.
        </label>
        <Textarea
          placeholder="Provide details about the course here.."
          defaultValue={userCourseInput?.description}
          onChange={(e) => handleDetailsChange("description", e.target.value)}
        />
      </div>
    </div>
  );
};

export default SelectTopic;
