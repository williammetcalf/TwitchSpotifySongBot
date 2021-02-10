import { useReducer } from "react";
import { UserSettings } from "../types/UserSettings";

function reducer<UserSettings>(
  state: UserSettings,
  action: Partial<UserSettings>
): UserSettings {
  return { ...state, ...action };
}

function useObjectState(initialState: UserSettings) {
  return useReducer(reducer, initialState);
}

export default useObjectState;
