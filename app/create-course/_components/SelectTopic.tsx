import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const SelectTopic = () => {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <label className="text-sm font-semibold">
          Write the title of the course you want to generate.
        </label>
        <Input type="text" placeholder="Enter the title of the course.." />
      </div>
      <div>
        <label className="text-sm font-semibold">
          Describe the structure and contents of the course.
        </label>
        <Textarea placeholder="Provide details about the course here.." />
      </div>
    </div>
  );
};

export default SelectTopic;
