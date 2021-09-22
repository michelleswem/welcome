import classes from "./ImgContent.module.css";
import pana from "../../assets/QA engineers-pana.png";

const ImgContent = () => {
  return (
    <section className={classes.imgcontent}>
      <div className={classes.imgbox}>
        <img src={pana} alt='toolimage' />
      </div>
      <div className={classes.detail}>
        <h2>Get detailed support</h2>
        <p>
          A little description here to show something about get detailed support
        </p>
      </div>
    </section>
  );
};

export default ImgContent;
