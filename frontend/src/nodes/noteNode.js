import { BaseNode } from "./baseNode";
import { useState } from "react";

export const NoteNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || "");

  return (
    <BaseNode id={id} title='Note' className="note-node">
      <div className="note-toolbar">
        <span className="note-color" />

        <button>B</button>
        <button>
          <i>I</i>
        </button>
        <button>
          <u>U</u>
        </button>

        <span className="divider" />

        <button>≡</button>
        <button>1·2</button>

        <span className="divider" />

        <button>H1</button>
        <button>H2</button>
        <button>H3</button>
      </div>

      <textarea
        className="note-body"
        placeholder="Enter note text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="note-actions">
        <button className="note-close">✕</button>
        <button className="note-drag">⋮⋮</button>
      </div>
    </BaseNode>
  );
};
