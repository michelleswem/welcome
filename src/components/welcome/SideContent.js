import { Link } from "react-router-dom";
import classes from "./SideContent.module.css";

const SideContent = () => {
  return (
    <section className={classes.side}>
      <div className={classes["logo-box"]}>
        <p className={classes.header}>UBA DESIGN</p>
      </div>

      <div className={classes["header-text"]}>
        <h1>Hi, Welcome Back!</h1>
        <p>Get onBoard, work and track progress</p>
      </div>
      <div className={classes["form-box"]}>
        <form className={classes.form}>
          <label htmlFor='email' className={classes.label}>
            Email Address
          </label>
          <input
            id='email'
            placeholder='Enter Email address'
            type='text'
            className={classes.input}
          />
          <button className={classes.btn}>Next</button>
        </form>
      </div>

      <div className={classes["link-box"]}>
        <p className={classes.text}>
          Not yet registered?
          <span>
            <Link to='/register' className={classes.link}>
              Create an account
            </Link>
          </span>
        </p>
      </div>
    </section>
  );
};

export default SideContent;
