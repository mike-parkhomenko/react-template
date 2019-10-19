export const FAILED_TEST_FETCH = "app/FAILED_TEST_FETCH";
export const DEFAULT_ACTION = "app/DEFAULT_ACTION";
export const TEST_FETCH = "app/TEST_FETCH";

export const defaultAction = () => {
  return { type: DEFAULT_ACTION, payload: "Hello, World!" };
};

export const testFetch = () => async dispatch => {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    await data.json();

    dispatch({ type: TEST_FETCH, data });
  } catch (err) {
    dispatch({ type: FAILED_TEST_FETCH, err });
  }
};
