import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs/react";
import Button from "./Button";

const buttonText = "Button Text";
storiesOf("Button", module)
  .addDecorator(withKnobs)
  .add("default", () => <Button btnText={text(buttonText)} />)
  .add("empty", () => <Button btnText="" />)
  .add("One Word", () => <Button btnText="Click" />)
  .add("Few Words", () => <Button btnText="Click Here!" />)
  .add("Lot's Of Words", () => (
    <Button btnText="Click Here Won't You Please? I Really Would Appreciate it!" />
  ));
