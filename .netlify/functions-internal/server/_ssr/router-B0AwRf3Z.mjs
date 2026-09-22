import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { t as Button } from "./button-Bh5JzpeK.mjs";
import { r as AnimatePresence, t as useReducedMotion } from "../_libs/framer-motion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { _ as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useRouterState, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { n as Menu, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-B0AwRf3Z.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-B66GpPE8.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var links = [
	["/", "Home"],
	["/letter", "Letter"],
	["/little-things", "Little Things"],
	["/always-here", "Always Here"],
	["/final", "Final"]
];
function NotebookNav() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "notebook-nav",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/",
				className: "brand-mark",
				"aria-label": "Back to the first page",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "for you" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "desktop-tabs",
				"aria-label": "Notebook pages",
				children: links.map(([to, label], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to,
					className: `page-tab tab-${i + 1} ${pathname === to ? "is-active" : ""}`,
					children: label
				}, to))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "doodleIcon",
				size: "icon",
				className: "mobile-menu-button",
				onClick: () => setOpen((v) => !v),
				"aria-label": open ? "Close notebook menu" : "Open notebook menu",
				"aria-expanded": open,
				children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.nav, {
				className: "mobile-tabs",
				"aria-label": "Notebook pages",
				initial: {
					opacity: 0,
					y: -12,
					rotate: -1
				},
				animate: {
					opacity: 1,
					y: 0,
					rotate: .4
				},
				exit: {
					opacity: 0,
					y: -8
				},
				children: links.map(([to, label], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to,
					onClick: () => setOpen(false),
					className: `page-tab tab-${i + 1} ${pathname === to ? "is-active" : ""}`,
					children: label
				}, to))
			}) })
		]
	});
}
var SONG_SRC = "/audio/The Walters  I Love You So.m4a";
function MusicPlayer() {
	const audioRef = (0, import_react.useRef)(null);
	const startedRef = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		const audio = audioRef.current;
		if (!audio) return;
		audio.volume = .6;
		audio.preload = "auto";
		const tryPlay = async () => {
			if (startedRef.current) return;
			try {
				await audio.play();
				startedRef.current = true;
			} catch {}
		};
		tryPlay();
		const handleFirstInteraction = () => {
			if (!audio.paused) return;
			audio.play().then(() => {
				startedRef.current = true;
			}).catch(() => {});
		};
		window.addEventListener("pointerdown", handleFirstInteraction, {
			once: true,
			passive: true
		});
		window.addEventListener("touchstart", handleFirstInteraction, {
			once: true,
			passive: true
		});
		window.addEventListener("keydown", handleFirstInteraction, { once: true });
		return () => {
			window.removeEventListener("pointerdown", handleFirstInteraction);
			window.removeEventListener("touchstart", handleFirstInteraction);
			window.removeEventListener("keydown", handleFirstInteraction);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("audio", {
		ref: audioRef,
		src: SONG_SRC,
		autoPlay: true,
		preload: "auto",
		"aria-hidden": "true"
	});
}
function IntroScreen({ onComplete }) {
	const [isVisible, setIsVisible] = (0, import_react.useState)(true);
	const handleDismiss = () => {
		if (!isVisible) return;
		setIsVisible(false);
		setTimeout(onComplete, 1e3);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: isVisible && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: { opacity: 1 },
		exit: { opacity: 0 },
		transition: { duration: 1 },
		className: "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background p-4 sm:p-8 cursor-pointer",
		onClick: handleDismiss,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex max-w-md flex-col items-center text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						scale: 0,
						opacity: 0
					},
					animate: {
						scale: 1,
						opacity: 1
					},
					transition: {
						delay: .5,
						type: "spring",
						stiffness: 100
					},
					className: "mb-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
						width: "120",
						height: "120",
						viewBox: "0 0 100 100",
						className: "text-foreground stroke-current stroke-2 fill-none overflow-visible",
						strokeLinecap: "round",
						strokeLinejoin: "round",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M50 10 C25 12 10 30 10 50 C12 75 30 90 50 90 C75 88 90 70 90 50 C88 25 70 10 50 10 Z" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M35 40 Q40 33 45 40" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M55 40 Q60 33 65 40" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M38 55 Q50 70 62 55" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "30",
								cy: "50",
								r: "4",
								className: "fill-[#F4B8C4] stroke-none",
								opacity: "0.6"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: "70",
								cy: "50",
								r: "4",
								className: "fill-[#F4B8C4] stroke-none",
								opacity: "0.6"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
								initial: {
									y: 10,
									opacity: 0
								},
								animate: {
									y: 0,
									opacity: 1
								},
								transition: {
									delay: 1,
									duration: 1,
									repeat: Infinity,
									repeatType: "reverse"
								},
								d: "M80 10 C85 5 95 5 100 10 C105 15 105 25 100 30 L85 45 L70 30 C65 25 65 15 70 10 Z",
								className: "fill-[#E96A75] stroke-[#E96A75] stroke-1",
								transform: "scale(0.5) translate(40, -20)"
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h1, {
					initial: {
						opacity: 0,
						y: 10
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						delay: 1.5,
						duration: .8
					},
					className: "font-caveat text-4xl sm:text-5xl md:text-6xl text-foreground",
					children: "hello sneh"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.p, {
					initial: {
						opacity: 0,
						y: 10
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						delay: 3,
						duration: .8
					},
					className: "mt-6 font-caveat text-2xl sm:text-3xl text-foreground/80 leading-relaxed",
					children: [
						"So heres something for you",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"and just scroll hehe"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					transition: {
						delay: 5,
						duration: 1
					},
					className: "absolute -bottom-24 font-caveat text-xl text-foreground/40 animate-pulse",
					children: "(tap anywhere to continue)"
				})
			]
		})
	}) });
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$5 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "A little corner for you" },
			{
				name: "description",
				content: "A handmade notebook about not having to face everything alone."
			},
			{
				name: "author",
				content: "Ved"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:site",
				content: "@Lovable"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Caveat:wght@500;600;700&family=Nunito+Sans:wght@400;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$5.useRouteContext();
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	const reduced = useReducedMotion();
	const [introFinished, setIntroFinished] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			!introFinished && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IntroScreen, { onComplete: () => setIntroFinished(true) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotebookNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				mode: "wait",
				initial: false,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: reduced ? false : {
						opacity: 0,
						x: 22,
						rotate: .25
					},
					animate: {
						opacity: 1,
						x: 0,
						rotate: 0
					},
					exit: reduced ? {} : {
						opacity: 0,
						x: -16,
						rotate: -.2
					},
					transition: {
						duration: .28,
						ease: "easeOut"
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}, pathname)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MusicPlayer, {})
		]
	});
}
var $$splitComponentImporter$4 = () => import("./routes-Bi7ZmWfE.mjs");
var Route$4 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Hey… come here for a second — For You" },
		{
			name: "description",
			content: "A small handmade corner of the internet, made to remind you that you are not alone."
		},
		{
			property: "og:title",
			content: "A little corner of the internet, for you"
		},
		{
			property: "og:description",
			content: "Everything feels heavy sometimes. You do not have to carry it alone."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./always-here-C8TXk8j7.mjs");
var Route$3 = createFileRoute("/always-here")({
	head: () => ({ meta: [
		{ title: "I mean this — For You" },
		{
			name: "description",
			content: "A quiet promise under a hand-drawn night sky: I am still here."
		},
		{
			property: "og:title",
			content: "I mean this"
		},
		{
			property: "og:description",
			content: "I will listen, sit with you, distract you, and stay when words do not work."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./final-DY-iIJMF.mjs");
var Route$2 = createFileRoute("/final")({
	head: () => ({ meta: [
		{ title: "I’m still here — For You" },
		{
			name: "description",
			content: "The closing page of a handmade reminder: you matter, and you are not alone."
		},
		{
			property: "og:title",
			content: "I’m still here"
		},
		{
			property: "og:description",
			content: "No giant speech. Just this: you matter to me, and you do not have to face it alone."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./letter-6p0D3aWq.mjs");
var Route$1 = createFileRoute("/letter")({
	head: () => ({ meta: [
		{ title: "A tiny letter for you — For You" },
		{
			name: "description",
			content: "A handwritten reminder that someone stays, even on the messy days."
		},
		{
			property: "og:title",
			content: "A tiny letter for you"
		},
		{
			property: "og:description",
			content: "You do not have to explain everything perfectly. I will still be here."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./little-things-BOv5gxt9.mjs");
var Route = createFileRoute("/little-things")({
	head: () => ({ meta: [
		{ title: "Tiny things — For You" },
		{
			name: "description",
			content: "A notebook page of tiny, low-pressure things that might make today one percent better."
		},
		{
			property: "og:title",
			content: "Tiny things that might help"
		},
		{
			property: "og:description",
			content: "No grand advice. Just water, a nap, something dumb to watch, or a text."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$4.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$5
	}),
	AlwaysHereRoute: Route$3.update({
		id: "/always-here",
		path: "/always-here",
		getParentRoute: () => Route$5
	}),
	FinalRoute: Route$2.update({
		id: "/final",
		path: "/final",
		getParentRoute: () => Route$5
	}),
	LetterRoute: Route$1.update({
		id: "/letter",
		path: "/letter",
		getParentRoute: () => Route$5
	}),
	LittleThingsRoute: Route.update({
		id: "/little-things",
		path: "/little-things",
		getParentRoute: () => Route$5
	})
};
var routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
