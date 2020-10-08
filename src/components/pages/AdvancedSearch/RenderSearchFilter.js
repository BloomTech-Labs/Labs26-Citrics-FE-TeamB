import { Slider, Popover, Button } from "antd";
import React from "react";

export default function RenderSearchFilter({
  title,
  popoverTitle,
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
    // Jobs has no tipFormatter - instead we render its unique subcomponent
    if (!tipFormatter) return ChoicesDisplay(html);
    // First word - minimum value (or nothing)
    if (value[0] > min) {
      result.push(tipFormatter(value[0]));
    }
    // Middle word changes based on whether it has values to its left, right, both, or neither
    if (value[0] > min && value[1] < max) {
      result.push("to");
    } else if (value[0] > min) {
      result.push("or more");
    } else if (value[1] < max) {
      result.push("up to");
    } else result.push("Any");
    // Last word - maximum value (or nothing)
    if (value[1] < max) {
      result.push(tipFormatter(value[1]));
    }

    return html ? (
      // If requested, wrap the results in an HTML element
      <div className="advanced-search-range-display">
        {result.map((val, idx) => (
          <span key={idx}>{val}</span>
        ))}
      </div>
    ) : (
      result
    );
  };

  const ChoicesDisplay = (html = false) => {
    return [value];
  };

  const content = (
    <>
      {/* Currently Rent passes on additional children to render */}
      {children}
      {/* Currently Jobs passes on an input to render instead of the Slider */}
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
      // This placement ensures the popover doesn't move when the values inside change
      placement="bottomLeft"
      // Some components provide a separate title for the popover
      title={popoverTitle ?? title}
      trigger="click"
      content={content}
    >
      <Button>{`${title}: ${RangeDisplay()?.join(" ")}`}</Button>
    </Popover>
  );
}
