"use client";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import "keen-slider/keen-slider.min.css";

export default function PreferNxtwaveSlider({ children }) {
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 2,
    },
    breakpoints: {
      "(min-width: 500px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3.4, spacing: 24 },
      },
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <div className="navigation-wrapper">
      <div ref={sliderRef} className="keen-slider">
        {children}
      </div>
      {loaded && instanceRef.current && (
        <div className="slider_arrows_con">
          <Arrow
            left
            onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()}
          />

          <Arrow
            onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
          />
        </div>
      )}
    </div>
  );
}
function Arrow(props) {
  const disabled = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${props.left ? "arrow--left" : "arrow--right"}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={42}
          d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"
        />
      )}
      {!props.left && (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={42}
          d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"
        />
      )}
    </svg>
  );
}
