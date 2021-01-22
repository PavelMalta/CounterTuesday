import {TextField} from "@material-ui/core";
import React from "react";

export function SettingsCounter() {
    return (
        <div className={"calculate"}>
            <div className={"monitor"}>
                <div><span>max value</span><TextField
                    label="Number"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    style={{margin: "10px"}}
                /></div>
                <div><span>start value</span><TextField
                    label="Number"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                /></div>
            </div>
            <div className={"menu"}>
                <button>set</button>
            </div>
        </div>
    )
}