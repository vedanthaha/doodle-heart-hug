import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Button } from "./button-Bh5JzpeK.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { a as DoodleFlower, l as DoodlePaperPlane, n as DoodleCharacter, s as DoodleHeart } from "./Doodles-2VH0_l4X.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/letter-6p0D3aWq.js
var import_jsx_runtime = require_jsx_runtime();
var lines = [
	"Hey,",
	"I know things have been a lot lately.",
	"Sometimes people do things that leave you feeling angry, confused, exhausted, or just completely done with everything.",
	"And honestly…",
	"you don't always need someone to fix it.",
	"Sometimes you just need someone who stays.",
	"So that's what I’m saying here.",
	"I’m staying.",
	"No matter how messy things get.\nNo matter how weird the day feels.\nNo matter how many times you say ‘I’m fine’ when you’re obviously not.",
	"You can always talk to me.",
	"You don't have to explain everything perfectly.\nYou don't have to pretend you're okay.",
	"Just be you.",
	"I’ll still be here.",
	"— Ved"
];
function LetterPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "scrap-page letter-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "page-number",
				children: "02 / the folded one"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DoodlePaperPlane, { className: "letter-plane" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DoodleFlower, { className: "letter-flower" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "letter-sheet",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "tape tape-left" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "tape tape-right" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: ["A tiny letter ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "underlined",
						children: "for you."
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "letter-copy",
						children: lines.map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							className: i === 7 || i === 12 ? "letter-emphasis" : "",
							initial: {
								opacity: 0,
								y: 12
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: {
								once: true,
								margin: "-8%"
							},
							transition: {
								duration: .45,
								delay: i % 3 * .04
							},
							children: line.split("\n").map((part, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [part, j < line.split("\n").length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {})] }, part))
						}, line))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "margin-note note-seriously",
						children: ["seriously.", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DoodleHeart, {})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "margin-note note-staying",
						children: "I’m not going anywhere."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "margin-note note-okay",
						children: "okay? :)"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "letter-character",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DoodleCharacter, { pose: "letter" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "special delivery" })]
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
						to: "/little-things",
						children: ["Turn the page ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
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
export { LetterPage as component };
