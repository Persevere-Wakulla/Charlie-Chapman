import { useState } from "react"


 const ColorPickerComponent = () => {

    const[color, setcolor] = useState('#ffffff')

    const handleColorChange = (e) => {
        setcolor(e.target.value)
    }

    return(
        <div className="color-picker">
            <h1>Color Picker</h1>
            <div className="color-display" style={{backgroundColor:color}}>
                <p>Selected Color: {color}</p>
            </div>
            <label htmlFor="color">Select a Color:</label>
            <input
             type="color"
             value={color}
             onChange={handleColorChange}
              />
        </div>
    )
    
 }
 export default ColorPickerComponent