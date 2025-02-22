import AddForm from "./AddForm";
import { useSelector  } from "react-redux";

export default function Todo() {
    const todos = useSelector((state) => state.todos);
    console.log(todos);
    return (
        <>
        <AddForm />
        <h2>Todo List App</h2>
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>{todo.task}</li>
            )
            )}
        </ul>
        </>
    );
}
