import "./Trusted.css";
import Image from "next/image";
import { caurosel1, caurosel2, caurosel3, caurosel4 } from "./CauroselData";

export default function Trusted() {
  return (
    <div className="tt_it_m">
      <div className="tt_it">
        <h2 className="tt_it_h">
          Trusted by Thousands to Become IT Professionals
        </h2>
        <div className="tt_it_ch">
          <div className="tt_it_in_co">
            <div className="tt_it_in">
              <div className="tt-it_in_ea">
                <Image
                  height={48}
                  width={48}
                  src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/company-icon.png"
                  loading="lazy"
                  alt=""
                  className="tt-it_in_ea_im"
                />
                <div>
                  <div className="tt-it_in_ea_h">1700+ Companies</div>
                  <div className="tt-it_in_ea_de">Hired NxtWave Learners</div>
                </div>
              </div>
              <div className="tt-it_in_ea">
                <Image
                  height={48}
                  width={48}
                  src="https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Reviews/package-icon.png"
                  loading="lazy"
                  alt=""
                  className="tt-it_in_ea_im"
                />
                <div>
                  <div className="tt-it_in_ea_h">₹38 LPA</div>
                  <div className="tt-it_in_ea_de">Highest package</div>
                </div>
              </div>
            </div>
          </div>
          <div className="tt_it_ca_co">
            <div className="logo_row_left_div">
              {caurosel1.map((el, index) => (
                <div key={`caurosel-${index}`} className="tt_it_ca_ea">
                  <div className="tt_it_ca_ea_c">
                    <Image
                      height={70}
                      width={70}
                      src={el["Learner Image"]}
                      loading="lazy"
                      alt=""
                      className="t_it_ca_ea_c_h_usr"
                    />
                    <div>
                      <div className="tt_it_ca_ea_c_h">{el["Name"]}</div>
                      <div className="tt_it_ca_ea_c_p">{el["Designation"]}</div>
                      <Image
                        height={27}
                        width={83}
                        src={el["Company Image"]}
                        loading="lazy"
                        alt=""
                        className="tt_it_ca_ea_c_com"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="logo_row_right_div">
              {caurosel2.map((el, index) => (
                <div key={`caurosel-${index}`} className="tt_it_ca_ea">
                  <div className="tt_it_ca_ea_c">
                    <Image
                      height={70}
                      width={70}
                      src={el["Learner Image"]}
                      loading="lazy"
                      alt=""
                      className="t_it_ca_ea_c_h_usr"
                    />
                    <div>
                      <div className="tt_it_ca_ea_c_h">{el["Name"]}</div>
                      <div className="tt_it_ca_ea_c_p">{el["Designation"]}</div>
                      <Image
                        height={27}
                        width={83}
                        src={el["Company Image"]}
                        loading="lazy"
                        alt=""
                        className="tt_it_ca_ea_c_com"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="logo_row_left_div">
              {caurosel3.map((el, index) => (
                <div key={`caurosel-${index}`} className="tt_it_ca_ea">
                  <div className="tt_it_ca_ea_c">
                    <Image
                      height={70}
                      width={70}
                      src={el["Learner Image"]}
                      loading="lazy"
                      alt=""
                      className="t_it_ca_ea_c_h_usr"
                    />
                    <div>
                      <div className="tt_it_ca_ea_c_h">{el["Name"]}</div>
                      <div className="tt_it_ca_ea_c_p">{el["Designation"]}</div>
                      <Image
                        height={27}
                        width={83}
                        src={el["Company Image"]}
                        loading="lazy"
                        alt=""
                        className="tt_it_ca_ea_c_com"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="logo_row_right_div">
              {caurosel4.map((el, index) => (
                <div key={`caurosel-${index}`} className="tt_it_ca_ea">
                  <div className="tt_it_ca_ea_c">
                    <Image
                      height={70}
                      width={70}
                      src={el["Learner Image"]}
                      loading="lazy"
                      alt=""
                      className="t_it_ca_ea_c_h_usr"
                    />
                    <div>
                      <div className="tt_it_ca_ea_c_h">{el["Name"]}</div>
                      <div className="tt_it_ca_ea_c_p">{el["Designation"]}</div>
                      <Image
                        height={27}
                        width={83}
                        src={el["Company Image"]}
                        loading="lazy"
                        alt=""
                        className="tt_it_ca_ea_c_com"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
