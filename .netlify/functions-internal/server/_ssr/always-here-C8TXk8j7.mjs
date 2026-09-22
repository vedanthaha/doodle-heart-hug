import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Button } from "./button-Bh5JzpeK.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { c as DoodleMoon, f as RooftopScene, r as DoodleCloud } from "./Doodles-2VH0_l4X.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/always-here-C8TXk8j7.js
var import_jsx_runtime = require_jsx_runtime();
var promises = [
	"I’ll listen.",
	"I’ll sit with you.",
	"I’ll distract you.",
	"I’ll make stupid jokes.",
	"I’ll remind you that things won't always feel like this.",
	"And when you don't know what to say…",
	"You can just say nothing."
];
function AlwaysHere() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "scrap-page night-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "night-intro",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "page 04 / after midnight" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "I mean this." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "No matter what happens…" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DoodleMoon, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DoodleCloud, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rooftop-wrap",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RooftopScene, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rooftop-note",
					children: "no fixing. just company."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "promise-list",
				children: [
					promises.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: {
							opacity: 0,
							x: i % 2 ? -18 : 18
						},
						whileInView: {
							opacity: 1,
							x: 0
						},
						viewport: {
							once: true,
							amount: .7
						},
						transition: { duration: .7 },
						children: p
					}, p)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						className: "still-here",
						initial: {
							opacity: 0,
							scale: .9
						},
						whileInView: {
							opacity: 1,
							scale: 1
						},
						viewport: { once: true },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "I’m still here." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							viewBox: "0 0 330 32",
							"aria-hidden": "true",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 21c76-21 200 18 321-9" })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "promise-word",
						children: "Promise."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					y: 10
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				className: "flex justify-center mt-12 mb-16 w-full z-10 relative",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "doodleRed",
					size: "lg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/final",
						children: ["One last thing ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": "true",
							children: "→"
						})]
					})
				})
			})
		]
	});
}
//#endregion
export { AlwaysHere as component };
