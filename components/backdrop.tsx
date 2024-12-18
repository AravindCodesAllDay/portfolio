export default function Backdrop() {
  return (
    <>
      <div className="hidden md:block w-1/2 h-screen right-0 bg-light dark:bg-dark transition-colors duration-200 ease-in-out clip-desktop absolute "></div>
      <div className="md:hidden w-screen h-1/2 bottom-0 bg-light dark:bg-dark transition-colors duration-200 ease-in-out clip-mobile absolute "></div>
    </>
  );
}
