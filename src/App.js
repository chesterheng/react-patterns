import { useState } from "react";
import { Counter } from "./components/Counter";
import { UserSettings } from "./components/UserSettings";
import { UserDataDisplay } from "./components/UserDataDisplay";
import {
  Toggle,
  ToggleOn,
  ToggleOff,
  ToggleButton,
} from "./components/CompoundToggle";
import {
  ToggleProvider as FlexibleToggle,
  ToggleOn as FlexibleToggleOn,
  ToggleOff as FlexibleToggleOff,
  ToggleButton as FlexibleToggleButton,
} from "./components/FlexibleCompoundToggle";
import { PropCollectionToggle } from "./components/PropCollectionToggle";
import { PropGetterToggle } from "./components/PropGetterToggle";
import { StateReducerToggle } from "./components/StateReducerToggle";
import {
  Warnings,
  MyCapitalizedInput,
  MyTwoInputs,
  UncontrolledToggle,
  ControlPropsToggle,
  FlexibleControlPropsToggle,
} from "./components/ControlledComponents";
import { ControlPropsToggleDemo } from "./components/ControlPropsToggle";

const App = () => {
  const [on, setOn] = useState(false);
  const handleToggle = () => setOn(!on);

  return (
    <div
      style={{
        minHeight: 350,
        width: 300,
        backgroundColor: "#ddd",
        borderRadius: 4,
        padding: 10,
      }}>
      <>
        <Counter />
        <hr />
        <UserSettings />
        <hr />
        <UserDataDisplay />
        <hr />
        <Toggle>
          <ToggleOn>The button is on</ToggleOn>
          <ToggleOff>The button is off</ToggleOff>
          <span>Hello</span>
          <ToggleButton />
        </Toggle>
        <hr />
        <FlexibleToggle>
          <FlexibleToggleOn>The button is on</FlexibleToggleOn>
          <FlexibleToggleOff>The button is off</FlexibleToggleOff>
          <div>
            <FlexibleToggleButton />
          </div>
        </FlexibleToggle>
        <hr />
        <PropCollectionToggle />
        <hr />
        <PropGetterToggle />
        <hr />
        <StateReducerToggle />
        <hr />
        <Warnings />
        <hr />
        <MyCapitalizedInput />
        <hr />
        <MyTwoInputs />
        <hr />
        <UncontrolledToggle />
        <hr />
        <ControlPropsToggle on={on} onToggle={handleToggle} />
        <hr />
        <FlexibleControlPropsToggle />
        <hr />
        <FlexibleControlPropsToggle on={on} onToggle={handleToggle} />
        <hr />
        <ControlPropsToggleDemo />
        <hr />
      </>
    </div>
  );
};

export default App;
