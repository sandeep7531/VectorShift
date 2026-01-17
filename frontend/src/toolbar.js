import { DraggableNode } from "./draggableNode";

export const PipelineToolbar = () => {
  const draggableNodes = [
    { type: "noteNode", label: "Note" },
    { type: "customInput", label: "Input" },
    { type: "conditionNode", label: "Condition" },
    { type: "text", label: "Text" },
    { type: "customOutput", label: "Output" },
    { type: "logNode", label: "Log" },
    { type: "llm", label: "LLM" },
    { type: "apiRequestNode", label: "API Request" },
    { type: "transformNode", label: "Transform" },
    { type: "addNode", label: "Add" },
    { type: "numberNode", label: "Number" },
  ];

  return (
    <div className="toolbar">
      <div className="toolbar-nodes">
        {draggableNodes.map((node) => (
          <DraggableNode
            key={node.type}
            type={node.type}
            label={node.label}
          />
        ))}
      </div>
    </div>
  );
};
