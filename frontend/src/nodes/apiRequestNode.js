import { Position } from "reactflow";
import { BaseNode } from "./baseNode";

export const ApiRequestNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      title="API Request"
      handles={[
        { id: "trigger", type: "target", position: Position.Left },
        { id: "response", type: "source", position: Position.Right },
      ]}
    >
      <input
        className="node-input"
        type="text"
        placeholder="https://api.example.com"
        defaultValue={data?.url}
      />
      <select className="node-input">
        <option>GET</option>
        <option>POST</option>
      </select>
    </BaseNode>
  );
};
