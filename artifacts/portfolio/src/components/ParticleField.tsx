import { useRef, useMemo, useEffect, Component, ReactNode } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function isWebGLAvailable(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

interface ErrorBoundaryProps {
  fallback: ReactNode;
  children: ReactNode;
}
interface ErrorBoundaryState { hasError: boolean; }

class WebGLErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() { return { hasError: true }; }
  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

function MatrixParticles({ mouseX, mouseY }: { mouseX: number; mouseY: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, colors, velocities] = useMemo(() => {
    const count = 1600;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
      vel[i * 3]     = (Math.random() - 0.5) * 0.003;
      vel[i * 3 + 1] = -Math.random() * 0.008 - 0.002;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.002;
      const t = Math.random();
      if (t < 0.6) { col[i*3]=0; col[i*3+1]=1;    col[i*3+2]=0.8; }
      else if (t < 0.85) { col[i*3]=0; col[i*3+1]=0.67; col[i*3+2]=1; }
      else { col[i*3]=0; col[i*3+1]=0.4; col[i*3+2]=0.5; }
    }
    return [pos, col, vel];
  }, []);

  const posRef = useRef(positions.slice());

  useFrame(({ clock }) => {
    if (!pointsRef.current) return;
    const arr = pointsRef.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < arr.length / 3; i++) {
      arr[i*3]   += velocities[i*3];
      arr[i*3+1] += velocities[i*3+1];
      arr[i*3+2] += velocities[i*3+2];
      if (arr[i*3+1] < -7) {
        arr[i*3+1] = 7;
        arr[i*3]   = (Math.random() - 0.5) * 20;
      }
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    const t = clock.getElapsedTime();
    pointsRef.current.rotation.y = mouseX * 0.25 + Math.sin(t * 0.06) * 0.08;
    pointsRef.current.rotation.x = -mouseY * 0.12 + Math.cos(t * 0.04) * 0.04;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[posRef.current, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.045} vertexColors transparent opacity={0.75} sizeAttenuation depthWrite={false} />
    </points>
  );
}

function FloatingCube({ position, speed }: { position: [number,number,number]; speed: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime() * speed;
    ref.current.rotation.x = t * 0.4;
    ref.current.rotation.y = t * 0.6;
    ref.current.position.y = position[1] + Math.sin(t * 0.8) * 0.4;
  });
  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={[0.18, 0.18, 0.18]} />
      <meshBasicMaterial color="#00ffcc" wireframe transparent opacity={0.35} />
    </mesh>
  );
}

function GridLines() {
  const meshRef = useRef<THREE.LineSegments>(null);
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const verts: number[] = [];
    for (let x = -12; x <= 12; x += 2) verts.push(x, -8, -6, x, 8, -6);
    for (let y = -8; y <= 8; y += 2)   verts.push(-12, y, -6, 12, y, -6);
    geo.setAttribute("position", new THREE.Float32BufferAttribute(verts, 3));
    return geo;
  }, []);
  useFrame(({ clock }) => {
    if (meshRef.current)
      meshRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.2) * 0.3;
  });
  return (
    <lineSegments ref={meshRef} geometry={geometry}>
      <lineBasicMaterial color="#00ffcc" transparent opacity={0.05} />
    </lineSegments>
  );
}

function ThreeScene({ mouseX, mouseY }: { mouseX: number; mouseY: number }) {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 65 }} style={{ position: "absolute", inset: 0 }} gl={{ antialias: false, alpha: true }}>
      <MatrixParticles mouseX={mouseX} mouseY={mouseY} />
      <GridLines />
      {([ [-5,2,-2,0.6], [5,-1.5,-1,0.8], [-3,-2.5,-3,0.5], [4,2.5,-2,0.7], [0,3,-4,0.45] ] as [number,number,number,number][]).map(([x,y,z,s],i) => (
        <FloatingCube key={i} position={[x,y,z]} speed={s} />
      ))}
    </Canvas>
  );
}

function CSSParticleFallback({ mouseX, mouseY }: { mouseX: number; mouseY: number }) {
  const particles = useMemo(() => {
    return Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.6 + 0.2,
      duration: Math.random() * 8 + 4,
      delay: Math.random() * 6,
      color: Math.random() < 0.65 ? "#00ffcc" : Math.random() < 0.8 ? "#00aaff" : "#005544",
    }));
  }, []);

  return (
    <div
      style={{
        position: "absolute", inset: 0, overflow: "hidden",
        transform: `perspective(800px) rotateX(${mouseY * -3}deg) rotateY(${mouseX * 3}deg)`,
        transition: "transform 0.1s ease-out",
      }}
    >
      {/* Grid */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(0,255,204,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,204,0.04) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />
      {/* Radial glow */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(0,255,204,0.06) 0%, transparent 65%)",
      }} />
      {/* CSS Particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: "absolute",
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            background: p.color,
            opacity: p.opacity,
            boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
            animation: `cssParticleDrift ${p.duration}s ${p.delay}s linear infinite`,
          }}
        />
      ))}
      {/* Floating wireframe boxes (CSS) */}
      {[
        { left: "10%", top: "20%", delay: "0s" },
        { left: "85%", top: "35%", delay: "1.2s" },
        { left: "70%", top: "70%", delay: "0.6s" },
        { left: "20%", top: "75%", delay: "1.8s" },
        { left: "50%", top: "15%", delay: "0.9s" },
      ].map((box, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: box.left, top: box.top,
            width: 14, height: 14,
            border: "1px solid rgba(0,255,204,0.4)",
            borderRadius: 2,
            animation: `cssBoxFloat 4s ${box.delay} ease-in-out infinite, cssBoxSpin 6s ${box.delay} linear infinite`,
            transformOrigin: "center",
          }}
        />
      ))}
      <style>{`
        @keyframes cssParticleDrift {
          0%   { transform: translateY(0px) translateX(0px); opacity: var(--op, 0.4); }
          25%  { transform: translateY(-20px) translateX(8px); }
          50%  { transform: translateY(-40px) translateX(-4px); opacity: 0.1; }
          75%  { transform: translateY(-60px) translateX(12px); }
          100% { transform: translateY(-80px) translateX(0px); opacity: 0; }
        }
        @keyframes cssBoxFloat {
          0%, 100% { transform: translateY(0px) rotateZ(0deg); }
          50% { transform: translateY(-12px) rotateZ(180deg); }
        }
        @keyframes cssBoxSpin {
          from { transform: rotateZ(0deg) rotateX(0deg); }
          to   { transform: rotateZ(360deg) rotateX(360deg); }
        }
      `}</style>
    </div>
  );
}

export default function ParticleField({ mouseX, mouseY }: { mouseX: number; mouseY: number }) {
  const webgl = useMemo(() => isWebGLAvailable(), []);

  if (!webgl) {
    return <CSSParticleFallback mouseX={mouseX} mouseY={mouseY} />;
  }

  return (
    <WebGLErrorBoundary fallback={<CSSParticleFallback mouseX={mouseX} mouseY={mouseY} />}>
      <ThreeScene mouseX={mouseX} mouseY={mouseY} />
    </WebGLErrorBoundary>
  );
}
