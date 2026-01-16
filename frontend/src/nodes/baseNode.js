// frontend/src/nodes/baseNode.js
import { Handle } from "reactflow";


export const BaseNode = ({ id, title, children, handles = [] }) => {
  return (
    <div className="base-node">
      <div className="base-node__header">{title}</div>
      <div className="base-node__content">{children}</div>

      {handles.map((h, i) => {
        // we pass a CSS class with an index so we can style positions in CSS
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
            isConnectable={true}
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
