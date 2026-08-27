/*
  React hooks are PRE-INJECTED in Mintlify snippets — useState, useEffect,
  useRef, useCallback, useMemo, useContext, useReducer are all available with
  no import. `import { useState } from "react"` also works in `mint dev`, but
  the documented form is to just use the hook.

  Rules: named exports only (no `export default`), arrow functions only
  (the `function` keyword is not supported), and no external npm packages.
*/
export const Counter = ({ start = 0, step = 1 }) => {
  const [n, setN] = useState(start);
  return (
    <div className="mint-rounded mint-border mint-p-3">
      <button id="counter-btn" onClick={() => setN(n + step)}>
        clicked {n} times (step {step})
      </button>
    </div>
  );
};
