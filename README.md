# animated-wallpaper

> A full-screen live WebGL shader wallpaper that animates behind your other widgets.

A self-contained widget for [Übersicht](http://tracesof.net/uebersicht/). The
entire widget lives in `index.jsx` (the shared design system is inlined), so it
runs on any Mac with no extra files beyond the bundled assets.

![screenshot](screenshot.png)

## Install

1. Install and run [Übersicht](http://tracesof.net/uebersicht/).
2. Unzip `animated-wallpaper.widget.zip`, or copy the `animated-wallpaper.widget` folder into your
   Übersicht widgets directory:
   `~/Library/Application Support/Übersicht/widgets/`
3. Refresh Übersicht (menu bar icon -> Refresh All).

## Notes

- Self-contained; no network or external data.

## How to edit

Edit the SPEED and IMAGE constants at the top of index.jsx. For colors and motion, edit the shader inside swirl-8k.html (or append `?speed=` / `?img=` to the iframe URL).

All visual styling (colors, fonts, the card shell, drag/resize handles) is in
the inlined design-system block at the top of `index.jsx`.

## Bundled files

- `index.jsx`
- `swirl-8k.html`

## Submitting to the Übersicht gallery

Create a public GitHub repo with `widget.json`, `animated-wallpaper.widget.zip`, and a
258x160 (or 516x320 hi-res) `screenshot.png`, then
[open an issue](https://github.com/felixhageloh/uebersicht-widgets/issues) with the URL.

## Author

Jalen Edusei <jalen.edusei@gmail.com>
