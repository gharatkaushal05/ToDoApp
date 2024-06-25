import Link from "next/link"
export default function Header(){
    return(
        <nav className="flex justify-between items-center
        bg-slate-800 px-8 py-3 "> 
            <Link  className="text-white font-bold "href={'/'}>Todo App</Link>
            <Link className="bg-white p-2 rounded-xl" href={'/addTodo'}>Add Todo</Link>
        </nav>
    )
}