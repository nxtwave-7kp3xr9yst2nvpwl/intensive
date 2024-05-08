import "./Supercharge.css";
import su_ul from "../../../public/underlines/su_ul.svg";
import Image from "next/image";
import { useState } from "react";

export default function Supercharge() {
  return (
    <div className="sc_parent">
      <div className="sc_child">
        <div className="sc_h">
          The All New Intensive 3.0 Upgrades to
          <br />
          Supercharge Your Career
        </div>
        <Image
        src={su_ul}
        alt="liner"
        width={507}
        height={10}
        className="su_ul_s"
      />
        <div className="sc_items">
          <div className="sc_it_par">
            <Image
              src="https://nxtwave.imgix.net/ccbp-website/intensive/live-streaming-3.0-upgrades.png"
              alt="a"
              height={160}
              width={161}
              className="sc_it_im"
            />
            <div className="sc_d_con">
              <div className="sc_it_h">Live Sessions Every Week Day</div>
              <div className="sc_it_des">
                To clear your doubts, share best coding practices, interview
                tips and more
              </div>
            </div>
          </div>
          <div className="sc_it_par">
            <Image
              src="https://nxtwave.imgix.net/ccbp-website/intensive/3.0-upgrades-personal-success-coach.png"
              alt="a"
              height={160}
              width={161}
              className="sc_it_im"
            />
            <div className="sc_d_con">
              <div className="sc_it_h">
                Dedicated Success Coach for Every Student
              </div>
              <div className="sc_it_des">
                To guide you and ensure a smooth learning journey
              </div>
            </div>
          </div>
          <div className="sc_it_par">
            <Image
              src="https://nxtwave.imgix.net/ccbp-website/intensive/3.0-upgrades-placements-success-manager-icon.png"
              alt="a"
              height={160}
              width={161}
              className="sc_it_im"
            />
            <div className="sc_d_con">
              <div className="sc_it_h">Placement Success Manager</div>
              <div className="sc_it_des">
                To give feedback on your interview performance and boost your
                confidence
              </div>
            </div>
          </div>
          <div className="sc_it_par">
            <Image
              src="https://nxtwave.imgix.net/ccbp-website/intensive/3.0-upgrades-offline-drives.png"
              alt="a"
              height={160}
              width={161}
              className="sc_it_im"
            />
            <div className="sc_d_con">
              <div className="sc_it_h">Mega Offline Placement Drives</div>
              <div className="sc_it_des">Once in every 3 months</div>
            </div>
          </div>
        </div>
        <div className="sc_items">
          <div className="sc_it_par">
            <Image
              src="https://nxtwave.imgix.net/ccbp-website/intensive/3.0-upgrades-mock-interviews.png"
              alt="a"
              height={160}
              width={161}
              className="sc_it_im"
            />
            <div className="sc_d_con">
              <div className="sc_it_h">AI-Powered Mock Interviews</div>
              <div className="sc_it_des">
                Practice with realistic mock interviews and get tailored
                feedback immediately
              </div>
            </div>
          </div>
          <div className="sc_it_par">
            <Image
              src="https://nxtwave.imgix.net/ccbp-website/intensive/3.0-upgrades-masterclasses.png"
              alt="a"
              height={160}
              width={161}
              className="sc_it_im"
            />
            <div className="sc_d_con">
              <div className="sc_it_h">Masterclasses by Industry Experts</div>
              <div className="sc_it_des">
                To keep you updated with the latest trends and industry-aligned
              </div>
            </div>
          </div>
          <div className="sc_it_par">
            <Image
              src="https://nxtwave.imgix.net/ccbp-website/intensive/3.0-upgrades-mentorship.png"
              alt="a"
              height={160}
              width={161}
              className="sc_it_im"
            />
            <div className="sc_d_con">
              <div className="sc_it_h">Mentorship from Successful Seniors</div>
              <div className="sc_it_des">
                Alumni from 1700+ companies to make your placement preparation
                flawless
              </div>
            </div>
          </div>
          <div className="sc_it_par">
            <Image
              src="https://nxtwave.imgix.net/ccbp-website/intensive/3.0-upgrades-nxt-bytes.png"
              alt="a"
              height={160}
              width={161}
              className="sc_it_im"
            />
            <div className="sc_d_con">
              <div className="sc_it_h">Effortless Revision with NxtBytes</div>
              <div className="sc_it_des">
                Where you master key concepts through engaging reels and quizzes
              </div>
            </div>
          </div>
        </div>
        <button className="sc_button" >
          <div className="sc_text">Show all Upgrades</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={9}
            height={6}
            viewBox="0 0 9 6"
            fill="none"
          >
            <path
              d="M4.5 5.831a.72.72 0 0 1-.53-.231L.44 1.884a.824.824 0 0 1 0-1.116.73.73 0 0 1 1.06 0l3 3.158 3-3.158a.73.73 0 0 1 1.06 0c.29.305.29.81 0 1.116L5.03 5.6a.72.72 0 0 1-.53.231"
              fill="#2563EB"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
