"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils/cn";

export interface HeroBackgroundVideoSource {
  src: string;
  type: string;
}

export interface HeroBackgroundProps {
  /**
   * Video sources (e.g. webm + mp4). Left empty until a licensed cinematic
   * clip is available — the section renders the SVG skyline fallback below
   * instead of a stock placeholder video.
   */
  sources?: HeroBackgroundVideoSource[];
  /** Poster frame shown while the video loads. Only used once `sources` is populated. */
  posterSrc?: string;
  className?: string;
}

/**
 * Abstract, code-drawn skyline silhouette — no stock photography. Doubles as
 * the always-on background until a real video asset lands, and as the
 * <video> poster's visual language once one does.
 */
function SkylineFallback() {
  const buildings = [
    { x: 0, width: 60, height: 120 },
    { x: 58, width: 40, height: 180 },
    { x: 96, width: 52, height: 90 },
    { x: 146, width: 34, height: 220 },
    { x: 178, width: 58, height: 140 },
    { x: 234, width: 44, height: 260 },
    { x: 276, width: 30, height: 100 },
    { x: 304, width: 50, height: 190 },
    { x: 352, width: 38, height: 150 },
    { x: 388, width: 60, height: 240 },
    { x: 446, width: 42, height: 110 },
    { x: 486, width: 34, height: 170 },
    { x: 518, width: 56, height: 200 },
    { x: 572, width: 40, height: 130 },
  ];

  return (
    <svg
      viewBox="0 0 720 400"
      preserveAspectRatio="xMidYMax slice"
      className="size-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="hero-sky-gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a0a0a" />
          <stop offset="55%" stopColor="#171717" />
          <stop offset="100%" stopColor="#262626" />
        </linearGradient>
        <linearGradient id="hero-glow-gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
        </linearGradient>
        <pattern id="hero-bg-grid" width="28" height="28" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.5" fill="#ffffff" />
        </pattern>
      </defs>

      <rect width="720" height="400" fill="url(#hero-sky-gradient)" />
      <rect width="720" height="400" fill="url(#hero-bg-grid)" opacity="0.06" />
      <rect width="720" height="220" fill="url(#hero-glow-gradient)" />

      {buildings.map((building) => (
        <rect
          key={building.x}
          x={building.x}
          y={400 - building.height}
          width={building.width}
          height={building.height}
          fill="#0a0a0a"
          opacity="0.85"
        />
      ))}
    </svg>
  );
}

export function HeroBackground({ sources = [], posterSrc, className }: HeroBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const hasVideo = sources.length > 0;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (shouldReduceMotion) {
      video.pause();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play();
        } else {
          video.pause();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [shouldReduceMotion]);

  return (
    <div className={cn("absolute inset-0 z-0 overflow-hidden", className)} aria-hidden="true">
      {hasVideo ? (
        <video
          ref={videoRef}
          className="size-full object-cover"
          autoPlay={!shouldReduceMotion}
          muted
          loop
          playsInline
          preload="metadata"
          poster={posterSrc}
        >
          {sources.map((source) => (
            <source key={source.src} src={source.src} type={source.type} />
          ))}
        </video>
      ) : (
        <SkylineFallback />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/45 to-black/25" />
    </div>
  );
}
