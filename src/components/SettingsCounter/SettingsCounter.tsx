import React, {ChangeEvent, useState} from "react";
import {ButtonPress} from "../Button";
import {InputItem} from "./InputItem";

type SettingsCounterPropsType = {
    setStartValueHandler: (newStartValue: number) => void
    setMaxValueHandler: (newMaxValue: number) => void
}

export function SettingsCounter(props: SettingsCounterPropsType) {

    const [newMaxValue, setNewMaxValue] = useState<number>(Number(localStorage.getItem('max')))
    const [newStartValue, setNewStartValue] = useState<number>(Number(localStorage.getItem('start')))
    const [disabled, setDisabled] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    const onChangeMaxValue = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        let max = Number(e.currentTarget.value)
        localStorage.setItem('max', max.toString())
        if (max >= 0 && max > newStartValue) {
            setDisabled(false)
            setError(null)
        } else {
            setError("Incorrect value")
            setDisabled(true)
        }
        setNewMaxValue(max)
    }

    const onChangeStartValue = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        let start = Number(e.currentTarget.value)
        localStorage.setItem('start', start.toString())
        if (start >= 0 && start < newMaxValue) {
            setDisabled(false)
            setError(null)
        } else {
            setError("Incorrect value")
            setDisabled(true)
        }
        setNewStartValue(start)
    }
    const sendData = () => {
        props.setMaxValueHandler(newMaxValue);
        props.setStartValueHandler(newStartValue);
        setDisabled(true)
    }

    return (
        <div className={"calculate"}>
            <div className={"monitor"}>
                <InputItem title={"max value"} newValue={newMaxValue} onChange={onChangeMaxValue} error={error}/>
                <InputItem title={"start value"} newValue={newStartValue} onChange={onChangeStartValue} error={error}/>

            </div>
            <div className={"menu"}>
                <ButtonPress
                    title={"set"}
                    onClick={sendData}
                    disabled={disabled}
                />
            </div>
        </div>
    )
}

