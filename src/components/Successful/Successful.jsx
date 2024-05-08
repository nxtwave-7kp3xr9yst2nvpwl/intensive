"use client";
import "./Successful.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import program_underline from "../../../public/underlines/program_underline.svg";

function animate() {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      slides: {
        origin: "center",
        perView: 1,
      },
      vertical: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 1000);
        }
        slider.on("created", () => {
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <span ref={sliderRef} className="keen-slider programs_animate">
      <span className="keen-slider__slide">Full Stack Developer</span>
      <span className="keen-slider__slide">Data Analyst</span>
      <span className="keen-slider__slide">QA Engineer</span>
      <span className="keen-slider__slide">Software Engineer</span>
    </span>
  );
}

export default function SuccessProgram() {
  return (
    <div>
      <h1 className="india_most_text">
        A Proven Program <br />
        To Make You a <br />
        {animate()}
      </h1>
      <Image
        src={program_underline}
        alt="liner"
        width={448}
        height={9}
        className="prog_ul"
      />
    </div>
  );
}
