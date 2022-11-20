import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <h2>Beach Resort </h2>
      <p>
        &copy; <span>{year}</span> BeachResort - All Rights Copyright
        Reserved To{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/majutsuuu"
        >
          Samuel Ziskovich
        </a>
      </p>
    </footer>
  );
}
