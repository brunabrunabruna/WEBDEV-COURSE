const Slots =({slotsAmount, figuresArray})=>{
    
    let figuresIndexArray = []

for (let i = 0; i < slotsAmount; i++) {

    const randomNumber = Math.floor(Math.random() * figuresArray.length )
    figuresIndexArray.push(randomNumber)
}



    // checks if isWinner is true or false, if all figures are the same as the first one, then true
  const isWinner = figuresIndexArray.length<=1 || figuresIndexArray.every((figure)=>figure===figuresIndexArray[0])



    return <>
    <div>


    {/* displays the figures in a H1 component     */}
<h1>{figuresIndexArray.map((figureIndex)=>  <span>{figuresArray[figureIndex]}</span>)
}</h1>
{/* ckecks if the condition for isWinner is true, if it is, creates an H2 */}
{isWinner && <h2 style={{color: 'green'}}>you win!!!</h2>}







    </div>
    </>
}



export default Slots