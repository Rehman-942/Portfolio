"use client";

/* ─── Inline styles matching the site theme ────────────────────────────── */
const overlayStyle = {
  position: "fixed",
  inset: 0,
  background: "rgba(16, 16, 16, 0.75)",
  backdropFilter: "blur(6px)",
  zIndex: 9999,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  animation: "milFadeIn 0.25s ease",
};

const modalStyle = {
  background: "#fff",
  borderRadius: "4px",
  padding: "60px 50px 50px",
  maxWidth: "480px",
  width: "90%",
  textAlign: "center",
  position: "relative",
  boxShadow: "0 30px 80px rgba(16,16,16,0.25)",
  animation: "milSlideUp 0.3s ease",
};

const closeBtnStyle = {
  position: "absolute",
  top: "20px",
  right: "24px",
  background: "none",
  border: "none",
  cursor: "pointer",
  fontSize: "22px",
  color: "#101010",
  lineHeight: 1,
  padding: "4px",
  opacity: 0.5,
  transition: "opacity 0.2s",
};

const iconCircleStyle = (isSuccess) => ({
  width: "72px",
  height: "72px",
  borderRadius: "50%",
  background: isSuccess ? "#fa4729" : "#101010",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto 28px",
});

const primaryBtnStyle = {
  display: "inline-block",
  marginTop: "30px",
  padding: "14px 36px",
  background: "#101010",
  color: "#fff",
  border: "none",
  cursor: "pointer",
  fontSize: "11px",
  letterSpacing: "2px",
  textTransform: "uppercase",
  fontFamily: "inherit",
  transition: "background 0.2s",
};

/* ─── Keyframe injection (runs once on the client) ─────────────────────── */
if (typeof document !== "undefined") {
  const styleId = "mil-popup-keyframes";
  if (!document.getElementById(styleId)) {
    const s = document.createElement("style");
    s.id = styleId;
    s.textContent = `
      @keyframes milFadeIn  { from { opacity: 0 } to { opacity: 1 } }
      @keyframes milSlideUp { from { transform: translateY(24px); opacity: 0 } to { transform: translateY(0); opacity: 1 } }
    `;
    document.head.appendChild(s);
  }
}

/**
 * Themed status popup for email send results.
 *
 * @param {{ type: "success" | "error", onClose: () => void }} props
 */
const StatusPopup = ({ type, onClose }) => {
  const isSuccess = type === "success";

  return (
    <div style={overlayStyle} onClick={onClose}>
      <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
        {/* Close × */}
        <button
          style={closeBtnStyle}
          onClick={onClose}
          onMouseEnter={(e) => (e.target.style.opacity = 1)}
          onMouseLeave={(e) => (e.target.style.opacity = 0.5)}
          aria-label="Close"
        >
          ✕
        </button>

        {/* Icon */}
        <div style={iconCircleStyle(isSuccess)}>
          {isSuccess ? (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          ) : (
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          )}
        </div>

        {/* Accent label */}
        <p className="mil-upper" style={{ color: "#fa4729", marginBottom: "12px", fontSize: "11px", letterSpacing: "2px" }}>
          {isSuccess ? "Message Sent" : "Something Went Wrong"}
        </p>

        {/* Heading */}
        <h3 style={{ color: "#101010", fontSize: "26px", fontWeight: 700, marginBottom: "14px", lineHeight: 1.3 }}>
          {isSuccess ? "Thank you for reaching out!" : "Failed to send message"}
        </h3>

        {/* Body */}
        <p style={{ color: "#555", fontSize: "15px", lineHeight: 1.7, margin: 0 }}>
          {isSuccess
            ? "Your message has been delivered successfully. I'll get back to you as soon as possible — usually within 24 hours."
            : "An error occurred while sending your message. Please try again or reach out directly at rehmanafzal942@gmail.com"}
        </p>

        {/* CTA */}
        <button
          style={primaryBtnStyle}
          onClick={onClose}
          onMouseEnter={(e) => (e.target.style.background = "#fa4729")}
          onMouseLeave={(e) => (e.target.style.background = "#101010")}
        >
          {isSuccess ? "Done" : "Try Again"}
        </button>
      </div>
    </div>
  );
};

export default StatusPopup;
