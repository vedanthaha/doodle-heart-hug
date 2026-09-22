import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Button } from "./button-Bh5JzpeK.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { n as DoodleCharacter, s as DoodleHeart, u as DoodleStar } from "./Doodles-2VH0_l4X.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/final-DY-iIJMF.js
var import_jsx_runtime = require_jsx_runtime();
function FinalPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "scrap-page final-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "closing-fold",
				children: "last page"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "final-copy",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "That’s it." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"No giant speech.",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"No life advice.",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "crossed",
							children: "No fixing everything."
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Just this:" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "You matter to me." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "And whatever happens next…" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "alone-line",
						children: "you don’t have to face it alone."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						className: "final-message",
						initial: {
							opacity: 0,
							rotate: -2,
							scale: .94
						},
						animate: {
							opacity: 1,
							rotate: .5,
							scale: 1
						},
						transition: {
							delay: .35,
							duration: .6
						},
						children: ["I’m still here. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DoodleHeart, {})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "doodle",
						size: "lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							children: "Replay everything ↺"
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "waving-scene",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DoodleStar, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DoodleCharacter, {
						pose: "wave",
						friend: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "still around!" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Made for one very specific person." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "— Ved" })] })
		]
	});
}
//#endregion
export { FinalPage as component };
