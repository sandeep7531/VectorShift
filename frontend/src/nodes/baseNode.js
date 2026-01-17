import { Handle, useReactFlow } from "reactflow";
import { useState } from "react";

export const BaseNode = ({
  id,
  title,
  children,
  handles = [],
  hideHandles = false,
  className = "",
}) => {
  const { setNodes } = useReactFlow();
  const [collapsed, setCollapsed] = useState(false);

  const handleDelete = () => {
    setNodes((nodes) => nodes.filter((node) => node.id !== id));
  };

  const toggleCollapse = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div className={`base-node ${className}`}>
      {/* Header */}
      {title && (
        <div className="base-node__header">
          <span>{title}</span>

          <div className="base-node__actions">
            {/* Minimize */}
            <button
              className="base-node__action base-node__close"
              onClick={toggleCollapse}
              title={collapsed ? "Expand" : "Minimize"}
            >
              {collapsed ? "▢" : "–"}
            </button>

            {/* Close */}
            <button
              className="base-node__action base-node__close"
              onClick={handleDelete}
              title="Delete node"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Content */}
      {!collapsed && <div className="base-node__content">{children}</div>}

      {/* Handles */}
      {!hideHandles &&
        handles.map((h, i) => {
          const extraClass =
            h.type === "target"
              ? `base-node__handle-left-${i}`
              : `base-node__handle-right-${i}`;

          return (
            <Handle
              key={`${id}-${h.id}-${i}`}
              type={h.type}
              position={h.position}
              id={h.id}
              isConnectable
              className={[
                "base-node__handle",
                h.type === "target"
                  ? "base-node__handle--target"
                  : "base-node__handle--source",
                extraClass,
              ].join(" ")}
            />
          );
        })}
    </div>
  );
};
