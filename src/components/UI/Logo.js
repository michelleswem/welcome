import classes from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={classes["logo-box"]}>
      <p className={classes.header}>Uba design</p>
    </div>
  );
};

export default Logo;
