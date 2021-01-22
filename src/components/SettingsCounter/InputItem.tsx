import {TextField} from "@material-ui/core";
import React, { ChangeEvent } from "react";

type InputItemPropsType = {
    title: string
    newValue: number
    onChange: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
}

export function InputItem(props: InputItemPropsType) {
    return (
        <div>
            <span>{props.title}</span>
            <TextField
                value={props.newValue}
                onChange={props.onChange}
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
                style={{margin: "10px"}}
            />
        </div>
    )
}