import React, {useState} from 'react';
import './App.css';
import {Increment} from './Increment';


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
        <div className="App">
            <Increment value={value}
                       addValue={addValue}
                       resetValue={resetValue}
            />
        </div>
    );
}

export default App;
