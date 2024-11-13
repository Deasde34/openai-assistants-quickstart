"use client";

import React from "react";
import styles from "./page.module.css";

const Home = () => {
  const categories = {
    "File search": "file-search",
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {Object.entries(categories).map(([name, url]) => (
          <a key={name} className={styles.category} href={`/pageComponent/${url}`}>
            {name}
          </a>
        ))}
      </div>
    </main>
  );
};

export default Home;
