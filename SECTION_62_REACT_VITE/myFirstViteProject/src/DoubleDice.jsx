export default function DoubleDice({color, fontSize}){

const num1 = Math.floor(Math.random()*3)+1
const num2 = Math.floor(Math.random()*3)+1
const isWinner = num1===num2
const styles = {color: isWinner ? 'green': 'red' }
    return <div > 

     <h2 style={styles} >double dice game </h2>
    {num1===num2&& <h3>you win!!!</h3>}
<p style={{color: color, fontSize: fontSize}} >number 1 is: {num1}</p>
<p>number 2 is:{num2}</p>
<h1>yo</h1>

</div>

}