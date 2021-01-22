import '../App.css';
import {ButtonPress} from "./Button";


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
    const onInsDisabled = () => props.value === 5
    const onResetDisabled = () => props.value === 0


    return (
        <div className={"calculate"}>
            <div className={"monitor"}>
                <span className={props.value === 5 ? "active-value" : "value"}>{props.value}</span>
            </div>
            <div className={"menu"}>
                <ButtonPress title={"Inc"} onClick={onIncHandler} disabled={onInsDisabled}/>
                <ButtonPress title={"Reset"} onClick={onResetHandler} disabled={onResetDisabled}/>
            </div>
        </div>
    )
}




