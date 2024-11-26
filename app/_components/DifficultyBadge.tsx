import { Badge } from "@/components/ui/badge";

const DifficultyBadge = ({ difficulty }: { difficulty: string }) => {
  const color =
    difficulty === "Beginner"
      ? "bg-pink-400"
      : difficulty === "Intermediate"
      ? "bg-orange-400"
      : "bg-red-500";
  return <Badge className={color}>{difficulty}</Badge>;
};

export default DifficultyBadge;
