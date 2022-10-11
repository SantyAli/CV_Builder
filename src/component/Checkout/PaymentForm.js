import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { editEducation, addEducation } from "../store/CVSlice";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { useDispatch, useSelector } from "react-redux";

export default function PaymentForm() {
  const dispatch = useDispatch();
  const educationData = useSelector((state) => state.cv.education);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom style={{ textAlign: "center" }}>
        Education Details
      </Typography>

      {educationData.map((arrElem, index) => {
        return (
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="degreeTitle"
                label="Degree Title"
                fullWidth
                autoComplete="degreetitle"
                variant="standard"
                value={arrElem.degree}
                onChange={(e) => {
                  dispatch(
                    editEducation({
                      index,
                      key: "degree",
                      value: e.target.value,
                    })
                  );
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="passingYear"
                label="Passing Year"
                helperText="Year only"
                fullWidth
                autoComplete="cc-number"
                variant="standard"
                value={arrElem.passingyear}
                onChange={(e) => {
                  dispatch(
                    editEducation({
                      index,
                      key: "passingyear",
                      value: e.target.value,
                    })
                  );
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="institue"
                label="Institue"
                fullWidth
                autoComplete="Institue"
                variant="standard"
                value={arrElem.school_name}
                onChange={(e) => {
                  dispatch(
                    editEducation({
                      index,
                      key: "school_name",
                      value: e.target.value,
                    })
                  );
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                required
                id="division"
                label="Division"
                fullWidth
                autoComplete="division"
                variant="standard"
                value={arrElem.devision}
                onChange={(e) => {
                  dispatch(
                    editEducation({
                      index,
                      key: "devision",
                      value: e.target.value,
                    })
                  );
                }}
              />
            </Grid>
          </Grid>
        );
      })}

      <AddBoxIcon
        className="mt-3"
        onClick={() => {
          dispatch(addEducation());
        }}
      />
    </React.Fragment>
  );
}
