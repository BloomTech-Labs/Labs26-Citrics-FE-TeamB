import { Slider, Popover, Button } from "antd";
import React from "react";

export default function RenderSearchFilter({
  title,
  min,
  max,
  step,
  value,
  tipFormatter,
  onChange,
  children,
  input
}) {
  const RangeDisplay = () => <div></div>;

  const content = (
    <>
      {children}
      {input || (
        <Slider
          range
          min={min}
          max={max}
          step={step}
          value={value}
          tipFormatter={tipFormatter}
          onChange={onChange}
        />
      )}
      <RangeDisplay />
    </>
  );

  return (
    <Popover title={title} trigger="click" content={content}>
      <Button>{title}</Button>
    </Popover>
  );
}
