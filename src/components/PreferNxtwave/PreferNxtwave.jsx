import "./PreferNxtwave.css";
import { YouTubeEmbed } from "@next/third-parties/google";
import PreferNxtwaveSlider from "./PreferNxtwaveSlider";

export default function PreferNxtwave() {
  return (
    <div className="pns">
      <div className="pns_mc">
        <div className="pns_c_c">
          <div>
            <div className="pns_h">
              Why <span style={{ color: "#1565d8" }}> Top Companies </span>
              <span style={{ color: "#1565d8" }}>NxtWave Students</span>
            </div>
            <p className="pns_p">
              NxtWave students carved a name for themselves in the IT industry.
              Hear it directly from the CEOs, CXOs and HRs of tech companies.
            </p>
          </div>
          <div className="pns_yt_con">
            <YouTubeEmbed
              videoid="j6pkwZIXQzk"
              params="controls=0"
              title="NxtWave Hire: Next wave of opportunities with 1700+ companies | CCBP 4.0 | @NxtWave | EdTech"
            />
          </div>
        </div>
        <div className="pns_s_c">
          <PreferNxtwaveSlider>
            <div className="keen-slider__slide top_compines_slide">
              <YouTubeEmbed
                videoid="Y9aGu-fp1JA"
                params="controls=0"
                title="NxtWave Hire: Next wave of opportunities with 1700+ companies | CCBP 4.0 | @NxtWave | EdTech"
              />
            </div>
            <div className="keen-slider__slide top_compines_slide">
              <YouTubeEmbed
                videoid="66ZBOqaHyho"
                params="controls=0"
                title="NxtWave Hire: Next wave of opportunities with 1700+ companies | CCBP 4.0 | @NxtWave | EdTech"
              />
            </div>
            <div className="keen-slider__slide top_compines_slide">
              <YouTubeEmbed
                videoid="X4YpCUk5FeQ"
                params="controls=0"
                title="NxtWave Hire: Next wave of opportunities with 1700+ companies | CCBP 4.0 | @NxtWave | EdTech"
              />
            </div>
            <div className="keen-slider__slide top_compines_slide">
              <YouTubeEmbed
                videoid="91mJXAKrji0"
                params="controls=0"
                title="NxtWave Hire: Next wave of opportunities with 1700+ companies | CCBP 4.0 | @NxtWave | EdTech"
              />
            </div>
            <div className="keen-slider__slide top_compines_slide">
              <YouTubeEmbed
                videoid="kSKFhkfq5hg"
                params="controls=0"
                title="NxtWave Hire: Next wave of opportunities with 1700+ companies | CCBP 4.0 | @NxtWave | EdTech"
              />
            </div>
          </PreferNxtwaveSlider>
        </div>
      </div>
    </div>
  );
}
