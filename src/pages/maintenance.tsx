import { useState, useEffect } from "react";
import { Header } from "../components/header.tsx";
import { Footer } from "../components/footer.tsx";

const PROGRESS = 65;

function GearIcon() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
      <g
        style={{
          animation: "spin 12s linear infinite",
          transformOrigin: "center",
        }}
      >
        <path
          d="M40 16C40 14.9 40.9 14 42 14H38C36.9 14 36 14.9 36 16V20.2C33.6 20.8 31.4 21.8 29.4 23.2L26.4 20.2C25.6 19.4 24.4 19.4 23.6 20.2L20.2 23.6C19.4 24.4 19.4 25.6 20.2 26.4L23.2 29.4C21.8 31.4 20.8 33.6 20.2 36H16C14.9 36 14 36.9 14 38V42C14 43.1 14.9 44 16 44H20.2C20.8 46.4 21.8 48.6 23.2 50.6L20.2 53.6C19.4 54.4 19.4 55.6 20.2 56.4L23.6 59.8C24.4 60.6 25.6 60.6 26.4 59.8L29.4 56.8C31.4 58.2 33.6 59.2 36 59.8V64C36 65.1 36.9 66 38 66H42C43.1 66 44 65.1 44 64V59.8C46.4 59.2 48.6 58.2 50.6 56.8L53.6 59.8C54.4 60.6 55.6 60.6 56.4 59.8L59.8 56.4C60.6 55.6 60.6 54.4 59.8 53.6L56.8 50.6C58.2 48.6 59.2 46.4 59.8 44H64C65.1 44 66 43.1 66 42V38C66 36.9 65.1 36 64 36H59.8C59.2 33.6 58.2 31.4 56.8 29.4L59.8 26.4C60.6 25.6 60.6 24.4 59.8 23.6L56.4 20.2C55.6 19.4 54.4 19.4 53.6 20.2L50.6 23.2C48.6 21.8 46.4 20.8 44 20.2V16C44 14.9 43.1 14 42 14H40Z"
          fill="none"
          stroke="#C4713B"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </g>
      <g
        style={{
          animation: "spin 12s linear infinite reverse",
          transformOrigin: "center",
        }}
      >
        <circle
          cx="40"
          cy="40"
          r="12"
          fill="none"
          stroke="#C4713B"
          strokeWidth="1.5"
          strokeDasharray="4 3"
        />
      </g>
      <circle cx="40" cy="40" r="4" fill="#C4713B" opacity="0.3" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M3 8H13M13 8L9 4M13 8L9 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export const MaintenancePage = () => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
    const timer = setTimeout(() => setProgress(PROGRESS), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "#F7F5F2",
        fontFamily: "'Noto Sans JP', 'Outfit', system-ui, sans-serif",
        color: "#2C2926",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&family=Outfit:wght@300;400;500;600&display=swap');
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes pulse { 0%,100% { opacity:1; transform:scale(1); } 50% { opacity:0.5; transform:scale(0.8); } }
        @keyframes floatA { 0%,100% { transform:translate(0,0) scale(1); } 33% { transform:translate(30px,-20px) scale(1.05); } 66% { transform:translate(-20px,15px) scale(0.95); } }
        @keyframes floatB { 0%,100% { transform:translate(0,0) scale(1); } 33% { transform:translate(-25px,18px) scale(0.96); } 66% { transform:translate(22px,-12px) scale(1.04); } }
      `}</style>

      {/* Background */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(196,113,59,0.10)",
            filter: "blur(80px)",
            top: "8%",
            left: "-4%",
            animation: "floatA 20s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "rgba(196,113,59,0.06)",
            filter: "blur(80px)",
            bottom: "8%",
            right: "-4%",
            animation: "floatB 22s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 250,
            height: 250,
            borderRadius: "50%",
            background: "rgba(218,213,206,0.35)",
            filter: "blur(80px)",
            top: "50%",
            left: "60%",
            animation: "floatA 18s ease-in-out infinite 5s",
          }}
        />
        <svg width="100%" height="100%" style={{ opacity: 0.3 }}>
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <line
                x1="60"
                y1="0"
                x2="60"
                y2="60"
                stroke="#DAD5CE"
                strokeWidth="0.5"
              />
              <line
                x1="0"
                y1="60"
                x2="60"
                y2="60"
                stroke="#DAD5CE"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Header */}
      <header>
        <Header />
      </header>

      {/* Main */}
      <main
        style={{
          position: "relative",
          zIndex: 10,
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 20,
        }}
      >
        <div
          style={{
            background: "#fff",
            border: "1px solid #DAD5CE",
            borderRadius: 24,
            boxShadow:
              "0 4px 40px rgba(44,41,38,0.06), 0 1px 3px rgba(44,41,38,0.06)",
            maxWidth: 620,
            width: "100%",
            padding: "56px 48px 48px",
            textAlign: "center",
            opacity: visible ? 1 : 0,
            transform: visible
              ? "translateY(0) scale(1)"
              : "translateY(30px) scale(0.97)",
            transition: "all 0.9s ease-out 0.15s",
          }}
        >
          {/* Icon */}
          <div style={{ width: 80, height: 80, margin: "0 auto 32px" }}>
            <GearIcon />
          </div>

          <h1
            style={{
              fontWeight: 700,
              fontSize: 26,
              letterSpacing: "0.04em",
              marginBottom: 12,
            }}
          >
            ただいまメンテナンス中です
          </h1>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.8,
              color: "#8A8480",
              fontWeight: 300,
              marginBottom: 36,
            }}
          >
            サービス向上のため、システムメンテナンスを実施しております。
            <br />
            ご不便をおかけいたしますが、完了まで今しばらくお待ちください。
          </p>

          {/* Contact */}
          {/* <ContactButton /> */}
        </div>
      </main>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

function ContactButton() {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href="mailto:support@example.co.jp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        fontSize: 14,
        fontWeight: 500,
        textDecoration: "none",
        padding: "12px 28px",
        borderRadius: 100,
        border: "1.5px solid #C4713B",
        color: hovered ? "#fff" : "#C4713B",
        background: hovered ? "#C4713B" : "transparent",
        transform: hovered ? "translateY(-1px)" : "translateY(0)",
        boxShadow: hovered ? "0 6px 20px rgba(196,113,59,0.15)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      お問い合わせ
      <span
        style={{
          display: "inline-flex",
          transform: hovered ? "translateX(3px)" : "translateX(0)",
          transition: "transform 0.3s ease",
        }}
      >
        <ArrowIcon />
      </span>
    </a>
  );
}
