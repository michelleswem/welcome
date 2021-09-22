import classes from "./Design.module.css";
import pana from "../../assets/QA engineers-pana.png";
const Design = () => {
  return (
    <section className={classes.design}>
      <div className={classes["logo-box"]}>
        <p className={classes.header}>UBA DESIGN</p>
      </div>
      <div className={classes.container}>
        <div className={classes.imgbox}>
          <img src={pana} alt='teamimage' />
        </div>
        <div className={classes.content}>
          <h1>Welcome onBoard</h1>
          <p>
            You can now access your dashboard, make transactions and track your
            products seamlessly
          </p>
          <button>Go to Login</button>
        </div>
      </div>
    </section>
  );
};

export default Design;
