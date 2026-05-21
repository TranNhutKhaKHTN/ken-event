"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

const AUDIO_SRC = "/audio.mp3";
const START_TIME = 73;
const END_TIME = 129;
const CLICK_AFTER_TOUCH_MS = 500;

export default function EventAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const userPausedRef = useRef(false);
  const lastTouchEndRef = useRef(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const seekToStart = useCallback((audio: HTMLAudioElement) => {
    if (audio.currentTime < START_TIME || audio.currentTime >= END_TIME) {
      audio.currentTime = START_TIME;
    }
  }, []);

  const startPlayback = useCallback(
    (audio: HTMLAudioElement) => {
      seekToStart(audio);

      const playUnmuted = () =>
        audio.play().then(() => {
          setIsPlaying(true);
        });

      playUnmuted().catch(() => {
        audio.muted = true;
        return playUnmuted().then(() => {
          audio.muted = false;
          setIsPlaying(true);
        });
      }).catch(() => {
        setIsPlaying(false);
      });
    },
    [seekToStart],
  );

  const pause = useCallback(() => {
    audioRef.current?.pause();
    setIsPlaying(false);
  }, []);

  const toggle = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!audio.paused) {
      userPausedRef.current = true;
      pause();
      return;
    }

    userPausedRef.current = false;
    startPlayback(audio);
  }, [pause, startPlayback]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.load();

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onTimeUpdate = () => {
      if (audio.currentTime >= END_TIME) {
        audio.currentTime = START_TIME;
      }
    };
    const onLoadedData = () => {
      if (audio.paused) {
        seekToStart(audio);
      }
    };

    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadeddata", onLoadedData);

    const shouldSkip = (target: EventTarget | null) => {
      if (!(target instanceof HTMLElement)) return false;
      if (target.closest("[data-audio-toggle]")) return true;
      if (userPausedRef.current) return true;

      return (
        !audio.paused &&
        audio.currentTime >= START_TIME &&
        audio.currentTime < END_TIME
      );
    };

    const onDocumentTap = (e: Event) => {
      if (shouldSkip(e.target)) return;
      startPlayback(audio);
    };

    const onTouchEnd = (e: TouchEvent) => {
      lastTouchEndRef.current = Date.now();
      onDocumentTap(e);
    };

    const onClick = (e: MouseEvent) => {
      if (Date.now() - lastTouchEndRef.current < CLICK_AFTER_TOUCH_MS) {
        return;
      }
      onDocumentTap(e);
    };

    document.addEventListener("touchend", onTouchEnd, {
      capture: true,
      passive: true,
    });
    document.addEventListener("click", onClick, { capture: true });

    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadeddata", onLoadedData);
      document.removeEventListener("touchend", onTouchEnd, { capture: true });
      document.removeEventListener("click", onClick, { capture: true });
      audio.pause();
    };
  }, [seekToStart, startPlayback]);

  return (
    <>
      <audio
        id="my-audio"
        ref={audioRef}
        src={AUDIO_SRC}
        preload="auto"
        playsInline
        className="hidden"
      />
      <button
        type="button"
        data-audio-toggle
        onClick={toggle}
        aria-label={isPlaying ? "Tắt nhạc" : "Bật nhạc"}
        className="fixed bottom-3 z-50 flex size-10 cursor-pointer items-center justify-center rounded-full border border-white shadow-md backdrop-blur-sm"
        style={{ left: "max(12px, calc(50% - 210px + 12px))" }}
      >
        <span
          className={`relative block text-[#4B2C82] ${isPlaying ? "animate-spin" : ""}`}
          style={{ animationDuration: "3s" }}
        >
          <svg viewBox="0 0 24 24" fill="white" className="size-5" aria-hidden>
            <path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z" />
          </svg>
          {!isPlaying ? (
            <span
              className="pointer-events-none absolute inset-0 flex items-center justify-center"
              aria-hidden
            >
              <span className="block h-[2px] w-6 rotate-45 rounded-full bg-white" />
            </span>
          ) : null}
        </span>
      </button>
    </>
  );
}
