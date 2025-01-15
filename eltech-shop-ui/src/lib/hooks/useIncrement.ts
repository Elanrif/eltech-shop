import * as React from "react";
type Action =
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: number };

function reducer(state: number, action: Action): number {
  switch (action.type) {
    case "increment":
      return state + action.payload;
    case "decrement":
      {
        if(state === 1){
            return state;
        }
        return state > 1 ? state - action.payload : state;
      }
    default:
      throw new Error(`Unsupported action type: ${action}`);
  }
}

export function useCounter(initialValue: number = 1) {
    const [count, dispatch] = React.useReducer(reducer, initialValue);

    const increment = (step: number = 1) => dispatch({type: "increment", payload: step});
    const decrement = (step: number = 1) => dispatch({type: "decrement", payload: step});

    return {count, increment, decrement};
}