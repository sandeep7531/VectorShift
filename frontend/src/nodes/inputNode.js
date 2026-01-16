import { Position } from "reactflow";
import { BaseNode } from "./baseNode";

export const InputNode = ({ id, data }) => {
  const name = data?.inputName || id;

  return (
    <BaseNode
      id={id}
      title="Input"
      handles={[{ id: "value", type: "source", position: Position.Right }]}
    >
      <div className="node-field">
        <label className="node-label">Name:</label>
        <input className="node-input" type="text" defaultValue={name} />
      </div>
    </BaseNode>
  );
};
