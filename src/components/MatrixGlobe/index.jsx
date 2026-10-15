import { useState } from "react";
import styled from "styled-components";

const Stage = styled.div`
  position: relative;
  width: min(440px, 100%);
  aspect-ratio: 1;
  display: grid;
  place-items: center;
  isolation: isolate;
  touch-action: pan-y;
  user-select: none;
  &::before {
    content: "";
    position: absolute;
    inset: 12%;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(28, 220, 167, .17), rgba(15, 81, 133, .10) 50%, transparent 73%);
    filter: blur(24px);
    z-index: -1;
  }
  .orbit { position: absolute; inset: 3%; width: 94%; height: 94%; border: 1px solid rgba(67, 238, 189, .18); border-radius: 50%; transform: rotate(-22deg) scaleY(.76); }
  .orbit.two { transform: rotate(42deg) scaleY(.84); border-color: rgba(57, 163, 247, .20); }
  svg { width: 88%; height: 88%; overflow: visible; filter: drop-shadow(0 0 22px rgba(34, 233, 177, .25)); transition: transform .22s ease-out; }
  .globe-line { fill: none; stroke: #55f5c6; stroke-width: 1.2; opacity: .55; }
  .globe-blue { stroke: #4caaff; opacity: .35; }
  .globe-dot { fill: #9affd6; }
  .globe-ring { fill: none; stroke: #42e9c0; stroke-width: 1; opacity: .4; stroke-dasharray: 5 9; }
  .core { fill: url(#globeCore); stroke: rgba(94, 255, 201, .7); stroke-width: 1.5; }
  .scan { animation: pulse 3.8s ease-in-out infinite alternate; }
  @keyframes pulse { from { opacity: .3; } to { opacity: .85; } }
  @media (prefers-reduced-motion: reduce) { svg { transition: none; } .scan { animation: none; } }
`;

const latitudes = [-64, -43, -22, 0, 22, 43, 64];
const longitudes = [-72, -48, -24, 0, 24, 48, 72];

const MatrixGlobe = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const move = (event) => {
    if (event.pointerType === "touch") return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - .5;
    const y = (event.clientY - rect.top) / rect.height - .5;
    setTilt({ x: -y * 17, y: x * 17 });
  };
  return (
    <Stage role="img" aria-label="Globo digital verde e azul com grade de coordenadas que acompanha o movimento do cursor" onPointerMove={move} onPointerLeave={() => setTilt({ x: 0, y: 0 })}>
      <span className="orbit" /><span className="orbit two" />
      <svg viewBox="0 0 400 400" style={{ transform: `perspective(650px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }} aria-hidden="true">
        <defs>
          <radialGradient id="globeCore" cx="35%" cy="25%" r="80%">
            <stop offset="0%" stopColor="#153e5c" stopOpacity=".78" />
            <stop offset="55%" stopColor="#071f32" stopOpacity=".9" />
            <stop offset="100%" stopColor="#05101d" />
          </radialGradient>
          <clipPath id="globeClip"><circle cx="200" cy="200" r="145" /></clipPath>
        </defs>
        <circle cx="200" cy="200" r="175" className="globe-ring" />
        <circle cx="200" cy="200" r="145" className="core" />
        <g clipPath="url(#globeClip)">
          {latitudes.map((latitude) => {
            const rad = latitude * Math.PI / 180;
            const ry = 145 * Math.cos(rad);
            return <ellipse key={latitude} className="globe-line" cx="200" cy={200 - 145 * Math.sin(rad)} rx={ry} ry={ry * .23} />;
          })}
          {longitudes.map((longitude) => {
            const rad = longitude * Math.PI / 180;
            return <ellipse key={longitude} className="globe-line globe-blue" cx="200" cy="200" rx={Math.max(1, 145 * Math.abs(Math.cos(rad)))} ry="145" />;
          })}
          <path d="M62 195 Q200 135 338 195 M62 205 Q200 265 338 205" className="globe-line scan" />
          {Array.from({ length: 30 }, (_, i) => {
            const a = i * 2.39996, radius = Math.sqrt((i + .5) / 30) * 130;
            return <circle key={i} className="globe-dot scan" cx={200 + Math.cos(a) * radius} cy={200 + Math.sin(a) * radius} r={i % 5 === 0 ? 2.8 : 1.4} />;
          })}
        </g>
        <circle cx="200" cy="200" r="145" fill="none" stroke="#53ffca" strokeOpacity=".75" strokeWidth="1.5" />
        <path d="M200 18 V40 M200 360 V382 M18 200 H40 M360 200 H382" stroke="#63e6cf" strokeWidth="2" />
      </svg>
    </Stage>
  );
};

export default MatrixGlobe;
