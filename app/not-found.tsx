import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 h-screen text-lg font-semibold">
      <p>U ran outside the page 👀</p>
      <Link
        href={"/"}
        className="border border-dashed rounded-full px-2 cursor-none"
      >
        let me take u 🔙
      </Link>
    </div>
  );
}
