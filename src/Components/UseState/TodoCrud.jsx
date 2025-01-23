import React, { useState } from "react";

const TodoCrud = ({ desc }) => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const addTodo = () => {
    if (todo.trim()) {
      setTodoList([
        ...todoList,
        {
          id: Date.now(),
          text: todo.trim(),
        },
      ]);
    }
    setTodo("");
  };

  const editTodo = ({ id, text }) => {
    setEditId(id);
    setEditText(text);
  };

  const saveTodo = () => {
    setTodoList(
      todoList.map((todoItem) =>
        todoItem.id === editId ? { ...todoItem, text: editText } : todoItem
      )
    );
    setEditId(null);
    setEditText("");
  };

  const deleteTodo = (id) => {
    setTodoList(todoList.filter((todoItem) => todoItem.id !== id));
  };

  return (
    <>
      <div className="vt-flex-container">
        <h1>TodoCrud</h1>
        <p>{desc}</p>
          <div className="hz-flex-container ">
            <input
              className="input-block"
              type="text"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              placeholder="Enter a todo item"
            />
            <button className="btn" onClick={addTodo}>
              Add
            </button>
          </div>
          {todoList.length === 0 ? (
            <p>Add any todo to display</p>
          ) : (
            <h3>Todo List</h3>
          )}
          {todoList.map((todoItem) => {
            return (
              <div key={todoItem.id} className="hz-flex-container">
                {editId === todoItem.id ? (
                  <div className="hz-flex-container">
                    <input
                      value={editText}
                      className="input-block"
                      onChange={(e) => setEditText(e.target.value)}
                    />
                    <button className="btn" onClick={saveTodo}>
                      Save
                    </button>
                  </div>
                ) : (
                  <div className="hz-flex-container hz-flex-container-auto">
                    <p className="item">{todoItem.text}</p>
                    <div className="hz-flex-container">
                      <button
                        className="btn"
                        onClick={() => editTodo(todoItem)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn"
                        onClick={() => deleteTodo(todoItem.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        <div>
          <p>Topics used:</p>
          <div className="hz-flex-container">
            <p className="topic-covered">useState</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoCrud;
