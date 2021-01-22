import {TextField} from "@material-ui/core";
import React, { ChangeEvent } from "react";

type InputItemPropsType = {
    title: string
    newValue: number
    error: string | null
    onChange: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
}

export function InputItem(props: InputItemPropsType) {
    return (
        <div>
            <span>{props.title}</span>
            <TextField
                value={props.newValue}
                onChange={props.onChange}
                error={!!props.error}
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