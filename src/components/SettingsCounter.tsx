import {TextField} from "@material-ui/core";
import React, {MouseEvent, ChangeEvent, useState} from "react";

type SettingsCounterPropsType = {
    setStartValueHandler: (newStartValue: number) => void
    setMaxValueHandler: (newMaxValue: number) => void
}

export function SettingsCounter(props: SettingsCounterPropsType) {
    const [newMaxValue, setNewMaxValue] = useState<number>(0)
    const [newStartValue, setNewStartValue] = useState<number>(0)

    const onChangeMaxValue = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setNewMaxValue(Number(e.currentTarget.value))
    }
    const onChangeStartValue = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setNewStartValue(Number(e.currentTarget.value))
    }
    const sendData = () => {
        props.setMaxValueHandler(newMaxValue);
        props.setStartValueHandler(newStartValue);
    }

    return (
        <div className={"calculate"}>
            <div className={"monitor"}>
                <div>
                    <span>max value</span>
                    <TextField
                        value={newMaxValue}
                        onChange={onChangeMaxValue}
                        label="Number"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        style={{margin: "10px"}}
                    />
                </div>

                <div>
                    <span>start value</span>
                    <TextField
                        value={newStartValue}
                        onChange={onChangeStartValue}
                        label="Number"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                    />
                </div>
            </div>
            <div className={"menu"}>
                <button onClick={sendData}>set
                </button>
            </div>
        </div>
    )
}