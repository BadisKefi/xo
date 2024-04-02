import { FaRegCircle } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex justify-center items-center">
      <main className="flex gap-6 h-screen flex-col w-[500px] items-center justify-center p-6">
        <div className="flex-col border-2 h-[200px] w-full flex justify-center items-center gap-0 border-black p-6">
          <div className="">badis vs malek</div>
          <div className="text-blue-400">
            it's badis's turn , he is{" "}
            <span className="text-lg font-bold">X</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2  w-full lg:h-full lg:w-fit aspect-square">
          <div className="bg-gray-200 flex items-center justify-center text-4xl hover:bg-violet-400 hover:text-white ">
            X
          </div>
          <div className="bg-gray-200 flex items-center justify-center text-4xl hover:bg-violet-400 hover:text-white">
            O
          </div>
          <div className="bg-gray-200 flex items-center justify-center text-4xl hover:bg-violet-400 hover:text-white">
            X
          </div>
          <div className="bg-gray-200 flex items-center justify-center  text-4xl hover:bg-violet-400 hover:text-white">
            O
          </div>
          <div className="bg-gray-200 flex items-center justify-center  text-4xl hover:bg-violet-400 hover:text-white">
            X
          </div>
          <div className="bg-gray-200 flex items-center justify-center  text-4xl hover:bg-violet-400 hover:text-white">
            O
          </div>
          <div className="bg-gray-200 flex items-center justify-center  text-4xl hover:bg-violet-400 hover:text-white">
            X
          </div>
          <div className="bg-gray-200 flex items-center justify-center  text-4xl hover:bg-violet-400 hover:text-white">
            O
          </div>
          <div className="bg-gray-200 flex items-center justify-center  text-4xl hover:bg-violet-400 hover:text-white">
            X
          </div>
        </div>
      </main>
    </div>
  );
}
