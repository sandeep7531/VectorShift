import { Position } from "reactflow";
import { BaseNode } from "./baseNode";

export const OutputNode = ({ id, data }) => {
  const name = data?.outputName || id;

  return (
    <BaseNode
      id={id}
      title="Output"
      handles={[{ id: "value", type: "target", position: Position.Left }]}
    >
      <div className="node-field">
        <label className="node-label">Name:</label>
        <input className="node-input" type="text" defaultValue={name} />
      </div>
    </BaseNode>
  );
};
