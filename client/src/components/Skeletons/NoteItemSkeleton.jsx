import { Skeleton } from "@mui/material";

import classes from "./NoteItemSkeleton.module.css";

function NoteItemSkeleton() {
  return (
    <article className={classes["details-loader"]}>
      <div className={classes["note-details"]}>
        <h2>
          <Skeleton
            variant="rounded"
            animation="pulse"
            sx={{ bgcolor: "#9acdff" }}
          />
        </h2>
        <p>
          <Skeleton
            variant="rounded"
            animation="pulse"
            height={15}
            sx={{ marginBottom: "0.5rem" }}
          />
          <Skeleton
            variant="rounded"
            animation="pulse"
            height={15}
            sx={{ marginBottom: "0.5rem" }}
          />
          <Skeleton
            variant="rounded"
            animation="pulse"
            height={15}
            sx={{ marginBottom: "0.5rem" }}
          />
          <Skeleton
            variant="rounded"
            animation="pulse"
            height={15}
            sx={{ marginBottom: "0.5rem" }}
          />
        </p>
      </div>
      <div className={classes.footer}>
        <time>
          <Skeleton
            variant="rounded"
            animation="pulse"
            width={220}
            sx={{ bgcolor: "#ffa9f9" }}
          />
        </time>
        <div className={classes.actions}>
          <i>
            <Skeleton
              variant="circular"
              animation="pulse"
              width={35}
              height={35}
            />
          </i>
        </div>
      </div>
    </article>
  );
}

export default NoteItemSkeleton;
