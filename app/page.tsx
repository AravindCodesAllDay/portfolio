import Backdrop from "@/components/backdrop";
import Content from "@/components/content";
import ModeToggle from "@/components/mode-toggle";
import Resume from "@/components/resume";

export default function Home() {
  return (
    <main className="w-screen h-screen flex relative bg-backgroungimg bg-center bg-no-repeat bg-cover">
      <Backdrop />
      <Content />
      <Resume />
      <ModeToggle />
    </main>
  );
}
