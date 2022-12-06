import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
  card: {
    width: "100%",
    backgroundColor: "transparent",
    border: "none",
  },
  media: {
    height: "400px",
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
