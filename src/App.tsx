import React, {useState} from 'react';
import './App.css';
import {Increment} from './components/Increment/Increment';
import {Container, Grid} from "@material-ui/core";
import {SettingsCounter} from "./components/SettingsCounter/SettingsCounter";


function App() {
    let [startValue, setStartValue] = useState<number>(0);
    let [maxValue, setMaxValue] = useState<number>(0);
    let [value, setValue] = useState<number>(startValue);
    const [error, setError] = useState<string | null>(null)
    const [disabledSetButton, setDisabledSetButton] = useState<boolean>(true)

    let addValue = () => {
        if (value !== maxValue) {
            setValue(value + 1);
        }
    }
    let resetValue = () => {
        value = startValue;
        setValue(value)
    }

    let setStartValueHandler = (newStartValue: number) => {
        setStartValue(newStartValue)
        setValue(newStartValue)
    }
    let setMaxValueHandler = (newMaxValue: number) => {
        setMaxValue(newMaxValue)
    }

    const onInsDisabled = () => {
        if (value === maxValue || error || !disabledSetButton){
            return true
        } else {
            return false
        }
    }
    const onResetDisabled = () => {
        if (value === startValue || error || !disabledSetButton){
            return true
        } else {
            return false
        }
    }

    return (
        <Container>
            <Grid container className="App">
                <Grid item style={{margin: "30px"}}>
                    <SettingsCounter
                        setStartValueHandler={setStartValueHandler}
                        setMaxValueHandler={setMaxValueHandler}
                        error={error}
                        setError={setError}
                        disabledSetButton={disabledSetButton}
                        setDisabledSetButton={setDisabledSetButton}
                    />
                </Grid>
                <Grid item style={{margin: "30px"}}>
                    <Increment value={value}
                               error={error}
                               maxValue={maxValue}
                               addValue={addValue}
                               resetValue={resetValue}
                               onInsDisabled={onInsDisabled()}
                               onResetDisabled={onResetDisabled()}
                               disabledSetButton={disabledSetButton}
                    />
                </Grid>
            </Grid>
        </Container>
    );
}

export default App;
