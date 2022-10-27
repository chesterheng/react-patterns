import React, { useState } from "react";

const Warnings = () => {
  const [name, setName] = useState();
  const [animal, setAnimal] = useState("tiger");
  return (
    <div>
      <div>
        <label>
          Read only (missing onChange): <input value="yo" readOnly />
        </label>
      </div>
      <div>
        <button onClick={() => setName("bob")}>Set name to bob</button>
        <label>
          Changing from uncontrolled to controlled:{" "}
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </label>
      </div>
      <div>
        <button onClick={() => setAnimal()}>Unset animal</button>
        <label>
          Changing from controlled to uncontrolled:{" "}
          <input value={animal} onChange={(e) => setAnimal(e.target.value)} />
        </label>
      </div>
    </div>
  );
};

const MyCapitalizedInput = () => {
  const [capitalizedValue, setCapitalizedValue] = useState("");

  return (
    <input
      value={capitalizedValue}
      onChange={(e) => setCapitalizedValue(e.target.value.toUpperCase())}
    />
  );
};

const MyTwoInputs = () => {
  const [capitalizedValue, setCapitalizedValue] = useState("");
  const [lowerCasedValue, setLowerCasedValue] = useState("");

  const handleInputChange = (e) => {
    setCapitalizedValue(e.target.value.toUpperCase());
    setLowerCasedValue(e.target.value.toLowerCase());
  };

  return (
    <>
      <input value={capitalizedValue} onChange={handleInputChange} />
      <input value={lowerCasedValue} onChange={handleInputChange} />
    </>
  );
};

const UncontrolledToggle = () => {
  const [onState, setOnState] = useState(false);
  const toggle = () => setOnState(!onState);
  return (
    <div>
      <p>Uncontrolled Component</p>
      <button type="button" onClick={toggle}>
        {onState ? "on" : "off"}
      </button>
    </div>
  );
};

const ControlPropsToggle = ({ on: onProp, onToggle }) => {
  const toggle = () => onToggle(!onProp);
  return (
    <div>
      <p>Control Props Component</p>
      <button type="button" onClick={toggle}>
        {onProp ? "on" : "off"}
      </button>
    </div>
  );
};

const FlexibleControlPropsToggle = ({ on: onProp, onToggle }) => {
  const isPropsControlled = () => onProp !== undefined;
  const [onState, setOnState] = useState(false);
  const toggle = () => {
    if (isPropsControlled()) {
      onToggle(!onProp);
    } else {
      setOnState(!onState);
    }
  };
  const on = isPropsControlled() ? onProp : onState;
  return (
    <div>
      <p>
        {isPropsControlled() ? "Control Props" : "Uncontrolled"}  Component
      </p>
      <button type="button" onClick={toggle}>
        {on ? "on" : "off"}
      </button>
    </div>
  );
};

export {
  Warnings,
  MyCapitalizedInput,
  MyTwoInputs,
  UncontrolledToggle,
  ControlPropsToggle,
  FlexibleControlPropsToggle,
};
