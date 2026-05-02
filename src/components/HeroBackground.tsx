"use client";
import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

/* ─────────────────────────────────────────────────────────────────────────────
   Cinematic bokeh blobs — GTA V / Rockstar loading screen palette.
   Large, soft radial gradients drift slowly. No hard edges, no particles.
   Dark: amber · violet · deep blue   |   Light: softer versions of the same.
───────────────────────────────────────────────────────────────────────────── */

// 3 blobs — deep purple · indigo · violet — coherent palette, no red
const BLOB_DEFS_DARK = [
  { h: 262, s: 75, l: 38, a: 0.18 },   // deep purple  — left
  { h: 225, s: 82, l: 42, a: 0.15 },   // indigo-blue  — right
  { h: 285, s: 65, l: 36, a: 0.14 },   // violet       — bottom-center
];

const BLOB_DEFS_LIGHT = [
  { h: 262, s: 68, l: 62, a: 0.13 },
  { h: 225, s: 74, l: 65, a: 0.11 },
  { h: 285, s: 60, l: 60, a: 0.10 },
];

const rr = (a: number, b: number) => a + Math.random() * (b - a);

interface Blob {
  x: number; y: number;
  vx: number; vy: number;
  radius: number;
  h: number; s: number; l: number;
  alpha: number;
  phase: number; phaseSpeed: number;
}

export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme !== "light";

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let blobs: Blob[] = [];
    let last = performance.now();

    function build() {
      const W = canvas!.width, H = canvas!.height;
      const defs = isDark ? BLOB_DEFS_DARK : BLOB_DEFS_LIGHT;
      // Fixed starting positions so they're spread across the whole page
      const startPos = [
        { x: 0.18, y: 0.28 },   // purple  — upper-left
        { x: 0.82, y: 0.38 },   // blue    — upper-right
        { x: 0.50, y: 0.78 },   // red     — bottom-center
      ];
      blobs = defs.map((d, i) => {
        const angle = rr(0, Math.PI * 2);
        return {
          x: W * startPos[i].x,
          y: H * startPos[i].y,
          vx: Math.cos(angle) * rr(0.04, 0.08),
          vy: Math.sin(angle) * rr(0.04, 0.08),
          radius: Math.min(W, H) * rr(0.70, 0.95),
          h: d.h + rr(-6, 6),
          s: d.s,
          l: d.l,
          alpha: d.a,
          phase: rr(0, Math.PI * 2),
          phaseSpeed: rr(0.003, 0.007),
        };
      });
    }

    function resize() {
      canvas!.width  = canvas!.offsetWidth;
      canvas!.height = canvas!.offsetHeight;
      build();
    }

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();

    function loop(now: number) {
      const dt = Math.min(now - last, 50);
      last = now;
      const W = canvas!.width, H = canvas!.height;
      ctx.clearRect(0, 0, W, H);

      for (const b of blobs) {
        b.x += b.vx * (dt / 16);
        b.y += b.vy * (dt / 16);

        /* Soft bounce — keep blob centre well inside canvas */
        const m = b.radius * 0.28;
        if (b.x < m)     { b.x = m;     b.vx =  Math.abs(b.vx); }
        if (b.x > W - m) { b.x = W - m; b.vx = -Math.abs(b.vx); }
        if (b.y < m)     { b.y = m;     b.vy =  Math.abs(b.vy); }
        if (b.y > H - m) { b.y = H - m; b.vy = -Math.abs(b.vy); }

        b.phase += b.phaseSpeed * (dt / 16);
        const a = b.alpha * (0.80 + 0.20 * Math.sin(b.phase));

        /* Very soft radial gradient — bright core, long feathered edge */
        const gr = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.radius);
        gr.addColorStop(0,    `hsla(${b.h},${b.s}%,${b.l}%,${a})`);
        gr.addColorStop(0.20, `hsla(${b.h},${b.s}%,${b.l}%,${a * 0.60})`);
        gr.addColorStop(0.50, `hsla(${b.h},${b.s}%,${b.l}%,${a * 0.22})`);
        gr.addColorStop(0.80, `hsla(${b.h},${b.s}%,${b.l}%,${a * 0.05})`);
        gr.addColorStop(1,    `hsla(${b.h},${b.s}%,${b.l}%,0)`);

        ctx.fillStyle = gr;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(loop);
    }

    animId = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(animId); ro.disconnect(); };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      style={{
        position: "fixed", inset: 0,
        width: "100vw", height: "100vh",
        pointerEvents: "none", zIndex: 0,
      }}
    />
  );
}
