import "./TrainerAlumi.css";
import Image from "next/image";

export default function TrainerAlumi() {
  return (
    <div className="tr_alm">
      <div className="tr_alm_par">
        <h4 className="r_alm_par_h">Your Trainers are Alumni of</h4>
        <div className="al_space">
          <picture>
            <source
              media="(max-width:479px)"
              srcSet="https://nxtwave.imgix.net/ccbp-website/intensive/learn-the-best-from-the-alumni/alumni-mobile.png"
              width={314}
              height={140}
            />
            <Image
              src="https://nxtwave.imgix.net/ccbp-website/intensive/learn-the-best-from-the-alumni/Alumni_2x.png"
              alt="liner"
              width={1146}
              height={42}
            />
          </picture>
        </div>
        <p className="tr_alm_par_p">and many more...</p>
      </div>
    </div>
  );
}
