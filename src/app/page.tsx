

import NewPowered from "../components/NewPowered/NewPowered";
import SuccessProgram from "../components/Successful/Successful";
import HeroSlider from "../components/HeroSlider/HeroSlider";
import Form from "../components/Form/Form";
import ProductNxtwave from "../components/ProductNxtwave/ProductNxtwave";
import IntensiveHighlights from "../components/IntensiveHighlights/IntensiveHighlights";
import Supercharge from "../components/Supercharge/Supercharge";
import TrainerAlumi from "../components/TrainerAlumi/TrainerAlumi";
import ReviewSlider from "../components/ReviewSlider/ReviewSlider";
import Steps from "../components/Steps/Steps";
import DoubtsClarified from "../components/DoubtsClarified/DoubtsClarified";
import Trusted from "../components/Trusted/Trusted";
import CompaniesHired from "../components/CompaniesHired/CompaniesHired";
import PreferNxtwave from "../components/PreferNxtwave/PreferNxtwave";
import GetCertified from "../components/GetCertified/GetCertified";
import WhyIntensive from "../components/WhyIntensive/WhyIntensive";


export default function Home() {
  return (
    <main>
      <div style={{overflowX:"hidden"}}>
      <div className="center_1200">
        <div className="left_side">
          <NewPowered />
          <div className="ls_space">
          <SuccessProgram />
          </div>
          <div className="desktop_mobile">
        <IntensiveHighlights/> 
          </div>
          <div className="hero_slider">
            <HeroSlider />
          </div>
        </div>
        <div className="right_side">
          <Form />
          <ProductNxtwave/>
        <div className="form_bg_con"></div>
        </div>
      </div>
      </div>
      <div className="mobile_desktop">
        <IntensiveHighlights/> 
          </div>
      <Supercharge/>
      <TrainerAlumi/>
      <ReviewSlider/>
      <Steps/>
      <DoubtsClarified/>
      <Trusted/>
      <CompaniesHired/>
      <PreferNxtwave/>
      <GetCertified/>
      <WhyIntensive/>
    </main>
  );
}
