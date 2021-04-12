const initialstate = { showingform: true, showingEdit: false, crud: [] };
export function FormItem(state = initialstate, action) {
  switch (action.type) {
    case "FETCHING_DATA":
      return {
        ...state,
        crud: state.crud.concat(action.data),
      };
    case "ADD_POST":
      return {
        ...state,
        crud: [...state.crud, action.data],
      };
    case "DELETE_POST":
      return {
        showingform: true,
        crud: state.crud.filter((post) => post.id !== action.id),
      };
    case "EDIT_POST":
      return {
        showingform: false,
        showingEdit: true,
        crud: state.crud.map((post) =>
          post.id === action.id ? { ...post, editing: !post.editing } : post
        ),
      };
    case "UPDATE":
      return {
        showingform: true,
        crud: state.crud.map((post) => {
          if (post.id === action.id) {
            return {
              ...post,
              title: action.data.title,
              content: action.data.content,
              editing: !post.editing,
            };
          } else return post;
        }),
      };
    case "COMPLETE_TODO":
      return {
        showingform: true,
        crud: state.crud.map((todo) =>
          todo.id === action.id ? { ...todo, done: !todo.done } : todo
        ),
      };
    case "COMPLETE_BUTTON":
      return {
        ...state,
        crud: action.data,
      };
    case "INCOMPLETE_BUTTON":
      return {
        ...state,
        crud: action.data,
      };
    case "ALL_TASKS":
      return {
        ...state,
        crud: action.data,
      };
    default:
      return state;
  }
}
