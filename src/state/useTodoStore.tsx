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
}

export const useTodoStore = create<TodoStore>((set, get) => ({
  todos: [],
  isLoading: false,

  //       useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/todos")
  //       .then((response) => response.json())
  //       .then((json) => {
  //         setTodos(json);
  //       });
  //   }, []);

  addTodo: (title) =>
    set((state) => ({
      todos: [{ id: Date.now(), title, completed: false }, ...state.todos],
    })),

  updateTodo: (updatedTodo) => {
    set((state) => ({
      todos: state.todos.map((t) =>
        t.id === updatedTodo.id ? updatedTodo : t,
      ),
    }));
  },

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
}));
