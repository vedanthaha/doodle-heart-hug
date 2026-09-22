import { Download, Music2, Pause, Play, Volume2, VolumeX, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const src="/audio/i-love-you-so.mp3";
const fmt=(n:number)=>Number.isFinite(n)?`${Math.floor(n/60)}:${Math.floor(n%60).toString().padStart(2,"0")}`:"0:00";
export function MusicPlayer(){
 const audio=useRef<HTMLAudioElement>(null); const [playing,setPlaying]=useState(false); const [time,setTime]=useState(0); const [duration,setDuration]=useState(0); const [volume,setVolume]=useState(.6); const [muted,setMuted]=useState(false); const [prompt,setPrompt]=useState(true); const [available,setAvailable]=useState(false);
 useEffect(()=>{fetch(src,{method:"HEAD"}).then(r=>setAvailable(r.ok&&!!r.headers.get("content-type")?.includes("audio"))).catch(()=>setAvailable(false));},[]);
 const toggle=async()=>{const el=audio.current;if(!el)return;setPrompt(false);if(playing){el.pause();setPlaying(false)}else{try{await el.play();setPlaying(true)}catch{setAvailable(false)}}};
 return <>
  <audio ref={audio} src={src} preload="metadata" onTimeUpdate={e=>setTime(e.currentTarget.currentTime)} onLoadedMetadata={e=>{setDuration(e.currentTarget.duration);setAvailable(true)}} onEnded={()=>setPlaying(false)} onError={()=>setAvailable(false)}/>
  <AnimatePresence>{prompt&&<motion.aside className="music-prompt" initial={{opacity:0,y:18,rotate:1}} animate={{opacity:1,y:0,rotate:-.5}} exit={{opacity:0,y:12}} aria-label="Music invitation"><Button variant="ghost" size="icon" className="prompt-close" onClick={()=>setPrompt(false)} aria-label="Dismiss music invitation"><X/></Button><p>Want some background music?</p><Button variant="doodle" onClick={toggle} disabled={!available}>{available?"Play song ♫":"Add the song file to play"}</Button></motion.aside>}</AnimatePresence>
  <aside className="music-player" aria-label="Background music player"><Button variant="doodleIcon" size="icon" onClick={toggle} disabled={!available} aria-label={playing?"Pause song":"Play song"}>{playing?<Pause/>:<Play/>}</Button><div className="music-meta"><span><Music2 className={playing?"music-bounce":""}/> I Love You So — The Walters</span><div className="timeline"><time>{fmt(time)}</time><input aria-label="Song progress" type="range" min="0" max={duration||1} value={time} onChange={e=>{if(audio.current){audio.current.currentTime=Number(e.target.value);setTime(Number(e.target.value))}}}/><time>{fmt(duration)}</time></div></div><Button variant="ghost" size="icon" onClick={()=>{if(audio.current)audio.current.muted=!muted;setMuted(v=>!v)}} aria-label={muted?"Unmute song":"Mute song"}>{muted?<VolumeX/>:<Volume2/>}</Button><input className="volume" aria-label="Volume" type="range" min="0" max="1" step=".05" value={volume} onChange={e=>{const v=Number(e.target.value);setVolume(v);if(audio.current)audio.current.volume=v}}/>{available&&<a className="download-song" href={src} download aria-label="Download your local copy of the song"><Download/></a>}</aside>
 </>;
}
