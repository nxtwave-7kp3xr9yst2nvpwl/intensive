"use client";
import "./ReviewSlider.css";
import SliderComp from "../SliderComp/SliderComp";
import { useState } from "react";
import {
  all,
  nonitbranchtoitjob,
  nonengineeringdegree,
  careergap,
  gotintotopmncs,
  nonitjobtoitjob,
} from "./ReviewSliderData";

export default function ReviewSlider() {
  const [value, setValue] = useState(0);
  return (
    <div className="sen_pac">
      <div className="sen_pac_par">
        <h2 className="sen_pac_h">
          Your Seniors Got Placed. It’s Your Turn Now!
        </h2>
        <div className="sen_pac_t_h">
          <button
            role="button"
            className={`sen_pac_btn ${value === 0 ? "active" : ""}`}
            onClick={() => {
              setValue(0);
            }}
          >
            All
          </button>
          <button
            role="button"
            className={`sen_pac_btn ${value === 1 ? "active" : ""}`}
            onClick={() => {
              setValue(1);
            }}
          >
            Non IT Branch to IT Job
          </button>
          <button
            role="button"
            className={`sen_pac_btn ${value === 2 ? "active" : ""}`}
            onClick={() => {
              setValue(2);
            }}
          >
            Non-Engineering Degree
          </button>
          <button
            role="button"
            className={`sen_pac_btn ${value === 3 ? "active" : ""}`}
            onClick={() => {
              setValue(3);
            }}
          >
            Career Gap
          </button>
          <button
            role="button"
            className={`sen_pac_btn ${value === 4 ? "active" : ""}`}
            onClick={() => {
              setValue(4);
            }}
          >
            Got into Top MNCs
          </button>
          <button
            role="button"
            className={`sen_pac_btn ${value === 5 ? "active" : ""}`}
            onClick={() => {
              setValue(5);
            }}
          >
            Non IT Branch to IT Job
          </button>
        </div>
        <div className="re_h_w">
          <div style={{ display: `${value === 0 ? "block" : "none"}` }}>
            {value === 0 ? (
              <SliderComp>
                {all.map((el, index) => (
                  <div key={`all-${index}`} className="keen-slider__slide ">
                    <div className="revi_card">
                      <div className="user_det_par">
                        <div className="user_det">
                          <div className="name_field">{el.Name}</div>
                          <div
                            fs-cmsfilter-field="branch"
                            className="user_branch"
                          >
                            {el.Branch}
                          </div>
                          <div className="user_college">{el.College_Name}</div>
                          <div className="grad_year">
                            {el.Year_of_graduation}
                          </div>
                        </div>
                        <img
                          src={el.Learner_Image}
                          loading="lazy"
                          alt=""
                          className="user_img"
                        />
                      </div>
                      <div className="user_com">
                        <div loading="lazy" className="blue_arrow" />
                        <div className="role">{el.Designation}</div>
                        <div className="com_img">
                          <img src={el.Company_Image} loading="lazy" alt="" />
                        </div>
                        <div className="hl_txt">{el.Testimonial_Content}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </SliderComp>
            ) : (
              <></>
            )}
          </div>
          <div style={{ display: `${value === 1 ? "block" : "none"}` }}>
            {value === 1 ? (
              <SliderComp>
                {nonitbranchtoitjob.map((el, index) => (
                  <div key={`all-${index}`} className="keen-slider__slide ">
                    <div className="revi_card">
                      <div className="user_det_par">
                        <div className="user_det">
                          <div className="name_field">{el.Name}</div>
                          <div
                            fs-cmsfilter-field="branch"
                            className="user_branch"
                          >
                            {el.Branch}
                          </div>
                          <div className="user_college">{el.College_Name}</div>
                          <div className="grad_year">
                            {el.Year_of_graduation}
                          </div>
                        </div>
                        <img
                          src={el.Learner_Image}
                          loading="lazy"
                          alt=""
                          className="user_img"
                        />
                      </div>
                      <div className="user_com">
                        <div loading="lazy" className="blue_arrow" />
                        <div className="role">{el.Designation}</div>
                        <div className="com_img">
                          <img src={el.Company_Image} loading="lazy" alt="" />
                        </div>
                        <div className="hl_txt">{el.Testimonial_Content}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </SliderComp>
            ) : (
              <></>
            )}
          </div>
          <div style={{ display: `${value === 2 ? "block" : "none"}` }}>
            {value === 2 ? (
              <SliderComp>
                {nonengineeringdegree.map((el, index) => (
                  <div key={`all-${index}`} className="keen-slider__slide ">
                    <div className="revi_card">
                      <div className="user_det_par">
                        <div className="user_det">
                          <div className="name_field">{el.Name}</div>
                          <div
                            fs-cmsfilter-field="branch"
                            className="user_branch"
                          >
                            {el.Branch}
                          </div>
                          <div className="user_college">{el.College_Name}</div>
                          <div className="grad_year">
                            {el.Year_of_graduation}
                          </div>
                        </div>
                        <img
                          src={el.Learner_Image}
                          loading="lazy"
                          alt=""
                          className="user_img"
                        />
                      </div>
                      <div className="user_com">
                        <div loading="lazy" className="blue_arrow" />
                        <div className="role">{el.Designation}</div>
                        <div className="com_img">
                          <img src={el.Company_Image} loading="lazy" alt="" />
                        </div>
                        <div className="hl_txt">{el.Testimonial_Content}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </SliderComp>
            ) : (
              <></>
            )}
          </div>
          <div style={{ display: `${value === 3 ? "block" : "none"}` }}>
            {value === 3 ? (
              <SliderComp>
                {careergap.map((el, index) => (
                  <div key={`all-${index}`} className="keen-slider__slide ">
                    <div className="revi_card">
                      <div className="user_det_par">
                        <div className="user_det">
                          <div className="name_field">{el.Name}</div>
                          <div
                            fs-cmsfilter-field="branch"
                            className="user_branch"
                          >
                            {el.Branch}
                          </div>
                          <div className="user_college">{el.College_Name}</div>
                          <div className="grad_year">
                            {el.Year_of_graduation}
                          </div>
                        </div>
                        <img
                          src={el.Learner_Image}
                          loading="lazy"
                          alt=""
                          className="user_img"
                        />
                      </div>
                      <div className="user_com">
                        <div loading="lazy" className="blue_arrow" />
                        <div className="role">{el.Designation}</div>
                        <div className="com_img">
                          <img src={el.Company_Image} loading="lazy" alt="" />
                        </div>
                        <div className="hl_txt">{el.Testimonial_Content}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </SliderComp>
            ) : (
              <></>
            )}
          </div>
          <div style={{ display: `${value === 4 ? "block" : "none"}` }}>
            {value === 4 ? (
              <SliderComp>
                {gotintotopmncs.map((el, index) => (
                  <div key={`all-${index}`} className="keen-slider__slide ">
                    <div className="revi_card">
                      <div className="user_det_par">
                        <div className="user_det">
                          <div className="name_field">{el.Name}</div>
                          <div
                            fs-cmsfilter-field="branch"
                            className="user_branch"
                          >
                            {el.Branch}
                          </div>
                          <div className="user_college">{el.College_Name}</div>
                          <div className="grad_year">
                            {el.Year_of_graduation}
                          </div>
                        </div>
                        <img
                          src={el.Learner_Image}
                          loading="lazy"
                          alt=""
                          className="user_img"
                        />
                      </div>
                      <div className="user_com">
                        <div loading="lazy" className="blue_arrow" />
                        <div className="role">{el.Designation}</div>
                        <div className="com_img">
                          <img src={el.Company_Image} loading="lazy" alt="" />
                        </div>
                        <div className="hl_txt">{el.Testimonial_Content}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </SliderComp>
            ) : (
              <></>
            )}
          </div>
          <div style={{ display: `${value === 5 ? "block" : "none"}` }}>
            {value === 5 ? (
              <SliderComp>
                {nonitjobtoitjob.map((el, index) => (
                  <div key={`all-${index}`} className="keen-slider__slide ">
                    <div className="revi_card">
                      <div className="user_det_par">
                        <div className="user_det">
                          <div className="name_field">{el.Name}</div>
                          <div
                            fs-cmsfilter-field="branch"
                            className="user_branch"
                          >
                            {el.Branch}
                          </div>
                          <div className="user_college">{el.College_Name}</div>
                          <div className="grad_year">
                            {el.Year_of_graduation}
                          </div>
                        </div>
                        <img
                          src={el.Learner_Image}
                          loading="lazy"
                          alt=""
                          className="user_img"
                        />
                      </div>
                      <div className="user_com">
                        <div loading="lazy" className="blue_arrow" />
                        <div className="role">{el.Designation}</div>
                        <div className="com_img">
                          <img src={el.Company_Image} loading="lazy" alt="" />
                        </div>
                        <div className="hl_txt">{el.Testimonial_Content}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </SliderComp>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
