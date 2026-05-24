// Full-screen live wallpaper.
//
// The animation (WebGL shader, render loop, and the base64-encoded source image)
// is fully contained in swirl-8k.html. It runs inside an <iframe> because
// Übersicht does not execute <script> tags that are rendered through JSX.
// Refresh is disabled so the animation is never reset mid-flight.
//
// To edit:
//   - SPEED: animation speed multiplier (1 = default, 0.5 = half, 2 = double).
//   - IMAGE: optional replacement image. Must be a local file path served from
//     this folder or a CORS-enabled URL; otherwise WebGL cannot sample it.
//   - For deeper changes (colors, motion), edit the shader inside swirl-8k.html.
const SPEED = 1;
const IMAGE = "";

export const refreshFrequency = false;

// Übersicht positions each widget's wrapper by id using inline absolute styles.
// These rules override that wrapper so it spans the entire viewport with no gap
// under the menu bar; the iframe then fills the wrapper edge to edge.
export const className = `
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  width: 100vw !important;
  height: 100vh !important;
  margin: 0 !important;
  padding: 0 !important;
  z-index: -1;
  pointer-events: none;
  overflow: hidden;
  iframe { width: 100%; height: 100%; border: 0; display: block; }
`;

// Params are passed via a hash fragment, which swirl-8k.html reads from
// location.hash. A fragment never affects how the asset path is resolved, so it
// is robust regardless of how the file is served.
const src = "swirl-8k.html#speed=" + encodeURIComponent(SPEED) +
  (IMAGE ? "&img=" + encodeURIComponent(IMAGE) : "");

export const render = () => (
  <iframe src={src} scrolling="no" title="Animated wallpaper" />
);
