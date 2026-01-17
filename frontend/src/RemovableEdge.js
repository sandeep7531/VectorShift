// frontend/src/RemovableEdge.jsx
import { BaseEdge, EdgeLabelRenderer, getBezierPath } from "reactflow";

export function RemovableEdge(props) {
  const {
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
    style = {},
    markerEnd,
    data,
  } = props;

  console.log("Rendering RemovableEdge", props);
  // Use RF helper to get path and center coordinates
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  const onRemove = (e) => {
    e.stopPropagation();
    if (data && typeof data.onDelete === "function") {
      data.onDelete(id);
    }
  };

  return (
    <>
      {/* Let React Flow draw the edge path (SVG) */}
      <BaseEdge
        id={id}
        path={edgePath}
        markerEnd={markerEnd}
        style={style}
        className="removable-edge-path"
      />

      {/* Render a normal HTML button as edge label */}
      <EdgeLabelRenderer>
        <button
          type="button"
          className="edge-remove-btn"
          onClick={onRemove}
          style={{
            position: "absolute",
            transform: `translate(-50%, -50%) translate(${labelX}px, ${labelY}px)`,
            pointerEvents: "all", // important so it can be clicked
          }}
        >
          ×
        </button>
      </EdgeLabelRenderer>
    </>
  );
}
