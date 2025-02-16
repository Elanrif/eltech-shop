import * as React from "react";
import { useCounter } from "./use-increment";

type UseCardLogicProps = {
  productId__: number;
  isStock__: boolean;
}
const useCardLogic = ({ productId__, isStock__ }: UseCardLogicProps) => {
  const storagekey = `product_${productId__}`
  const getStoreVAlue = <T>(key: string, defaultValue: T): T => {
    const stored = localStorage.getItem(`${storagekey}_${key}`)
    return stored !== null ? JSON.parse(stored) : defaultValue
  }
  const setStoredValue = React.useCallback(<E>(key: string, value: E) => {
    localStorage.setItem(`${storagekey}_${key}`, JSON.stringify(value));
  },[storagekey])
  const [isDisplay, setIsDisplay] = React.useState(false);
  const [isActive_, setIsActive_] = React.useState(getStoreVAlue("isActive_", false));
  const [isChecked, setIschecked] = React.useState(getStoreVAlue("isChecked", false));
  const initialCounter = getStoreVAlue<number>("counter",1)
  const { counter, increment, decrement } = useCounter(initialCounter);
  console.log("counter: ", counter )

  const handleIsChecked = () => {
    setIschecked((prev) => {
      const newState = !prev;
      setStoredValue("isChecked", newState)
      return newState;
    });
  };

  const handleClick = () => {
    setIsActive_(true);
    setStoredValue("isActive_", true)
    increment(0);
  };
  const handleOnMouseEnter = () => {
    setIsDisplay(true);
  };
  const handleOnMouseLeave = () => {
    if (isActive_ && isStock__) {
      setIsDisplay(true);
    } else {
      setIsDisplay(false);
    }
  };

    React.useEffect(() => {
    setStoredValue("counter", counter);
    if (counter.isActive) {
      setIsActive_(false);
    }
  }, [counter,counter.isActive, isActive_, setStoredValue]);

  React.useEffect(() => {
    setStoredValue("isActive_", isActive_)
  }, [isActive_,setStoredValue])

  React.useEffect(() => {
    setStoredValue("isChecked", isChecked);
  }, [isChecked,setStoredValue]);

  return {
    isDisplay,
    isActive_,
    isChecked,
    counter,
    handleIsChecked,
    handleClick,
    handleOnMouseEnter,
    handleOnMouseLeave,
    increment,
    decrement,
  };
};

export default useCardLogic;
