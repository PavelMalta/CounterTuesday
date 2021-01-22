import '../App.css';
import {ButtonPress} from "./Button";


type IncrementPropsType = {
    value: number
    addValue: () => void
    resetValue: () => void
    onInsDisabled: () => boolean | undefined
    onResetDisabled: () => boolean | undefined
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
                <span className={props.value === 5 ? "active-value" : "value"}>{props.value}</span>
            </div>
            <div className={"menu"}>
                <ButtonPress title={"Inc"} onClick={onIncHandler} disabled={props.onInsDisabled}/>
                <ButtonPress title={"Reset"} onClick={onResetHandler} disabled={props.onResetDisabled}/>
            </div>
        </div>
    )
}




