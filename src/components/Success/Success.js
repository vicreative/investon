import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Paper, Typography, Button } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Link } from "react-router-dom";
import styles from "./styles";

export default function Success() {
  const classes = styles();
  return (
    <div className={classes.container}>
      <Paper className={classes.cardStyle}>
        <CheckCircleIcon className={classes.iconStyle} />
        <Typography className={classes.header}>You're all set!</Typography>
        <Typography className={classes.subHeader}>
          Your money has been invested successfully.
        </Typography>
        <Button className={classes.btnStyle}>
          <KeyboardBackspaceIcon />
          <Link to="/dashboard" className={classes.linkStyle}>
            Back to dashboard
          </Link>
        </Button>
      </Paper>
    </div>
  );
}
