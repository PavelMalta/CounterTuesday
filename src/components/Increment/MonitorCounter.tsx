import '../../App.css';

type MonitorCounterPropsType = {
    error: string | null
    onInsDisabled: boolean
    onResetDisabled: boolean
    value: number
    maxValue: number
    disabledSetButton: boolean
}

export function MonitorCounter(props: MonitorCounterPropsType) {

    if (props.error) {
        return <div className={"error"}>{props.error}</div>
    } else if (!props.disabledSetButton) {
        return <div className={'instructions'}>enter values and press 'set'</div>
    } else if (!props.onInsDisabled && props.error === null) {
        return <span className={"value"}>{props.value.toString()}</span>
    } else if (props.onInsDisabled && !props.onResetDisabled && props.maxValue === props.value) {
        return <span className={"active-value"}>{props.value.toString()}</span>
    } else {
        return <div className={'instructions'}>enter values and press 'set'</div>
    }

}