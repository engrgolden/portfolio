import Link from "next/link";

export default function page() {
  return (
    <section className="w-full h-screen flex-center">
      <div className="flex-center flex-col">
        <p className="text-white font-extrabold text-3xl">SUCCESS!</p>
        <Link
          className=" bg-amber-400
          p-8
          py-4
          text-theme-500
          small
          mt-6
          font-semibold
          w-fit
          tracking-widest
          text-center
          animate-config
          hover:-translate-y-1
          "
          href="/"
        >
          BACK TO HOME
        </Link>
      </div>
    </section>
  );
}
