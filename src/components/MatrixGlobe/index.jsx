import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Shell = styled.div`
  position: relative;
  width: min(520px, 100%);
  aspect-ratio: 1;
  display: grid;
  place-items: center;
  isolation: isolate;
  &::before {
    content: "";
    position: absolute;
    inset: 12%;
    background: radial-gradient(circle, rgba(35, 255, 104, .18), rgba(20, 135, 52, .07) 50%, transparent 72%);
    filter: blur(22px);
    pointer-events: none;
  }
  svg { width: 100%; height: 100%; overflow: visible; filter: drop-shadow(0 0 14px rgba(48,255,97,.22)); }
  .latitude, .longitude { fill: none; stroke: #4fff84; stroke-width: .7; opacity: .57; }
  .back { opacity: .15; stroke: #288a45; }
  .point { fill: #b0ffbc; }
  .outline { fill: none; stroke: #5dff89; stroke-width: 1.4; opacity: .82; }
  .label { position: absolute; bottom: 4%; left: 50%; transform: translateX(-50%); color: #6fe99a; font: 600 10px "Space Grotesk",sans-serif; letter-spacing: .23em; white-space: nowrap; pointer-events: none; }
`;

const RAD = Math.PI / 180;
const project = (lat, lon, rotation, tilt) => {
  const a = lat * RAD, b = lon * RAD + rotation;
  const x = Math.cos(a) * Math.sin(b);
  const y = Math.sin(a), z = Math.cos(a) * Math.cos(b);
  return { x: 200 + 143 * x, y: 200 - 143 * (y * Math.cos(tilt) - z * Math.sin(tilt)), z: y * Math.sin(tilt) + z * Math.cos(tilt) };
};
const segments = (points, front) => {
  const result = [];
  let segment = [];
  for (const point of points) {
    if ((point.z >= 0) === front) segment.push(point);
    else if (segment.length) { result.push(segment); segment = []; }
  }
  if (segment.length) result.push(segment);
  return result.filter(part => part.length > 1).map(part => part.map(p => `${p.x.toFixed(2)},${p.y.toFixed(2)}`).join(" "));
};

const MatrixGlobe = () => {
  const [rotation, setRotation] = useState(.35);
  const [tilt, setTilt] = useState(-.16);
  const velocity = useRef(.004);
  const lastX = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame;
    let previous = 0;
    const tick = time => {
      if (time - previous >= 30) {
        setRotation(value => value + velocity.current * Math.min((time - previous) / 16.7, 3));
        previous = time;
        velocity.current += (.004 - velocity.current) * .012;
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  const lines = [];
  for (let lat = -75; lat <= 75; lat += 15) {
    const points = [];
    for (let lon = -180; lon <= 180; lon += 3) points.push(project(lat, lon, rotation, tilt));
    lines.push({ id: `lat-${lat}`, points });
  }
  for (let lon = 0; lon < 360; lon += 15) {
    const points = [];
    for (let lat = -90; lat <= 90; lat += 3) points.push(project(lat, lon, rotation, tilt));
    lines.push({ id: `lon-${lon}`, points });
  }
  const dots = Array.from({ length: 400 }, (_, i) => {
    const y = 1 - 2 * (i + .5) / 400;
    return project(Math.asin(y) / RAD, i * 137.507764, rotation, tilt);
  }).filter(p => p.z >= 0);

  const onMove = event => {
    if (event.pointerType === "touch") return;
    const rect = event.currentTarget.getBoundingClientRect();
    const y = (event.clientY - rect.top) / rect.height - .5;
    setTilt(-y * .75);
    if (lastX.current !== null) velocity.current = Math.max(-.035, Math.min(.035, (event.clientX - lastX.current) * .002));
    lastX.current = event.clientX;
  };

  return (
    <Shell onPointerMove={onMove} onPointerLeave={() => { lastX.current = null; setTilt(-.16); }}>
      <svg viewBox="0 0 400 400" role="img" aria-label="Globo Matrix tridimensional verde com linhas de coordenadas e rotação interativa">
        <defs>
          <radialGradient id="matrixSphere" cx="35%" cy="30%">
            <stop offset="0%" stopColor="#123d1e" stopOpacity=".78" />
            <stop offset="70%" stopColor="#071c0e" stopOpacity=".93" />
            <stop offset="100%" stopColor="#020b05" />
          </radialGradient>
        </defs>
        <circle cx="200" cy="200" r="143" fill="url(#matrixSphere)" />
        {lines.map(line => segments(line.points, false).map((points, index) =>
          <polyline key={`${line.id}-back-${index}`} className="longitude back" points={points} />
        ))}
        {lines.map(line => segments(line.points, true).map((points, index) =>
          <polyline key={`${line.id}-front-${index}`} className={line.id.startsWith("lat") ? "latitude" : "longitude"} points={points} />
        ))}
        {dots.map((p, i) => <circle key={i} className="point" cx={p.x} cy={p.y} r={.45 + p.z * .9} opacity={.28 + p.z * .72} />)}
        <circle cx="200" cy="200" r="143" className="outline" />
      </svg>
      <span className="label">DIGITAL WORLD // 001</span>
    </Shell>
  );
};
export default MatrixGlobe;
