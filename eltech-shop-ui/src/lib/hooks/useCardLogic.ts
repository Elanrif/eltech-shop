import * as React from "react";
import { useCounter } from "./useIncrement";

const useCardLogic = (isStock: boolean) => {
const [isDisplay, setIsDisplay] = React.useState(false);
const [isActive_, setIsActive_] = React.useState(false);
const [isChecked, setIschecked] = React.useState(false);
const {counter, increment, decrement } = useCounter(1);
const handleIsChecked = () => {
  setIschecked(!isChecked);
};

console.log("counter", counter);

const handleClick = () => {
  setIsActive_(true);
  increment(0);
};
const handleOnMouseEnter = () => {
  setIsDisplay(true);
};
const handleOnMouseLeave = () => {
   if (isActive_ && isStock) {
    setIsDisplay(true);
  } else {
    setIsDisplay(false);
  }
};
React.useEffect(() => {
  if (counter.isActive) {
    setIsActive_(false);
  }
}, [counter.isActive, isActive_]);

return {
  isDisplay,
  isActive_,
  isChecked,
  handleIsChecked,
  handleClick,
  handleOnMouseEnter,
  handleOnMouseLeave,
  counter,
  increment,
  decrement,
};

}

export default useCardLogic;
