import { FaHome, FaPlus } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import classes from "./Header.module.css";
import Link from 'next/link';

const Header = () => {
  return (
      <div className={classes.header}>
        <ul>
          <li>
            <Link href="/" className={classes.home}>
              <FaHome />
              <h2>TodoList</h2>
            </Link>
          </li>
          <li className={classes.search}>
            <IoSearchOutline className={classes.searchIcon} />
            <input placeholder="Search" />
          </li>
          <li>
            <Link href="/todo" className={classes.addTodo}>
              <FaPlus />
            </Link>
          </li>
        </ul>
      </div>
  );
};

export default Header;
