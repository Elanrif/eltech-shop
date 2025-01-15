import * as React from "react";
import { useCounter } from "./useIncrement";

const useCardLogic = () => {
const [isDisplay, setIsDisplay] = React.useState(false);
const [isActive_, setIsActive_] = React.useState(true);
const [isChecked, setIschecked] = React.useState(false);
const { counter, increment, decrement } = useCounter(1);
const handleIsChecked = () => {
  setIschecked(!isChecked);
};

const handleClick = () => {
  setIsActive_(true);
  increment(0);
};
const handleOnMouseEnter = () => {
  setIsDisplay(true);
};
const handleOnMouseLeave = () => {
  if (isActive_) {
    setIsDisplay(true);
  } else {
    setIsDisplay(false);
  }
};
React.useEffect(() => {
  if (counter.isActive) {
    setIsActive_(false);
  }
}, [counter.isActive]);

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
