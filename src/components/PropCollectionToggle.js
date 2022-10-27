import { useToggle } from "../hooks/usePropCollectionToggle";
import { Switch } from "./Switch";

const PropCollectionToggle = () => {
  const { on, togglerProps } = useToggle();
  return (
    <div>
      <Switch on={on} {...togglerProps} />
      <button aria-label="custom-button" {...togglerProps}>
        {on ? "on" : "off"}
      </button>
    </div>
  );

  // <div>
  //   <Switch on={on} onClick={toggle} aria-pressed={on} />
  //   <hr />
  //   <button aria-label="custom-button" onClick={toggle} aria-pressed={on}>
  //     {on ? "on" : "off"}
  //   </button>
  // </div>
};

export { PropCollectionToggle };
