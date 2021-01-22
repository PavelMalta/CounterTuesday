import './App.css';
import {Button} from "./Button";


type IncrementPropsType = {
    value: number
    addValue: () => void
    resetValue: () => void
}

export function Increment(props: IncrementPropsType) {
    const onIncHandler = () => {
        props.addValue()
    }
    const onResetHandler = () => {
        props.resetValue()
    }
    const onInsDisabled = () => {
        if (props.value === 5) {
            return true
        }
    }
    const onResetDisabled = () => {
        if (props.value === 0) {
            return true
        }
    }

    return (
        <div className={"calculate"}>
            <div className={"monitor"}>
                <span className={props.value === 5 ? "active-value" : "value"}>{props.value}</span>
            </div>
            <div className={"menu"}>
                <Button title={"Inc"} onClick={onIncHandler} disabled={onInsDisabled}/>
                <Button title={"Reset"} onClick={onResetHandler} disabled={onResetDisabled}/>
            </div>
        </div>
    )
}




