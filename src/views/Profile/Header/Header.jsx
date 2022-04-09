import React, { memo } from "react";
import styles from './_header.module.scss';

function Header() {

    return (
        <header className={styles.header} >
            <nav className={styles.nav}>
                <div className={styles.title}>
                    <p
                        className={styles.link}
                    >
                        My profile
                    </p>
                </div>
                <ul className={styles.listItem}>
                    <li className={styles.item}>
                        <a
                            href="#home"
                            className={styles.link}
                        >
                            Home
                        </a>
                    </li>
                    <li className={styles.item}>
                        <a
                            href="#about-me"
                            className={styles.link}
                        >
                            About me
                        </a>
                    </li>
                    <li className={styles.item}>
                        <a
                            href="#education"
                            className={styles.link}
                        >
                            Education
                        </a>
                    </li>
                    <li className={styles.item}>
                        <a
                            href="#skills"
                            className={styles.link}
                        >
                            Skills
                        </a>
                    </li>
                    <li className={styles.item}>
                        <a
                            href="#experience"
                            className={styles.link}
                        >
                            Experience
                        </a>
                    </li>
                    <li className={styles.item}>
                        <a
                            href="#contact"
                            className={styles.link}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default memo(Header)