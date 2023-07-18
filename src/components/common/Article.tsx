import { DateTime } from "luxon";
import { IArticle } from "../home/Home";

export default function Article({ article }: { article: IArticle }) {
  const date = DateTime.fromISO(article.publishedAt).toRelative();
  return (
    <div className="article flex justify-between my-4 border-b border-b-gray-300 p-2">
      <div className="left flex flex-col justify-between">
        <div className="top">
          <h4 className="name text-sm">{article.source.name}</h4>
          <h3 className="text-xl">{article.title}</h3>
        </div>
        <div className="bottom font-light">
          <p>{date}</p>
        </div>
      </div>
      <div className="right">
        <div
          className="img h-36 w-52 bg-center bg-cover rounded-lg"
          style={{
            backgroundImage: `url(${article.urlToImage})`,
          }}
        />
      </div>
    </div>
  );
}
