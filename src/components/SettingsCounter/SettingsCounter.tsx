import React, {ChangeEvent, useState} from "react";
import {ButtonPress} from "../Button";
import {InputItem} from "./InputItem";

type SettingsCounterPropsType = {
    setStartValueHandler: (newStartValue: number) => void
    setMaxValueHandler: (newMaxValue: number) => void
    error: string | null
    setError: (error: string | null) => void
    disabledSetButton: boolean
    setDisabledSetButton: (disabledSetButton: boolean) => void
}

export function SettingsCounter(props: SettingsCounterPropsType) {

    const [newMaxValue, setNewMaxValue] = useState<number>(Number(localStorage.getItem('max')))
    const [newStartValue, setNewStartValue] = useState<number>(Number(localStorage.getItem('start')))



    const onChangeMaxValue = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        let max = Number(e.currentTarget.value)
        if (max >= 0 && max > newStartValue) {
            props.setDisabledSetButton(false)
            props.setError(null)
            localStorage.setItem('max', max.toString())
        } else {
            props.setError("Incorrect value")
            props.setDisabledSetButton(true)
        }
        setNewMaxValue(max)
    }

    const onChangeStartValue = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        let start = Number(e.currentTarget.value)
        if (start >= 0 && start < newMaxValue) {
            props.setDisabledSetButton(false)
            props.setError(null)
            localStorage.setItem('start', start.toString())
        } else {
            props.setError("Incorrect value")
            props.setDisabledSetButton(true)
        }
        setNewStartValue(start)
    }
    const sendData = () => {
        props.setMaxValueHandler(newMaxValue);
        props.setStartValueHandler(newStartValue);
        props.setDisabledSetButton(true)
    }

    return (
        <div className={"calculate"}>
            <div className={"monitor"}>
                <InputItem title={"max value"} newValue={newMaxValue} onChange={onChangeMaxValue} error={props.error}/>
                <InputItem title={"start value"} newValue={newStartValue} onChange={onChangeStartValue} error={props.error}/>

            </div>
            <div className={"menu"}>
                <ButtonPress
                    title={"set"}
                    onClick={sendData}
                    disabled={props.disabledSetButton}
                />
            </div>
        </div>
    )
}

