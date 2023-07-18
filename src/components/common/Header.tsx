import { Link, useParams } from "react-router-dom";
import { BASE_URL, CATEGORIES } from "../../globals/constants";

export default function Header() {
  let { category } = useParams();
  category = category;
  return (
    <header className="w-100 h-20 px-5 bg-white border-b-2 py-1 flex flex-col justify-end">
      <ul className="flex gap-4 justify-center text-gray-600">
        <Link to={`${BASE_URL}`}>
          <li
            key={"home"}
            className={`${
              !category && "text-blue-500 border-b border-b-4 border-b-blue-500"
            }`}
          >
            Home
          </li>
        </Link>
        {CATEGORIES.map((categoryI, key) => (
          <Link to={`${BASE_URL}/${categoryI}`}>
            <li
              className={`capitalize ${
                category === categoryI &&
                "text-blue-500 border-b border-b-4 border-b-blue-500"
              }`}
              key={key}
            >
              {categoryI}
            </li>
          </Link>
        ))}
      </ul>
    </header>
  );
}
