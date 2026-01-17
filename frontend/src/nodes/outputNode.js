import { Position } from "reactflow";
import { BaseNode } from "./baseNode";
import { useState } from "react";

export const OutputNode = ({ id, data }) => {
  const [name, setName] = useState(data?.outputName || "output_1");
  const [type, setType] = useState(data?.type || "Text");
  const [value, setValue] = useState(data?.value || "");
  const [format, setFormat] = useState(data?.format ?? true);

  return (
    <BaseNode
      id={id}
      title="Output"
      subtitle="Output data of different types from your workflow."
      handles={[{ id: "value", type: "target", position: Position.Left }]}
      className="output-node"
    >
      <label className="node-label">Name:</label>
      <input
        className="output-node-id editable"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="output_name"
      />

      <div className="output-field">
        <label className="output-label">
          Type <span className="output-badge">Dropdown</span>
        </label>

        <select
          className="output-select"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option>Text</option>
          <option>Number</option>
          <option>Boolean</option>
          <option>JSON</option>
        </select>
      </div>

      {/* Output value */}
      <div className="output-field">
        <label className="output-label required">
          Output <span className="required-star">*</span>
          <span className="output-badge">Text</span>
        </label>

        <textarea
          className={`output-textarea ${!value ? "error" : ""}`}
          placeholder='Type "{{" to utilize variables'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>

      {/* Format output */}
      <div className="output-toggle">
        <span>Format output</span>

        <label className="switch">
          <input
            type="checkbox"
            checked={format}
            onChange={() => setFormat(!format)}
          />
          <span className="slider" />
        </label>
      </div>
    </BaseNode>
  );
};
