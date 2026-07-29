import type { CSSProperties } from "react";

const BRAND_BLUE = "#1447E6";
const R_PATH =
  "M48.081 0c15.184 0 24.215 9.03 24.215 21.019 0 11.988-9.03 21.019-24.216 21.02h-7.672L78.53 78.4H51.597L22.587 50.83c-2.079-1.918-3.038-4.156-3.038-6.074 0-2.717 1.918-5.114 5.594-6.153l14.945-3.996c5.674-1.519 9.59-5.915 9.591-11.669 0-7.032-5.754-11.109-12.867-11.109H.128V0H48.08Z";

type BlogThumbnailProps = {
  title: string;
  mode?: "web" | "og";
  className?: string;
};

function titleSize(title: string) {
  if (title.length > 76) return 46;
  if (title.length > 58) return 52;
  return 60;
}

function Wordmark({ mode }: { mode: "web" | "og" }) {
  const markSize = mode === "og" ? 38 : 22;

  return (
    <div
      style={{
        alignItems: "center",
        color: "white",
        display: "flex",
        fontSize: mode === "og" ? 31 : 18,
        fontWeight: 650,
        letterSpacing: "-0.045em",
      }}
      aria-label="Rizon"
    >
      <svg
        aria-hidden
        height={markSize}
        viewBox="-2 -2 84 84"
        width={markSize}
        style={{ display: "block", marginRight: mode === "og" ? 7 : 4 }}
      >
        <path d={R_PATH} fill="currentColor" />
      </svg>
      <span>izon</span>
    </div>
  );
}

export function BlogThumbnail({
  title,
  mode = "web",
  className,
}: BlogThumbnailProps) {
  const isOg = mode === "og";
  const rootStyle: CSSProperties = {
    alignItems: "stretch",
    backgroundColor: BRAND_BLUE,
    color: "white",
    display: "flex",
    flexDirection: "column",
    height: isOg ? 630 : "100%",
    isolation: "isolate",
    justifyContent: "space-between",
    overflow: "hidden",
    padding: isOg ? "54px 64px 58px" : "3% 4%",
    position: "relative",
    width: isOg ? 1200 : "100%",
  };
  if (!isOg) rootStyle.aspectRatio = "16 / 9";

  const titleStyle: CSSProperties = {
    alignItems: "center",
    alignSelf: "center",
    display: "flex",
    flex: 1,
    fontSize: isOg ? titleSize(title) : "clamp(1.15rem, 3.3vw, 2.65rem)",
    fontWeight: 650,
    justifyContent: "center",
    letterSpacing: "-0.045em",
    lineHeight: 1.02,
    maxWidth: isOg ? 930 : "88%",
    padding: isOg ? "36px 0 42px" : "8% 0 10%",
    position: "relative",
    textAlign: "center",
    textWrap: "balance",
  };

  return (
    <div className={className ?? ""} style={rootStyle}>
      <div
        aria-hidden
        style={{
          bottom: isOg ? -235 : "-38%",
          color: "rgba(255,255,255,0.07)",
          display: "flex",
          height: isOg ? 600 : "100%",
          position: "absolute",
          right: isOg ? -120 : "-9%",
          transform: "rotate(-7deg)",
          width: isOg ? 600 : "56%",
        }}
      >
        <svg height="100%" viewBox="-2 -2 84 84" width="100%">
          <path d={R_PATH} fill="currentColor" />
        </svg>
      </div>

      <div
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
          position: "relative",
          width: "100%",
        }}
      >
        <Wordmark mode={mode} />
        <span
          style={{
            color: "rgba(255,255,255,0.82)",
            fontSize: isOg ? 21 : 12,
            fontWeight: 500,
            letterSpacing: "-0.02em",
          }}
        >
          rizon.agency
        </span>
      </div>

      <div style={titleStyle}>{title}</div>

      <div
        aria-hidden
        style={{
          backgroundColor: "rgba(255,255,255,0.45)",
          display: "flex",
          height: isOg ? 2 : 1,
          position: "relative",
          width: isOg ? 42 : 24,
        }}
      />
    </div>
  );
}
