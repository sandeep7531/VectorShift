import { Position } from "reactflow";
import { BaseNode } from "./baseNode";

export const TransformNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="Transform"
      handles={[
        { id: "input", type: "target", position: Position.Left },
        { id: "output", type: "source", position: Position.Right },
      ]}
    >
      <select className="node-input">
        <option>Uppercase</option>
        <option>Lowercase</option>
        <option>Trim</option>
      </select>
    </BaseNode>
  );
};
