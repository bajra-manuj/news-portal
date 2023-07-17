import { Link } from "react-router-dom";
import { CATEGORIES } from "../utils/constants";

export default function Header() {
  return (
    <header className="w-100 h-20 p-5">
      <ul className="flex gap-4 justify-center">
        <Link to={`/`}>
          <li key={"home"}>Home</li>
        </Link>
        {CATEGORIES.map((category, key) => (
          <Link to={`/${category}`}>
            <li className="capitalize" key={key}>
              {category}
            </li>
          </Link>
        ))}
      </ul>
    </header>
  );
}
