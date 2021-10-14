import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

/** Show editable todo item.
 *
 * Props
 * - todo
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * EditableTodoList -> EditableTodo -> { Todo, TodoForm }
 */

function EditableTodo({ todo, update, remove }) {
  console.log("EditableTodo:", todo);
  const { id, title, description, priority } = todo;
  // Is there another way to do this without a state?
  const [isEditing, setIsEditing] = useState(false);
  console.log("isEditing:", isEditing);

  /** Toggle if this is being edited */
  function toggleEdit() { 
    setIsEditing(curr => !curr);
  }
  
  /** Call remove fn passed to this. */
  function handleDelete() { 
    remove(id);
  }
  
  /** Edit form saved; toggle isEditing and update in ancestor. */
  function handleSave() { 
    update(todo);
    toggleEdit();
  }

  return (
      <div className="EditableTodo">
                {isEditing && 
                <TodoForm initialFormData={todo} handleSave={handleSave}/>
                }

                <div className="mb-3">
                  <div className="float-right text-sm-right">
                    <button
                        className="EditableTodo-toggle btn-link btn btn-sm"
                        onClick={toggleEdit}>
                      Edit
                    </button>
                    <button
                        className="EditableTodo-delBtn btn-link btn btn-sm text-danger"
                        onClick={handleDelete}>
                      Del
                    </button>
                  </div>
                  <Todo 
                    id={id} 
                    title={title} 
                    description={description} 
                    priority={priority} 
                  />
                </div>

      </div>
  );
}

export default EditableTodo;
