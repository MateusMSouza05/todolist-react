import Todos from "../todos";


import Titulo from "../Titulo";
import "./style.css"

function TodoList() {
    return (
       <div className="TodoList">
        <Titulo/>
        <Todos/>
       </div>
    )
}

export default TodoList