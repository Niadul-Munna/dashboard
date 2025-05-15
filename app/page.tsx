import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="bg-slate-600 w-full p-3 flex items-center justify-center">
        <Link
          className="text-3xl text-white hover:underline hover:underline-offset-9"
          href="./dashboard"
        >
          Dashboard
        </Link>
      </div>
      <h1 className="text-center text-4xl mt-10">Welcome to ....</h1>
    </div>
  );
}
