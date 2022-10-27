import { useToggle } from "../hooks/usePropGetterToggle";
import { Switch } from "./Switch";

const PropGetterToggle = () => {
  const { on, getToggleProps } = useToggle();
  return (
    <div>
      <Switch {...getToggleProps({ on })} />
      <button
        {...getToggleProps({
          "aria-label": "custom-button",
          onClick: () => console.info("onButtonClick"),
        })}>
        {on ? "on" : "off"}
      </button>
    </div>
  );

  // <div>
  //   <Switch aria-pressed={on} onClick={toggle} on={on}  />
  //   <hr />
  //   <button
  //     aria-pressed={on}
  //     onClick={callAll(() => console.info("onButtonClick"), toggle)}
  //     aria-label="custom-button"
  //   >
  //     {on ? "on" : "off"}
  //   </button>
  // </div>
};

export { PropGetterToggle };
