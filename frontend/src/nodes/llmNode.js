import { Position } from "reactflow";
import { BaseNode } from "./baseNode";

export const LLMNode = ({ id, data }) => {
  console.log("LLMNode data:", data, id);
  return (
    <BaseNode
      id={id}
      title="LLM"
      handles={[
        {
          id: "system",
          type: "target",
          position: Position.Left,
          style: { top: "30%" },
        },
        {
          id: "prompt",
          type: "target",
          position: Position.Left,
          style: { top: "70%" },
        },
        { id: "response", type: "source", position: Position.Right },
      ]}
    >
      <div className="node-field">
        <label className="node-label">System / Prompt:</label>
        <div style={{ fontSize: 12, color: "#4b5563" }}>LLM node content.</div>
      </div>
    </BaseNode>
  );
};
