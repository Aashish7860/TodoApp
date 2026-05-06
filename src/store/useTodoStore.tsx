import axios from "axios";
import { create } from "zustand";

interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoStore {
  todos: ITodo[];
  addTodo: (title: string) => void;
  updateTodo: (todo: ITodo) => void;
  deleteTodo: (id: number) => void;
  toggleHandleCompleted: (id: number) => void;
  removeAll: () => void;
  fetchTodoList: () => void;
  // handleAddClick: () => void;
  isEditing: boolean;
  addTitle: string;
  updateTitle: string;
  setAddTitle: (title: string) => void;
  setUpdateTitle: (title: string) => void;
  startEditing: (todo: ITodo) => void;
  // startEditing: (todo: ITodo, isEditing: boolean) => void;
  stopEditing: (todo: ITodo, isEditing: boolean) => void;
  // stopEditing: (isEditing: boolean) => void;
  setIsEditing: (isEditing: boolean) => void;
  currentTodo: ITodo | null;
  // newtitle:string
}

export const useTodoStore = create<TodoStore>((set, get) => ({
  todos: [],
  isEditing: false,

  addTitle: "",
  updateTitle: "",
  currentTodo: null,

  // handleAddClick: () => {
  //   const currentvalue = get().addTitle;

  //   if (currentvalue.trim() == "") {
  //     alert("Please input something");
  //     return;
  //   }
  //   get().addTodo(currentvalue);
  //   get().setTitle("");
  // },

  fetchTodoList: () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        set({ todos: json });
      });
  },

  addTodo: (title) =>
    set((state) => ({
      todos: [{ id: Date.now(), title, completed: false }, ...state.todos],
    })),

  setAddTitle: (newtitle) =>
    set(() => ({
      addTitle: newtitle,
    })),

  updateTodo: (updatedTodo) => {
    set((state) => ({
      todos: state.todos.map((t) =>
        t.id === updatedTodo.id ? updatedTodo : t,
      ),
    }));
  },

  // updateTodo: (updatedTodo) => {
  //   const currentvalue = get().updateTitle;
  //   if (currentvalue != "" && currentvalue != updatedTodo.title) {
  //     // updateTodo({ ...todo, title: currentvalue });

  //     set((state) => ({
  //       todos: state.todos.map((t) =>
  //         t.id === updatedTodo.id ? updatedTodo : t,
  //       ),
  //     }));
  //   }
  // },

  setUpdateTitle: (newtitle) =>
    set(() => ({
      updateTitle: newtitle,
    })),

  deleteTodo: (id) => {
    set((state) => ({
      todos: state.todos.filter((t) => t.id !== id),
    }));
  },

  toggleHandleCompleted: (id) =>
    set((state) => ({
      todos: state.todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t,
      ),
    })),

  removeAll: () => set({ todos: [] }),

  // startEditing: (todo, isEditing) => {
  //   set(() => ({
  //     currentTodo: todo,
  //     isEditing: isEditing,
  //   }));
  // },

  startEditing(todo) {
    set({
      isEditing: true,
      currentTodo: todo,
      updateTitle: todo.title,
    });
  },

  stopEditing: (todo, isEditing) => {
    set({
      currentTodo: todo,
      isEditing: isEditing,
    });
  },

  setIsEditing: (isEditing) => {
    // const currentvalue = get().isEditing;
    set({
      isEditing: isEditing,
    });
    // set((state) => ({
    //   isEditing: !state.isEditing,
    // }));
  },
}));
