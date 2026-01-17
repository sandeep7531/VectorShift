import { Position } from "reactflow";
import { BaseNode } from "./baseNode";

export const LogNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="Log"
      handles={[
        { id: "in", type: "target", position: Position.Left },
        { id: "out", type: "source", position: Position.Right },
      ]}
    >
      <div className="node-text">Console Log</div>
    </BaseNode>
  );
};
