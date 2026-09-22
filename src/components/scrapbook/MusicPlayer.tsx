import { useEffect, useRef } from "react";

const SONG_SRC = "/audio/i-love-you-so.mp3";

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.6;
    audio.preload = "auto";

    const tryPlay = async () => {
      if (startedRef.current) return;

      try {
        await audio.play();
        startedRef.current = true;
      } catch {
        // Browser blocked autoplay.
        // We'll retry after the first user interaction.
      }
    };

    // Try immediately when the website opens.
    void tryPlay();

    const handleFirstInteraction = () => {
      if (!audio.paused) return;

      void audio
        .play()
        .then(() => {
          startedRef.current = true;
        })
        .catch(() => {
          // Ignore if the browser still refuses playback.
        });
    };

    // Browsers commonly allow audio after the first interaction.
    window.addEventListener("pointerdown", handleFirstInteraction, {
      once: true,
      passive: true,
    });

    window.addEventListener("touchstart", handleFirstInteraction, {
      once: true,
      passive: true,
    });

    window.addEventListener("keydown", handleFirstInteraction, {
      once: true,
    });

    return () => {
      window.removeEventListener("pointerdown", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
      window.removeEventListener("keydown", handleFirstInteraction);
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      src={SONG_SRC}
      autoPlay
      preload="auto"
      aria-hidden="true"
    />
  );
}
