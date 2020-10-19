import { Slider, Popover, Button } from "antd";
import React from "react";

export default function RenderSearchFilter(props) {
  const {
    title,
    popoverTitle,
    min,
    max,
    step,
    value,
    tipFormatter,
    onChange,
    children,
    input,
    onAfterChange
  } = props;
  // Subcomponent to generate the range display
  // either as an HTML element or an array of strings

  const content = (
    <>
      {/* Currently Rent passes on additional children to render */}
      {children}
      {/* Currently Jobs passes on an input to render instead of the Slider */}
      {input || (
        <Slider
          range={min && max}
          min={min ?? 100}
          max={max}
          step={step}
          value={value}
          tipFormatter={tipFormatter}
          onChange={onChange}
          onAfterChange={onAfterChange}
        />
      )}
      <RangeDisplay {...props} html={true} />
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
      {/* No onClick is needed, as the Popover itself handles hiding/showing itself */}
      <Button>{`${title}: ${RangeDisplay(props)?.join(" ")}`}</Button>
    </Popover>
  );
}

// The Range Display used within this component
function RangeDisplay(props) {
  let { value, min, max, tipFormatter, input } = props;
  // Use a minimum of zero if no minimum is given
  // The Rent filter uses this logic
  if (!min) {
    min = 0;
    value = [0, value];
  }

  const html = props?.html;
  const result = [];
  // Jobs passes a unique non-Slider input to render
  // It also has a unique way of displaying what's selected
  if (input) {
    return ChoicesDisplay({ html, value });
  }
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

  // The display for Jobs (or any filter that implements its own non-Slider input)
  // currently unimplemented
  function ChoicesDisplay() {
    return [value];
  }
}
