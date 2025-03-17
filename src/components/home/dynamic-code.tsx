"use client";
import { useState, useEffect } from "react";
const texts = [
  "beautiful user interfaces",
  "scaleable web apps",
  "cutting edge solutions",
];

export default function DynamicCode() {
  const [output, setOutput] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    const updateText = () => {
      if (!isDeleting) {
        if (charIndex < currentText.length) {
          setOutput((prev) => prev + currentText[charIndex]);
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (charIndex > 0) {
          setOutput((prev) => prev.slice(0, -1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    };
    const speed = isDeleting ? 25 : 125;
    const timer = setTimeout(updateText, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <p className="text-white text-center font-mono">
      {"<"}
      <span className="text-amber-400">code</span>
      {">"} I build {output}|{"<"}
      <span className="text-amber-400">code</span>
      {"/>"}
    </p>
  );
}
