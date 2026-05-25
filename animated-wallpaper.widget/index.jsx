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
// We override that wrapper to span the entire screen. macOS reserves the very
// top strip for the system menu bar and some Übersicht builds inset the desktop
// web view below it, leaving the real desktop showing there. We pull the iframe
// up by MENUBAR_OVERSCAN and reset the page's own insets (see GLOBAL_RESET) so
// the animation reaches as high as the web view allows. If a thin strip still
// remains, that is the OS menu bar itself (a desktop widget cannot paint over
// it); enabling "Automatically hide and show the menu bar" removes it entirely.
const MENUBAR_OVERSCAN = 48; // px
export const className = `
  position: fixed !important;
  top: -${MENUBAR_OVERSCAN}px !important;
  left: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  width: 100vw !important;
  height: calc(100vh + ${MENUBAR_OVERSCAN}px) !important;
  margin: 0 !important;
  padding: 0 !important;
  z-index: -1;
  pointer-events: none;
  overflow: hidden;
  iframe { width: 100%; height: 100%; border: 0; display: block; }
`;

// Reset any inset Übersicht / the page applies to the desktop web view so our
// fixed, full-bleed iframe truly starts at the very top-left of the screen.
const GLOBAL_RESET = `
  html, body { margin: 0 !important; padding: 0 !important; border: 0 !important; }
  #main, #widgets, .uesidebar { margin: 0 !important; padding: 0 !important; top: 0 !important; }
`;

// Params are passed via a hash fragment, which swirl-8k.html reads from
// location.hash. A fragment never affects how the asset path is resolved, so it
// is robust regardless of how the file is served.
const src = "animated-wallpaper.widget/swirl-8k.html#speed=" + encodeURIComponent(SPEED) +
  (IMAGE ? "&img=" + encodeURIComponent(IMAGE) : "");

export const render = () => (
  <div>
    <style dangerouslySetInnerHTML={{ __html: GLOBAL_RESET }} />
    <iframe src={src} scrolling="no" title="Animated wallpaper" />
  </div>
);
