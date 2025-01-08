import * as THREE from 'three';
import { useRef, useState, useMemo, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Billboard, Text, TrackballControls } from '@react-three/drei';

const wordRoutes = {
    ASE: 'https://rvce.edu.in/as-mainpage',
    AIML: 'http://rvce.edu.in/aiml-mainpage',
    BT: 'http://rvce.edu.in/bt-menu',
    CH: 'http://rvce.edu.in/ch-menu',
    CV: 'http://rvce.edu.in/cv-menu',
    CSE: 'http://rvce.edu.in/cs-csedept',
    EE: 'https://rvce.edu.in/rvce-eee-main',
    EC: 'https://rvce.edu.in/ec-menu',
    EI: 'https://rvce.edu.in/RVCE-EIE-home-page',
    IEM: 'http://rvce.edu.in/iem-menu',
    ISE: 'https://rvce.edu.in/rvce-ise-main-page',
    ME: 'http://rvce.edu.in/me-menu',
};

function Word({ children, ...props }) {
    const color = new THREE.Color();
    const fontProps = {
        font: '/Inter-Bold.woff',
        fontSize: 2.5,
        letterSpacing: -0.05,
        lineHeight: 1,
        'material-toneMapped': false,
    };
    const ref = useRef();
    const [hovered, setHovered] = useState(false);

    const over = (e) => (e.stopPropagation(), setHovered(true));
    const out = () => setHovered(false);

    // Change the mouse cursor on hover
    useEffect(() => {
        if (hovered) document.body.style.cursor = 'pointer';
        return () => (document.body.style.cursor = 'auto');
    }, [hovered]);

    // Tie component to the render-loop
    useFrame(() => {
        ref.current.material.color.lerp(color.set(hovered ? '#fa2720' : 'white'), 0.1);
    });

    // Handle navigation to external links
    const handleClick = () => {
        const route = wordRoutes[children];
        if (route) {
            window.open(route, '_blank'); // Open in a new tab
        }
    };

    return (
        <Billboard {...props}>
            <Text
                ref={ref}
                onPointerOver={over}
                onPointerOut={out}
                onClick={handleClick}
                {...fontProps}
                children={children}
            />
        </Billboard>
    );
}

function Cloud({ count = 8, radius = 20 }) {
    const words = [
        'ASE', 'AIML', 'BT', 'CH', 'CV',
        'CSE', 'EE', 'EC', 'EI', 'IEM',
        'ISE', 'ME',
    ];

    // Create positions and assign each word to a position in spherical distribution
    const wordPositions = useMemo(() => {
        const temp = [];
        const spherical = new THREE.Spherical();
        const phiSpan = Math.PI / (count + 1);
        const thetaSpan = (Math.PI * 2) / count;
        for (let i = 1; i < count + 1; i++) {
            for (let j = 0; j < count; j++) {
                temp.push([
                    new THREE.Vector3().setFromSpherical(
                        spherical.set(radius, phiSpan * i, thetaSpan * j),
                    ),
                    words[(i * count + j) % words.length],
                ]);
            }
        }
        return temp;
    }, [count, radius]);

    return wordPositions.map(([pos, word], index) => (
        <Word key={index} position={pos} children={word} />
    ));
}

export default function Courses() {
    return (
        <div className="parent relative bg-[#202025] overflow-hidden w-full h-screen flex justify-center items-center">
            <h1 className="text-zinc-500 -rotate-90 font-bold absolute left-4 top-2/4 text-[8vw] md:text-[6vw] lg:text-[4vw]">
                Departments
            </h1>
            <div className="overflow-visible h-screen relative w-3/4 rounded-3xl">
                <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
                    <fog attach="fog" args={['#202025', 0, 80]} />
                    <Suspense fallback={null}>
                        <group rotation={[10, 10.5, 10]}>
                            <Cloud count={8} radius={20} />
                        </group>
                    </Suspense>
                    <TrackballControls />
                </Canvas>
            </div>
        </div>
    );
}
