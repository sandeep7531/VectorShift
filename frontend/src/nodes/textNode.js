import { useState } from "react";
import { Position, useReactFlow } from "reactflow";
import { BaseNode } from "./baseNode";

export const TextNode = ({ id, data }) => {
  const { getNodes } = useReactFlow();
  const [text, setText] = useState(data?.text || "{{input}}");
  const [options, setOptions] = useState([]);

  // 1. Calculate Handles
  const handles = [
    ...[...text.matchAll(/{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g)].map((m) => ({
      id: m[1],
      type: "target",
      position: Position.Left,
    })),
    { id: "output", type: "source", position: Position.Right },
  ];

  // 2. Handle Change
  const onChange = (e) => {
    const val = e.target.value;
    setText(val);
    if (val.slice(0, e.target.selectionStart).endsWith("{{")) {
      const otherNodes = getNodes().filter((n) => n.id !== id);
      setOptions(otherNodes);
    } else {
      setOptions([]);
    }
  };

  const addVariable = (nodeId) => {
    setText((prev) => prev.replace(/{{$/, `{{${nodeId}}}`));
    setOptions([]);
  };

  return (
    <BaseNode id={id} title="Text" handles={handles}>
      <div className="node-wrapper">
        <label className="node-label">Text:</label>

        {/* Added "nodrag" here too so you can select text inside textarea without moving node */}
        <textarea
          className="node-textarea nodrag"
          value={text}
          onChange={onChange}
          rows={Math.max(1, text.split("\n").length)}
          style={{ width: "100%", resize: "none", overflow: "hidden" }}
        />

        {options.length > 0 && (
          // ✅ FIX: Added "nodrag" class here
          <div className="suggestion-menu nodrag">
            {options.map((node) => (
              <div
                key={node.id}
                className="suggestion-item"
                onClick={() => addVariable(node.id)}
              >
                <span>{node.id}</span>
                <span className="chip">{node.type}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </BaseNode>
  );
};
