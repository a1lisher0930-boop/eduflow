'use client';

import React, { useEffect, useRef } from 'react';

export const ThreeDBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Mouse position tracking for 3D parallax rotation
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX - width / 2) / (width / 2);
      targetMouseY = (e.clientY - height / 2) / (height / 2);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // 3D Geometry definitions
    interface Point3D {
      x: number;
      y: number;
      z: number;
    }

    interface Edge {
      a: number;
      b: number;
    }

    interface Geometry3D {
      vertices: Point3D[];
      edges: Edge[];
    }

    // 1. Icosahedron
    const phi = (1 + Math.sqrt(5)) / 2;
    const icoRawVertices: Point3D[] = [
      { x: -1, y: phi, z: 0 }, { x: 1, y: phi, z: 0 },
      { x: -1, y: -phi, z: 0 }, { x: 1, y: -phi, z: 0 },
      { x: 0, y: -1, z: phi }, { x: 0, y: 1, z: phi },
      { x: 0, y: -1, z: -phi }, { x: 0, y: 1, z: -phi },
      { x: phi, y: 0, z: -1 }, { x: phi, y: 0, z: 1 },
      { x: -phi, y: 0, z: -1 }, { x: -phi, y: 0, z: 1 },
    ];
    const icoVertices = icoRawVertices.map(v => {
      const len = Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z);
      return { x: v.x / len, y: v.y / len, z: v.z / len };
    });
    const icoEdges: Edge[] = [];
    for (let i = 0; i < icoVertices.length; i++) {
      for (let j = i + 1; j < icoVertices.length; j++) {
        const dx = icoVertices[i].x - icoVertices[j].x;
        const dy = icoVertices[i].y - icoVertices[j].y;
        const dz = icoVertices[i].z - icoVertices[j].z;
        if (Math.sqrt(dx * dx + dy * dy + dz * dz) < 1.1) {
          icoEdges.push({ a: i, b: j });
        }
      }
    }
    const icosahedronGeo: Geometry3D = { vertices: icoVertices, edges: icoEdges };

    // 2. Octahedron
    const octVertices: Point3D[] = [
      { x: 1, y: 0, z: 0 }, { x: -1, y: 0, z: 0 },
      { x: 0, y: 1, z: 0 }, { x: 0, y: -1, z: 0 },
      { x: 0, y: 0, z: 1 }, { x: 0, y: 0, z: -1 },
    ];
    const octEdges: Edge[] = [
      { a: 0, b: 2 }, { a: 0, b: 3 }, { a: 0, b: 4 }, { a: 0, b: 5 },
      { a: 1, b: 2 }, { a: 1, b: 3 }, { a: 1, b: 4 }, { a: 1, b: 5 },
      { a: 2, b: 4 }, { a: 4, b: 3 }, { a: 3, b: 5 }, { a: 5, b: 2 },
    ];
    const octahedronGeo: Geometry3D = { vertices: octVertices, edges: octEdges };

    // 3. Tetrahedron (3D Pyramid)
    const tetraVertices: Point3D[] = [
      { x: 1, y: 1, z: 1 },
      { x: -1, y: -1, z: 1 },
      { x: -1, y: 1, z: -1 },
      { x: 1, y: -1, z: -1 },
    ].map(v => {
      const len = Math.sqrt(v.x * v.x + v.y * v.y + v.z * v.z);
      return { x: v.x / len, y: v.y / len, z: v.z / len };
    });
    const tetraEdges: Edge[] = [
      { a: 0, b: 1 }, { a: 0, b: 2 }, { a: 0, b: 3 },
      { a: 1, b: 2 }, { a: 1, b: 3 }, { a: 2, b: 3 }
    ];
    const tetrahedronGeo: Geometry3D = { vertices: tetraVertices, edges: tetraEdges };

    // 4. Diamond / Crystal Gem
    const gemVertices: Point3D[] = [
      { x: 0, y: 1.4, z: 0 }, // top tip
      { x: 0, y: -1.4, z: 0 }, // bottom tip
      // ring of 5 points
      ...[0, 1, 2, 3, 4].map(i => {
        const ang = (i * Math.PI * 2) / 5;
        return { x: Math.cos(ang), y: 0.2, z: Math.sin(ang) };
      })
    ];
    const gemEdges: Edge[] = [];
    // connect top tip to ring
    for (let i = 2; i <= 6; i++) gemEdges.push({ a: 0, b: i });
    // connect bottom tip to ring
    for (let i = 2; i <= 6; i++) gemEdges.push({ a: 1, b: i });
    // connect ring around
    for (let i = 2; i <= 6; i++) gemEdges.push({ a: i, b: i === 6 ? 2 : i + 1 });
    const gemGeo: Geometry3D = { vertices: gemVertices, edges: gemEdges };

    // 5. 3D Ring Orbit (12-sided Ring)
    const ringVertices: Point3D[] = [];
    const ringEdges: Edge[] = [];
    const ringSegments = 12;
    for (let i = 0; i < ringSegments; i++) {
      const ang = (i * Math.PI * 2) / ringSegments;
      ringVertices.push({ x: Math.cos(ang), y: Math.sin(ang), z: 0 });
      ringVertices.push({ x: Math.cos(ang) * 0.7, y: Math.sin(ang) * 0.7, z: 0.3 });
    }
    for (let i = 0; i < ringSegments; i++) {
      const outerCurr = i * 2;
      const outerNext = ((i + 1) % ringSegments) * 2;
      const innerCurr = i * 2 + 1;
      const innerNext = ((i + 1) % ringSegments) * 2 + 1;
      ringEdges.push({ a: outerCurr, b: outerNext });
      ringEdges.push({ a: innerCurr, b: innerNext });
      ringEdges.push({ a: outerCurr, b: innerCurr });
    }
    const ringGeo: Geometry3D = { vertices: ringVertices, edges: ringEdges };

    // Floating 3D Objects definitions
    interface FloatingMesh {
      side: 'left' | 'right';
      offsetRatioX: number; // percentage of screen width from center
      minOffsetPixels: number; // minimum distance from center
      maxOffsetPixels?: number; // max bound so it never leaves screen
      offsetYRatio: number; // vertical placement
      z: number;
      scale: number; // Smaller size as requested!
      rotX: number;
      rotY: number;
      rotZ: number;
      rotSpeedX: number;
      rotSpeedY: number;
      geometry: Geometry3D;
      color: string;
    }

    const meshes: FloatingMesh[] = [
      // LEFT SIDE SMALL MODELS
      {
        side: 'left',
        offsetRatioX: 0.38,
        minOffsetPixels: 380,
        offsetYRatio: -0.26,
        z: 320,
        scale: 65, // Compact size
        rotX: 0.2,
        rotY: 0.5,
        rotZ: 0.1,
        rotSpeedX: 0.007,
        rotSpeedY: 0.01,
        geometry: tetrahedronGeo,
        color: '#38bdf8' // Cyan
      },
      {
        side: 'left',
        offsetRatioX: 0.40,
        minOffsetPixels: 400,
        offsetYRatio: 0.02,
        z: 300,
        scale: 75,
        rotX: 0.4,
        rotY: 0.8,
        rotZ: 0,
        rotSpeedX: -0.006,
        rotSpeedY: 0.008,
        geometry: gemGeo,
        color: '#fbbf24' // Amber Gem
      },
      {
        side: 'left',
        offsetRatioX: 0.36,
        minOffsetPixels: 370,
        offsetYRatio: 0.28,
        z: 340,
        scale: 70,
        rotX: 1.1,
        rotY: 0.3,
        rotZ: 0,
        rotSpeedX: 0.009,
        rotSpeedY: -0.007,
        geometry: ringGeo,
        color: '#34d399' // Emerald Ring
      },

      // RIGHT SIDE SMALL MODELS
      {
        side: 'right',
        offsetRatioX: 0.38,
        minOffsetPixels: 380,
        offsetYRatio: -0.28,
        z: 330,
        scale: 75,
        rotX: 0.5,
        rotY: 0.3,
        rotZ: 0.2,
        rotSpeedX: -0.008,
        rotSpeedY: 0.009,
        geometry: icosahedronGeo,
        color: '#818cf8' // Indigo
      },
      {
        side: 'right',
        offsetRatioX: 0.40,
        minOffsetPixels: 400,
        offsetYRatio: 0.04,
        z: 310,
        scale: 70,
        rotX: 0.7,
        rotY: 0.4,
        rotZ: 0,
        rotSpeedX: 0.007,
        rotSpeedY: -0.006,
        geometry: octahedronGeo,
        color: '#f472b6' // Rose Pink
      },
      {
        side: 'right',
        offsetRatioX: 0.36,
        minOffsetPixels: 370,
        offsetYRatio: 0.29,
        z: 350,
        scale: 80,
        rotX: 0.3,
        rotY: 0.9,
        rotZ: 0.1,
        rotSpeedX: -0.005,
        rotSpeedY: 0.008,
        geometry: gemGeo,
        color: '#a855f7' // Purple Crystal
      }
    ];

    // Floating 3D Star Particles
    interface Particle3D {
      x: number;
      y: number;
      z: number;
      size: number;
      color: string;
      speedZ: number;
    }

    const particles: Particle3D[] = Array.from({ length: 110 }, () => ({
      x: (Math.random() - 0.5) * width * 2.2,
      y: (Math.random() - 0.5) * height * 2.2,
      z: Math.random() * 1000 + 100,
      size: Math.random() * 2.2 + 1,
      color: ['#60a5fa', '#a78bfa', '#34d399', '#fbbf24', '#f472b6'][Math.floor(Math.random() * 5)],
      speedZ: Math.random() * 0.4 + 0.15
    }));

    // 3D Matrix Transformations
    const rotateX = (p: Point3D, angle: number): Point3D => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return { x: p.x, y: p.y * cos - p.z * sin, z: p.y * sin + p.z * cos };
    };

    const rotateY = (p: Point3D, angle: number): Point3D => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return { x: p.x * cos + p.z * sin, y: p.y, z: -p.x * sin + p.z * cos };
    };

    const rotateZ = (p: Point3D, angle: number): Point3D => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return { x: p.x * cos - p.y * sin, y: p.x * sin + p.y * cos, z: p.z };
    };

    const project = (p: Point3D, fov: number, cx: number, cy: number) => {
      const scale = fov / (fov + p.z);
      return {
        x: p.x * scale + cx,
        y: p.y * scale + cy,
        scale
      };
    };

    // Render loop
    const render = () => {
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Deep space gradient background
      const bgGrad = ctx.createLinearGradient(0, 0, width, height);
      bgGrad.addColorStop(0, '#060913');
      bgGrad.addColorStop(0.5, '#0b1324');
      bgGrad.addColorStop(1, '#080c18');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      const fov = 600;
      const centerX = width / 2;
      const centerY = height / 2;

      // Ambient glows behind models on left and right
      const leftGlowX = Math.max(width * 0.12, 100);
      const rightGlowX = Math.min(width * 0.88, width - 100);

      const orbLeftGrad = ctx.createRadialGradient(leftGlowX, centerY, 10, leftGlowX, centerY, 320);
      orbLeftGrad.addColorStop(0, 'rgba(56, 189, 248, 0.22)');
      orbLeftGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = orbLeftGrad;
      ctx.beginPath();
      ctx.arc(leftGlowX, centerY, 320, 0, Math.PI * 2);
      ctx.fill();

      const orbRightGrad = ctx.createRadialGradient(rightGlowX, centerY, 10, rightGlowX, centerY, 320);
      orbRightGrad.addColorStop(0, 'rgba(168, 85, 247, 0.22)');
      orbRightGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = orbRightGrad;
      ctx.beginPath();
      ctx.arc(rightGlowX, centerY, 320, 0, Math.PI * 2);
      ctx.fill();

      // Draw floating star particles
      particles.forEach(p => {
        p.z -= p.speedZ;
        if (p.z < 1) p.z = 1000;

        const projected = project(
          {
            x: p.x + mouseX * 60,
            y: p.y + mouseY * 60,
            z: p.z
          },
          fov,
          centerX,
          centerY
        );

        if (
          projected.x >= 0 &&
          projected.x <= width &&
          projected.y >= 0 &&
          projected.y <= height
        ) {
          const alpha = Math.min(1, (1000 - p.z) / 800) * 0.65;
          ctx.fillStyle = p.color;
          ctx.globalAlpha = alpha;
          ctx.beginPath();
          ctx.arc(projected.x, projected.y, p.size * projected.scale, 0, Math.PI * 2);
          ctx.fill();
          ctx.globalAlpha = 1;
        }
      });

      // Draw floating 3D Polyhedron meshes
      meshes.forEach(mesh => {
        mesh.rotX += mesh.rotSpeedX;
        mesh.rotY += mesh.rotSpeedY;

        const effectiveRotX = mesh.rotX + mouseY * 0.2;
        const effectiveRotY = mesh.rotY + mouseX * 0.2;

        // Position models safely in the space between the center card and window edge
        // Max limit ensures models never go off-screen!
        const minOffset = mesh.minOffsetPixels;
        const maxOffset = Math.max(minOffset, width / 2 - 120); // 120px padding from screen edge
        const calcOffset = Math.min(Math.max(width * mesh.offsetRatioX, minOffset), maxOffset);

        const meshCenterX = mesh.side === 'left' ? -calcOffset : calcOffset;
        const meshCenterY = height * mesh.offsetYRatio;

        // Transform 3D vertices
        const transformedVertices = mesh.geometry.vertices.map(v => {
          let pt: Point3D = {
            x: v.x * mesh.scale,
            y: v.y * mesh.scale,
            z: v.z * mesh.scale
          };

          pt = rotateX(pt, effectiveRotX);
          pt = rotateY(pt, effectiveRotY);
          pt = rotateZ(pt, mesh.rotZ);

          pt.x += meshCenterX + mouseX * 45;
          pt.y += meshCenterY + mouseY * 45;
          pt.z += mesh.z;

          return pt;
        });

        // Project 3D vertices to 2D screen
        const projectedPoints = transformedVertices.map(v =>
          project(v, fov, centerX, centerY)
        );

        // Draw glowing wireframe lines
        ctx.strokeStyle = mesh.color;
        ctx.lineWidth = 1.6;
        ctx.shadowColor = mesh.color;
        ctx.shadowBlur = 14;

        mesh.geometry.edges.forEach(edge => {
          const p1 = projectedPoints[edge.a];
          const p2 = projectedPoints[edge.b];

          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        });

        // Draw vertex nodes
        projectedPoints.forEach(p => {
          ctx.fillStyle = '#ffffff';
          ctx.beginPath();
          ctx.arc(p.x, p.y, 2.5 * p.scale, 0, Math.PI * 2);
          ctx.fill();
        });

        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-auto z-0"
    />
  );
};
