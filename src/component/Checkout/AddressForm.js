import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { setBasicInfo } from "../store/CVSlice";

export default function AddressForm() {
  const dispatch = useDispatch();
  const basicInfo = useSelector((state) => state.cv.basicInfo);

  const first_name = basicInfo.first_name;
  const last_name = basicInfo.last_name;
  const address = basicInfo.address;
  const City = basicInfo.city;
  const country = basicInfo.country;
  const email = basicInfo.email;
  const phone = basicInfo.phone;

  const first_nameIpHandler = (e) => {
    dispatch(setBasicInfo({ first_name: e.target.value }));
  };
  const last_nameIpHandler = (e) => {
    dispatch(setBasicInfo({ last_name: e.target.value }));
  };
  const addressHandler = (e) => {
    dispatch(setBasicInfo({ address: e.target.value }));
  };
  const cityIpHandler = (e) => {
    dispatch(setBasicInfo({ city: e.target.value }));
  };
  const counteryHandler = (e) => {
    // setCountry(e.target.value);
    dispatch(setBasicInfo({ country: e.target.value }));
  };
  const emailIpHandler = (e) => {
    dispatch(setBasicInfo({ email: e.target.value }));
  };
  const phoneIpHandler = (e) => {
    dispatch(setBasicInfo({ phone: e.target.value }));
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom style={{ textAlign: "center" }} >
        Personal Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            value={first_name}
            onChange={first_nameIpHandler}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            value={last_name}
            onChange={last_nameIpHandler}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            label="Address"
            fullWidth
            autoComplete="shipping address-line"
            variant="standard"
            value={address}
            onChange={addressHandler}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            value={City}
            onChange={cityIpHandler}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
            value={country}
            onChange={counteryHandler}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            fullWidth
            autoComplete="email"
            variant="standard"
            value={email}
            onChange={emailIpHandler}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phone"
            name="phone"
            label="Phone"
            fullWidth
            autoComplete="phone"
            variant="standard"
            value={phone}
            onChange={phoneIpHandler}
          />
        </Grid>
        
      </Grid>
    </React.Fragment>
  );
}
