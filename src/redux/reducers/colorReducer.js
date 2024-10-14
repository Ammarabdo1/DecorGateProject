import { TOGGLE_COLOR_MODE } from "../actions/colorActions";

const initialState = {
  theme: localStorage.getItem("theme") || "light",
  light: {
    primary_text: "#2b1c10",
    secondary_text: "#6E493A",
    primary_bg: "#E1D4C1",
    secondary_bg: "#987284",
  },
  dark: {
    primary_text: "#E1D4C1",
    secondary_text: "#f4e1d2",
    primary_bg: "#2b1c10",
    secondary_bg: "",
  },
};

const toggle_theme_reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_COLOR_MODE: {
      const newTheme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return {
        ...state,
        theme: newTheme,
      };
    }
    default:
      return state;
  }
};

export default toggle_theme_reducer