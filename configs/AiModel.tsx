import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey!);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const GenerateCourseLayout = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Create a course tutorial with field name as Course name, Course Description along with Chapter name, Chapter Description and Duration for each chapter, based on the following course details: Category: 'Programming', Topic: 'Python Programming', Description: 'A detailed python programming course', 'Difficulty: 'Intermediate', Course Duration: '5 hours',  no. of chapters: 5, in JSON format. Course duration has to be less than or equal to what is specified.",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "Course Name": "Python Programming for Intermediate Learners",\n  "Course Description": "A comprehensive and practical course designed to delve deeper into the world of Python programming, targeting developers with a foundational understanding.",\n  "Difficulty": "Intermediate",\n  "Course Duration": "5 hours",\n  "Chapters": [\n    {\n      "Chapter Name": "Data Structures and Algorithms in Python",\n      "Chapter Description": "Explore fundamental data structures like lists, dictionaries, sets, and tuples, along with core algorithms like sorting and searching. Learn how to implement these concepts efficiently in Python.",\n      "Duration": "1 hour"\n    },\n    {\n      "Chapter Name": "Object-Oriented Programming with Python",\n      "Chapter Description": "Dive into the principles of object-oriented programming (OOP), including classes, objects, inheritance, polymorphism, and encapsulation. Build your understanding of designing modular and reusable code.",\n      "Duration": "1 hour"\n    },\n    {\n      "Chapter Name": "Working with Files and Exceptions",\n      "Chapter Description": "Master file handling operations, including reading, writing, and manipulating files. Learn to handle exceptions gracefully to prevent errors and improve program robustness.",\n      "Duration": "1 hour"\n    },\n    {\n      "Chapter Name": "Modules and Packages in Python",\n      "Chapter Description": "Discover the power of Python\'s rich ecosystem by exploring modules and packages. Learn how to import and utilize external libraries to extend your program\'s functionality.",\n      "Duration": "1 hour"\n    },\n    {\n      "Chapter Name": "Practical Applications and Projects",\n      "Chapter Description": "Apply your knowledge through hands-on projects and real-world examples. Build projects that demonstrate your proficiency in Python programming.",\n      "Duration": "1 hour"\n    }\n  ]\n}\n```\n',
        },
      ],
    },
  ],
});
