import { todos } from "./todosDados";
import { useState } from "react";
import "./style.css"

function Todos() {
    const [todosList, setTodosList] = useState()
    return (
    <div className="TodoList">
        {todos.map((todo) => (
            <div className="todo">
                <div className="conteudo">
                    <p className="texto">{todo.text}</p>
                    <p className="category">({todo.category})</p>
                </div>  
                <button>Completar</button>
                <button>X</button>  
            </div>   
        ) )}
       </div> 
       )
}


export default Todos