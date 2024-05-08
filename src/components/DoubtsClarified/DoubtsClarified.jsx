import "./DoubtsClarified.css";
import Image from "next/image";
export default function DoubtsClarified() {
  return (
    <div className="db_cl_main">
      <div className="db_cl">
        <h2 className="db_cl_h">
          Get Your Doubts Clarified
          <br />
          Faster than in Offline Classes
        </h2>
        <div className="db_cl_bl">
          <div className="db_cl_des">
            Our highly motivated team of experts are ready to help you with your
            doubts from
            <span>
              <strong> 9AM - 9PM Everyday</strong>
            </span>
          </div>
          <div className="db_cl_men">
            <div className="db_cl_men_im_con">
              <Image
                src="https://nxtwave.imgix.net/ccbp-website/nxtwave-intensive-2.0/doubts-clarified-book-a-free-demo-illustration.png"
                alt="a"
                width={818}
                height={506}
                className="db_cl_mem_img"
              />
            </div>
            <div className="db_cl_men_inf_con">
              <div className="db_cl_men_inf_h">
                1500<span className="db_cl_men_inf_h_i">+</span> Mentors to
                Resolve Your Doubts
              </div>
              <div className="db_cl_men_inf_de">
                Including Subject Matter Experts, IITians, Teaching Assistants,
                NxtWave Alumni, etc.
              </div>
            </div>
          </div>
          <div className="db_cl_th">
            <div className="db_cl_th_in_co">
              <div className="db_cl_th_in_h">1000+ Doubts</div>
              <div className="db_cl_th_in_p">are resolved within</div>
              <div className="db_cl_th_in_pv">15 minutes Everyday !</div>
            </div>
            <div className="db_cl_th_im_con">
              <Image
                src="https://nxtwave.imgix.net/ccbp-website/nxtwave-intensive-2.0/doubts-clarified-doubts-illustartions.png"
                alt="a"
                width={818}
                height={506}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
