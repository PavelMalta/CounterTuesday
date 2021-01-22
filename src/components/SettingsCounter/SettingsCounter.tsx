import {TextField} from "@material-ui/core";
import React, {ChangeEvent, useState} from "react";
import {ButtonPress} from "../Button";
import {InputItem} from "./InputItem";

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
    const disabledSet = () => false

    return (
        <div className={"calculate"}>
            <div className={"monitor"}>
                <InputItem title={"max value"} newValue={newMaxValue} onChange={onChangeMaxValue}/>
                <InputItem title={"start value"} newValue={newStartValue} onChange={onChangeStartValue}/>

            </div>
            <div className={"menu"}>
                <ButtonPress
                    title={"set"}
                    onClick={sendData}
                    disabled={disabledSet}
                />
            </div>
        </div>
    )
}

