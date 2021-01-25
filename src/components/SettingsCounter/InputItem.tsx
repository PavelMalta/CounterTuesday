import {Grid, TextField} from "@material-ui/core";
import React, { ChangeEvent } from "react";

type InputItemPropsType = {
    title: string
    newValue: number
    error: string | null
    onChange: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
}

export function InputItem(props: InputItemPropsType) {
    return (
        <Grid container>
            <Grid item style={{marginLeft: "20px", marginTop: "17px", fontSize: "25px"}}>{props.title}</Grid>
            <Grid item style={{marginLeft: "30px"}}><TextField
                value={props.newValue}
                onChange={props.onChange}
                error={!!props.error}
                className={props.error ? "error-input" : ""}
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
                style={{margin: "10px", textAlign:"center"}}
            /></Grid>
        </Grid>
    )
}