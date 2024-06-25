export default EditTodo(){
    return(
        <form className="flex flex-col gap-3">
        <input className="border border-blue-400 px-8 py-2"
        type="text"
        placeholder="Todo Title"
        />


         <input className="border border-blue-400 px-8 py-2"
        type="text"
        placeholder="Todo Description"
        />

        <button className="bg-red-600 font-bold text-white py-3 px-6 w-fit rounded-full">Update Todo</button>
        </form>
    );

}