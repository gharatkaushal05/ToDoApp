import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-gray-900 px-8 py-3 shadow-md">
      <Link className="text-white font-bold text-xl" href={"/"}>
        Todo App
      </Link>
      <Link className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105" href={"/addTopic"}>
        Add Todo
      </Link>
    </nav>
  );
}
