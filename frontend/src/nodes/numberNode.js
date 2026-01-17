import { Position } from "reactflow";
import { BaseNode } from "./baseNode";

export const NumberNode = ({ id, data }) => {
  const value = data?.value ?? 0;

  return (
    <BaseNode
      id={id}
      title="Number"
      handles={[{ id: "out", type: "source", position: Position.Right }]}
    >
      <input className="node-input" type="number" defaultValue={value} />
    </BaseNode>
  );
};
