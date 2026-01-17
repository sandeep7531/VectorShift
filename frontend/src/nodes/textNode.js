// frontend/src/nodes/textNode.js
import { useMemo, useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "./baseNode";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(
    data?.text || "{{input}} {{input2}} {{input3}} {{input5}}"
  );

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

    const { rows, cols } = useMemo(() => {
      const minRows = 2;
      const minCols = 20;

      const lines = currText.split("\n");
      const lineCount = lines.length;
      const longestLineLength = lines.reduce(
        (max, line) => Math.max(max, line.length),
        0
      );

      return {
        rows: Math.max(minRows, lineCount),
        cols: Math.max(minCols, longestLineLength),
      };
    }, [currText]);

  return (
    <BaseNode id={id} title="Text" handles={handles}>
      <div className="node-field">
        <label className="node-label">Text:</label>
        <textarea
          className="node-textarea"
          value={currText}
          onChange={(e) => setCurrText(e.target.value)}
          rows={rows}
          cols={cols}
        />
      </div>
    </BaseNode>
  );
};
