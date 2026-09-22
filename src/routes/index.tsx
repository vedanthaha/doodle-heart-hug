import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { DoodleCharacter, DoodleCloud, DoodleCoffee, DoodleHeart, DoodlePaperPlane, DoodleStar, FloatingDoodle } from "@/components/scrapbook/Doodles";
import { Button } from "@/components/ui/button";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Hey… come here for a second — For You" },
    { name: "description", content: "A small handmade corner of the internet, made to remind you that you are not alone." },
    { property: "og:title", content: "A little corner of the internet, for you" },
    { property: "og:description", content: "Everything feels heavy sometimes. You do not have to carry it alone." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  return (
    <main className="scrap-page home-page">
      <div className="opening-note"><span>page 01</span><b>open gently</b></div>
      <section className="home-copy">
        <motion.p className="kicker" initial={{opacity:0,y:8}} animate={{opacity:1,y:0}}>Hey… come here for a second.</motion.p>
        <h1>Everything feels a little <span className="circled-word">heavy</span> sometimes.</h1>
        <p className="home-sub">But hey…<br/><strong>you don’t have to carry it all by yourself.</strong></p>
        <p className="hand-line">I made this little corner of the internet just for you.</p>
        <Button asChild variant="doodleRed" size="lg"><Link to="/letter">Come inside <span aria-hidden="true">→</span></Link></Button>
      </section>
      <section className="home-scene" aria-label="A tiny doodle person taking a quiet moment">
        <FloatingDoodle className="home-cloud"><DoodleCloud/></FloatingDoodle>
        <span className="cloud-note">it’s okay to pause</span>
        <DoodleCharacter pose="sit" className="lonely-character"/>
        <DoodleCoffee className="floor-cup"/>
        <div className="speech-bubble">I’m here.</div>
        <FloatingDoodle className="star-a"><DoodleStar/></FloatingDoodle><FloatingDoodle className="heart-a" delay={1}><DoodleHeart/></FloatingDoodle>
        <motion.div className="paper-plane" animate={{x:[-10,14,-10],y:[4,-8,4],rotate:[-3,3,-3]}} transition={{duration:8,repeat:Infinity}}><DoodlePaperPlane/></motion.div>
        <svg className="scribble-path" viewBox="0 0 300 110" aria-hidden="true"><path d="M4 91C53 18 112 15 153 59c29 30 78 45 143-29"/></svg>
      </section>
      <p className="made-note">Made with way too much overthinking + a little bit of love :)</p>
    </main>
  );
}
