"use client";
import "./HeroSlider.css";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
      slides: {
        origin: "center",
        perView: 1,
      },
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
          }, 1200);
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
    <>
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide slider_company">
          <div className="slider_count">1700+</div>
          <div className="slider_count_des">Companies Hired Our Students</div>
          <Image
            src="https://nxtwave.imgix.net/ccbp-website/nxtwave-intensive-2.0/companies-image-hero-section.png"
            alt="company"
            loading="lazy"
            height={219}
            width={880}
            className="companies_count_slider"
          />
        </div>
        <div className="keen-slider__slide slider_review_con">
          <div className="review_h1_text">
            Mechanical Engineering to <br />
            ₹9 LPA Software Job
          </div>
          <div className="review_main_con">
            <Image
              alt="img"
              width={64}
              height={64}
              src="https://nxtwave.imgix.net/ccbp-website/nxtwave-intensive-2.0/surya.png"
              loading="lazy"
              className="review_img"
            />
            <div className="review_cont_con">
              <div className="review_name">Surya Vamsi</div>
              <div className="review_qual">Mechanical Engineering</div>
            </div>
            <div className="vertical_seperator"></div>
            <Image
              alt="img"
              width={258}
              height={96}
              src="https://nxtwave.imgix.net/ccbp-website/nxtwave-intensive-2.0/asecent-academy-company.png"
              loading="lazy"
              className="review_company_img"
            />
          </div>
        </div>
        <div className="keen-slider__slide slider_review_con">
          <div className="review_h1_text">
            Mock interviews by the placement team
            <br />
            helped me improve.
          </div>
          <div className="review_main_con">
            <Image
              alt="img"
              width={64}
              height={64}
              src="https://nxtwave.imgix.net/ccbp-website/nxtwave-intensive-2.0/bhargavi.png"
              loading="lazy"
              className="review_img"
            />
            <div className="review_cont_con">
              <div className="review_name">Bhargavi</div>
              <div className="review_qual">CSE, JNTU</div>
            </div>
            <div className="vertical_seperator"></div>
            <Image
              alt="img"
              width={258}
              height={96}
              src="https://nxtwave.imgix.net/ccbp-website/nxtwave-intensive-2.0/systech.png?auto=format,compress&q=80"
              loading="lazy"
              className="review_company_img"
            />
          </div>
        </div>
        <div className="keen-slider__slide slider_review_con">
          <div className="review_h1_text">
            B.Sc Graduate to a Software Engineer
          </div>
          <div className="review_main_con">
            <Image
              alt="img"
              width={64}
              height={64}
              src="https://nxtwave.imgix.net/ccbp-website/nxtwave-intensive-2.0/divya.png"
              loading="lazy"
              className="review_img"
            />
            <div className="review_cont_con">
              <div className="review_name">Devi Vyshnavi</div>
              <div className="review_qual">
                Adikavi Nannaya
                <br />
                University
              </div>
            </div>
            <div className="vertical_seperator"></div>
            <Image
              alt="img"
              width={258}
              height={96}
              src="https://nxtwave.imgix.net/ccbp-website/nxtwave-intensive-2.0/NeoSoft.png"
              loading="lazy"
              className="review_company_img"
            />
          </div>
        </div>
        <div className="keen-slider__slide slider_review_con">
          <div className="review_h1_text">
            From being a Delivery Boy in Swiggy
            <br />
            to Programmer Analyst in an MNC!
          </div>
          <div className="review_main_con">
            <Image
              alt="img"
              width={64}
              height={64}
              src="https://nxtwave.imgix.net/ccbp-website/nxtwave-intensive-2.0/sai.png"
              loading="lazy"
              className="review_img"
            />
            <div className="review_cont_con">
              <div className="review_name">Venkat Sai </div>
              <div className="review_qual">Mechanical Engineering</div>
            </div>
            <div className="vertical_seperator"></div>
            <Image
              alt="img"
              width={258}
              height={96}
              src="https://nxtwave.imgix.net//ccbp-website/nxtwave-intensive-2.0/exl.png"
              loading="lazy"
              className="review_company_img"
            />
          </div>
        </div>
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            );
          })}
        </div>
      )}
    </>
  );
}
