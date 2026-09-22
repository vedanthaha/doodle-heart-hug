# Handmade comfort scrapbook

## What I’ll build
- Create five complete pages: Home, Letter, Little Things, Always Here, and Final.
- Use the supplied wording and keep the tone personal, platonic, warm, and slightly playful.
- Add shared notebook-tab navigation, quick paper-slide/page-turn transitions, and a persistent music player that uses the optional local MP3 only.
- Build every visual from CSS and deliberately imperfect inline SVG: recurring characters, stars, hearts, clouds, flowers, moon, cat, coffee, headphones, paper plane, rooftop, and scrapbook marks.

## Visual direction
- Treat the site as five consecutive leaves of one physical notebook, not five conventional web layouts.
- Use off-white paper, faint CSS grain and ruling, graphite/fineliner marks, faded red marker, and restrained yellow highlighter; other accent colors remain rare.
- Pair handwritten display type with a readable sans-serif body, using human-scale typography rather than oversized web headlines.
- Build irregular SVG strokes, uneven circles, crossed-out words, margin notes, arrows, tape, scraps, pencil marks, and small objects into page-specific compositions.
- Create two recurring minimal doodle characters with simple heads, stick-like limbs, tiny shoes, and understated expressions. Their poses tell a coherent, explicitly platonic friendship story across all five pages.
- Vary alignment, rotation, overlap, and breathing room editorially. Avoid centered-section repetition, generic cards, symmetrical decoration, emoji-led artwork, stock imagery, PNGs, glass effects, and template-like presentation.
- Recompose illustrations and notes intentionally for mobile rather than merely stacking desktop blocks.

## Interactions
- Reveal the letter naturally as it enters view, with small margin notes and a drawn underline.
- Make every Little Things note respond to tap/click with its own supportive message and doodle reaction.
- Add an emergency happiness button with a lightweight hand-drawn star/heart burst and rotating comfort messages.
- Reveal the Always Here promises one by one around a responsive rooftop scene.
- Return to Home from the final page with “Replay everything.”
- Respect keyboard navigation and reduced-motion preferences.

## Music
- Keep playback state and controls available while moving between pages.
- Include play/pause, seek, time, duration, volume, mute, song title, and an animated music mark.
- Ask before playback and never force autoplay.
- Show a download control only when `/public/audio/i-love-you-so.mp3` is actually present; the song itself will not be added or sourced.

## Technical details
- Keep the project’s TanStack Router architecture while implementing the requested React route behavior.
- Use Motion for React for transitions, scroll reveals, taps, and restrained doodle movement.
- Define all color, type, shadow, and texture roles as reusable theme tokens.
- Add unique page metadata for every route.
- Verify all five routes, navigation, interactions, layout widths, reduced-motion behavior, and the missing-audio state at mobile and desktop sizes.
