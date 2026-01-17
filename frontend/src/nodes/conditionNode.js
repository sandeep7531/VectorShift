import { Position } from "reactflow";
import { BaseNode } from "./baseNode";
import { useState } from "react";

export const ConditionNode = ({ id, data }) => {
  const [name, setName] = useState(data?.inputName || "condition_0");

  return (
    <BaseNode
      id={id}
      title="Condition"
      subtitle="Specify a series of conditions and execute different paths based on the value of the conditions."
      handles={[
        { id: "input", type: "target", position: Position.Left },

        { id: "path-0", type: "source", position: Position.Right },
        { id: "else", type: "source", position: Position.Bottom },
      ]}
      className="condition-node"
    >
      <div className="condition-node-content">
        <label className="node-label">Name:</label>
        <input
          className="input-node-id editable"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="input_name"
        />

        {/* Info box */}
        <div className="condition-info">
          The condition node doesn't produce any outputs. It evaluates which
          path to execute based on the condition. To reference previous nodes in
          downstream paths, reference the previous node's output fields.
        </div>

        {/* IF block */}
        <div className="condition-section">
          <div className="condition-header">
            <span className="pill">If</span>
          </div>

          <div className="condition-path">
            <div className="path-title">Path 0</div>

            <div className="condition-row">
              <input className="node-input" placeholder="Input" />

              <select className="node-select">
                <option>=</option>
                <option>!=</option>
                <option>&gt;</option>
                <option>&lt;</option>
                <option>contains</option>
              </select>

              <input className="node-input" placeholder="Value" />
            </div>

            <button className="add-clause-btn">+ Add Clause</button>
          </div>
        </div>

        <div className="condition-section">
          <div className="condition-header">
            <span className="pill">Else</span>
          </div>

          <button className="add-path-btn">+ Add Path</button>
        </div>
      </div>
    </BaseNode>
  );
};
