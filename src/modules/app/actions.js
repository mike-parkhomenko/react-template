export const DEFAULT_ACTION = "app/DEFAULT_ACTION";

export const defaultAction = () => {
  return { type: DEFAULT_ACTION, payload: "Hello!" };
};
