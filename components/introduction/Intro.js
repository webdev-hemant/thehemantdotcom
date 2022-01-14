import style from "./Intro.module.scss";
import Typical from "react-typical";
const Intro = () => {
  return (
    <div className={`${style.introduction} container-fluid`}>
      <div className="row  p-0">
        <div className="col-12 col-md-8">
          <div className={`${style.intro_wrapper}`}>
            <p className={`${style.whoami}`}>— who am I</p>
            <Typical
              className={`${style.typical} text-center`}
              steps={[
                "Software Developer",
                2000,
                "Brand Builder",
                2000,
                "JavaScript Developer",
                3000,
                "Digital Marketer",
                3000,
                "Bitch! I am FullStack Developer",
                9000,
              ]}
              loop={1}
              wrapper="p"
            />
            {/* <h1 className={`${style.main_heading}`}>
              I enjoy building Apps and Stufs and use JavaScript everywhere!
            </h1> */}
          </div>
        </div>
        {/* <div className="col-12 col-md-4 bg-success">
          <div className="wrap">
            <h3>hi</h3>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Intro;
