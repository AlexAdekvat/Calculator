import React, { useState } from 'react';
import styles from './Calculator.module.css'

const Calculator = () => {
    const [calculator, setCalculator] = useState("");
    const calcBtn = [];
     [7, 4, 1, ".", 8, 5, 2, 0, 9, 6, 3].forEach(item => {
        calcBtn.push(
            <button className={styles.num} onClick={e => {
                setCalculator(calculator + e.target.value)
            }}
                value={item}
                key={item}>
                {item}
            </button>
        )
    })

    return (
        <div className={styles.wrapper}>
            <div className={styles.input}>{calculator}</div>
            <div className={styles.clearAC}>
                <button className={styles.btnClearAC} onClick={() => setCalculator(calculator.substring(0, calculator.length -1 ))} >Clear</button>
                <button  className={styles.btnClearAC} onClick={() => setCalculator("")} >AC</button>
            </div>
            <div className={styles.btn}>
                {calcBtn}
                <button className={styles.math} onClick={e => {
                    try {
                        setCalculator(
                            String(eval(calculator)).length > 3 &&
                                String(eval(calculator)).includes(".")
                                ? String(eval(calculator).toFixed(4))
                                : String(eval(calculator))
                        )
                    }
                    catch (error) {
                        console.log(error)
                    }
                }} value="=" >=</button> 
                <button className={styles.math} onClick={e => setCalculator(calculator + e.target.value)} value="+"  >+</button>
                <button className={styles.math} onClick={e => setCalculator(calculator + e.target.value)} value="-"  >-</button>
                <button className={styles.math} onClick={e => setCalculator(calculator + e.target.value)} value="/"  >/</button>
                <button className={styles.math} onClick={e => setCalculator(calculator + e.target.value)} value="*"  >*</button>

                
            </div>
        </div>
    )
}
export default Calculator