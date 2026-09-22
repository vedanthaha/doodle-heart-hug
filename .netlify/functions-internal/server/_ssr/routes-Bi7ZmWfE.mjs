import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Button } from "./button-Bh5JzpeK.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { d as FloatingDoodle, i as DoodleCoffee, l as DoodlePaperPlane, n as DoodleCharacter, r as DoodleCloud, s as DoodleHeart, u as DoodleStar } from "./Doodles-2VH0_l4X.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Bi7ZmWfE.js
var import_jsx_runtime = require_jsx_runtime();
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "scrap-page home-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "opening-note",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "page 01" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "open gently" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "home-copy",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						className: "kicker",
						initial: {
							opacity: 0,
							y: 8
						},
						animate: {
							opacity: 1,
							y: 0
						},
						children: "Hey… come here for a second."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: [
						"Everything feels a little ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "circled-word",
							children: "heavy"
						}),
						" sometimes."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "home-sub",
						children: [
							"But hey…",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "you don’t have to carry it all by yourself." })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "hand-line",
						children: "I made this little corner of the internet just for you."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "doodleRed",
						size: "lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/letter",
							children: ["Come inside ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": "true",
								children: "→"
							})]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "home-scene",
				"aria-label": "A tiny doodle person taking a quiet moment",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingDoodle, {
						className: "home-cloud",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DoodleCloud, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "cloud-note",
						children: "it’s okay to pause"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DoodleCharacter, {
						pose: "sit",
						className: "lonely-character"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DoodleCoffee, { className: "floor-cup" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "speech-bubble",
						children: "I’m here."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingDoodle, {
						className: "star-a",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DoodleStar, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingDoodle, {
						className: "heart-a",
						delay: 1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DoodleHeart, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						className: "paper-plane",
						animate: {
							x: [
								-10,
								14,
								-10
							],
							y: [
								4,
								-8,
								4
							],
							rotate: [
								-3,
								3,
								-3
							]
						},
						transition: {
							duration: 8,
							repeat: Infinity
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DoodlePaperPlane, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						className: "scribble-path",
						viewBox: "0 0 300 110",
						"aria-hidden": "true",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 91C53 18 112 15 153 59c29 30 78 45 143-29" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "made-note",
				children: "Made with way too much overthinking + a little bit of love :)"
			})
		]
	});
}
//#endregion
export { Index as component };
