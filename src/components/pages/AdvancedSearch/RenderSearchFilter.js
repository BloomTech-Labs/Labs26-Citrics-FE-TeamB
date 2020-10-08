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
  const RangeDisplay = (html = false) => {
    const result = [];
    if (!tipFormatter) return null;
    // First word
    if (value[0] > min) {
      result.push(tipFormatter(value[0]));
    }
    // Middle word
    if (value[0] > min && value[1] < max) {
      result.push("to");
    } else if (value[0] > min) {
      result.push("or more");
    } else if (value[1] < max) {
      result.push("up to");
    } else result.push("Any");
    // Last word
    if (value[1] < max) {
      result.push(tipFormatter(value[1]));
    }

    return html ? (
      <div className="advanced-search-range-display">
        {result.map((val, idx) => (
          <span key={idx}>{val}</span>
        ))}
      </div>
    ) : (
      result
    );
  };

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
      <RangeDisplay html={true} />
    </>
  );

  return (
    <Popover
      placement="bottomLeft"
      title={title}
      trigger="click"
      content={content}
    >
      <Button>{`${title}: ${RangeDisplay()?.join(" ")}`}</Button>
    </Popover>
  );
}
