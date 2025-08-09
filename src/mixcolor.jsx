import { useState } from "react"

function ColorMixer() {

    const colors=JSON.parse(localStorage.getItem("color"))
    const[r,setR]= useState(colors&& colors.r?colors.r:0)
    const[g,setG]= useState(colors&& colors.g?colors.g:0)
    const[b,setB]= useState(colors&& colors.b?colors.b:0)

    const save=()=>{
localStorage.setItem("color", JSON.stringify({r,g,b}))
    }

return (
    <div>
      <h2>Color Mixer</h2>
      <div style={{border: "2px black solid", width:"200px", height:"200px",
        backgroundColor: //'rgb('+r+', '+g+','+b+')' old way(string Concatation)//
        `rgb(${r}, ${g}, ${b}`//New way (template Literals)
       }}>
</div>

<label htmlFor="" >Red</label>
<input type="range" value={r} min={0} max={255} onChange={(e)=>setR(e.target.value)}/> <br/><br/>

 <label htmlFor="" >Green</label>
<input type="range" value={g} min={0} max={255} onChange={(e)=>setG(e.target.value)} />  <br/> <br/>

<label htmlFor="">Blue</label>
<input type="range"  value={b} min={0} max={255}  onChange={(e)=>setB(e.target.value)} /> <br/>  
<button onClick={save}>Save Color</button>  
    </div>
  );
}
export default ColorMixer
