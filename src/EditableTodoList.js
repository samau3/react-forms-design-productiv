import React from "react";
import EditableTodo from "./EditableTodo";

/** Show list of editable todos.
 *
 * Props:
 * - todos: array of [ todo, ... ]
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * TodoApp -> EditableTodoList -> [ EditableTodo, ... ]
 */

function EditableTodoList({ todos, update, remove }) {

  return (
    <div>
      {/*   FIXME  */}
      {todos.map(todo =>
        <div>
          <EditableTodo key={todo.id} todo={todo} update={update} remove={remove}/>
        </div>
      )}
    </div>
  );
}

export default EditableTodoList;
