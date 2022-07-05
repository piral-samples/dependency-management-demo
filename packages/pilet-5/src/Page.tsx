import * as React from "react";
import emojis from "emojis-list";

export default () => (
  <div>
    <h1>Emojis from Pilet 5</h1>
    <p>In total <strong>{emojis.length}</strong> entries.</p>
    <ul>
      {emojis.map((e, i) => (
        <li key={i}>
          {i}: {e}
        </li>
      ))}
    </ul>
  </div>
);
