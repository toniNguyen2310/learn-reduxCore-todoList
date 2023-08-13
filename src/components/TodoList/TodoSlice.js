const initState = [
  {
    id: 1,
    name: "learn code",
    completed: false,
    priority: "Medium",
  },
  {
    id: 2,
    name: "football",
    completed: true,
    priority: "High",
  },
  {
    id: 3,
    name: "Go Home",
    completed: false,
    priority: "Low",
  },
];

const todoListReducer = (state = initState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payload];
    case "todoList/toggleTodoStatus":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );

    default:
      return state;
  }
};
export default todoListReducer;
