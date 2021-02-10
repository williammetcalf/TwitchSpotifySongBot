import firebase from "firebase/app";
import { useCallback, useEffect, useReducer } from "react";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { UserSettings } from "../../../types/UserSettings";

function useSettings(
  docRef: firebase.firestore.DocumentReference<firebase.firestore.DocumentData>
) {
  const [settings, loading] = useDocumentData<UserSettings>(docRef);
  const [state, update] = useSettingsState({
    command: "",
    enabled: false,
    responseFormat: "",
    spotifyTokens: { access_token: "", refresh_token: "" },
  });

  useEffect(() => {
    if (settings) {
      update(settings);
    }
  }, [settings, update]);

  const save = useCallback(() => {
    docRef.update({
      command: state.command,
      responseFormat: state.responseFormat,
    });
  }, [docRef, state.command, state.responseFormat]);

  const reset = useCallback(() => {
    firebase
      .firestore()
      .collection("defaultSettings")
      .doc("@@default")
      .get()
      .then((defaults) => {
        const data = defaults.data();
        if (data)
          update({
            command: data.command,
            responseFormat: data.responseFormat,
          });
      });
  }, [update]);

  const formDirty =
    state.command !== settings?.command ||
    state.responseFormat !== settings.responseFormat;

  return { settings: state, update, save, reset, loading, formDirty };
}

function reducer(
  state: UserSettings,
  action: Partial<UserSettings>
): UserSettings {
  return { ...state, ...action };
}

function useSettingsState(initialState: UserSettings) {
  return useReducer(reducer, initialState);
}

export default useSettings;
