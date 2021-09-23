import classes from "./Register.module.css";
import { Link } from "react-router-dom";
import Logo from "../UI/Logo";

const Register = () => {
  return (
    <section className={classes.reg}>
      <Logo />
      <div className={classes["header-text"]}>
        <h1>Register Account</h1>
        <p>
          For the purpose of industry regulation, your details are required.
        </p>
      </div>
      <form className={classes.form}>
        <div className={classes["form-group"]}>
          <label htmlFor='fullname'>Your fullname</label>
          <input type='text' id='fullname' placeholder='Enter your fullname' />
        </div>
        <div className={classes["form-group"]}>
          <label htmlFor='email'>Email address</label>
          <input type='text' id='email' placeholder='Enter email address' />
        </div>
        <div className={classes["form-group"]}>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            placeholder='Enter your password'
          />
        </div>
        <div className={classes["form-group2"]}>
          <input type='checkbox' id='large' name='size' />
          <label htmlFor='large'> I agree to terms & conditions</label>
        </div>
        <div className={classes["form-group"]}>
          <button>Register</button>
        </div>

        <div className={classes["link-box"]}>
          <p className={classes.text}>
            Already have an address?
            <span>
              <Link to='/design' className={classes.link}>
                Login to account
              </Link>
            </span>
          </p>
        </div>
      </form>
    </section>
  );
};

export default Register;
