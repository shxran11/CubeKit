import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectOptions = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="mb-5">
        <label className="text-sm font-semibold">Difficulty Level</label>
        <Select>
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
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1 hour</SelectItem>
            <SelectItem value="2">2-5 hours</SelectItem>
            <SelectItem value="3">5-10 hours</SelectItem>
            <SelectItem value="5">More than 10 hours</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="mb-5">
        <label className="text-sm font-semibold">Add video</label>
        <Select>
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
        <Input type="number" placeholder="Enter number of chapters" />
      </div>
    </div>
  );
};

export default SelectOptions;
