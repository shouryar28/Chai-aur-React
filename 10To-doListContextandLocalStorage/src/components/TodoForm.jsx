import React from "react";
import { useState } from "react";
import { useTodo } from "../context/TodoContext";

function TodoForm() {

    const [todo, setTodo] = useState("");
    const {addTodo} = useTodo();

    const add = (e) => {
        e.preventDefault();

        if(!todo) return 

        addTodo({todo, completed: false}) // directly todo pass nhi kar sakte kyuki humne waisi functionality pass nhi ki hui hai, we will take it as objects

        setTodo("") // ye humara phir se clean up hogya nyaa value(todo) lene ke liye
    }
    

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

