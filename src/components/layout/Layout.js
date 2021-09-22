import classes from "./Layout.module.css";

const Layout = (props) => {
  return <main className={classes.layout}>{props.children}</main>;
};

export default Layout;
