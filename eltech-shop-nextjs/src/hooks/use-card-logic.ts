import * as React from "react";
import {PayloadProps, useCounter} from "@/hooks/use-counter";

type UseCardLogicProps = {
  productId__: number;
  isStock__: boolean;
};

const useCardLogic = ({ productId__, isStock__ }: UseCardLogicProps) => {
  const storageKey = `product_${productId__}`;
  console.log(Object.entries(localStorage));
  const getStoreValue = <T>(key: string, defaultValue: T): T => {
    const stored = localStorage.getItem(`${storageKey}_${key}`);
    try {
      return stored !== null ? JSON.parse(stored) : defaultValue;
    } catch (error) {
      console.error(`Error parsing stored value for key ${key}:`, error);
      return defaultValue;
    }
  };

  const setStoredValue = React.useCallback(
    <E>(key: string, value: E) => {
      localStorage.setItem(`${storageKey}_${key}`, JSON.stringify(value));
    },
    [storageKey]
  );


  const [isDisplay, setIsDisplay] = React.useState(false);
  const [isActive_, setIsActive_] = React.useState(
    getStoreValue("isActive_", false)
  );
  const [isChecked, setIsChecked] = React.useState(
    getStoreValue("isChecked", false)
  );

  const initialCounter = getStoreValue<PayloadProps>("counter", {
    count: 0,
    isActive: false,
  });

  const { counter, increment, decrement } = useCounter(initialCounter);


  React.useEffect(() => {
    setStoredValue("counter", counter);
  }, [counter, setStoredValue]);


  React.useEffect(() => {
    setStoredValue("isActive_", isActive_);
  }, [isActive_, setStoredValue]);


  React.useEffect(() => {
    setStoredValue("isChecked", isChecked);
  }, [isChecked, setStoredValue]);

  const handleIsChecked = () => {
    setIsChecked((prev) => {
      const newState = !prev;
      setStoredValue("isChecked", newState);
      return newState;
    });
  };

  const handleClick = () => {
    setIsActive_(true);
    setStoredValue("isActive_", true);
    increment(1);
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
