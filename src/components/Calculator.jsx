import React, { useState } from 'react';
import styles from './Calculator.module.css'

const Calculator = () => {
    const [data, setData] = useState("");
    const calcBtn = [];
    [7, 8, 9, 4, 5, 6, 1, 2, 3, ".", 0, "%"].forEach(item => {
        calcBtn.push(
            <button onClick={e => {
                setData(data + e.target.value)
            }}
                value={item}
                key={item}>
                {item}
            </button>
        )
    })

    return (
        <div className={styles.wrapper}>
            {/* input */}
            <div className={styles.input}>{data}</div>
            <div className={styles.btn}>{calcBtn}</div>
            <div>
                <button onClick={() => setData(data.substr(0, data.length - 1))} >Clear</button>
            </div>
            <div>
                <button onClick={() => setData("")} >AC</button>
            </div>
            <div>
                <button onClick={e => setData(data + e.target.value)} value="+"  >+</button>
            </div>
            <div>
                <button onClick={e => setData(data + e.target.value)} value="-"  >-</button>
            </div>
            <div>
                <button onClick={e => setData(data + e.target.value)} value="/"  >/</button>
            </div>
            <div>
                <button onClick={e => setData(data + e.target.value)} value="*"  >*</button>
            </div>
            <button onClick={e => {
                try {
                    setData(
                        String(eval(data)).length > 3 &&
                            String(eval(data)).includes(".")
                            ? String(eval(data).toFixed(4))
                            : String(eval(data))
                    )
                }
                catch (error) {
                    console.log(error)
                }
            }} value="=" >=</button>
        </div>
    )
}
export default Calculator