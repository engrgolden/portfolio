"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaUser, FaAt, FaEnvelope } from "react-icons/fa6";

function HomeGetInTouch() {
  const router = useRouter();
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setError("");

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("https://formspree.io/f/mldnvqbw", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      const data = await res.json();

      if (data.ok || data.success) {
        router.push("/success");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again later.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="my-4" id="getintouch">
      <header className="header1 my-4">Get in touch</header>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-8 bg-theme-100 p-8"
      >
        <div className="flex h-12 group">
          <div className="w-12 bg-theme-500 flex-center animate-config group-focus-within:text-theme-500 group-focus-within:bg-gold">
            <FaUser />
          </div>
          <div className="h-full bg-theme-200 w-full px-4 flex items-center">
            <input
              name="name"
              type="text"
              placeholder="Name"
              required
              className="outline-none w-full h-full text-white"
            />
          </div>
        </div>

        <div className="flex h-12 group">
          <div className="w-12 bg-theme-500 flex-center animate-config group-focus-within:text-theme-500 group-focus-within:bg-gold">
            <FaAt />
          </div>
          <div className="h-full bg-theme-200 w-full px-4 flex items-center">
            <input
              name="email"
              type="email"
              required
              placeholder="Email"
              className="outline-none w-full h-full text-white"
            />
          </div>
        </div>

        <div className="flex h-20 group">
          <div className="w-12 bg-theme-500 flex justify-center pt-2 animate-config group-focus-within:text-theme-500 group-focus-within:bg-gold">
            <FaEnvelope />
          </div>
          <div className="h-full bg-theme-200 w-full px-4 flex items-center">
            <textarea
              name="message"
              placeholder="Message"
              required
              className="outline-none w-full h-full resize-none hide-scrollbar p-2 text-white"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={sending}
          className="bg-amber-400 p-8 py-4 text-theme-500 small mt-6 font-semibold w-fit tracking-widest text-center animate-config hover:-translate-y-1"
        >
          {sending ? "SENDING..." : "SEND MESSAGE"}
        </button>

        {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
      </form>
    </section>
  );
}

export default HomeGetInTouch;
