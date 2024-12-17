export default function ThrowErrorPage() {
  throw new Error("This is a deliberate error!");

  return (
    <div className="flex items-center justify-center h-screen text-lg font-semibold">
      ThrowErrorPage
    </div>
  );
}
