import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const links = [
  ["/", "Home"], ["/letter", "Letter"], ["/little-things", "Little Things"], ["/always-here", "Always Here"], ["/final", "Final"],
] as const;
export function NotebookNav() {
 const [open,setOpen]=useState(false); const pathname=useRouterState({select:s=>s.location.pathname});
 return <header className="notebook-nav">
  <Link to="/" className="brand-mark" aria-label="Back to the first page"><span>for you</span><i /></Link>
  <nav className="desktop-tabs" aria-label="Notebook pages">{links.map(([to,label],i)=><Link key={to} to={to} className={`page-tab tab-${i+1} ${pathname===to?"is-active":""}`}>{label}</Link>)}</nav>
  <Button variant="doodleIcon" size="icon" className="mobile-menu-button" onClick={()=>setOpen(v=>!v)} aria-label={open?"Close notebook menu":"Open notebook menu"} aria-expanded={open}>{open?<X/>:<Menu/>}</Button>
  <AnimatePresence>{open&&<motion.nav className="mobile-tabs" aria-label="Notebook pages" initial={{opacity:0,y:-12,rotate:-1}} animate={{opacity:1,y:0,rotate:.4}} exit={{opacity:0,y:-8}}>{links.map(([to,label],i)=><Link key={to} to={to} onClick={()=>setOpen(false)} className={`page-tab tab-${i+1} ${pathname===to?"is-active":""}`}>{label}</Link>)}</motion.nav>}</AnimatePresence>
 </header>;
}
