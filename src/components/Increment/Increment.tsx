import '../../App.css';
import {ButtonPress} from "../Button";
import {MonitorCounter} from "./MonitorCounter";


type IncrementPropsType = {
    value: number
    maxValue: number
    error: string | null
    addValue: () => void
    resetValue: () => void
    onInsDisabled: boolean
    onResetDisabled: boolean
    disabledSetButton: boolean
}

export function Increment(props: IncrementPropsType) {

    const onIncHandler = () => {
        props.addValue()
    }
    const onResetHandler = () => {
        props.resetValue()
    }


    return (
        <div className={"calculate"}>
            <div className={"monitor"}>
                <MonitorCounter error={props.error}
                                onInsDisabled={props.onInsDisabled}
                                onResetDisabled={props.onResetDisabled}
                                value={props.value}
                                maxValue={props.maxValue}
                                disabledSetButton={props.disabledSetButton}
                />
            </div>
            <div className={"menu"}>
                <ButtonPress title={"Inc"} onClick={onIncHandler} disabled={props.onInsDisabled}/>
                <ButtonPress title={"Reset"} onClick={onResetHandler} disabled={props.onResetDisabled}/>
            </div>
        </div>
    )
}

