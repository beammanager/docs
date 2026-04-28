import { Link } from "waku";
import "./landing.css";
import { Rocket } from "lucide-react";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center text-center h-full gap-4">
      <title>BeamManager</title>
      <h1 className="font-medium text-2xl mb-4">
        The panel{" "}
        <span className="relative text-orange-300">
          purpose built
          <svg
            className="absolute -bottom-1 left-0 w-full h-2 overflow-visible"
            viewBox="0 0 100 10"
            preserveAspectRatio="none"
            role="none"
          >
            <path
              d="M0 5 C 20 0, 30 10, 50 5 S 80 0, 100 5"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              className="animate-draw"
              style={{
                strokeDasharray: 110,
                strokeDashoffset: 110,
              }}
            />
          </svg>
        </span>{" "}
        for beamMP
      </h1>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center w-2/3 h-2/3 min-h-128 blur-3xl -z-10 rounded-4xl">
        {/* Generated with blobmaker */}
        <svg
          role="none"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          width={3000}
          preserveAspectRatio="none"
          height={1200}
        >
          <defs>
            <linearGradient id="0" x1="0.05" y1="0.73" x2="0.95" y2="0.27">
              <stop offset="0%" stop-color="#ff0044" />
              <stop offset="20.33%" stop-color="#ff3c33" />
              <stop offset="61%" stop-color="#ff6a00" />
              <stop offset="74%" stop-color="#fc8800" />
              <stop offset="100%" stop-color="#ffb700" />
            </linearGradient>
          </defs>
          <path
            fill="url(#0)"
            className="gradient"
            d="M45,-69C55.7,-63.2,59.7,-46.2,67.4,-30.5C75,-14.7,86.3,-0.4,87.9,15.1C89.4,30.5,81.3,46.9,69.3,59.1C57.3,71.3,41.4,79.2,25.6,81C9.9,82.7,-5.9,78.2,-22.1,74C-38.4,69.9,-55.2,66.1,-66.8,56C-78.4,46,-84.9,29.5,-87.1,12.6C-89.4,-4.3,-87.4,-21.6,-80.4,-36.6C-73.4,-51.6,-61.4,-64.1,-47.1,-68.3C-32.9,-72.4,-16.4,-68.1,0.4,-68.7C17.2,-69.3,34.4,-74.8,45,-69Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      <img
        src="/images/screenshot.png"
        className="w-384 rounded-sm"
        alt="BeamManager screenshot"
      />
      <Link
        to="/docs"
        className="px-3 py-2 rounded-lg bg-fd-primary text-fd-primary-foreground font-medium text-sm mx-auto flex gap-1 items-center"
      >
        <Rocket size="1rem" />
        Get Started
      </Link>
    </div>
  );
}

export async function getConfig() {
  return {
    render: "static",
  };
}
