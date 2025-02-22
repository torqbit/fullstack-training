import { FC } from "react";
import styles from "@/styles/Nav.module.css";

type NavProps = {
  firstName: string;
  lastName: string;
  onClickHandler: (e: Event) => void;
  links: string[];
};

export const Nav: FC<NavProps> = ({ firstName, lastName, links }) => {
  return (
    <nav className={styles.my__nav}>
      <h1>
        {firstName} {lastName}
      </h1>
    </nav>
  );
};
