import { COLORCHANGED, STATUSCHANGED } from "./actionsTypes";
import { initialState } from "./initialState";

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case COLORCHANGED:
      const { color, changeType } = action.payload;
      switch (changeType) {
        case "added":
          return {
            ...state,
            colors: [...state.colors, color],
          };

        case "remove":
          return {
            ...state,
            colors: state.colors.filter((existing) => existing !== color),
          };

        default:
          return state;
      }

    case STATUSCHANGED:
      return {
        ...state,
        status: action.payload,
      };

    default:
      return state;
  }
};
