import { FC } from "react";
import Link from "next/link";

type FilterItem = {
  content: string;
};

const NavItem: FC<FilterItem> = ({ content}) => (
  <li>
    <Link href={content}>{content}</Link>
  </li>
);

export default NavItem;
