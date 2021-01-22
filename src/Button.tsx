

type ButtonPropsType = {
    title: string
    onClick: () => void
    disabled: () => boolean | undefined
}

export function Button(props: ButtonPropsType) {
    return (
        <button onClick={props.onClick} disabled={props.disabled()}>{props.title}</button>
    )
}