"use client";
import Image from "next/image";
import "./Form.css";
import Script from "next/script";

export default function Form() {
  return (
    <>
      <div className="form_par">
        <div className="txt_img_con">
          <div className="form_h_text">
            Book a Live Demo
            <br />
            For Free !
          </div>
          <Image
            src="https://nxtwave.imgix.net/ccbp-website/nxtwave-intensive-2.0/demo-embed-form-person-image.png"
            alt="a"
            width={100}
            height={98}
          />
        </div>
        <div id="book-a-free-demo-intensive" className="form_id"></div>
         <Script
        type="text/javascript"
        src="https://forms-gamma.earlywave.in/webflow/runtime.5fc40796acddfcf8.js"
        // strategy="worker"
      />
      <Script
        type="text/javascript"
        src="https://forms-gamma.earlywave.in/webflow/polyfills.debde7869cb41efd.js"
        // strategy="worker"
      />
      <Script
        type="text/javascript"
        src="https://forms-gamma.earlywave.in/webflow/bookAFreeDemo.e4ab295208f36c1c.js"
        // strategy="worker"
      /> 
      </div>
    </>
  );
}
