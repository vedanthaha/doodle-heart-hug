import type { ReactNode, SVGProps } from "react";
import { motion } from "motion/react";

const ink = "currentColor";
const common = { fill: "none", stroke: ink, strokeWidth: 2.2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
type Props = SVGProps<SVGSVGElement> & { accent?: boolean };

export function DoodleHeart({ className, ...props }: Props) {
  return <svg viewBox="0 0 42 38" className={className} aria-hidden="true" {...props}><path {...common} d="M21 34C15 27 4 22 5 12 6 4 16 3 21 10 27 2 38 5 37 14 36 22 27 29 21 34Z"/><path {...common} strokeWidth="1" opacity=".35" d="M18 33C12 27 6 21 7 13"/></svg>;
}
export function DoodleStar({ className, ...props }: Props) {
  return <svg viewBox="0 0 40 40" className={className} aria-hidden="true" {...props}><path {...common} d="m20 3 3 12 12 4-11 4-4 13-3-12L5 20l11-4Z"/></svg>;
}
export function DoodleFlower({ className, ...props }: Props) {
  return <svg viewBox="0 0 60 70" className={className} aria-hidden="true" {...props}><path {...common} d="M30 37c-17 8-23-11-8-12-8-15 12-21 13-6 13-9 22 8 8 14 7 14-11 18-13 4Z"/><circle {...common} cx="31" cy="29" r="6"/><path {...common} d="M31 37c-2 15 1 23-3 30m2-17c-8-6-14-3-16 1 7 3 12 2 16-1Zm0 7c7-6 13-3 15 1-6 3-11 2-15-1Z"/></svg>;
}
export function DoodleCloud({ className, ...props }: Props) {
  return <svg viewBox="0 0 110 54" className={className} aria-hidden="true" {...props}><path {...common} d="M11 42c-13-12 3-26 16-19 2-19 31-23 38-4 13-9 30 1 26 15 18-2 17 18 2 17H18C8 51 6 45 11 42Z"/><path {...common} strokeWidth="1" opacity=".3" d="M20 48c19 2 48 1 70 0"/></svg>;
}
export function DoodleMoon({ className, ...props }: Props) {
  return <svg viewBox="0 0 70 70" className={className} aria-hidden="true" {...props}><path {...common} d="M50 7C27 7 16 24 21 42c4 15 19 22 34 15C39 69 15 60 10 40 5 18 25 1 50 7Z"/></svg>;
}
export function DoodleCoffee({ className, ...props }: Props) {
  return <svg viewBox="0 0 70 70" className={className} aria-hidden="true" {...props}><path {...common} d="M15 27h37l-4 28H21l-6-28Zm37 7c15-3 15 17-2 15M21 20c-5-7 6-7 1-15m14 15c-5-7 6-8 1-16"/><path {...common} d="M12 59c15 3 33 3 45-1"/></svg>;
}
export function DoodleHeadphones({ className, ...props }: Props) {
  return <svg viewBox="0 0 70 70" className={className} aria-hidden="true" {...props}><path {...common} d="M11 39c0-32 48-33 49 0M12 38l9-2 4 22-10 2c-5-5-6-15-3-22Zm47-1-9-2-4 22 10 2c6-5 6-16 3-22Z"/></svg>;
}
export function DoodleCat({ className, ...props }: Props) {
 return <svg viewBox="0 0 80 74" className={className} aria-hidden="true" {...props}><path {...common} d="m23 19 4-13 10 10c6-2 11-1 16 1L64 7l-1 17c7 18-5 34-24 34-18 0-29-16-21-33Z"/><path {...common} d="M30 32h1m20 0h1M38 40c3 3 6 3 9 0m-5-1v-3M18 39 3 35m16 10L4 47m57-8 15-5m-15 11 15 3"/></svg>;
}
export function DoodlePaperPlane({ className, ...props }: Props) {
 return <svg viewBox="0 0 100 62" className={className} aria-hidden="true" {...props}><path {...common} d="M5 31 93 6 62 55 42 38 26 51l4-19Z"/><path {...common} d="M30 32 93 6 42 38"/></svg>;
}

type CharacterProps = Props & { friend?: boolean; pose?: "sit" | "stand" | "wave" | "letter" };
export function DoodleCharacter({ className, friend = false, pose = "stand", ...props }: CharacterProps) {
 const sit = pose === "sit";
 return <svg viewBox="0 0 105 145" className={className} aria-hidden="true" {...props}>
   <path {...common} d={friend ? "M37 28c-2-18 27-24 35-7 8 18-10 31-26 25-8-3-11-10-9-18Z" : "M34 27C34 9 61 4 70 19c10 17-5 33-22 29-10-2-15-11-14-21Z"}/>
   <path {...common} d={friend ? "M38 20c8-9 23-9 32 0M45 31h1m16-1h1M50 38c4 2 7 1 9-1" : "M36 23c6-11 23-13 32-4M43 31h1m17 0h1M49 39c4 1 7 0 9-2"}/>
   <path {...common} d="M51 48c-4 19-5 35-3 53m0-44c18 4 22 20 20 35M48 59c-15 6-19 18-19 31"/>
   {pose === "letter" && <><path {...common} d="M25 78 49 69l17 18-27 10Z"/><path {...common} d="m27 79 20 7 17-1"/></>}
   {pose === "wave" && <path {...common} d="M67 62c11-10 12-22 10-31m0 0-7 5m7-5 5 7"/>}
   {sit ? <><path {...common} d="M48 100c-12 6-20 13-25 23m25-23c11 4 19 11 26 20M17 124l10 3m43-5 10 2"/></> : <><path {...common} d="M48 100 39 130m9-30 14 29M33 132l10 1m14-2 10-2"/></>}
 </svg>;
}

export function RooftopScene() {
 return <svg viewBox="0 0 900 430" className="h-auto w-full text-ink" role="img" aria-label="Two tiny friends sitting together on a rooftop under the moon">
  <path d="M0 354h900v76H0z" className="fill-night"/><path {...common} d="M0 354c160-3 271 4 445 0 199-4 308 4 455 0"/>
  <path className="fill-night-soft" d="M0 287h85v67h52v-99h84v99h66v-45h68v45h93v-78h101v78h70v-112h84v112h51v-61h79v61h67v76H0Z"/>
  <path {...common} d="M267 335h330m-300 0-4-57m273 57 5-57M310 281h250"/>
  <circle cx="758" cy="88" r="47" className="fill-marker-yellow stroke-ink" strokeWidth="2"/><path {...common} opacity=".35" d="M734 74c9-8 17-7 23-1m18 27c-6 6-13 7-19 4"/>
  {[120,230,358,485,626,841].map((x,i)=><path key={x} {...common} d={`M${x} ${62+(i%3)*43}l3 8 8 3-8 3-3 9-3-9-8-3 8-3Z`}/>) }
  <g transform="translate(322 198) scale(.8)"><DoodleCharacter pose="sit"/></g><g transform="translate(449 198) scale(.8)"><DoodleCharacter pose="sit" friend/></g>
  <path {...common} d="M407 296c17 6 34 6 50 0"/><path {...common} strokeDasharray="4 9" opacity=".35" d="M76 190c88-61 176-76 245-49"/>
 </svg>;
}

export function FloatingDoodle({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
 return <motion.div className={className} animate={{ y: [0,-7,0], rotate: [-1,1,-1] }} transition={{ duration: 5, repeat: Infinity, delay, ease: "easeInOut" }}>{children}</motion.div>;
}
