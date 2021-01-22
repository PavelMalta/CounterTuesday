import React, {useState} from 'react';
import './App.css';
import {Increment} from './components/Increment';
import {Container, Grid} from "@material-ui/core";
import {SettingsCounter} from "./components/SettingsCounter";


function App() {
    let [value, setValue] = useState<number>(0)

    let addValue = () => {
        setValue(value + 1);
    }
    let resetValue = () => {
        value = 0;
        setValue(value)
    }


    return (
        <Container>
            <Grid container className="App" >
            <Grid item style={{margin: "30px"}}>
                <SettingsCounter/>
            </Grid>
            <Grid item style={{margin: "30px"}}>
                <Increment value={value}
                           addValue={addValue}
                           resetValue={resetValue}
                />
            </Grid>
        </Grid>
        </Container>
    );
}

export default App;
