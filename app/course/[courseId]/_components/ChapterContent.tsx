import { chapters } from "@prisma/client";
import YouTube from "react-youtube";
import MarkDown from "react-markdown";

interface ContentItem {
  Title: string;
  CodeExample: string;
  Explanation: string;
}

const ChapterContent = ({ chapter }: { chapter: chapters | undefined }) => {
  return (
    <div>
      <div className="mt-10 flex justify-center">
        <YouTube
          videoId={chapter?.videoId}
          opts={{
            height: "390",
            width: "640",
            playerVars: {
              autoplay: 0,
            },
          }}
        />
      </div>
      <div>
        {chapter?.content &&
          Array.isArray(chapter.content) &&
          (chapter.content as unknown as ContentItem[]).map((item, index) => (
            <div key={index} className="border rounded-lg mt-10 p-5 shadow-md">
              <h2 className="text-xl font-semibold">{item?.Title}</h2>
              <p className="my-3 text-gray-600">
                <MarkDown>{item?.Explanation}</MarkDown>
              </p>
              {item?.CodeExample && (
                <p className="my-3 p-3 rounded-md bg-black dark:bg-white text-white dark:text-black">
                  <pre>
                    <code>{item?.CodeExample}</code>
                  </pre>
                </p>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default ChapterContent;
