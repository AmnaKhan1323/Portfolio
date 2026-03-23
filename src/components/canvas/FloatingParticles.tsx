import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import { random } from "maath";
import type { Points as PointsType } from "three";

const FloatingParticles = ({
  count = 800,
  color = "#915EFF",
  size = 0.003,
}: {
  count?: number;
  color?: string;
  size?: number;
}) => {
  const ref = useRef<PointsType>(null);
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(count * 3), { radius: 1.5 })
  );

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 20;
      ref.current.rotation.y -= delta / 25;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      {/* @ts-expect-error */}
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color={color}
          size={size}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
};

const FloatingParticlesCanvas = ({
  count = 800,
  color = "#915EFF",
  size = 0.003,
  className = "",
}: {
  count?: number;
  color?: string;
  size?: number;
  className?: string;
}) => {
  return (
    <div className={`absolute inset-0 z-0 pointer-events-none ${className}`}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <FloatingParticles count={count} color={color} size={size} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default FloatingParticlesCanvas;
