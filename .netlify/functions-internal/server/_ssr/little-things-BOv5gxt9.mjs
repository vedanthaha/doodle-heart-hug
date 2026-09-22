import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Button } from "./button-Bh5JzpeK.mjs";
import { r as AnimatePresence } from "../_libs/framer-motion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { a as DoodleFlower, c as DoodleMoon, i as DoodleCoffee, o as DoodleHeadphones, s as DoodleHeart, t as DoodleCat, u as DoodleStar } from "./Doodles-2VH0_l4X.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/little-things-BOv5gxt9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var notes = [
	["Drink some water", "Your brain is mostly soup. Hydrate the soup."],
	["Eat something pls.", "Even a snack counts. No ceremony required."],
	["Go outside for 5 minutes.", "The sky might be doing something nice."],
	["Listen to something you like.", "One song. Loud enough to interrupt the thoughts."],
	["Take a stupidly long nap.", "Rest is not something you have to earn."],
	["Text me.", "Yep. I mean it."],
	["Watch something dumb.", "The dumber, the better."],
	["Do absolutely nothing for a while.", "This is officially allowed."]
];
var happy = [
	"You’re doing better than you think.",
	"Breathe. One thing at a time.",
	"This day is allowed to suck.",
	"Tomorrow can be different.",
	"You’re not alone."
];
function LittleThings() {
	const [selected, setSelected] = (0, import_react.useState)(null);
	const [message, setMessage] = (0, import_react.useState)("");
	const [burst, setBurst] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "scrap-page things-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "things-heading",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "page 03 / no pressure" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: ["Tiny things that might make your day ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mark", { children: "1% better" })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Pick one. Or ignore all of them. Also valid." })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "things-board",
				children: [
					notes.map(([title, reply], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.button, {
						type: "button",
						className: `sticky-note note-${i + 1} ${selected === i ? "picked" : ""}`,
						onClick: () => setSelected(i),
						whileTap: {
							scale: .96,
							rotate: i % 2 ? 2 : -2
						},
						"aria-expanded": selected === i,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: selected === i && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
							initial: {
								opacity: 0,
								height: 0
							},
							animate: {
								opacity: 1,
								height: "auto"
							},
							exit: {
								opacity: 0,
								height: 0
							},
							children: reply
						}) })]
					}, title)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DoodleFlower, { className: "board-flower" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DoodleCoffee, { className: "board-coffee" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DoodleHeadphones, { className: "board-headphones" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DoodleMoon, { className: "board-moon" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DoodleCat, { className: "board-cat" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "emergency",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "for emergency use only*" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Emergency happiness button" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "burst-zone",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "doodleRed",
							size: "lg",
							onClick: () => {
								const next = happy[Math.floor(Math.random() * happy.length)] ?? happy[0];
								setMessage(next ?? "You’re not alone.");
								setBurst((v) => v + 1);
							},
							children: "PRESS WHEN EVERYTHING SUCKS"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: message && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							className: "comfort-result",
							initial: {
								scale: .8,
								opacity: 0,
								rotate: -2
							},
							animate: {
								scale: 1,
								opacity: 1,
								rotate: 1
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DoodleStar, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DoodleHeart, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: message }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DoodleStar, {})
							]
						}, burst) })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "*not medically reviewed. personally approved." })
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
				className: "flex justify-center mt-12 mb-8 w-full z-10 relative",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "doodleRed",
					size: "lg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/always-here",
						children: ["Keep reading ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
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
export { LittleThings as component };
