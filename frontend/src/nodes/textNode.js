// frontend/src/nodes/textNode.js
import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "./baseNode";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}} {{input2}} {{input3}} {{input5}}");

  const variableRegex = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;
  const matches = [...currText.matchAll(variableRegex)];
  const variableNames = [...new Set(matches.map((m) => m[1]))];

  const variableHandles = variableNames.map((name) => ({
    id: name,
    type: "target",
    position: Position.Left,
  }));

  const handles = [
    ...variableHandles,
    {
      id: "output",
      type: "source",
      position: Position.Right,
    },
  ];

  return (
    <BaseNode id={id} title="Text" handles={handles}>
      <div className="node-field">
        <label className="node-label">Text:</label>
        <textarea
          className="node-textarea"
          value={currText}
          onChange={(e) => setCurrText(e.target.value)}
        />
      </div>
    </BaseNode>
  );
};
