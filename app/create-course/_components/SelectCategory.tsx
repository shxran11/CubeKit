import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const SelectCategory = () => {
  const CategoryList = [
    {
      id: 1,
      category: "Health",
      desc: "Courses on wellness and healthcare",
      icon: "/health.png",
      prompt: "",
    },
    {
      id: 2,
      category: "Business",
      desc: "Management, finance, and entrepreneurship",
      icon: "/business.png",
      prompt: "",
    },
    {
      id: 3,
      category: "Technology",
      desc: "Software, hardware, and IT skills",
      icon: "/technology.png",
      prompt: "",
    },
    {
      id: 4,
      category: "Programming",
      desc: "Coding, algorithms, and software development",
      icon: "/programming.png",
      prompt: "",
    },
    {
      id: 5,
      category: "Science",
      desc: "Core sciences and research basics",
      icon: "/science.png",
      prompt: "",
    },
    {
      id: 6,
      category: "Creative",
      desc: "Design, storytelling, and innovation in the arts",
      icon: "/creative.png",
      prompt: "",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-5">
      {CategoryList.map((item) => (
        <Card
          key={item.id}
          className="hover:cursor-pointer hover:border-primary hover:bg-purple-100 dark:hover:bg-purple-950"
        >
          <CardHeader>
            <CardTitle>{item.category}</CardTitle>
            <CardDescription>{item.desc}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center items-center">
              <Image
                src={item.icon}
                alt={item.category}
                width={100}
                height={100}
              />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default SelectCategory;
