/*
  StatusCallout — the worked example for the "Customize a block" guide.

  It wraps the built-in generic `Callout` and adds three parameters no built-in
  callout accepts: `level`, `owner`, and `reviewed`.

  Three things make this work:

  1. `Callout` needs no import. Built-in components resolve through MDX's
     component scope, which snippets share.

  2. `levels` is declared INSIDE the component. Nothing declared at the top
     level of a snippet file is visible to a component in that same file —
     not even an exported one. Both of these throw
     `ReferenceError: X is not defined` at render:

       const LEVELS = {...};         // -> not in scope
       export const LEVELS = {...};  // -> also not in scope

     Each export is compiled in its own scope. Declare helpers inside the
     component, or put them in a separate file and import them.

  3. Styling lives in `style.css` under `.status-callout-meta`, not in a
     `style` prop. Mintlify warns the `style` prop causes layout shift on load.

  Rules for snippet components: named exports only, arrow functions only,
  no external npm packages. Editing this file requires restarting `mint dev` —
  `.jsx` snippets are read at boot and do not hot-reload.
*/

export const StatusCallout = ({ level = "info", owner, reviewed, children }) => {
  const levels = {
    info: { color: "#3b82f6", icon: "circle-info", label: "Stable" },
    caution: { color: "#f59e0b", icon: "triangle-exclamation", label: "Changing soon" },
    critical: { color: "#ef4444", icon: "skull", label: "Deprecated" },
  };
  const cfg = levels[level] || levels.info;

  return (
    <Callout icon={cfg.icon} color={cfg.color}>
      <strong>{cfg.label}</strong>
      {children}
      {(owner || reviewed) && (
        <div className="status-callout-meta">
          {owner && <span>Owner: {owner}</span>}
          {owner && reviewed && <span> · </span>}
          {reviewed && <span>Last reviewed: {reviewed}</span>}
        </div>
      )}
    </Callout>
  );
};
