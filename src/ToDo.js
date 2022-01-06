function ToDo ({todo, toggleTask, removeTask})  {
    return (
        <div key={todo.id} className={"item-todo"}>
            <div className={todo.complete ? "item-text strike" : "item-text"}
            onClick={()=>toggleTask(todo.id)}
            >
                {todo.task}
            </div>
            <div className="item-delete" onClick={() =>removeTask(todo.id)}><span>
                <img className="del-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Icons8_flat_delete_generic.svg/1200px-Icons8_flat_delete_generic.svg.png"/>
            </span>
            </div>

        </div>
    )
}

export  default  ToDo;