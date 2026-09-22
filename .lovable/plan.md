# Handmade comfort scrapbook

## What I’ll build
- Create five complete pages: Home, Letter, Little Things, Always Here, and Final.
- Use the supplied wording and keep the tone personal, platonic, warm, and slightly playful.
- Add shared notebook-tab navigation, gentle page transitions, and a persistent music player that uses the optional local MP3 only.
- Build every visual from CSS and inline SVG: characters, stars, hearts, clouds, flowers, moon, cat, coffee, headphones, paper plane, rooftop, and scrapbook marks.

## Visual direction
- Off-white paper with subtle CSS grain and faint notebook lines.
- Graphite ink with restrained pink, red, yellow, blue, and green marker accents.
- Handwritten display type paired with a readable sans-serif body type.
- Imperfect borders, tape, underlines, scribbles, sticky notes, and slow, intentional movement.
- No stock images, PNGs, glass effects, oversized text, generic cards, or template-like sections.

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
