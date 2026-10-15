import { useEffect, useRef } from "react";
import styled from "styled-components";

const Shell = styled.div`
  position: relative; width: min(520px,100%); aspect-ratio: 1; isolation: isolate;
  &::before { content:""; position:absolute; inset:12%; border-radius:50%; background:radial-gradient(circle,rgba(33,255,107,.15),transparent 68%); filter:blur(27px); pointer-events:none; }
  canvas { position:absolute; inset:0; display:block; width:100%; height:100%; cursor:grab; touch-action:pan-y; }
  canvas:active { cursor:grabbing; }
  .label { position:absolute; bottom:4%; left:50%; transform:translateX(-50%); color:#6fe99a; font:600 10px "Space Grotesk",sans-serif; letter-spacing:.23em; white-space:nowrap; opacity:.7; pointer-events:none; }
  @media (prefers-reduced-motion:reduce) { .label { opacity:.85; } }
`;

const PI = Math.PI;
const Globe = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let frame = 0, raf = 0, angle = .35, tilt = -.16, targetTilt = -.16, targetVelocity = .0038, velocity = .0038;
    let width = 440, height = 440, lastX = null;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const resize = () => {
      const bounds = canvas.parentElement.getBoundingClientRect();
      width = bounds.width || 440; height = bounds.height || 440;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr); canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    const observer = typeof ResizeObserver !== "undefined" ? new ResizeObserver(resize) : null;
    observer?.observe(canvas.parentElement);
    window.addEventListener("resize", resize);
    resize();
    const project = (lat, lon, radius, cx, cy) => {
      const la = lat * PI / 180, lo = lon * PI / 180 + angle;
      const x = Math.cos(la) * Math.sin(lo);
      const y = Math.sin(la);
      const z = Math.cos(la) * Math.cos(lo);
      const yy = y * Math.cos(tilt) - z * Math.sin(tilt);
      const zz = y * Math.sin(tilt) + z * Math.cos(tilt);
      return { x: cx + x * radius, y: cy - yy * radius, z: zz };
    };
    const draw = () => {
      frame++;
      if (!reduceMotion) {
        velocity += (targetVelocity - velocity) * .045;
        angle += velocity;
        tilt += (targetTilt - tilt) * .055;
      }
      ctx.clearRect(0,0,width,height);
      const cx=width/2, cy=height/2, radius=Math.min(width,height)*.355;
      const halo=ctx.createRadialGradient(cx,cy,radius*.25,cx,cy,radius*1.45);
      halo.addColorStop(0,"rgba(8,68,25,.18)");halo.addColorStop(.7,"rgba(10,54,23,.13)");halo.addColorStop(1,"rgba(0,0,0,0)");
      ctx.fillStyle=halo;ctx.fillRect(0,0,width,height);
      const drawLine=(points,alpha,strokeWidth=1)=>{
        for(let side of [-1,1]){
          ctx.beginPath();let started=false;
          for(const p of points){
            if((side===1 && p.z < 0)||(side===-1 && p.z >= 0)){started=false;continue;}
            if(!started){ctx.moveTo(p.x,p.y);started=true;}else ctx.lineTo(p.x,p.y);
          }
          ctx.strokeStyle=`rgba(48,255,103,${alpha*(side===1?1:.17)})`;
          ctx.lineWidth=strokeWidth;ctx.stroke();
        }
      };
      // Latitude and longitude wireframe: every line follows the sphere's rotation.
      for(let lat=-75;lat<=75;lat+=15){
        const pts=[];for(let lon=-180;lon<=180;lon+=3)pts.push(project(lat,lon,radius,cx,cy));
        drawLine(pts,.42,.85);
      }
      for(let lon=0;lon<360;lon+=15){
        const pts=[];for(let lat=-90;lat<=90;lat+=3)pts.push(project(lat,lon,radius,cx,cy));
        drawLine(pts,.45,.9);
      }
      // Dense matrix-like points distributed over the sphere.
      for(let i=0;i<680;i++){
        const y=1-2*(i+.5)/680;
        const lat=Math.asin(y)*180/PI;
        const lon=i*137.507764;
        const p=project(lat,lon,radius,cx,cy);
        if(p.z<0)continue;
        const twinkle=.6+.4*Math.sin(i*1.73+frame*.025);
        const a=(.22+.67*p.z)*twinkle;
        ctx.fillStyle=`rgba(110,255,141,${a})`;
        const size=(i%13===0?1.9:1.05)*(0.7+0.35*p.z);
        ctx.fillRect(p.x-size/2,p.y-size/2,size,size);
      }
      const edge=ctx.createRadialGradient(cx,cy,radius*.6,cx,cy,radius*1.05);
      edge.addColorStop(0,"rgba(0,0,0,0)");edge.addColorStop(.86,"rgba(23,210,70,.03)");edge.addColorStop(1,"rgba(65,255,116,.14)");
      ctx.fillStyle=edge;ctx.beginPath();ctx.arc(cx,cy,radius,0,2*PI);ctx.fill();
      ctx.beginPath();ctx.arc(cx,cy,radius,0,2*PI);
      ctx.strokeStyle="rgba(81,255,123,.58)";ctx.lineWidth=1.3;ctx.shadowColor="#36ff70";ctx.shadowBlur=14;ctx.stroke();ctx.shadowBlur=0;
      // Subtle scanning arc.
      const scanY=cy+Math.sin(frame*.014)*radius*.72;
      ctx.beginPath();ctx.ellipse(cx,scanY,radius*.85,Math.max(2,radius*.085),0,0,2*PI);
      ctx.strokeStyle="rgba(68,255,110,.065)";ctx.stroke();
      if(!reduceMotion)raf=requestAnimationFrame(draw);
    };
    const move=(event)=>{
      if(event.pointerType==="touch")return;
      const rect=canvas.getBoundingClientRect();
      const x=(event.clientX-rect.left)/rect.width-.5;
      const y=(event.clientY-rect.top)/rect.height-.5;
      targetTilt=Math.max(-.55,Math.min(.55,y*.85));
      if(lastX!==null)targetVelocity=Math.max(-.022,Math.min(.022,(event.clientX-lastX)*.0016+.003));
      lastX=event.clientX;
    };
    const leave=()=>{lastX=null;targetTilt=-.16;targetVelocity=.0038;};
    canvas.addEventListener("pointermove",move);canvas.addEventListener("pointerleave",leave);
    draw();
    return ()=>{cancelAnimationFrame(raf);observer?.disconnect();window.removeEventListener("resize",resize);canvas.removeEventListener("pointermove",move);canvas.removeEventListener("pointerleave",leave);};
  },[]);
  return <Shell><canvas ref={canvasRef} role="img" aria-label="Globo tridimensional Matrix, com linhas de latitude e longitude verdes, pontos luminosos e rotação interativa" /><span className="label">DIGITAL WORLD // 001</span></Shell>;
};
export default Globe;
