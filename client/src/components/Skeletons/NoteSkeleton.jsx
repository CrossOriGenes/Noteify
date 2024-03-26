import { Skeleton } from "@mui/material";

import classes from "./NoteSkeleton.module.css";

function NoteSkeleton() {
  return (
    <div className={classes.card}>
      <div className={classes.content}>
        <h4>
          <Skeleton
            variant="rounded"
            animation="pulse"
            sx={{ bgcolor: "#e1e1e126" }}
          />
        </h4>
        <p>
          <Skeleton
            variant="rounded"
            animation="pulse"
            height={10}
            sx={{ bgcolor: "#e1e1e126", marginBottom: "0.4rem" }}
          />
          <Skeleton
            variant="rounded"
            animation="pulse"
            height={10}
            sx={{ bgcolor: "#e1e1e126", marginBottom: "0.4rem" }}
          />
          <Skeleton
            variant="rounded"
            animation="pulse"
            height={10}
            sx={{ bgcolor: "#e1e1e126", marginBottom: "0.4rem" }}
          />
        </p>
      </div>
      <div className={classes.footnote}>
        <em>
          <Skeleton
            variant="rounded"
            animation="pulse"
            sx={{ bgcolor: "#e1e1e126" }}
          />
        </em>
      </div>
    </div>
  );
}

export default NoteSkeleton;
