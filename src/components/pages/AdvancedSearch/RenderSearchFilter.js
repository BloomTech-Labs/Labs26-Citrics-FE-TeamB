import { Slider } from "antd";
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
  return (
    <label>
      {title}
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
    </label>
  );
}
