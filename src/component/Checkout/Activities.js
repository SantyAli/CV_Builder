import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { editWork, addWork } from "../store/CVSlice";
import AddBoxIcon from "@mui/icons-material/AddBox";
export default function Activities() {
  const dispatch = useDispatch();
  const workHistory = useSelector((state) => state.cv.workHistory);
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom style={{ textAlign: "center" }}>
        Extra Coricullar Activities
      </Typography>

      {
        
      }

      {/* {workHistory.map((arrElem, index) => {
        return (
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="jobTitle"
                label="Job Title"
                fullWidth
                autoComplete="jobetitle"
                variant="standard"
                value={arrElem.job_title}
                onChange={(e) => {
                  dispatch(
                    editWork({
                      index,
                      key: "job_title",
                      value: e.target.value,
                    })
                  );
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="companyName"
                label="Company Name"
                fullWidth
                autoComplete="cc-name"
                variant="standard"
                value={arrElem.company}
                onChange={(e) => {
                  dispatch(
                    editWork({
                      index,
                      key: "company",
                      value: e.target.value,
                    })
                  );
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="StartDate"
                label="Start Date"
                fullWidth
                autoComplete="StartDate"
                variant="standard"
                value={arrElem.start_date}
                onChange={(e) => {
                  dispatch(
                    editWork({
                      index,
                      key: "start_date",
                      value: e.target.value,
                    })
                  );
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="EndDate"
                label="EndDate"
                fullWidth
                autoComplete="EndDate"
                variant="standard"
                value={arrElem.end_date}
                onChange={(e) => {
                  dispatch(
                    editWork({
                      index,
                      key: "end_date",
                      value: e.target.value,
                    })
                  );
                }}
              />
            </Grid>
          </Grid>
        );
      })} */}
    
      <AddBoxIcon
        className="mt-3"
        onClick={() => {
          dispatch(addWork());
        }}
      />
    </React.Fragment>
  );
}
