export const StatusBadge = ({ label, tone = "neutral" }) => (
  <span
    className="mint-inline-block mint-rounded mint-px-2 mint-py-0.5 mint-text-sm mint-font-medium"
    style={{
      background: tone === "good" ? "#dcfce7" : "#fee2e2",
      color: tone === "good" ? "#166534" : "#991b1b",
    }}
  >
    {label}
  </span>
);
