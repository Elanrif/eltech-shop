import * as React from "react";

export interface PayloadProps {
  count: number;
  isActive: boolean;
}

type Action =
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: number };

function reducer(counter: PayloadProps, action: Action): PayloadProps {
  switch (action.type) {
    case "increment":
      return {
        ...counter,
        count: counter.count + action.payload,
        isActive: true,
      };
    case "decrement":
      if (counter.count < 1) {
        return {
          ...counter,
          isActive: true,
        };
      }
      return {
        ...counter,
        count: Math.max(0, counter.count - action.payload),
        isActive: false,
      };
    default:
      throw new Error(`Unsupported action type: ${action}`);
  }
}

export function useCounter(initialValue: PayloadProps = {count: 0, isActive: false}) {
  const [counter, dispatch] = React.useReducer(reducer, initialValue);

  const increment = (step: number = 1) =>
    dispatch({ type: "increment", payload: step });
  const decrement = (step: number = 1) =>
    dispatch({ type: "decrement", payload: step });

  return { counter, increment, decrement };
}
