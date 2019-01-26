import { actionsEnums } from "../common/actionsEnums";

export type filterState = string;

export const memberFilterReducer = (
  state: filterState = "lemoncode",
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case actionsEnums.FILTER_ID_CHANGE:
      return action.payload;
    default:
      return state;
  }
};
