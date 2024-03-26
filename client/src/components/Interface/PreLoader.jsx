import classes from "./PreLoader.module.css";

function PreLoader() {
  return (
    <div className={classes["pre-loader"]}>
      <div className={classes.cube}>
        <div className={`${classes["cube-item"]} ${classes["cube-x"]}`}></div>
        <div className={`${classes["cube-item"]} ${classes["cube-y"]}`}></div>
        <div className={`${classes["cube-item"]} ${classes["cube-y"]}`}></div>
        <div className={`${classes["cube-item"]} ${classes["cube-x"]}`}></div>
      </div>
    </div>
  );
}

export default PreLoader;
