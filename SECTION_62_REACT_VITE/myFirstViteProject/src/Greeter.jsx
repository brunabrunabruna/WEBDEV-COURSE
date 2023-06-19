
////destructuring props, and giving it a default value
const Greeter = ({sides  = '6'})=>{

    const randomNumber = Math.floor(Math.random() * sides ) + 1;    
    return <>    
    <h1> die sides: {sides}</h1>
    <h1> you rolled:  {randomNumber}</h1>
    </>

}

export default Greeter

// const Greeter = (props)=>{

//     return <h1>Hi there, {props.person} </h1>
// }

// export default Greeter