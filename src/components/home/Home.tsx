import { useEffect, useState } from "react";
import Header from "../common/Header.tsx";
import axios from "axios";
import Article from "../common/Article.tsx";
import { useParams } from "react-router-dom";
import { API_BASE_URL, API_KEY } from "../../globals/constants.tsx";

export type IArticle = {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string | null;
};
export default function Home() {
  let { category } = useParams();
  const [articles, setArticles] = useState<IArticle[]>([]);
  useEffect(() => {
    let api = `${API_BASE_URL}?country=us&apiKey=${API_KEY}`;
    if (category) {
      api = `${API_BASE_URL}?country=us&category=${category}&apiKey=${API_KEY}`;
    }
    const fn = async () => {
      try {
        const result = await axios.get(api);
        setArticles(result.data.articles);
      } catch (e) {
        console.log(e);
      }
    };
    fn();
  }, [category]);
  return (
    <div className="home mx-auto">
      <Header />
      <main className="mx-52 bg-white">
        {articles.map((article) => (
          <Article key={article.title} article={article} />
        ))}
      </main>
    </div>
  );
}
