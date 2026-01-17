import { Position } from "reactflow";
import { BaseNode } from "./baseNode";
import { useState } from "react";

export const InputNode = ({ id, data }) => {
  const [name, setName] = useState(data?.inputName || "input_0");
  const type = data?.type || "Text";

  return (
    <BaseNode
      id={id}
      title="Input"
      subtitle="Pass data of different types into your workflow"
      handles={[{ id: "value", type: "source", position: Position.Right }]}
      className="input-node"
    >
      <label className="node-label">Name:</label>

      <input
        className="input-node-id editable"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="input_name"
      />

      <div className="input-suggestion">
        💡 <strong>Suggestion:</strong> Give the node a distinct name
      </div>

      <div className="input-field">
        <label className="input-label">
          Type <span className="input-badge">Dropdown</span>
        </label>

        <select className="input-select" defaultValue={type}>
          <option>Text</option>
          <option>Number</option>
          <option>Boolean</option>
          <option>JSON</option>
        </select>
      </div>
    </BaseNode>
  );
};
