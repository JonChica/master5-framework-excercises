import { actionsEnums } from "../common/actionsEnums";

export const filterChange = (organizationName: string) => {
  return {
    type: actionsEnums.FILTER_ID_CHANGE,
    payload: organizationName
  };
};
