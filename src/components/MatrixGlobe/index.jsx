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
  svg { cursor: grab; touch-action: none; user-select: none; } svg:active { cursor: grabbing; }
  .label { position: absolute; bottom: 4%; left: 50%; transform: translateX(-50%); color: #6fe99a; font: 600 10px "Space Grotesk",sans-serif; letter-spacing: .23em; white-space: nowrap; pointer-events: none; }
`;

const RAD = Math.PI / 180;
const project = (lat, lon, rotation, tilt, pitch = 0) => {
  const a = lat * RAD, b = lon * RAD + rotation;
  const x = Math.cos(a) * Math.sin(b);
  const y = Math.sin(a), z = Math.cos(a) * Math.cos(b);
  const y1 = y * Math.cos(tilt) - z * Math.sin(tilt);
  const z1 = y * Math.sin(tilt) + z * Math.cos(tilt);
  const x2 = x * Math.cos(pitch) + z1 * Math.sin(pitch);
  const z2 = -x * Math.sin(pitch) + z1 * Math.cos(pitch);
  return { x: 200 + 143 * x2, y: 200 - 143 * y1, z: z2 };
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
  const [pitch, setPitch] = useState(0);
  const target = useRef({ pitch: 0, tilt: -.16, yaw: .004 });
  const velocity = useRef(.004);
  const lastX = useRef(null);
  const lastY = useRef(null);
  const dragging = useRef(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame;
    let previous = 0;
    const tick = time => {
      if (time - previous >= 30) {
        if (!reduceMotion) setRotation(value => value + velocity.current * Math.min((time - previous) / 16.7, 3));
        setTilt(value => value + (target.current.tilt - value) * .07);
        setPitch(value => value + (target.current.pitch - value) * .07);
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
    for (let lon = -180; lon <= 180; lon += 3) points.push(project(lat, lon, rotation, tilt, pitch));
    lines.push({ id: `lat-${lat}`, points });
  }
  for (let lon = 0; lon < 360; lon += 15) {
    const points = [];
    for (let lat = -90; lat <= 90; lat += 3) points.push(project(lat, lon, rotation, tilt, pitch));
    lines.push({ id: `lon-${lon}`, points });
  }
  const dots = Array.from({ length: 400 }, (_, i) => {
    const y = 1 - 2 * (i + .5) / 400;
    return project(Math.asin(y) / RAD, i * 137.507764, rotation, tilt, pitch);
  }).filter(p => p.z >= 0);

  const onMove = event => {
    const rect = event.currentTarget.getBoundingClientRect();
    const y = (event.clientY - rect.top) / rect.height - .5;
    const x = (event.clientX - rect.left) / rect.width - .5;
    if (dragging.current && lastX.current !== null && lastY.current !== null) {
      const dx = event.clientX - lastX.current;
      const dy = event.clientY - lastY.current;
      setRotation(value => value + dx * .013);
      target.current.tilt = Math.max(-1.2, Math.min(1.2, target.current.tilt - dy * .009));
      target.current.pitch = Math.max(-.8, Math.min(.8, target.current.pitch + dx * .003));
      velocity.current = Math.max(-.014, Math.min(.014, dx * .0012));
    } else if (event.pointerType !== "touch") {
      target.current.tilt = -y * .7;
      target.current.pitch = x * .55;
    }
    lastX.current = event.clientX;
    lastY.current = event.clientY;
  };
  const endDrag = event => {
    dragging.current = false;
    lastX.current = null;
    lastY.current = null;
    if (event.currentTarget.hasPointerCapture?.(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
  };

  return (
    <Shell onPointerDown={event => { dragging.current = true; lastX.current = event.clientX; lastY.current = event.clientY; event.currentTarget.setPointerCapture(event.pointerId); }} onPointerMove={onMove} onPointerUp={endDrag} onPointerCancel={endDrag} onPointerLeave={() => { if (!dragging.current) { lastX.current = null; lastY.current = null; target.current.tilt = -.16; target.current.pitch = 0; } }}>
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
