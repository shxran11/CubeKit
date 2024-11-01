import { UserInputContext } from "@/app/_context/UserInputContext";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useContext } from "react";

const SelectOptions = () => {
  const context = useContext(UserInputContext);
  if (!context) {
    throw new Error(
      "SelectCategory must be used within a UserInputContext provider"
    );
  }

  const { userCourseInput, setUserCourseInput } = context;

  const handleValueChange = (fieldName: string, value: string | number) => {
    setUserCourseInput((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="mb-5">
        <label className="text-sm font-semibold">Difficulty Level</label>
        <Select
          onValueChange={(value) => handleValueChange("difficulty", value)}
          defaultValue={userCourseInput?.difficulty}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Beginner">Beginner</SelectItem>
            <SelectItem value="Intermediate">Intermediate</SelectItem>
            <SelectItem value="Advance">Advance</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="mb-5">
        <label className="text-sm font-semibold">Course Duration</label>
        <Select
          onValueChange={(value) => handleValueChange("duration", value)}
          defaultValue={userCourseInput?.duration}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1 hour</SelectItem>
            <SelectItem value="5">5 hours</SelectItem>
            <SelectItem value="10">10 hours</SelectItem>
            <SelectItem value="More than 10">More than 10 hours</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="mb-5">
        <label className="text-sm font-semibold">Add video</label>
        <Select
          onValueChange={(value) => handleValueChange("video", value)}
          defaultValue={userCourseInput?.video}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="yes">Yes</SelectItem>
            <SelectItem value="no">No</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="mb-5">
        <label className="text-sm font-semibold">Number of chapters</label>
        <Input
          type="number"
          placeholder="Enter number of chapters"
          defaultValue={userCourseInput?.chapters}
          onChange={(e) => handleValueChange("chapters", e.target.value)}
        />
      </div>
    </div>
  );
};

export default SelectOptions;
