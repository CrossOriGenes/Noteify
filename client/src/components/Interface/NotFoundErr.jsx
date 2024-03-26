import pageNotFoundGIF from "../../assets/error-gif.gif";

import classes from "./NotFoundErr.module.css";

function ErrorFetching() {
  return (
    <div className={classes["main-wrapper"]}>
      <img src={pageNotFoundGIF} alt="failed-to-fetch" />
      <h3>Something went wrong!</h3>
    </div>
  );
}

export default ErrorFetching;
