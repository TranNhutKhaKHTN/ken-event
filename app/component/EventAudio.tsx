"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type RefObject,
} from "react";

const AUDIO_SRC = "/audio.mp3";
const START_TIME = 73;
const END_TIME = 129;
const THROTTLE_MS = 200;

type EventAudioProps = {
  scrollRootRef: RefObject<HTMLElement | null>;
};

export default function EventAudio({ scrollRootRef }: EventAudioProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const userPausedRef = useRef(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const throttleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isThrottledRef = useRef(false);

  const clearThrottle = useCallback(() => {
    if (throttleTimerRef.current) {
      clearTimeout(throttleTimerRef.current);
      throttleTimerRef.current = null;
    }
    isThrottledRef.current = false;
  }, []);

  const armThrottle = useCallback(() => {
    isThrottledRef.current = true;
    if (throttleTimerRef.current) {
      clearTimeout(throttleTimerRef.current);
    }
    throttleTimerRef.current = setTimeout(clearThrottle, THROTTLE_MS);
  }, [clearThrottle]);

  const startPlayback = useCallback(
    (audio: HTMLAudioElement) => {
      const promise = audio.play();
      if (!promise) return;

      promise
        .then(() => {
          if (audio.currentTime < START_TIME || audio.currentTime >= END_TIME) {
            audio.currentTime = START_TIME;
          }
          setIsPlaying(true);
        })
        .catch(() => {
          setIsPlaying(false);
          clearThrottle();
        });
    },
    [clearThrottle],
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

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onTimeUpdate = () => {
      if (audio.currentTime >= END_TIME) {
        audio.currentTime = START_TIME;
      }
    };

    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("timeupdate", onTimeUpdate);

    const shouldSkipInteraction = (e: Event) => {
      if (e.type === "pointerdown") {
        const pointer = e as PointerEvent;
        if (pointer.pointerType === "touch") return true;
      }

      const target = e.target as HTMLElement;
      if (target.closest("[data-audio-toggle]")) return true;
      if (userPausedRef.current) return true;

      return (
        !audio.paused &&
        audio.currentTime >= START_TIME &&
        audio.currentTime < END_TIME
      );
    };

    const onInteraction = (e: Event) => {
      if (shouldSkipInteraction(e)) return;
      if (isThrottledRef.current) return;

      armThrottle();
      startPlayback(audio);
    };

    document.addEventListener("pointerdown", onInteraction, { capture: true });
    document.addEventListener("touchstart", onInteraction, {
      capture: true,
      passive: true,
    });
    document.addEventListener("wheel", onInteraction, {
      capture: true,
      passive: true,
    });
    document.addEventListener("keydown", onInteraction, { capture: true });

    const scrollRoot = scrollRootRef.current;
    scrollRoot?.addEventListener("scroll", onInteraction, { passive: true });

    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("timeupdate", onTimeUpdate);
      document.removeEventListener("pointerdown", onInteraction, {
        capture: true,
      });
      document.removeEventListener("touchstart", onInteraction, {
        capture: true,
      });
      document.removeEventListener("wheel", onInteraction, { capture: true });
      document.removeEventListener("keydown", onInteraction, { capture: true });
      scrollRoot?.removeEventListener("scroll", onInteraction);
      clearThrottle();
      audio.pause();
    };
  }, [armThrottle, clearThrottle, scrollRootRef, startPlayback]);

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
