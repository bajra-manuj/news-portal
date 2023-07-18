import { Link } from "react-router-dom";
import { BASE_URL, CATEGORIES } from "../../globals/constants";

export default function Header() {
  return (
    <header className="w-100 h-20 p-5">
      <ul className="flex gap-4 justify-center">
        <Link to={`${BASE_URL}`}>
          <li key={"home"}>Home</li>
        </Link>
        {CATEGORIES.map((category, key) => (
          <Link to={`${BASE_URL}/${category}`}>
            <li className="capitalize" key={key}>
              {category}
            </li>
          </Link>
        ))}
      </ul>
    </header>
  );
}
