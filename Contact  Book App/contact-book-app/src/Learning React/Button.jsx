const Button = () => {
    let count = 0

    const handleClick = (name) =>{
        if(count < 3 ){
            count++
            console.log(`${name} you clicked me time/s`)
        }else{
            console.log(`${name} stop clicking me!`)
        }
    }

    // const handleClick2 = (name) => console.log(`${name} stop clicking me !!!!`)

    // return(<button onClick={() => handleClick2('Dolla')} >Click Me😝</button>)

    return(<button onClick={()=> handleClick('Dolla')} >Click Me😝</button>)
}
export default Button