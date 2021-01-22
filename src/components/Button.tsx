import React from 'react';
import Button from '@material-ui/core/Button';


type ButtonPressPropsType = {
    title: string
    onClick: () => void
    disabled: () => boolean | undefined
}

export function ButtonPress(props: ButtonPressPropsType) {
    return (
        <Button variant="contained"
                color="secondary"
                onClick={props.onClick}
                disabled={props.disabled()}
        >
            {props.title}
        </Button>
    )
}