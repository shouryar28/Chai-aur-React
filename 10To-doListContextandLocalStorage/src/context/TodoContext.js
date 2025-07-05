import { useContext, createContext } from "react";

export const TodoContext = createContext({

    // niche hum ek array bnaa rhe jo ki khaali rehne waala hai , uss array ke andar todos jaayega in the form of object. Hum todo list ko isi todos array se fetch karenge.

    todos: [
        {
            id: 1,
            todo: "Todo msg",
            completed: false,
        }
    ],
   
    // Creating Functionalities

    addTodo: (todo) => {}, // addTodo ek functionality hai jo ki expect kar rha hai ek todo as a parameter, add by passing that todo it wii do some functionality

    updatedTodo: (id, todo) => {}, // this functionality will take two parameters as todo and id, it will help us in edit the alerady created todo.

    deleteTodo: (id) => {},  // this function will delete the todo onclicking delete button. 

    toggleComplete: (id) => {} // iska kaam hai ki agar true hai too false kar do yaa agr false hai too true kar false kar doo
});



export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider