import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{ id: "abc", task: "demo-task", isDone: false }],
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        // Add a new todo
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                task: action.payload,
                isDone: false,
            };
            state.todos.push(newTodo);
        },
        // Delete a todo
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        // Mark a todo as done
        markAsDone: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if (todo.id === action.payload) {
                    return { ...todo, isDone: true };
                }
                return todo;
            });
        },
    },
});

export const { addTodo, deleteTodo, markAsDone } = todoSlice.actions;

export default todoSlice.reducer;


