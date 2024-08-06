import { useWindowSize } from "react-customs";

function Content() {
  const { width, height } = useWindowSize();
  return (
    <main className="w-full p-4 md:p-6 flex justify-center">
      <div className="w-full max-w-[800px] bg-zinc-950 text-zinc-50 rounded-lg p-6">
        <div className="my-6">
          <h1 className="w-full text-center flex items-center gap-2 justify-center">
            <code className="px-2 bg-zinc-600 rounded-md text-white font-medium">{width}px</code>
            <span className="text-zinc-400">x</span>
            <code className="px-2 bg-zinc-600 rounded-md text-white font-medium">{height}px</code>
          </h1>
          <p className="mt-8 text-center text-sm text-zinc-400">Resize the window to see changes.</p>
        </div>
      </div>
    </main>
  );
}

export default Content;
