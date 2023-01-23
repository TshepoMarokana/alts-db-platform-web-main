import { FC } from "react";
import styles from '../header/header.module.scss'
import NavItem from "./navitem";

type FilterItem = {
  nav: string[];
  className?: boolean
};

const Nav: FC<FilterItem> = ({ nav ,className}) => (
  <nav className={className ? `${styles.menu_small}` :`${styles.menu}`}>
    <ul>
      {nav.map(item => (
        <NavItem key={item} content={item}/>
      ))}
    </ul>
  </nav>
);

export default Nav;
