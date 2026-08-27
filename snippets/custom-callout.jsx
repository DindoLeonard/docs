/*
  NOTE: the cross-snippet import below renders fine in `mint dev`, but Mintlify
  documents it as UNSUPPORTED ("No cross-snippet imports"). The supported form
  is to import every component directly into the parent MDX page. Kept here
  only as the test case that proved the behaviour differs from the docs.

  Also note: a component that references another component from the SAME file
  WITHOUT an import fails at runtime with
    "Expected component StatusBadge to be defined"
  because MDX resolves JSX identifiers through its component scope, not the
  file's lexical scope. Built-in components (Card, Note, Tabs...) resolve from
  that same scope, which is why <Card> below needs no import.
*/
import { StatusBadge } from "./status-badge.jsx";

export const UsesBuiltInCard = ({ title = "from snippet" }) => (
  <Card title={title} icon="box">
    Built-in Card used INSIDE a .jsx snippet, no import.
  </Card>
);

export const UsesSiblingImport = ({ tone = "good" }) => (
  <div>
    <StatusBadge label="sibling import works" tone={tone} />
  </div>
);

export const UsesPlainHtmlOnly = () => (
  <div className="mint-rounded mint-border mint-p-3">
    Plain HTML + mint-prefixed Tailwind, no component refs.
  </div>
);
