import Particles from "react-tsparticles";

export default function ParticleHomepage() {
  return (
    <Particles
      className="relative w-full h-56 first:absolute hidden md:block"
      canvasClassName="canvas-wrapper"
      id="hero-particle"
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "grab",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 1,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#A78BFA",
            distance: 100,
            enable: true,
            opacity: 0.75,
            width: 1,
          },
          move: {
            enable: true,
            direction: "none",
            outMode: "out",
            random: true,
            speed: 0.5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 400,
            },
            value: 100,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 4,
          },
        },
        detectRetina: true,
      }}
    />
  );
}
