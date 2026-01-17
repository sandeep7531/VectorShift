import { Position } from "reactflow";
import { BaseNode } from "./baseNode";

export const AddNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="Add"
      handles={[
        { id: "a", type: "target", position: Position.Left },
        { id: "b", type: "target", position: Position.Left },
        { id: "sum", type: "source", position: Position.Right },
      ]}
    >
      <div className="node-text">A + B</div>
    </BaseNode>
  );
};
