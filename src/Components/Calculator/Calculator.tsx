import React, { useState } from 'react'

const Calculator = () => {
    const [num1, setNum1] = useState<string>("")
    const [num2, setNum2] = useState<string>("")
    const [result, setResult] = useState<number | null>(null)

    const handleAddition = () => {
        const sum = parseFloat(num1) + parseFloat(num2)
        setResult(sum)
    }
    const handleSubtraction = () => {
        const diff = parseFloat(num1) - parseFloat(num2)
        setResult(diff)
    }
    const handleDivision = () => {
        if (parseFloat(num2) === 0) {
            setResult(null)
        }
        const Quotient = parseFloat(num1) / parseFloat(num2)
        setResult(Quotient)
    }

    const handleMultiplication = () => {
        const product = parseFloat(num1) * parseFloat(num2)
        setResult(product)
    }

    const handleMod = () => {
        const reminder = parseFloat(num1) % parseFloat(num2)
        setResult(reminder)
    }

    return (
        <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
            <h2>Calculator</h2>
            <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} placeholder='Enter the First Number' />
            <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} placeholder='Enter the Second Number' />

            <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                <button onClick={handleAddition}>+</button>
                <button onClick={handleSubtraction}>-</button>
                <button onClick={handleDivision}>/</button>
                <button onClick={handleMultiplication}>*</button>
                <button onClick={handleMod}>%</button>
            </div>

            {result !== null && <h3>Result: {result}</h3>}
        </div>
    )
}

export default Calculator
