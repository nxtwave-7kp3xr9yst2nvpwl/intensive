import "./IntensiveHighlights.css";
import Image from "next/image";

export default function IntensiveHighlights() {
  return (
    <div className="section_div">
      <div className="main_wrapper">
        <div className="grid_div">
          <div className="each_grid_div">
            <Image
              className="highlight_img"
              height={128}
              width={128}
              src="https://nxtwave.imgix.net/ccbp-website/nxtwave-intensive-2.0/course-duration-icon.png?auto=format,compress&q=80"
              alt="image"
              loading="lazy"
            />
            <div className="highlight_det_div">
              <div className="highlight_title">Course Duration</div>
              <div className="highlight_des">
                5-8 months based on the Job Track you choose
              </div>
            </div>
          </div>
          <div className="each_grid_div">
            <Image
              className="highlight_img"
              height={128}
              width={128}
              src="https://nxtwave.imgix.net/ccbp-website/nxtwave-intensive-2.0/eligibility-icon.png?auto=format,compress&q=80"
              alt="image"
              loading="lazy"
            />
            <div className="highlight_det_div">
              <div className="highlight_title">Eligibility</div>
              <div className="highlight_des">
                B. Tech (all branches), BSc, B.Com, BBA, etc.
                <br />
                No CGPA cut-off
              </div>
            </div>
          </div>
          <div className="each_grid_div">
            <Image
              className="highlight_img"
              height={128}
              width={128}
              src="https://nxtwave.imgix.net/ccbp-website/nxtwave-intensive-2.0/online-icon.png?auto=format,compress&q=80"
              alt=""
              loading="lazy"
            />

            <div className="highlight_det_div">
              <div className="highlight_title">Online</div>
              <div className="highlight_des">
                3 Hours Classes and 3 Hours Labs Every Day
              </div>
            </div>
          </div>
          <div className="each_grid_div">
            <Image
              className="highlight_img"
              height={128}
              width={128}
              src="https://nxtwave.imgix.net/ccbp-website/intensive/live-chat-intensive-3.0.png?auto=format,compress&q=80"
              alt="image"
              loading="lazy"
            />
            <div className="highlight_det_div">
              <div className="highlight_title">
                Support&nbsp;&nbsp;<span className="new_orange">NEW</span>
              </div>
              <div className="highlight_des">
                Live Sessions every week day with course mentors for doubts
                clarification
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
