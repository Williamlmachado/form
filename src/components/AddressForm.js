import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function AdressForm() {
    return (
        <React.Fragment>
            <Typography variant='h6' gutterBottom>
                Shipping Address
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={5}>
                    <TextField required
                    id="firstName"
                    label="First Name"
                    fullWidth
                    autoComplete="given-name"
                    />
                </Grid>
                <Grid item xs={12} sm={7}>
                    <TextField
                    required
                    id="lastName"
                    label="Last Name"
                    fullWidth
                    autoComplete='family-name'
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    required
                    id="address1"
                    name="address1"
                    label="Address line 1"
                    fullWidth
                    autoComplete='shipping address-line1'
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    id="address2"
                    name="address2"
                    label="Address Line 2"
                    fullWidth
                    autoComplete='shipping address-line2'
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    autoComplete="shipping address-level12"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                    required
                    id="state"
                    name="state"
                    label="state/province/region"
                    fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <TextField required
                    id="cep"
                    name="cep"
                    label="Zip / Postal Code"
                    fullWidth
                    autoComplete='shipping postal-code'
                    />
                </Grid>
                <Grid item xs={12} sm={7}>
                    <TextField required
                    id="country"
                    name="country"
                    label="Country"
                    fullWidth
                    autoComplete='shipping country'
                    />
                </Grid>
                <FormControlLabel
                control={<Checkbox color="secondary" name="saveAddress" value="yes"/>}
                label="Use this address for payment details"
                />
            </Grid>
        </React.Fragment>
    )
}
