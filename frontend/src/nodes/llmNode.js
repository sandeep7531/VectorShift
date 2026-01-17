import { Position } from "reactflow";
import { BaseNode } from "./baseNode";

export const LLMNode = ({ id, data }) => {
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
      <div className="llmnode-field">
        <label className="node-label">System / Prompt:</label>
        <div className="textAreaMain">
          <textarea className="node-textarea ">LLM node content.</textarea>
        </div>
      </div>
    </BaseNode>
  );
};
